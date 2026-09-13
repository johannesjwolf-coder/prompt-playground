import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Musik, Audio & Podcast";
const collection: PromptCollection = {
  category: C,
  description: "Podcast-Konzepte, Episoden-Skripte, Songtexte, Sprecher-Anweisungen und Playlists.",
  templates: [
    {
      id: "audio-podcast-konzept",
      featured: true,
      title: "Podcast-Konzept",
      category: C,
      tags: ["Podcast", "Konzept", "Format"],
      description: "Name, Format, Zielgruppe, erste zehn Folgen und ein realistischer Rhythmus.",
      prompt:
        "Entwickle ein Konzept für einen Podcast über [THEMA]. Zielgruppe: [ZIELGRUPPE]. Was ihn besonders macht: [BESONDERHEIT]. Liefere: fünf Namensvorschläge, Format (Länge, Solo oder Gespräch, feste Rubriken), Tonalität, eine Beschreibung für die Podcast-Verzeichnisse (maximal 400 Zeichen), zehn Folgenideen mit Arbeitstitel und einem Satz, sowie einen Veröffentlichungsrhythmus, der bei [ZEIT] pro Woche realistisch ist.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Geschichten aus dem Naturschutz" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Naturinteressierte 25 bis 55" },
        { key: "BESONDERHEIT", label: "Besonderheit", example: "jede Folge ein Tier, erzählt von Menschen, die es schützen" },
        { key: "ZEIT", label: "Zeit pro Woche", example: "4 Stunden" },
      ],
    },
    {
      id: "audio-episode",
      title: "Episoden-Skript und Ablauf",
      category: C,
      tags: ["Podcast", "Skript", "Episode"],
      description: "Ein Ablauf für eine Folge mit Intro, Fragen, Übergängen und Outro.",
      prompt:
        "Schreibe den Ablauf für eine Podcast-Folge über [THEMA], Dauer etwa [DAUER], Format [FORMAT]. Liefere: Intro-Text (30 Sekunden), Kapitel mit Zeitangaben, pro Kapitel Leitfragen oder Stichworte, zwei Übergangsformulierungen, einen Call-to-Action und ein Outro. Falls es ein Interview ist, ergänze acht Fragen mit steigender Tiefe. Gesprochene Sprache, kurze Sätze.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "wie eine Löwen-Webcam entsteht" },
        { key: "DAUER", label: "Dauer", example: "30 Minuten" },
        { key: "FORMAT", label: "Format", example: "Interview mit einer Rangerin" },
      ],
    },
    {
      id: "audio-songtext",
      title: "Songtext schreiben",
      category: C,
      tags: ["Songtext", "Lyrics", "Musik"],
      description: "Ein Songtext mit Strophen, Refrain und Bridge in einem bestimmten Stil.",
      prompt:
        "Schreibe einen Songtext über [THEMA] im Stil von [GENRE]. Stimmung: [STIMMUNG]. Perspektive: [PERSPEKTIVE]. Struktur: zwei Strophen, Refrain, dritte Strophe, Bridge, Refrain. Der Refrain soll einprägsam und singbar sein (kurze Zeilen, klarer Rhythmus), die Strophen erzählen konkret mit Bildern statt Gefühlswörtern. Schlage Tempo und Tonart vor. Sprache: [SPRACHE].",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "eine Nacht in der Savanne" },
        { key: "GENRE", label: "Genre", example: "Folk" },
        { key: "STIMMUNG", label: "Stimmung", example: "ruhig, staunend" },
        { key: "PERSPEKTIVE", label: "Perspektive", example: "Ich-Erzähler" },
        { key: "SPRACHE", label: "Sprache", example: "Deutsch" },
      ],
    },
    {
      id: "audio-sprecher",
      title: "Sprecher-Anweisung für Voice-over",
      category: C,
      tags: ["Voice-over", "Sprecher", "Regie"],
      description: "Ein Skript mit Regieanweisungen für Betonung, Tempo und Pausen.",
      prompt:
        "Bereite den folgenden Text als Sprecher-Skript für [VERWENDUNG] auf. Zielstimmung: [STIMMUNG]. Zielgruppe: [ZIELGRUPPE]. Markiere Betonungen, Pausen (kurz, mittel, lang), Tempo-Wechsel und Stellen, die wärmer oder sachlicher klingen sollen; schreibe Zahlen und Abkürzungen aus, wie sie gesprochen werden; schätze die Sprechdauer. Text:\n\n[TEXT]",
      placeholders: [
        { key: "VERWENDUNG", label: "Verwendung", example: "ein Erklärvideo" },
        { key: "STIMMUNG", label: "Stimmung", example: "ruhig, vertrauenswürdig" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Familien" },
        { key: "TEXT", label: "Text", example: "(hier einfügen)" },
      ],
    },
    {
      id: "audio-jingle",
      title: "Jingle oder Sound-Logo beschreiben",
      category: C,
      tags: ["Jingle", "Sound", "Marke"],
      description: "Ein Briefing für ein kurzes Sound-Logo, auch als Prompt für Musik-KI nutzbar.",
      prompt:
        "Beschreibe ein Sound-Logo oder einen Jingle für [MARKE], Dauer [DAUER]. Charakter der Marke: [CHARAKTER]. Liefere: Stimmung, Instrumentierung, Tempo, Tonart-Vorschlag, Aufbau in Sekunden, wo es eingesetzt wird, und eine Beschreibung in Englisch, die ich in ein Musik-KI-Tool eingeben kann. Nenne drei Referenz-Stimmungen (ohne konkrete Songs zu kopieren).",
      placeholders: [
        { key: "MARKE", label: "Marke", example: "Weise Eule" },
        { key: "DAUER", label: "Dauer", example: "4 Sekunden" },
        { key: "CHARAKTER", label: "Charakter", example: "klug, warm, leicht magisch" },
      ],
    },
    {
      id: "audio-playlist",
      title: "Playlist kuratieren",
      category: C,
      tags: ["Playlist", "Musik", "Stimmung"],
      description: "Eine Playlist mit Dramaturgie für einen Anlass oder eine Stimmung.",
      prompt:
        "Stelle eine Playlist für [ANLASS] zusammen, Dauer etwa [DAUER]. Stimmung: [STIMMUNG]. Genres, die passen: [GENRES]. Baue eine Dramaturgie auf (Einstieg, Steigerung, Höhepunkt, Ausklang), nenne pro Titel Künstler, Titel und einen Satz, warum er an dieser Stelle steht, und markiere, welche Titel man überspringen kann, wenn es kürzer sein muss.",
      placeholders: [
        { key: "ANLASS", label: "Anlass", example: "ein Abendessen mit Freunden" },
        { key: "DAUER", label: "Dauer", example: "3 Stunden" },
        { key: "STIMMUNG", label: "Stimmung", example: "warm, entspannt, später etwas lebhafter" },
        { key: "GENRES", label: "Genres", example: "Soul, Folk, Afrobeat" },
      ],
    },
  ],
};
export default collection;
