import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Bilder & Design";
const collection: PromptCollection = {
  category: C,
  description: "Prompts für KI-Bildgenerierung, Moodboards, Logos, Farbwelten und Layout-Ideen.",
  templates: [
    {
      id: "img-bildprompt",
      featured: true,
      title: "Präziser Prompt für KI-Bildgenerierung",
      category: C,
      tags: ["KI-Bild", "Prompt", "Fotorealistisch"],
      description: "Aus einer Bildidee wird ein strukturierter Prompt für Bild-KIs, auf Deutsch und Englisch.",
      prompt:
        "Formuliere einen präzisen Prompt für eine Bild-KI. Bildidee: [BILDIDEE]. Stil: [STIL]. Verwendung: [VERWENDUNG]. Baue den Prompt so auf: Hauptmotiv und Handlung, Umgebung, Licht und Tageszeit, Kamera (Brennweite, Perspektive, Tiefenschärfe), Farbstimmung, Bildformat [FORMAT]. Ergänze, was nicht im Bild sein soll. Gib den Prompt auf Deutsch und auf Englisch aus und nenne drei Varianten mit anderer Stimmung.",
      placeholders: [
        { key: "BILDIDEE", label: "Bildidee", example: "ein Löwe im hohen Gras bei goldenem Abendlicht" },
        { key: "STIL", label: "Stil", example: "fotorealistisch, Naturdokumentation" },
        { key: "VERWENDUNG", label: "Verwendung", example: "Hero-Bild einer Website" },
        { key: "FORMAT", label: "Bildformat", example: "16:9" },
      ],
    },
    {
      id: "img-moodboard",
      title: "Moodboard und Bildsprache",
      category: C,
      tags: ["Moodboard", "Bildsprache", "Konzept"],
      description: "Eine Bildsprache definieren: Motive, Licht, Farben, Perspektiven, No-Gos.",
      prompt:
        "Definiere die Bildsprache für [PROJEKT]. Gewünschte Wirkung: [WIRKUNG]. Zielgruppe: [ZIELGRUPPE]. Beschreibe: typische Motive, Licht und Tageszeit, Farbstimmung, Perspektiven und Bildausschnitte, Umgang mit Menschen im Bild, was wir nie zeigen. Liefere zehn Bildbeschreibungen für ein Moodboard und eine Checkliste, mit der ich neue Bilder auf Passung prüfen kann.",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "eine Website über Löwen" },
        { key: "WIRKUNG", label: "Wirkung", example: "Ehrfurcht und Ruhe" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Erwachsene mit Interesse an Natur" },
      ],
    },
    {
      id: "img-farbwelt",
      title: "Farbwelt mit Begründung",
      category: C,
      tags: ["Farben", "Palette", "Marke"],
      description: "Eine Farbpalette mit Hex-Werten, Rollen und Regeln für die Anwendung.",
      prompt:
        "Entwickle eine Farbwelt für [PROJEKT]. Stimmung: [STIMMUNG]. Liefere eine Palette mit Hex-Werten: eine Hauptfarbe, eine Akzentfarbe, zwei neutrale Töne, je eine Farbe für Erfolg und Fehler. Für jede Farbe: Rolle, Beispiel-Einsatz, und mit welcher Textfarbe sie ausreichend Kontrast hat. Ergänze Regeln, wie viel Prozent der Fläche welche Farbe bekommt, und eine Variante für dunklen Hintergrund.",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "eine Safari-Lodge-Website" },
        { key: "STIMMUNG", label: "Stimmung", example: "warm, erdig, hochwertig" },
      ],
    },
    {
      id: "img-logo",
      title: "Logo-Ideen und Briefing",
      category: C,
      tags: ["Logo", "Briefing", "Identität"],
      description: "Fünf Logo-Richtungen und ein Briefing, das man einer Designerin geben kann.",
      prompt:
        "Entwickle fünf Logo-Richtungen für [MARKE]. Wofür wir stehen: [POSITIONIERUNG]. Zielgruppe: [ZIELGRUPPE]. Pro Richtung: Grundidee, Form (Bildmarke, Wortmarke, Kombination), Typografie-Charakter, Farbvorschlag und wo es besonders gut funktioniert (klein, Print, dunkel). Fasse am Ende ein Briefing zusammen, das ich an eine Designerin weitergeben kann.",
      placeholders: [
        { key: "MARKE", label: "Marke", example: "Savannenlicht Filmproduktion" },
        { key: "POSITIONIERUNG", label: "Positionierung", example: "geduldiger, echter Tierfilm" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Sender und Naturschutzorganisationen" },
      ],
    },
    {
      id: "img-layout-hero",
      title: "Layout-Ideen für einen Seitenbereich",
      category: C,
      tags: ["Layout", "UI", "Wireframe"],
      description: "Drei Layout-Varianten für einen Bereich, beschrieben als Text-Wireframe.",
      prompt:
        "Schlage drei Layout-Varianten für [BEREICH] einer Website über [THEMA] vor. Inhalte, die enthalten sein müssen: [INHALTE]. Beschreibe jede Variante als Text-Wireframe (Anordnung, Grössenverhältnisse, Abstände), nenne Vor- und Nachteile, wie sie auf dem Smartphone umbricht und für welche Zielgruppe sie am besten passt. Empfiehl eine Variante.",
      placeholders: [
        { key: "BEREICH", label: "Bereich", example: "den Hero-Bereich" },
        { key: "THEMA", label: "Thema", example: "Löwen" },
        { key: "INHALTE", label: "Inhalte", example: "Headline, Subline, Button, grosses Bild" },
      ],
    },
    {
      id: "img-social-vorlagen",
      title: "Vorlagen-System für Social-Media-Grafiken",
      category: C,
      tags: ["Social Media", "Vorlagen", "Wiedererkennung"],
      description: "Ein einfaches Grafik-System, damit Posts konsistent aussehen.",
      prompt:
        "Entwickle ein Vorlagen-System für Social-Media-Grafiken von [MARKE]. Farbwelt: [FARBEN]. Beschreibe drei Vorlagentypen (Zitat, Fakt, Ankündigung) mit Aufbau, Schriftgrössen, Bildplatzierung, Logo-Position und Regeln für Text im Bild (maximal Wörter, Kontrast). Ergänze ein Beispiel pro Vorlage mit echtem Text zum Thema [THEMA].",
      placeholders: [
        { key: "MARKE", label: "Marke", example: "einen Tierpark" },
        { key: "FARBEN", label: "Farbwelt", example: "Dunkelgrün, Sand, Weiss" },
        { key: "THEMA", label: "Thema", example: "Löwen" },
      ],
    },
    {
      id: "img-icon-set",
      title: "Icon-Set beschreiben",
      category: C,
      tags: ["Icons", "Set", "Konsistenz"],
      description: "Eine Liste benötigter Icons mit Stilregeln, damit sie zusammenpassen.",
      prompt:
        "Erstelle die Spezifikation für ein Icon-Set für [PROJEKT]. Benötigte Icons: [ICONS]. Lege fest: Stil (Linie oder Fläche, Strichstärke, Ecken), Rastergrösse, Farbregeln, und beschreibe jedes Icon in einem Satz so, dass eine Designerin oder eine Bild-KI es eindeutig umsetzen kann. Nenne drei häufige Fehler, die ein Set uneinheitlich wirken lassen.",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "eine Tierpark-Website" },
        { key: "ICONS", label: "Benötigte Icons", example: "Öffnungszeiten, Tickets, Anfahrt, Gastronomie, Barrierefrei" },
      ],
    },
    {
      id: "img-alt-texte",
      title: "Alt-Texte für Bilder",
      category: C,
      tags: ["Alt-Text", "Barrierefreiheit", "SEO"],
      description: "Gute Alt-Texte für eine Liste von Bildern schreiben.",
      prompt:
        "Schreibe Alt-Texte für die folgenden Bilder einer Website über [THEMA]. Regeln: beschreibe, was für das Verständnis wichtig ist, maximal 125 Zeichen, kein „Bild von“, keine Schlagwort-Listen, dekorative Bilder als solche markieren. Bilder:\n\n[BILDLISTE]",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Löwen" },
        { key: "BILDLISTE", label: "Bildliste", example: "1. Löwin mit zwei Jungen im Gras 2. Sonnenuntergang über der Savanne 3. Zierlinie" },
      ],
    },
  ],
};
export default collection;
