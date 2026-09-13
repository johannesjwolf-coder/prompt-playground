import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Alltag & Freizeit";
const collection: PromptCollection = {
  category: C,
  description: "Reisen, Feste, Geschenke, Haushalt und persönliche Projekte – Prompts für das Leben ausserhalb des Büros.",
  templates: [
    {
      id: "alltag-reiseplan",
      featured: true,
      title: "Reiseplan mit Tagesablauf",
      category: C,
      tags: ["Reise", "Plan", "Urlaub"],
      description: "Ein realistischer Reiseplan mit Tagesstruktur, Alternativen und Budget.",
      prompt:
        "Plane eine Reise nach [ZIEL] für [PERSONEN], Dauer [DAUER], Budget etwa [BUDGET]. Interessen: [INTERESSEN]. Erstelle einen Tagesplan mit je einem Hauptpunkt, einer Alternative bei schlechtem Wetter, Essensvorschlägen und grober Reisezeit zwischen den Orten. Nenne, was ich vorab buchen sollte, und drei Dinge, die oft unterschätzt werden.",
      placeholders: [
        { key: "ZIEL", label: "Reiseziel", example: "Kenia" },
        { key: "PERSONEN", label: "Personen", example: "zwei Erwachsene" },
        { key: "DAUER", label: "Dauer", example: "10 Tage" },
        { key: "BUDGET", label: "Budget", example: "CHF 5'000" },
        { key: "INTERESSEN", label: "Interessen", example: "Wildtiere, Fotografie, wenig Hotelwechsel" },
      ],
    },
    {
      id: "alltag-packliste",
      title: "Packliste für eine Reise",
      category: C,
      tags: ["Packliste", "Reise", "Checkliste"],
      description: "Eine vollständige Packliste, nach Kategorien sortiert, auf die Reise zugeschnitten.",
      prompt:
        "Erstelle eine Packliste für [REISE], Dauer [DAUER], Wetter: [WETTER]. Besondere Aktivitäten: [AKTIVITÄTEN]. Gliedere in Kleidung, Hygiene, Technik, Dokumente, Gesundheit, Sonstiges. Nenne bei jedem Punkt die Menge, markiere, was man vor Ort kaufen kann, und was oft vergessen wird.",
      placeholders: [
        { key: "REISE", label: "Reise", example: "eine Safari in Tansania" },
        { key: "DAUER", label: "Dauer", example: "8 Tage" },
        { key: "WETTER", label: "Wetter", example: "tagsüber 30 Grad, nachts kühl" },
        { key: "AKTIVITÄTEN", label: "Aktivitäten", example: "Jeep-Fahrten, Fotografie, ein Abendessen im Camp" },
      ],
    },
    {
      id: "alltag-geschenk",
      title: "Geschenkideen, die passen",
      category: C,
      tags: ["Geschenk", "Ideen", "Persönlich"],
      description: "Zehn Geschenkideen, abgestimmt auf Person, Anlass und Budget.",
      prompt:
        "Schlage zehn Geschenkideen für [PERSON] zum Anlass [ANLASS] vor. Budget: [BUDGET]. Die Person mag: [INTERESSEN]. Mische Erlebnisse, Selbstgemachtes und Gekauftes, erkläre pro Idee in einem Satz, warum sie passt, und nenne, was du dazu wissen müsstest, um die beste auszuwählen.",
      placeholders: [
        { key: "PERSON", label: "Person", example: "meinen Vater, 65" },
        { key: "ANLASS", label: "Anlass", example: "Geburtstag" },
        { key: "BUDGET", label: "Budget", example: "bis CHF 150" },
        { key: "INTERESSEN", label: "Interessen", example: "Naturdokus, Wandern, Kaffee" },
      ],
    },
    {
      id: "alltag-fest",
      title: "Fest oder Feier planen",
      category: C,
      tags: ["Feier", "Planung", "Checkliste"],
      description: "Ablauf, Einkaufsliste, Zeitplan und Einladung für eine Feier.",
      prompt:
        "Plane [FEIER] für [ANZAHL] Personen am [DATUM] in [ORT]. Budget: [BUDGET]. Liefere: Ablauf mit Uhrzeiten, Einkaufsliste mit Mengen, Zeitplan für die Vorbereitung in den Tagen davor, eine kurze Einladung und drei Ideen, die die Feier besonders machen, ohne viel zu kosten.",
      placeholders: [
        { key: "FEIER", label: "Feier", example: "einen 40. Geburtstag" },
        { key: "ANZAHL", label: "Anzahl Personen", example: "25" },
        { key: "DATUM", label: "Datum", example: "Samstag, 18. Oktober" },
        { key: "ORT", label: "Ort", example: "zu Hause mit Garten" },
        { key: "BUDGET", label: "Budget", example: "CHF 800" },
      ],
    },
    {
      id: "alltag-wochenmenu",
      title: "Wochenmenü mit Einkaufsliste",
      category: C,
      tags: ["Kochen", "Menü", "Einkauf"],
      description: "Sieben Abendessen, abgestimmt auf Vorlieben und Zeit, mit einer Einkaufsliste.",
      prompt:
        "Erstelle ein Wochenmenü mit sieben Abendessen für [PERSONEN]. Vorlieben und Einschränkungen: [VORLIEBEN]. Zeit zum Kochen unter der Woche: [ZEIT]. Nutze Zutaten mehrfach, damit wenig übrig bleibt, gib pro Gericht Zubereitungszeit und Kurzrezept in fünf Schritten und erstelle eine Einkaufsliste nach Abteilungen.",
      placeholders: [
        { key: "PERSONEN", label: "Personen", example: "zwei Erwachsene und ein Kind" },
        { key: "VORLIEBEN", label: "Vorlieben", example: "vegetarisch, keine Pilze, gerne Pasta" },
        { key: "ZEIT", label: "Zeit", example: "maximal 30 Minuten" },
      ],
    },
    {
      id: "alltag-brief",
      title: "Persönlicher Brief oder Rede",
      category: C,
      tags: ["Rede", "Brief", "Anlass"],
      description: "Eine Rede oder ein Brief zu einem persönlichen Anlass, mit Herz und Struktur.",
      prompt:
        "Schreibe [ART] für [ANLASS] an oder über [PERSON]. Unsere Beziehung: [BEZIEHUNG]. Erinnerungen und Eigenschaften, die ich erwähnen möchte: [ERINNERUNGEN]. Beginne mit einem konkreten Moment statt mit Allgemeinem, halte einen roten Faden, ende mit einem Wunsch oder Dank. Länge: [LÄNGE]. Tonalität: warm, ehrlich, mit einem Lächeln, ohne Kitsch.",
      placeholders: [
        { key: "ART", label: "Art", example: "eine Rede" },
        { key: "ANLASS", label: "Anlass", example: "die Hochzeit meiner Schwester" },
        { key: "PERSON", label: "Person", example: "meine Schwester Anna" },
        { key: "BEZIEHUNG", label: "Beziehung", example: "wir sind drei Jahre auseinander und sehr eng" },
        { key: "ERINNERUNGEN", label: "Erinnerungen", example: "unsere Reise nach Namibia, ihr Lachen, ihre Sturheit" },
        { key: "LÄNGE", label: "Länge", example: "3 Minuten Redezeit" },
      ],
    },
    {
      id: "alltag-haushalt",
      title: "Haushaltsplan, der funktioniert",
      category: C,
      tags: ["Haushalt", "Routine", "Familie"],
      description: "Ein Putz- und Aufgabenplan, verteilt auf Personen und Wochentage.",
      prompt:
        "Erstelle einen Haushaltsplan für [HAUSHALT]. Wohnung: [WOHNUNG]. Zeit pro Person und Tag: etwa [ZEIT]. Verteile tägliche, wöchentliche und monatliche Aufgaben fair, berücksichtige Vorlieben ([VORLIEBEN]), und schlage eine einfache Regel vor, wie wir den Plan anpassen, wenn er nicht klappt.",
      placeholders: [
        { key: "HAUSHALT", label: "Haushalt", example: "zwei Erwachsene und zwei Kinder (8 und 12)" },
        { key: "WOHNUNG", label: "Wohnung", example: "4,5 Zimmer mit Balkon" },
        { key: "ZEIT", label: "Zeit", example: "15 Minuten" },
        { key: "VORLIEBEN", label: "Vorlieben", example: "ich koche gern, Partner hasst Bügeln" },
      ],
    },
    {
      id: "alltag-hobbyprojekt",
      title: "Hobby-Projekt starten",
      category: C,
      tags: ["Hobby", "Projekt", "Einstieg"],
      description: "Vom Wunsch zum ersten Schritt: Ausrüstung, Lernweg, erste Erfolge.",
      prompt:
        "Ich möchte mit [HOBBY] anfangen. Mein Stand: [STAND]. Zeit pro Woche: [ZEIT]. Budget für den Start: [BUDGET]. Gib mir: die minimal nötige Ausrüstung (und was ich nicht brauche), ein erstes Projekt, das in zwei Wochen ein Ergebnis bringt, die drei häufigsten Anfängerfehler und wie ich merke, dass es mir wirklich Spass macht.",
      placeholders: [
        { key: "HOBBY", label: "Hobby", example: "Naturfotografie" },
        { key: "STAND", label: "Stand", example: "nur Handyfotos bisher" },
        { key: "ZEIT", label: "Zeit pro Woche", example: "4 Stunden" },
        { key: "BUDGET", label: "Budget", example: "CHF 600" },
      ],
    },
  ],
};
export default collection;
