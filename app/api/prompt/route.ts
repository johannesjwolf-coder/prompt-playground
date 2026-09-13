import Anthropic from "@anthropic-ai/sdk";
import { collections } from "@/data/prompts";
import { addToCommunityArchive, readCommunityArchive } from "@/lib/communityArchive";
import { DEFAULT_DEPTH, DEPTHS, TEMPLATE_SCHEMA, archiveToText, buildOwlSystemPrompt, isDepth } from "@/lib/owl";
import { extractPlaceholderKeys, type PromptTemplate } from "@/lib/promptLibrary";

/** Sprachmodell hinter der Weisen Eule. Nicht vom Nutzer wählbar; per Umgebungsvariable änderbar. */
const MODEL = process.env.ANTHROPIC_MODEL || "claude-fable-5-1";
/** Obergrenze für die Antwort (inkl. internem Nachdenken). Fest, nicht vom Nutzer wählbar. */
const MAX_TOKENS = 16000;

export async function POST(request: Request) {
  const body = await request.json();
  const idea = typeof body.idea === "string" ? body.idea.trim() : "";
  const depth = isDepth(body.depth) ? body.depth : DEFAULT_DEPTH;
  // Optional refinement round: the previous template plus what the user wants different.
  const feedback = typeof body.feedback === "string" ? body.feedback.trim() : "";
  const previous =
    body.previous && typeof body.previous.prompt === "string"
      ? { title: String(body.previous.title ?? ""), prompt: String(body.previous.prompt) }
      : null;

  if (!idea) {
    return Response.json({ success: false, error: "Bitte zuerst eine Idee eingeben." }, { status: 400 });
  }

  const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY ?? process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY,
  });

  try {
    const community = await readCommunityArchive();
    const system = buildOwlSystemPrompt(archiveToText([...collections, community]));

    // Thinking is always on for this model; `effort` steers depth. Structured output
    // guarantees the JSON shape; server-side refusal fallbacks route to another model.
    const response = await client.beta.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
      output_config: { effort: DEPTHS[depth].effort, format: { type: "json_schema", schema: TEMPLATE_SCHEMA } },
      betas: ["structured-outputs-2025-11-13", "server-side-fallback-2026-07-01"],
      fallbacks: "default",
      messages: buildMessages(idea, previous, feedback),
    });

    if (response.stop_reason === "refusal") {
      return Response.json(
        { success: false, error: "Die Weise Eule möchte zu dieser Idee keinen Prompt formulieren." },
        { status: 422 }
      );
    }
    if (response.stop_reason === "max_tokens") {
      return Response.json({ success: false, error: "Die Antwort wurde zu lang. Bitte die Idee kürzer fassen." }, { status: 502 });
    }

    const text = response.content.find((b) => b.type === "text")?.text ?? "";
    const template = toTemplate(JSON.parse(text));
    const stored = await addToCommunityArchive(template);

    return Response.json({ success: true, template: stored ?? template, archived: Boolean(stored) });
  } catch (error) {
    console.error("Error in /api/prompt:", error);
    return Response.json({ success: false, error: describe(error) }, { status: statusOf(error) });
  }
}

/** First round: just the idea. Refinement: idea → previous template → what should change. */
function buildMessages(idea: string, previous: { title: string; prompt: string } | null, feedback: string): Anthropic.MessageParam[] {
  if (!previous || !feedback) return [{ role: "user", content: idea }];
  return [
    { role: "user", content: idea },
    {
      role: "assistant",
      content: `Vorlage „${previous.title}“:\n${previous.prompt}`,
    },
    {
      role: "user",
      content: `Diese Vorlage passt noch nicht. Das soll anders sein: ${feedback}\n\nSuche einen deutlich anderen Ansatz oder passe die Vorlage entsprechend an. Erkläre in "note" kurz, was du geändert hast.`,
    },
  ];
}

type OwlOutput = {
  title: string;
  category: string;
  tags: string[];
  description: string;
  prompt: string;
  placeholders: { key: string; label: string; example: string }[];
  note: string;
};

function toTemplate(o: OwlOutput): PromptTemplate {
  const keysInPrompt = extractPlaceholderKeys(o.prompt);
  const placeholders = o.placeholders
    .map((p) => ({ ...p, key: p.key.replace(/[[\]]/g, "").trim().toUpperCase() }))
    .filter((p) => keysInPrompt.includes(p.key));
  return {
    id: `eule-${slug(o.title)}-${Date.now().toString(36)}`,
    title: o.title.trim().slice(0, 80),
    category: o.category.trim() || "Aus der Eule",
    tags: o.tags.slice(0, 6),
    description: o.description.trim(),
    prompt: o.prompt.trim(),
    placeholders,
    note: o.note?.trim() || undefined,
  };
}

function slug(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}

function describe(error: unknown): string {
  if (error instanceof SyntaxError) return "Die Eule hat eine unlesbare Antwort geliefert – bitte nochmal versuchen.";
  if (error instanceof Anthropic.AuthenticationError) return "Ungültiger API Key (ANTHROPIC_API_KEY prüfen).";
  if (error instanceof Anthropic.RateLimitError) return "Zu viele Anfragen – bitte kurz warten.";
  if (error instanceof Anthropic.APIError) return `API Fehler ${error.status}: ${error.message}`;
  return String(error);
}

function statusOf(error: unknown): number {
  if (error instanceof Anthropic.APIError && error.status) return error.status;
  return 500;
}
