import { promises as fs } from "fs";
import path from "path";
import type { PromptCollection, PromptTemplate } from "@/lib/promptLibrary";

/**
 * Community-Archiv: Vorlagen, die die Weise Eule aus Nutzer-Ideen erzeugt hat.
 * Gespeichert werden nur die generischen Vorlagen mit Platzhaltern – nie die
 * Werte, die ein Nutzer in die Felder eingetragen hat.
 * Server-only (Dateisystem). Auf schreibgeschütztem Hosting schlägt das Speichern
 * still fehl und wird nur geloggt.
 */

export const COMMUNITY_CATEGORY = "Aus der Eule";
const FILE = path.join(process.cwd(), "data", "community", "archive.json");

export type CommunityTemplate = PromptTemplate & { createdAt: string; source: "eule" };

export async function readCommunityArchive(): Promise<PromptCollection> {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    const parsed = JSON.parse(raw) as { templates?: CommunityTemplate[] };
    return {
      category: COMMUNITY_CATEGORY,
      description: "Vorlagen, die die Weise Eule aus Ideen der Nutzer erzeugt hat.",
      templates: Array.isArray(parsed.templates) ? parsed.templates : [],
    };
  } catch {
    return { category: COMMUNITY_CATEGORY, templates: [] };
  }
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9äöü]+/g, " ").trim();

/** Appends a template unless one with the same title already exists. Returns the stored template. */
export async function addToCommunityArchive(t: PromptTemplate): Promise<CommunityTemplate | null> {
  try {
    const current = await readCommunityArchive();
    const existing = current.templates.find((x) => norm(x.title) === norm(t.title)) as CommunityTemplate | undefined;
    if (existing) return existing;
    const stored: CommunityTemplate = { ...t, createdAt: new Date().toISOString(), source: "eule" };
    const next = { templates: [...(current.templates as CommunityTemplate[]), stored] };
    await fs.mkdir(path.dirname(FILE), { recursive: true });
    await fs.writeFile(FILE, JSON.stringify(next, null, 2) + "\n", "utf8");
    return stored;
  } catch (err) {
    console.warn("[communityArchive] Konnte nicht speichern:", err);
    return null;
  }
}
