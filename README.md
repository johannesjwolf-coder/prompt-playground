This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Weise Eule

Die Website hat eine eigene KI-Persönlichkeit, die „Weise Eule“. Ablauf in drei Schritten:

1. **Idee eingeben** („Eine Website über Löwen“). Solange das Feld leer ist, zeigt die Eule Ideen aus dem Archiv.
2. **Details ergänzen**: Die Eule erzeugt eine Vorlage mit Platzhaltern und zeigt darunter ein Feld pro Platzhalter (Zielgruppe, Stil …).
3. **Prompt kopieren**: Oben rechts entsteht daraus live der fertige Prompt. „Kopieren“ legt ihn in die Zwischenablage, die Eule macht einen kleinen Freudenflug. Der Prompt wird dann in Claude, ChatGPT, Gemini oder einem Bild-/Video-Tool verwendet.

Persona, Regeln und das JSON-Schema der Vorlage stehen in `lib/owl.ts`. Das Sprachmodell dahinter ist im Backend fest hinterlegt (`ANTHROPIC_MODEL`, Standard `claude-fable-5-1`) und wird dem Nutzer nicht angezeigt. Die Obergrenze der Antwortlänge ist ebenfalls fest im Backend (`MAX_TOKENS` in `app/api/prompt/route.ts`).

**„Aus der Eule“ (Community-Archiv):** Jede Vorlage, die die Eule aus einer Nutzer-Idee erzeugt, wird automatisch in `data/community/archive.json` gespeichert und erscheint in der Bibliothek mit dem Hinweis „von der Eule“. Gespeichert wird nur die generische Vorlage mit Platzhaltern und Beispielwerten, nie die Werte, die jemand in die Felder eingetragen hat. Die Eule ist angewiesen, keine personenbezogenen Daten in die Vorlage zu schreiben. Auf schreibgeschütztem Hosting (z. B. Vercel) schlägt das Speichern still fehl; dann bräuchte es eine Datenbank.

## Prompt-Vorlagen

Die Website enthält eine Prompt-Bibliothek („📜 Prompt-Vorlagen“ in der rechten Spalte). Vorlagen lassen sich mit einem Klick kopieren oder mit „Verwenden & anpassen“ ins Eingabefeld laden. Platzhalter wie `[THEMA]` werden dann in einem Panel unter dem Eingabefeld ausgefüllt und live im Prompt ersetzt.

### So füge ich neue Prompts hinzu

Alle Inhalte liegen im Ordner `data/prompts/`. Die Oberfläche muss dafür nicht angepasst werden.

**Variante A: Ohne Code (JSON)**
Öffne `data/prompts/meine-prompts.json` und hänge ein weiteres Objekt an das Array `templates` an:

```json
{
  "id": "mein-prompt-1",
  "title": "Kurzer Titel",
  "category": "Eigene Vorlagen",
  "tags": ["Tag1", "Tag2"],
  "description": "Ein Satz, wofür die Vorlage gedacht ist.",
  "prompt": "Dein Prompt-Text mit [PLATZHALTER] in eckigen Klammern."
}
```

Regeln:
- `id` muss eindeutig sein (Kleinbuchstaben, Bindestriche).
- `featured: true` (optional) zeigt die Vorlage als Ideen-Chip am Eingabefeld.
- Platzhalter schreibst du als `[GROSSBUCHSTABEN]` in den Prompt-Text. Sie werden automatisch erkannt.
- Optional kannst du Platzhalter mit Beschriftung und Beispiel beschreiben:

```json
"placeholders": [
  { "key": "THEMA", "label": "Thema der Website", "example": "Löwen" }
]
```

**Variante B: Neue Kategorie oder Sammlung (TypeScript)**
1. Kopiere `data/prompts/live-action-website.ts` nach `data/prompts/<name>.ts` und passe `category` und `templates` an.
2. Trage die Datei in `data/prompts/index.ts` im Array `collections` ein. Die Reihenfolge dort bestimmt die Reihenfolge der Kategorie-Chips.

Auch eine JSON-Datei kann als eigene Sammlung dienen: gleiche Struktur wie `meine-prompts.json`, dann in `index.ts` importieren.

**Fremde Inhalte:** Keine grossen Prompt-Sammlungen oder geschützte Texte kopieren. Eigene Formulierungen verwenden; eine Inspirationsquelle kann optional als Link im Feld `sources` notiert werden.

**Inspiration für Kategorien und Aufbau** (nur als Orientierung genutzt, keine Texte übernommen):
- https://gptprompts.ai/de/chatgpt-prompts
- https://ki-sogehts.de/prompts.html
- https://skill-sprinters.de/blog/tools/chatgpt-50-prompts-buero/
- https://godofprompt.ai/prompt-library
- https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices
- https://github.com/f/awesome-chatgpt-prompts (Rollen-Ideen; Inhalte dort CC0, hier trotzdem eigenständig formuliert)
- https://snackprompt.com/ (Kategorien-Überblick)
- https://promptbase.com/ und https://openart.ai/ (Bild-Anwendungen und Stile)
- https://gail.wharton.upenn.edu/prompt-library/ (Ideation und Lehre)
- https://learnprompting.org/ (Aufbau von Prompts)
