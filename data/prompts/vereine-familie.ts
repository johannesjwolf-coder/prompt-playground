import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Vereine, Familie & Gemeinschaft";
const collection: PromptCollection = {
  category: C,
  description: "Einladungen, Newsletter, Elternbriefe, Spendenaufrufe, Danksagungen und Familienorganisation.",
  templates: [
    {
      id: "ver-einladung",
      featured: true,
      title: "Einladung zur Versammlung oder zum Anlass",
      category: C,
      tags: ["Einladung", "Verein", "Versammlung"],
      description: "Eine Einladung mit allen nötigen Angaben und einem Grund, zu kommen.",
      prompt:
        "Schreibe eine Einladung von [VEREIN] zu [ANLASS] am [DATUM] in [ORT]. Programm oder Traktanden: [PROGRAMM]. Anmeldung bis: [FRIST]. Aufbau: persönliche Anrede, ein Satz, warum es sich lohnt, die Fakten übersichtlich, Anmeldung, freundlicher Abschluss. Tonalität: [TONALITÄT]. Maximal 200 Wörter, für E-Mail und als Kurzversion für den Chat.",
      placeholders: [
        { key: "VEREIN", label: "Verein", example: "dem Naturschutzverein Bergwald" },
        { key: "ANLASS", label: "Anlass", example: "der Mitgliederversammlung" },
        { key: "DATUM", label: "Datum", example: "Donnerstag, 6. November, 19 Uhr" },
        { key: "ORT", label: "Ort", example: "Gemeindesaal" },
        { key: "PROGRAMM", label: "Programm", example: "Jahresbericht, Wahlen, Vortrag über Eulen" },
        { key: "FRIST", label: "Anmeldefrist", example: "1. November" },
        { key: "TONALITÄT", label: "Tonalität", example: "herzlich, unkompliziert" },
      ],
    },
    {
      id: "ver-newsletter",
      title: "Vereins-Newsletter",
      category: C,
      tags: ["Newsletter", "Verein", "Mitglieder"],
      description: "Ein Mitglieder-Newsletter, der informiert und Lust auf Mitmachen macht.",
      prompt:
        "Schreibe den Newsletter von [VEREIN] für [ZEITRAUM]. Inhalte: [INHALTE]. Struktur: persönliche Einleitung in drei Sätzen, Rückblick mit einem Höhepunkt, Ausblick mit Terminen, ein Aufruf zum Mitmachen, Dank an Helfende. Lebendig, kurz, mit Zwischenüberschriften, maximal 400 Wörter. Ergänze drei Betreffzeilen.",
      placeholders: [
        { key: "VEREIN", label: "Verein", example: "dem Turnverein" },
        { key: "ZEITRAUM", label: "Zeitraum", example: "Herbst" },
        { key: "INHALTE", label: "Inhalte", example: "Sommerfest-Rückblick, neue Kurse, Helfer für Weihnachtsmarkt gesucht" },
      ],
    },
    {
      id: "ver-elternbrief",
      title: "Elternbrief oder Info an Eltern",
      category: C,
      tags: ["Elternbrief", "Schule", "Information"],
      description: "Eine klare Elterninformation mit allen Fakten und Rückmeldeabschnitt.",
      prompt:
        "Schreibe einen Elternbrief von [ABSENDER] zu [ANLASS]. Wichtige Fakten: [FAKTEN]. Was die Eltern tun müssen: [AUFGABE]. Frist: [FRIST]. Struktur: Anrede, Anlass in zwei Sätzen, Fakten als übersichtliche Liste, was zu tun ist, Kontakt bei Fragen, Rückmeldeabschnitt zum Abtrennen. Freundlich, klar, ohne Behördensprache.",
      placeholders: [
        { key: "ABSENDER", label: "Absender", example: "der Klassenlehrerin der 4b" },
        { key: "ANLASS", label: "Anlass", example: "dem Ausflug in den Tierpark" },
        { key: "FAKTEN", label: "Fakten", example: "Freitag, 8 bis 16 Uhr, Kosten CHF 15, Zug ab Hauptbahnhof" },
        { key: "AUFGABE", label: "Aufgabe", example: "Einverständnis unterschreiben, Rucksack mit Verpflegung" },
        { key: "FRIST", label: "Frist", example: "bis Mittwoch" },
      ],
    },
    {
      id: "ver-spendenaufruf",
      title: "Kleiner Spendenaufruf",
      category: C,
      tags: ["Spenden", "Aufruf", "Gemeinnützig"],
      description: "Ein kurzer Spendenaufruf mit konkretem Ziel und sichtbarer Wirkung.",
      prompt:
        "Schreibe einen Spendenaufruf für [PROJEKT] von [ORGANISATION]. Ziel: [BETRAG] bis [FRIST]. Was das Geld bewirkt: [WIRKUNG]. Struktur: ein konkreter Einstieg (Szene oder Person), das Ziel, was 20, 50 und 100 Franken bewirken, wie man spendet, Dank. Ehrlich, ohne Mitleidsdruck, maximal 180 Wörter. Eine Version für E-Mail, eine für Social Media.",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "eine neue Voliere für verletzte Eulen" },
        { key: "ORGANISATION", label: "Organisation", example: "der Vogelpflegestation" },
        { key: "BETRAG", label: "Betrag", example: "CHF 8'000" },
        { key: "FRIST", label: "Frist", example: "Ende Jahr" },
        { key: "WIRKUNG", label: "Wirkung", example: "Platz für 12 statt 4 Tiere" },
      ],
    },
    {
      id: "ver-danksagung",
      title: "Danksagung an Helfende",
      category: C,
      tags: ["Dank", "Helfende", "Wertschätzung"],
      description: "Ein Dank, der konkret wird und nicht nach Pflichtübung klingt.",
      prompt:
        "Schreibe eine Danksagung an [PERSONEN] für [LEISTUNG]. Was besonders war: [BESONDERS]. Form: [FORM]. Nenne konkret, was die Personen getan haben und was es bewirkt hat, vermeide Floskeln wie „ohne euch wäre es nicht möglich gewesen“, und schliesse mit einem Blick nach vorn. Maximal 150 Wörter.",
      placeholders: [
        { key: "PERSONEN", label: "Personen", example: "die 20 freiwilligen Helfer am Sommerfest" },
        { key: "LEISTUNG", label: "Leistung", example: "Aufbau, Grill und Aufräumen bis Mitternacht" },
        { key: "BESONDERS", label: "Besonders", example: "der Regen am Nachmittag und trotzdem gute Laune" },
        { key: "FORM", label: "Form", example: "E-Mail an alle" },
      ],
    },
    {
      id: "ver-trauerkarte",
      title: "Beileid ausdrücken",
      category: C,
      tags: ["Beileid", "Trauer", "Karte"],
      description: "Ehrliche, schlichte Worte für eine Trauerkarte oder Nachricht.",
      prompt:
        "Hilf mir, Beileid auszudrücken. Empfänger: [EMPFÄNGER]. Verstorbene Person: [PERSON]. Meine Beziehung zur verstorbenen Person: [BEZIEHUNG]. Eine Erinnerung, die ich teilen möchte: [ERINNERUNG]. Schlicht, ehrlich, ohne Phrasen und ohne Ratschläge, mit einem konkreten Angebot zur Unterstützung, falls passend. Drei bis sechs Sätze, zwei Varianten.",
      placeholders: [
        { key: "EMPFÄNGER", label: "Empfänger", example: "meine Kollegin" },
        { key: "PERSON", label: "Verstorbene Person", example: "ihre Mutter" },
        { key: "BEZIEHUNG", label: "Beziehung", example: "einmal bei einem Fest getroffen" },
        { key: "ERINNERUNG", label: "Erinnerung", example: "wie herzlich sie alle begrüsst hat" },
      ],
    },
    {
      id: "ver-familienplanung",
      title: "Familienwoche und Ferien organisieren",
      category: C,
      tags: ["Familie", "Organisation", "Ferien"],
      description: "Termine, Aufgaben und Wünsche der Familie in einen Plan bringen.",
      prompt:
        "Hilf mir, [ZEITRAUM] für unsere Familie zu organisieren. Familie: [FAMILIE]. Feste Termine: [TERMINE]. Wünsche: [WÜNSCHE]. Budget: [BUDGET]. Erstelle einen Wochen- oder Tagesplan, der Fixes, Wünsche und Ruhezeiten ausgleicht, verteile Aufgaben fair, plane Puffer, und nenne die zwei Punkte, an denen es erfahrungsgemäss Streit gibt, mit Vorschlag.",
      placeholders: [
        { key: "ZEITRAUM", label: "Zeitraum", example: "die Herbstferien" },
        { key: "FAMILIE", label: "Familie", example: "zwei Erwachsene, Kinder 7 und 11" },
        { key: "TERMINE", label: "Termine", example: "Zahnarzt Dienstag, Geburtstag Oma Samstag" },
        { key: "WÜNSCHE", label: "Wünsche", example: "Tierpark, ein Regentag mit Film, Wandern" },
        { key: "BUDGET", label: "Budget", example: "CHF 500" },
      ],
    },
    {
      id: "ver-nachbarschaft",
      title: "Nachbarschaftsaktion starten",
      category: C,
      tags: ["Nachbarschaft", "Aktion", "Gemeinschaft"],
      description: "Eine kleine Aktion im Quartier planen und bewerben.",
      prompt:
        "Plane eine Nachbarschaftsaktion: [AKTION] in [QUARTIER]. Ziel: [ZIEL]. Liefere: Konzept in fünf Sätzen, Ablauf, was organisiert werden muss (mit Zuständigkeiten), einen Aushang-Text, eine Nachricht für die Quartier-Chatgruppe, wie wir mit wenig Aufwand viele erreichen, und was wir tun, wenn nur wenige kommen.",
      placeholders: [
        { key: "AKTION", label: "Aktion", example: "ein Strassenfest mit Flohmarkt" },
        { key: "QUARTIER", label: "Quartier", example: "unsere Strasse mit 30 Haushalten" },
        { key: "ZIEL", label: "Ziel", example: "Nachbarn kennenlernen" },
      ],
    },
  ],
};
export default collection;
