import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Wohnen & Immobilien";
const collection: PromptCollection = {
  category: C,
  description: "Wohnungssuche, Inserate, Besichtigungen, Umzug, Mängel und Renovation.",
  templates: [
    {
      id: "wohn-inserat",
      featured: true,
      title: "Wohnungsinserat schreiben",
      category: C,
      tags: ["Inserat", "Vermieten", "Wohnung"],
      description: "Ein ehrliches, ansprechendes Inserat mit allen wichtigen Angaben.",
      prompt:
        "Schreibe ein Inserat für [OBJEKT] in [ORT]. Fakten: [FAKTEN]. Besonderheiten: [BESONDERHEITEN]. Zielgruppe: [ZIELGRUPPE]. Aufbau: Titel mit den drei wichtigsten Merkmalen, Beschreibung in maximal 120 Wörtern, die den Alltag im Objekt zeigt, Fakten als Liste, Lage und Umgebung, Bedingungen und Kontakt. Ehrlich, ohne Übertreibung, ohne „Traumwohnung“.",
      placeholders: [
        { key: "OBJEKT", label: "Objekt", example: "eine 3,5-Zimmer-Wohnung" },
        { key: "ORT", label: "Ort", example: "Winterthur" },
        { key: "FAKTEN", label: "Fakten", example: "85 m², 3. Stock mit Lift, Balkon, CHF 1'950 inkl. NK" },
        { key: "BESONDERHEITEN", label: "Besonderheiten", example: "renovierte Küche, ruhige Lage, Haustiere erlaubt" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Paare oder kleine Familien" },
      ],
    },
    {
      id: "wohn-bewerbung",
      title: "Bewerbung für eine Wohnung",
      category: C,
      tags: ["Bewerbung", "Mieten", "Anschreiben"],
      description: "Ein kurzes Anschreiben, das Vermieter überzeugt.",
      prompt:
        "Schreibe ein Anschreiben für die Bewerbung um [OBJEKT] in [ORT]. Wir sind: [WIR]. Warum diese Wohnung: [GRUND]. Was uns als Mieter auszeichnet: [STÄRKEN]. Kurz, freundlich, konkret, maximal 150 Wörter, ohne Unterwürfigkeit. Nenne, welche Unterlagen ich beilegen sollte.",
      placeholders: [
        { key: "OBJEKT", label: "Objekt", example: "die 3,5-Zimmer-Wohnung an der Bahnhofstrasse" },
        { key: "ORT", label: "Ort", example: "Bern" },
        { key: "WIR", label: "Wir", example: "ein Paar, beide angestellt, Nichtraucher, kein Haustier" },
        { key: "GRUND", label: "Grund", example: "nahe am Arbeitsplatz, ruhiges Quartier" },
        { key: "STÄRKEN", label: "Stärken", example: "seit 6 Jahren in der gleichen Wohnung, gutes Verhältnis zum Vermieter" },
      ],
    },
    {
      id: "wohn-besichtigung",
      title: "Fragen für die Wohnungsbesichtigung",
      category: C,
      tags: ["Besichtigung", "Fragen", "Checkliste"],
      description: "Was man bei einer Besichtigung fragen und prüfen sollte.",
      prompt:
        "Erstelle eine Checkliste für die Besichtigung von [OBJEKT]. Meine Prioritäten: [PRIORITÄTEN]. Liste: 15 Fragen an Vermieter oder Verwaltung, 15 Dinge, die ich selbst prüfe (Feuchtigkeit, Lärm, Fenster, Heizung, Handyempfang), Warnsignale, und was ich nach der Besichtigung sofort notiere. Ordne nach Wichtigkeit.",
      placeholders: [
        { key: "OBJEKT", label: "Objekt", example: "eine Altbauwohnung" },
        { key: "PRIORITÄTEN", label: "Prioritäten", example: "ruhig, gut isoliert, Homeoffice möglich" },
      ],
    },
    {
      id: "wohn-umzug",
      title: "Umzug planen",
      category: C,
      tags: ["Umzug", "Plan", "Checkliste"],
      description: "Ein Zeitplan von acht Wochen vorher bis nach dem Umzug.",
      prompt:
        "Plane meinen Umzug von [VON] nach [NACH] am [DATUM]. Haushalt: [HAUSHALT]. Helfer: [HELFER]. Erstelle einen Zeitplan (8 Wochen vorher, 4 Wochen, 1 Woche, Umzugstag, danach) mit Aufgaben, Kündigungen und Ummeldungen, einer Packstrategie, Materialliste und einer Liste, was am Umzugstag griffbereit sein muss.",
      placeholders: [
        { key: "VON", label: "Von", example: "Zürich" },
        { key: "NACH", label: "Nach", example: "Luzern" },
        { key: "DATUM", label: "Datum", example: "1. Dezember" },
        { key: "HAUSHALT", label: "Haushalt", example: "2 Personen, 3,5 Zimmer" },
        { key: "HELFER", label: "Helfer", example: "vier Freunde und ein Lieferwagen" },
      ],
    },
    {
      id: "wohn-maengel",
      title: "Mängel an die Verwaltung melden",
      category: C,
      tags: ["Mängel", "Vermieter", "Schreiben"],
      description: "Eine sachliche Mängelmeldung mit Frist und Belegen.",
      prompt:
        "Schreibe eine Mängelmeldung an [EMPFÄNGER] für meine Wohnung. Mangel: [MANGEL]. Seit wann: [SEIT]. Was ich bisher getan habe: [BISHER]. Struktur: sachliche Beschreibung, Auswirkung auf die Nutzung, Bitte um Behebung mit angemessener Frist, Hinweis auf beigelegte Fotos, freundlich, aber klar. Kennzeichne, wo rechtliche Schritte eine Fachperson brauchen. Hinweis: keine Rechtsberatung.",
      placeholders: [
        { key: "EMPFÄNGER", label: "Empfänger", example: "die Liegenschaftsverwaltung" },
        { key: "MANGEL", label: "Mangel", example: "Schimmel im Badezimmer an der Aussenwand" },
        { key: "SEIT", label: "Seit wann", example: "drei Wochen" },
        { key: "BISHER", label: "Bisher", example: "regelmässig gelüftet, zweimal angerufen" },
      ],
    },
    {
      id: "wohn-renovation",
      title: "Renovation planen",
      category: C,
      tags: ["Renovation", "Budget", "Handwerker"],
      description: "Reihenfolge, Budget und Fragen an Handwerker für eine Renovation.",
      prompt:
        "Plane die Renovation von [RAUM]. Was gemacht werden soll: [ARBEITEN]. Budget: [BUDGET]. Eigenleistung möglich: [EIGENLEISTUNG]. Liefere: sinnvolle Reihenfolge der Arbeiten mit Begründung, grobe Kostenaufteilung, was ich selbst machen kann und was nicht, zehn Fragen für Handwerker-Offerten, typische Kostenfallen und einen Zeitplan.",
      placeholders: [
        { key: "RAUM", label: "Raum", example: "unserem Badezimmer" },
        { key: "ARBEITEN", label: "Arbeiten", example: "neue Fliesen, Dusche statt Wanne, neue Beleuchtung" },
        { key: "BUDGET", label: "Budget", example: "CHF 15'000" },
        { key: "EIGENLEISTUNG", label: "Eigenleistung", example: "Abbruch und Malerarbeiten" },
      ],
    },
  ],
};
export default collection;
