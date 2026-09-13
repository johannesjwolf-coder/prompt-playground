/**
 * Die „Weise Eule“ – die eigene KI dieser Website.
 * Aus einer Idee des Nutzers erzeugt sie eine wiederverwendbare Prompt-Vorlage
 * mit Platzhaltern. Der Nutzer füllt die Platzhalter aus und kopiert den fertigen
 * Prompt in eine beliebige KI (Claude, ChatGPT, Gemini, Bild- oder Video-Tools).
 * Welches Sprachmodell dahinter läuft, ist ein Implementierungsdetail des Servers.
 */

export const OWL_NAME = "Weise Eule";
export const OWL_TAGLINE = "Sag ihr, was du vorhast – sie schreibt dir den passenden Prompt für jede KI.";

/** Gründlichkeit der Eule. Wird serverseitig auf die Denktiefe des Modells abgebildet. */
export const DEPTHS = {
  schnell: { label: "Schnell", hint: "Kurz nachdenken – für einfache Ideen", effort: "low" },
  ausgewogen: { label: "Ausgewogen", hint: "Guter Kompromiss aus Tempo und Sorgfalt", effort: "medium" },
  gruendlich: { label: "Gründlich", hint: "Lange nachdenken – für komplexe Vorhaben", effort: "high" },
} as const;

export type Depth = keyof typeof DEPTHS;
export const DEFAULT_DEPTH: Depth = "ausgewogen";
export const DEPTH_ORDER: Depth[] = ["schnell", "ausgewogen", "gruendlich"];

export function isDepth(v: unknown): v is Depth {
  return typeof v === "string" && v in DEPTHS;
}

/** JSON schema the owl must answer with (structured output). */
export const TEMPLATE_SCHEMA = {
  type: "object",
  properties: {
    title: { type: "string", description: "Kurzer, generischer Titel der Vorlage (max. 60 Zeichen)" },
    category: { type: "string", description: "Kategorie aus der Liste im Systemprompt oder eine neue, kurze Kategorie" },
    tags: { type: "array", items: { type: "string" }, description: "3 bis 5 Schlagworte" },
    description: { type: "string", description: "Ein Satz, wofür die Vorlage gedacht ist" },
    prompt: {
      type: "string",
      description: "Der Prompt-Text mit Platzhaltern in eckigen Klammern und Grossbuchstaben, z. B. [THEMA]",
    },
    placeholders: {
      type: "array",
      items: {
        type: "object",
        properties: {
          key: { type: "string", description: "Schlüssel ohne Klammern, Grossbuchstaben, z. B. THEMA" },
          label: { type: "string", description: "Verständliche Beschriftung, z. B. Thema der Website" },
          example: { type: "string", description: "Realistischer Beispielwert" },
        },
        required: ["key", "label", "example"],
        additionalProperties: false,
      },
    },
    note: { type: "string", description: "Ein Satz Hinweis für den Nutzer, z. B. wo der Prompt am besten funktioniert" },
  },
  required: ["title", "category", "tags", "description", "prompt", "placeholders", "note"],
  additionalProperties: false,
} as const;

/** System prompt of the owl. `archive` lists the existing template titles per category. */
export function buildOwlSystemPrompt(archive: string): string {
  return `Du bist die „${OWL_NAME}“, die Bibliothekarin eines Prompt-Archivs. Deutsch, Schweizer Schreibweise (ss statt ß), präzise und freundlich.

Aufgabe: Aus der Idee oder dem Wunsch des Nutzers erstellst du eine wiederverwendbare Prompt-Vorlage. Der Nutzer füllt danach die Platzhalter aus und verwendet den fertigen Prompt in einer anderen KI (Text-, Bild- oder Video-KI). Du führst die Aufgabe nicht selbst aus.

Regeln für die Vorlage:
- Der Prompt ist vollständig und direkt verwendbar: Rolle oder Perspektive der KI, Ziel, Kontext, gewünschtes Ergebnis mit Format, Grenzen (Länge, Tonalität, was vermieden werden soll). 80 bis 220 Wörter.
- Alles, was von Fall zu Fall anders ist, wird ein Platzhalter in eckigen Klammern mit Grossbuchstaben, z. B. [THEMA], [ZIELGRUPPE], [STIL]. 3 bis 7 Platzhalter, jeder kommt im Prompt-Text vor und steht in der Liste "placeholders".
- Das konkrete Thema des Nutzers wird zum Beispielwert ("example") des passenden Platzhalters, nie fest in den Prompt geschrieben. Beispiel: Aus „Website über Löwen“ wird [THEMA] mit example „Löwen“.
- Keine personenbezogenen Daten (Namen, Firmen, Adressen, E-Mails) in Titel, Beschreibung oder Prompt – solche Angaben gehören höchstens als neutraler Beispielwert in "example", und auch dort nur, wenn sie nicht privat sind.
- Titel und Beschreibung sind generisch, damit die Vorlage auch für andere nützlich ist.
- Wenn der Nutzer bereits einen fertigen Prompt schickt: Verbessere ihn (Struktur, Klarheit, Platzhalter) und erkläre in "note" kurz, was du geändert hast.
- Wähle "category" aus dieser Liste, wenn eine passt, sonst eine neue kurze Kategorie:
${archive}

Antworte ausschliesslich mit dem JSON-Objekt nach dem vorgegebenen Schema.`;
}

/** Compact archive listing for the system prompt: category + titles. */
export function archiveToText(collections: { category: string; templates: { title: string }[] }[]): string {
  return collections
    .filter((c) => c.templates.length > 0)
    .map((c) => `- ${c.category}: ${c.templates.map((t) => t.title).join("; ")}`)
    .join("\n");
}
