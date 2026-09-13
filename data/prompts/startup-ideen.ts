import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Startup & Ideen";
const collection: PromptCollection = {
  category: C,
  description: "Von der Idee zum Geschäftsmodell: Ideen finden, Probleme prüfen, MVP, Pitch, Preise, Markt und Wachstum.",
  templates: [
    {
      id: "su-ideen-generator",
      featured: true,
      title: "Startup-Ideen generieren",
      category: C,
      tags: ["Ideen", "Brainstorming", "Startup"],
      description: "Viele Ideen zu einem Bereich, bewertet nach Problemgrösse, Machbarkeit und Vorteil.",
      prompt:
        "Generiere 15 Startup-Ideen im Bereich [BEREICH] für [ZIELGRUPPE]. Meine Stärken und Ressourcen: [STÄRKEN]. Pro Idee: das Problem in einem Satz, die Lösung in einem Satz, wer heute dafür bezahlt und wie, warum jetzt der richtige Zeitpunkt ist. Bewerte jede Idee von 1 bis 5 nach Problemgrösse, Machbarkeit für mich und Verteidigbarkeit. Wähle die drei besten und nenne für jede den ersten Test, der in einer Woche machbar ist.",
      placeholders: [
        { key: "BEREICH", label: "Bereich", example: "KI-Werkzeuge für kleine Unternehmen" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Handwerksbetriebe" },
        { key: "STÄRKEN", label: "Stärken", example: "Webentwicklung, Marketing-Erfahrung, kleines Budget" },
      ],
    },
    {
      id: "su-problem-interviews",
      title: "Problem-Interviews mit Zielkunden",
      category: C,
      tags: ["Interviews", "Validierung", "Kunden"],
      description: "Fragen, die echte Probleme aufdecken, statt Bestätigung für die eigene Idee zu sammeln.",
      prompt:
        "Erstelle einen Leitfaden für Problem-Interviews mit [ZIELGRUPPE] zum Thema [PROBLEMBEREICH]. Meine Hypothese (nicht verraten): [HYPOTHESE]. Zwölf offene Fragen, die nach heutigem Verhalten, Aufwand, Kosten und bisherigen Lösungsversuchen fragen, ohne die Idee zu erwähnen; Nachfrage-Techniken; Warnsignale für höfliche Zustimmung; und eine Auswertungsvorlage, um nach zehn Interviews Muster zu erkennen.",
      placeholders: [
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Inhaber von Fotostudios" },
        { key: "PROBLEMBEREICH", label: "Problembereich", example: "Bildauswahl und Kundenfreigabe" },
        { key: "HYPOTHESE", label: "Hypothese", example: "die Freigabe per E-Mail kostet sie Stunden pro Woche" },
      ],
    },
    {
      id: "su-lean-canvas",
      title: "Geschäftsmodell auf einer Seite (Lean Canvas)",
      category: C,
      tags: ["Lean Canvas", "Geschäftsmodell", "Strategie"],
      description: "Die neun Bausteine eines Geschäftsmodells ausfüllen und die riskantesten Annahmen markieren.",
      prompt:
        "Erstelle ein Lean Canvas für [IDEE]. Zielgruppe: [ZIELGRUPPE]. Fülle alle Felder aus: Problem, Kundensegmente, Alleinstellung, Lösung, Kanäle, Einnahmequellen, Kostenstruktur, Kennzahlen, unfairer Vorteil. Markiere die drei riskantesten Annahmen und schlage für jede einen günstigen Test vor. Sei konkret, keine Allgemeinplätze wie „bessere Nutzererfahrung“.",
      placeholders: [
        { key: "IDEE", label: "Idee", example: "eine Plattform, die aus Ideen fertige KI-Prompts macht" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Selbstständige ohne KI-Erfahrung" },
      ],
    },
    {
      id: "su-mvp",
      title: "MVP definieren: Was bauen wir zuerst?",
      category: C,
      tags: ["MVP", "Umfang", "Priorisierung"],
      description: "Den kleinsten Umfang festlegen, der die wichtigste Annahme testet.",
      prompt:
        "Definiere ein MVP für [IDEE]. Wichtigste Annahme, die wir testen: [ANNAHME]. Zeit bis zum Test: [ZEIT]. Liste alle denkbaren Funktionen, sortiere in „muss“, „später“, „nie“, begründe jede Muss-Funktion mit der Annahme, beschreibe den Nutzerweg des MVP in fünf Schritten, was wir messen und welcher Wert Erfolg bedeutet. Schlage auch einen Test ohne Code vor (z. B. Landingpage oder manuelle Dienstleistung), falls er reicht.",
      placeholders: [
        { key: "IDEE", label: "Idee", example: "ein KI-Assistent für Bewerbungsschreiben" },
        { key: "ANNAHME", label: "Annahme", example: "Nutzer zahlen 10 Franken für ein fertiges Schreiben" },
        { key: "ZEIT", label: "Zeit", example: "vier Wochen" },
      ],
    },
    {
      id: "su-pitch-deck",
      title: "Pitch-Deck strukturieren",
      category: C,
      tags: ["Pitch", "Investoren", "Präsentation"],
      description: "Zehn bis zwölf Folien mit je einer Kernaussage und den Zahlen, die Investoren erwarten.",
      prompt:
        "Strukturiere ein Pitch-Deck für [STARTUP] für [PUBLIKUM]. Stand heute: [STAND]. Bitte um: [ASK]. Erstelle 10 bis 12 Folien mit Titel als Aussage-Satz, Inhalt in Stichworten, welche Zahl oder welcher Beweis auf die Folie gehört, und Sprechernotizen in zwei Sätzen. Nenne am Ende die fünf Fragen, die Investoren mit hoher Wahrscheinlichkeit stellen, mit kurzen Antworten.",
      placeholders: [
        { key: "STARTUP", label: "Startup", example: "eine Prompt-Plattform für KMU" },
        { key: "PUBLIKUM", label: "Publikum", example: "Business Angels" },
        { key: "STAND", label: "Stand", example: "300 Nutzer, erste zahlende Kunden" },
        { key: "ASK", label: "Bitte", example: "CHF 300'000 für 12 Monate" },
      ],
    },
    {
      id: "su-wettbewerb",
      title: "Wettbewerbsanalyse",
      category: C,
      tags: ["Wettbewerb", "Markt", "Positionierung"],
      description: "Konkurrenten vergleichen und eine glaubwürdige Positionierung ableiten.",
      prompt:
        "Analysiere den Wettbewerb für [IDEE] im Markt [MARKT]. Bekannte Anbieter: [ANBIETER]. Erstelle eine Vergleichstabelle (Zielgruppe, Preis, Stärken, Schwächen, Positionierung), nenne indirekte Alternativen (auch „nichts tun“ oder Excel), finde eine Lücke, die wir glaubwürdig besetzen können, formuliere unsere Positionierung in einem Satz und nenne, was uns die Wettbewerber in einem Jahr nachmachen könnten. Kennzeichne, wo du unsicher bist und was ich selbst prüfen muss.",
      placeholders: [
        { key: "IDEE", label: "Idee", example: "eine Prompt-Bibliothek mit KI-Assistent" },
        { key: "MARKT", label: "Markt", example: "DACH-Region" },
        { key: "ANBIETER", label: "Anbieter", example: "PromptBase, God of Prompt, Notion-Vorlagen" },
      ],
    },
    {
      id: "su-preismodell",
      title: "Preismodell entwickeln",
      category: C,
      tags: ["Preise", "Monetarisierung", "Pakete"],
      description: "Preismodelle vergleichen, Pakete schnüren und die Zahlungsbereitschaft testen.",
      prompt:
        "Entwickle ein Preismodell für [PRODUKT]. Zielgruppe: [ZIELGRUPPE]. Kosten pro Nutzer grob: [KOSTEN]. Vergleiche Modelle (Abo, Nutzung, Einmalkauf, Freemium) mit Vor- und Nachteilen für unseren Fall, schlage drei Pakete mit Preis und Inhalt vor, begründe den Ankerpreis, und beschreibe zwei einfache Tests der Zahlungsbereitschaft vor dem Launch. Nenne die Falle, in die Startups bei diesem Produkttyp am häufigsten tappen.",
      placeholders: [
        { key: "PRODUKT", label: "Produkt", example: "einen KI-Prompt-Assistenten als Web-App" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Selbstständige und kleine Agenturen" },
        { key: "KOSTEN", label: "Kosten pro Nutzer", example: "CHF 1.50 pro Monat" },
      ],
    },
    {
      id: "su-name",
      title: "Namen für ein Startup oder Produkt",
      category: C,
      tags: ["Name", "Marke", "Domain"],
      description: "Namensideen mit Prüfkriterien: aussprechbar, merkbar, frei, international.",
      prompt:
        "Finde 20 Namen für [PRODUKT]. Positionierung: [POSITIONIERUNG]. Zielgruppe: [ZIELGRUPPE]. Sprache: [SPRACHE]. Mische beschreibende, erfundene und metaphorische Namen, maximal drei Silben, gut aussprechbar in Deutsch und Englisch, ohne negative Bedeutung in gängigen Sprachen. Pro Name: ein Satz Begründung, Vorschlag für die Domain-Endung. Nenne deine fünf Favoriten und was ich vor der Entscheidung prüfen muss (Marke, Domain, Social-Handles).",
      placeholders: [
        { key: "PRODUKT", label: "Produkt", example: "einen KI-Assistenten, der Prompts schreibt" },
        { key: "POSITIONIERUNG", label: "Positionierung", example: "weise, ruhig, hilfsbereit" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Menschen ohne KI-Erfahrung" },
        { key: "SPRACHE", label: "Sprache", example: "Deutsch mit internationalem Klang" },
      ],
    },
    {
      id: "su-go-to-market",
      title: "Markteintritt planen (Go-to-Market)",
      category: C,
      tags: ["Go-to-Market", "Launch", "Wachstum"],
      description: "Die ersten hundert Kunden: Kanäle, Botschaft, Reihenfolge, Budget.",
      prompt:
        "Plane den Markteintritt für [PRODUKT]. Erste Zielgruppe: [ZIELGRUPPE]. Budget für 3 Monate: [BUDGET]. Ziel: [ZIEL]. Wähle drei Kanäle mit Begründung, formuliere die Kernbotschaft pro Kanal, beschreibe einen 12-Wochen-Plan mit Meilensteinen, welche Kennzahlen wir wöchentlich anschauen, und ab wann wir einen Kanal abbrechen. Nenne eine unkonventionelle Taktik, die zu unserer Zielgruppe passt.",
      placeholders: [
        { key: "PRODUKT", label: "Produkt", example: "eine Web-App für KI-Prompts" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Marketing-Freelancer in der Schweiz" },
        { key: "BUDGET", label: "Budget", example: "CHF 3'000" },
        { key: "ZIEL", label: "Ziel", example: "100 zahlende Nutzer" },
      ],
    },
    {
      id: "su-investor-update",
      title: "Investoren- oder Unterstützer-Update",
      category: C,
      tags: ["Update", "Investoren", "Kommunikation"],
      description: "Ein monatliches Update, das ehrlich informiert und um konkrete Hilfe bittet.",
      prompt:
        "Schreibe ein monatliches Update für [EMPFÄNGER] von [STARTUP]. Zahlen: [ZAHLEN]. Höhepunkte: [HÖHEPUNKTE]. Probleme: [PROBLEME]. Struktur: Kurzfassung in drei Sätzen, Kennzahlen mit Vergleich zum Vormonat, was gut lief, was nicht und was wir daraus lernen, Fokus für nächsten Monat, konkrete Bitten um Hilfe (Kontakte, Feedback). Ehrlich, ohne Schönfärberei, maximal 350 Wörter.",
      placeholders: [
        { key: "EMPFÄNGER", label: "Empfänger", example: "unsere Angel-Investoren" },
        { key: "STARTUP", label: "Startup", example: "Weise Eule" },
        { key: "ZAHLEN", label: "Zahlen", example: "1'200 Nutzer, 45 zahlend, MRR CHF 900" },
        { key: "HÖHEPUNKTE", label: "Höhepunkte", example: "Launch der Vorlagen-Bibliothek" },
        { key: "PROBLEME", label: "Probleme", example: "Conversion von gratis zu bezahlt zu niedrig" },
      ],
    },
    {
      id: "su-finanzplan",
      title: "Grober Finanzplan für 12 Monate",
      category: C,
      tags: ["Finanzplan", "Budget", "Runway"],
      description: "Ein einfacher Plan mit Kosten, Einnahmen und Reichweite des Geldes.",
      prompt:
        "Erstelle einen groben Finanzplan für 12 Monate für [STARTUP]. Startkapital: [KAPITAL]. Monatliche Fixkosten: [FIXKOSTEN]. Preismodell: [PREIS]. Erwartetes Wachstum: [WACHSTUM]. Zeige Monat für Monat: Kosten, Einnahmen, Kontostand; berechne, wann das Geld ausgeht (Runway), rechne ein pessimistisches und ein optimistisches Szenario und nenne die zwei Annahmen, die den grössten Einfluss haben. Hinweis: grobe Orientierung, keine Finanzberatung.",
      placeholders: [
        { key: "STARTUP", label: "Startup", example: "eine KI-Prompt-Plattform" },
        { key: "KAPITAL", label: "Startkapital", example: "CHF 40'000" },
        { key: "FIXKOSTEN", label: "Fixkosten", example: "CHF 4'500 (Löhne, Hosting, Tools)" },
        { key: "PREIS", label: "Preismodell", example: "CHF 12 pro Monat" },
        { key: "WACHSTUM", label: "Wachstum", example: "20 neue zahlende Nutzer pro Monat" },
      ],
    },
    {
      id: "su-landingpage-test",
      title: "Idee mit einer Landingpage testen",
      category: C,
      tags: ["Test", "Landingpage", "Validierung"],
      description: "Eine Test-Landingpage mit Botschaft, Call-to-Action und klaren Erfolgskriterien.",
      prompt:
        "Entwirf eine Landingpage, um die Nachfrage für [IDEE] zu testen, bevor wir bauen. Zielgruppe: [ZIELGRUPPE]. Schreibe Headline, Subline, drei Nutzenpunkte, einen ehrlichen Hinweis, dass das Produkt in Entwicklung ist, und einen Call-to-Action ([CTA]). Definiere, wie wir Besucher bekommen (zwei Kanäle, kleines Budget), welche Kennzahl Erfolg bedeutet (mit Zielwert) und was wir bei Misserfolg ändern oder lernen.",
      placeholders: [
        { key: "IDEE", label: "Idee", example: "ein KI-Assistent, der Bewerbungsgespräche simuliert" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Berufseinsteiger" },
        { key: "CTA", label: "Call-to-Action", example: "Auf die Warteliste" },
      ],
    },
  ],
};
export default collection;
