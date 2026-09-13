/**
 * Types and helpers for the prompt template library.
 * Content lives in `data/prompts/` – this file only defines the shape and utilities.
 */

export type Placeholder = {
  /** Key as it appears in the prompt text, without brackets: "THEMA" → [THEMA] */
  key: string;
  /** Human-readable label shown next to the input */
  label: string;
  /** Example value – shown as input placeholder and usable via "Beispiel übernehmen" */
  example?: string;
};

export type PromptTemplate = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  prompt: string;
  /** Optional: if omitted, placeholders are detected automatically from [GROSSBUCHSTABEN] in the prompt. */
  placeholders?: Placeholder[];
  /** Optional link(s) that inspired this template (never copied content). */
  sources?: string[];
  /** Shown as idea chip next to the empty input field. */
  featured?: boolean;
  /** Short hint for the user (set by the owl for generated templates). */
  note?: string;
};

export type PromptCollection = {
  /** Shown as group label, e.g. "Live-Action Website" */
  category: string;
  description?: string;
  templates: PromptTemplate[];
};

const PLACEHOLDER_RE = /\[([A-ZÄÖÜ0-9_\- ]{2,})\]/g;

/** Finds every [PLATZHALTER] in a text, in order of first appearance, without duplicates. */
export function extractPlaceholderKeys(text: string): string[] {
  const keys: string[] = [];
  for (const m of text.matchAll(PLACEHOLDER_RE)) {
    if (!keys.includes(m[1])) keys.push(m[1]);
  }
  return keys;
}

/** Placeholder metadata for a template: declared ones first, undeclared ones auto-detected. */
export function placeholdersOf(t: PromptTemplate): Placeholder[] {
  const declared = t.placeholders ?? [];
  const detected = extractPlaceholderKeys(t.prompt);
  const result: Placeholder[] = [];
  for (const key of detected) {
    const d = declared.find((p) => p.key === key);
    result.push(d ?? { key, label: prettifyKey(key) });
  }
  return result;
}

function prettifyKey(key: string): string {
  const s = key.replace(/[_-]+/g, " ").toLowerCase();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Replaces [KEY] with the given value; empty values keep the placeholder visible. */
export function fillTemplate(text: string, values: Record<string, string>): string {
  return text.replace(PLACEHOLDER_RE, (match, key: string) => {
    const v = values[key]?.trim();
    return v ? v : match;
  });
}

/** True when no [PLATZHALTER] is left in the text. */
export function isFullyFilled(text: string): boolean {
  return extractPlaceholderKeys(text).length === 0;
}

export function flattenCollections(collections: PromptCollection[]): PromptTemplate[] {
  const seen = new Set<string>();
  const out: PromptTemplate[] = [];
  for (const c of collections) {
    for (const t of c.templates) {
      const id = t.id;
      if (seen.has(id)) {
        console.warn(`[promptLibrary] Doppelte Prompt-ID "${id}" – zweiter Eintrag wird ignoriert.`);
        continue;
      }
      seen.add(id);
      out.push({ ...t, category: t.category || c.category });
    }
  }
  return out;
}
