import Anthropic from "@anthropic-ai/sdk";
import { DEFAULT_EFFORT, DEFAULT_MODEL, MODELS, isEffort, isModelId } from "@/lib/models";

export async function POST(request: Request) {
  const body = await request.json();
  const { prompt, temperature, maxTokens } = body;
  const model = isModelId(body.model) ? body.model : DEFAULT_MODEL;
  const effort = isEffort(body.effort) ? body.effort : DEFAULT_EFFORT;

  if (typeof prompt !== "string" || !prompt.trim()) {
    return Response.json({ success: false, error: "Prompt fehlt." }, { status: 400 });
  }

  const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY ?? process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY,
  });

  const max_tokens = Number(maxTokens) || 1000;
  const messages: Anthropic.MessageParam[] = [{ role: "user", content: prompt }];
  const encoder = new TextEncoder();

  try {
    // Fable 5.1: thinking is always on, sampling params are rejected → steer with
    // `effort`, and opt into server-side refusal fallbacks (routes by category).
    // Opus 4.6: classic sampling, so the temperature slider applies.
    const stream =
      MODELS[model].controls === "effort"
        ? client.beta.messages.stream({
            model,
            max_tokens,
            output_config: { effort },
            betas: ["server-side-fallback-2026-07-01"],
            fallbacks: "default",
            messages,
          })
        : client.messages.stream({
            model,
            max_tokens,
            temperature: clamp01(temperature),
            messages,
          });

    const readable = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          const final = await stream.finalMessage();
          if (final.stop_reason === "refusal") {
            controller.enqueue(encoder.encode("\n\n[Claude hat diese Anfrage abgelehnt.]"));
          } else if (final.stop_reason === "max_tokens") {
            controller.enqueue(encoder.encode("\n\n[… abgeschnitten – Max Tokens erhöhen]"));
          }
          controller.close();
        } catch (err) {
          controller.enqueue(encoder.encode(`\n\n[Fehler beim Streamen: ${describe(err)}]`));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "X-Model": model,
      },
    });
  } catch (error) {
    console.error("Error in /api/prompt:", error);
    return Response.json({ success: false, error: describe(error) }, { status: statusOf(error) });
  }
}

function clamp01(v: unknown): number {
  const n = Number(v);
  if (!Number.isFinite(n)) return 0.7;
  return Math.min(1, Math.max(0, n));
}

function describe(error: unknown): string {
  if (error instanceof Anthropic.AuthenticationError) return "Ungültiger API Key (ANTHROPIC_API_KEY prüfen).";
  if (error instanceof Anthropic.RateLimitError) return "Rate Limit erreicht – bitte kurz warten.";
  if (error instanceof Anthropic.APIError) return `API Fehler ${error.status}: ${error.message}`;
  return String(error);
}

function statusOf(error: unknown): number {
  if (error instanceof Anthropic.APIError && error.status) return error.status;
  return 500;
}
