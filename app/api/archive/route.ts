import { readCommunityArchive } from "@/lib/communityArchive";

/** Vorlagen, die die Weise Eule aus Nutzer-Ideen erzeugt hat (generisch, ohne persönliche Daten). */
export async function GET() {
  const collection = await readCommunityArchive();
  return Response.json(collection, { headers: { "Cache-Control": "no-store" } });
}
