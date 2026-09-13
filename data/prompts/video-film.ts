import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Video & Film";
const collection: PromptCollection = {
  category: C,
  description: "Drehbücher, Storyboards, Schnittpläne und Videokonzepte – für Web, Social Media und Präsentationen.",
  templates: [
    {
      id: "vid-imagefilm",
      featured: true,
      title: "Imagefilm-Konzept in 90 Sekunden",
      category: C,
      tags: ["Imagefilm", "Konzept", "Storyboard"],
      description: "Konzept, Ablauf und Sprechertext für einen kurzen Imagefilm.",
      prompt:
        "Entwickle ein Konzept für einen 90-Sekunden-Imagefilm über [THEMA]. Zielgruppe: [ZIELGRUPPE]. Kernbotschaft: [BOTSCHAFT]. Liefere: eine Logline, einen Ablauf in Szenen mit Zeitangaben, für jede Szene Bildidee, Kamerabewegung und Stimmung, einen Sprechertext (falls sinnvoll), Musikvorschlag als Beschreibung und die Schlusseinstellung mit Call-to-Action. Der Film soll auch ohne Ton verständlich sein.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "ein Löwenschutzprojekt in Kenia" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "potenzielle Spender in der Schweiz" },
        { key: "BOTSCHAFT", label: "Kernbotschaft", example: "Jeder Beitrag sichert Lebensraum" },
      ],
    },
    {
      id: "vid-storyboard",
      title: "Storyboard aus einer Idee",
      category: C,
      tags: ["Storyboard", "Shotlist", "Planung"],
      description: "Aus einer Idee wird eine Shotlist mit Einstellungen, Dauer und Bildbeschreibung.",
      prompt:
        "Erstelle ein Storyboard für ein Video über [THEMA] mit einer Länge von [DAUER]. Format: [FORMAT]. Gliedere in nummerierte Einstellungen mit: Einstellungsgrösse, Kamerabewegung, was im Bild passiert, Dauer in Sekunden, Ton oder Text im Bild. Achte auf einen klaren Spannungsbogen: Aufmerksamkeit in den ersten 3 Sekunden, Kern in der Mitte, Auflösung mit Call-to-Action am Ende.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "der Morgen im Löwenrudel" },
        { key: "DAUER", label: "Dauer", example: "60 Sekunden" },
        { key: "FORMAT", label: "Format", example: "vertikal 9:16 für Social Media" },
      ],
    },
    {
      id: "vid-erklaervideo",
      title: "Erklärvideo-Skript",
      category: C,
      tags: ["Erklärvideo", "Skript", "Sprechertext"],
      description: "Ein Skript, das ein komplexes Thema in wenigen Minuten verständlich macht.",
      prompt:
        "Schreibe das Skript für ein Erklärvideo über [THEMA] für [ZIELGRUPPE], Dauer etwa [DAUER]. Struktur: Problem, das die Zuschauer kennen; einfache Erklärung mit einem Bild oder Vergleich; drei Kernpunkte; was die Zuschauer jetzt tun können. Zwei Spalten: links Sprechertext, rechts was im Bild zu sehen ist. Sprache: einfach, kurze Sätze, keine Fachbegriffe ohne Erklärung.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "wie Löwen im Rudel jagen" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Kinder ab 10 Jahren" },
        { key: "DAUER", label: "Dauer", example: "2 Minuten" },
      ],
    },
    {
      id: "vid-social-kurzvideo",
      title: "Kurzvideo für Social Media (Hook, Inhalt, CTA)",
      category: C,
      tags: ["Reels", "Shorts", "TikTok", "Hook"],
      description: "Fünf Kurzvideo-Ideen mit starkem Einstieg, Inhalt und Abschluss.",
      prompt:
        "Erstelle fünf Ideen für Kurzvideos (15 bis 45 Sekunden, vertikal) zum Thema [THEMA] für [PLATTFORM]. Zielgruppe: [ZIELGRUPPE]. Pro Idee: ein Hook für die ersten 2 Sekunden (gesprochen oder als Text im Bild), Ablauf in drei Schritten, Text-Einblendungen, Call-to-Action und ein Vorschlag für die Bildunterschrift. Vermeide Clickbait, der nicht eingelöst wird.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "erstaunliche Fakten über Löwen" },
        { key: "PLATTFORM", label: "Plattform", example: "Instagram Reels" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "junge Erwachsene mit Interesse an Natur" },
      ],
    },
    {
      id: "vid-doku-treatment",
      title: "Treatment für eine Kurz-Dokumentation",
      category: C,
      tags: ["Dokumentation", "Treatment", "Dramaturgie"],
      description: "Ein Treatment mit Thema, Figuren, Dramaturgie und Umsetzung für eine kurze Doku.",
      prompt:
        "Schreibe ein Treatment für eine [DAUER] lange Dokumentation über [THEMA]. Protagonisten oder Perspektiven: [PROTAGONISTEN]. Enthalte: Prämisse in zwei Sätzen, warum jetzt, Dramaturgie in drei Akten, visuelle Umsetzung (Bildsprache, Drehorte, Licht), Ton und Musik, Risiken beim Dreh und wie wir sie lösen, sowie eine Zielgruppenbeschreibung mit Verwertungsidee.",
      placeholders: [
        { key: "DAUER", label: "Dauer", example: "12 Minuten" },
        { key: "THEMA", label: "Thema", example: "Ranger, die nachts Löwen vor Wilderern schützen" },
        { key: "PROTAGONISTEN", label: "Protagonisten", example: "eine Rangerin und ihr Team" },
      ],
    },
    {
      id: "vid-interview",
      title: "Interview-Fragen für ein Videoporträt",
      category: C,
      tags: ["Interview", "Fragen", "Porträt"],
      description: "Fragen, die echte Antworten und gute Zitate für den Schnitt liefern.",
      prompt:
        "Erstelle [ANZAHL] Interviewfragen für ein Videoporträt von [PERSON], [ROLLE]. Ziel des Porträts: [ZIEL]. Beginne mit einfachen Aufwärmfragen, gehe dann zu Erlebnissen, Wendepunkten und Haltung. Formuliere offene Fragen, die in ganzen Sätzen beantwortet werden (keine Ja/Nein-Fragen), und markiere drei Fragen, die wahrscheinlich das stärkste Zitat für den Schluss liefern.",
      placeholders: [
        { key: "ANZAHL", label: "Anzahl Fragen", example: "12" },
        { key: "PERSON", label: "Person", example: "einem Tierfilmer" },
        { key: "ROLLE", label: "Rolle", example: "seit 20 Jahren in Ostafrika unterwegs" },
        { key: "ZIEL", label: "Ziel", example: "zeigen, was Geduld im Tierfilm bedeutet" },
      ],
    },
    {
      id: "vid-schnittplan",
      title: "Schnittplan und Rhythmus",
      category: C,
      tags: ["Schnitt", "Post-Produktion", "Rhythmus"],
      description: "Aus vorhandenem Material einen Schnittplan mit Tempo, Musik und Übergängen ableiten.",
      prompt:
        "Ich habe folgendes Material für ein Video über [THEMA]: [MATERIAL]. Ziel-Länge: [DAUER]. Erstelle einen Schnittplan mit Abschnitten, Tempo (langsam, mittel, schnell), Vorschlägen für Übergänge, Musikstimmung pro Abschnitt, Text-Einblendungen und Stellen, an denen Ton oder O-Töne tragen sollen. Nenne drei typische Schnittfehler, die ich bei diesem Material vermeiden sollte.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "eine Safari-Reise" },
        { key: "MATERIAL", label: "Material", example: "Drohnenaufnahmen, Tierbeobachtungen, Interviews mit Guides" },
        { key: "DAUER", label: "Ziel-Länge", example: "3 Minuten" },
      ],
    },
    {
      id: "vid-untertitel",
      title: "Untertitel und Video-Beschreibung",
      category: C,
      tags: ["Untertitel", "YouTube", "Beschreibung"],
      description: "Aus einem Transkript werden saubere Untertitel, Kapitelmarken und eine Videobeschreibung.",
      prompt:
        "Hier ist das Transkript eines Videos über [THEMA]:\n\n[TRANSKRIPT]\n\nErstelle daraus: gut lesbare Untertitel (maximal zwei Zeilen, maximal 42 Zeichen pro Zeile, sinnvolle Umbrüche), Kapitelmarken mit Zeitangaben und Titeln, eine Videobeschreibung mit den wichtigsten Punkten in den ersten zwei Zeilen und passende Schlagworte.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Löwen in der Nacht" },
        { key: "TRANSKRIPT", label: "Transkript", example: "(hier einfügen)" },
      ],
    },
    {
      id: "vid-ki-videoprompt",
      title: "Prompt für KI-Videogenerierung",
      category: C,
      tags: ["KI-Video", "Generierung", "Prompt"],
      description: "Präzise Beschreibung einer Szene für KI-Video-Tools (Kamera, Licht, Bewegung, Stil).",
      prompt:
        "Formuliere einen präzisen Prompt für ein KI-Video-Tool, der folgende Szene beschreibt: [SZENE]. Stil: [STIL]. Enthalte in dieser Reihenfolge: Motiv und Handlung, Umgebung und Tageszeit, Kameraeinstellung und -bewegung, Licht und Farbstimmung, Tempo, Bildformat [FORMAT], Dauer etwa [DAUER]. Vermeide widersprüchliche Angaben und nenne, was nicht im Bild sein soll. Gib den Prompt auf Deutsch und auf Englisch aus.",
      placeholders: [
        { key: "SZENE", label: "Szene", example: "ein Löwe steht bei Sonnenaufgang auf einem Felsen und blickt in die Savanne" },
        { key: "STIL", label: "Stil", example: "realistisch, dokumentarisch" },
        { key: "FORMAT", label: "Bildformat", example: "16:9" },
        { key: "DAUER", label: "Dauer", example: "8 Sekunden" },
      ],
    },
    {
      id: "vid-livestream-plan",
      title: "Livestream planen und moderieren",
      category: C,
      tags: ["Livestream", "Ablauf", "Moderation"],
      description: "Ablaufplan, Technik-Checkliste und Moderationstext für einen Livestream.",
      prompt:
        "Plane einen Livestream über [THEMA] auf [PLATTFORM], Dauer etwa [DAUER]. Zielgruppe: [ZIELGRUPPE]. Liefere: Ablauf mit Zeitblöcken, Begrüssungs- und Abschlusstext, drei Interaktionsmomente mit dem Publikum, eine Technik-Checkliste vor dem Start, Notfallplan bei Verbindungsproblemen und eine Ankündigung für Social Media.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Fragestunde mit einem Wildhüter" },
        { key: "PLATTFORM", label: "Plattform", example: "YouTube" },
        { key: "DAUER", label: "Dauer", example: "45 Minuten" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Naturfans jeden Alters" },
      ],
    },
  ],
};
export default collection;
