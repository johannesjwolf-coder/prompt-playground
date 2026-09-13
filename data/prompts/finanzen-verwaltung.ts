import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Finanzen & Verwaltung";
const collection: PromptCollection = {
  category: C,
  description: "Budget, Rechnungen, Verträge und Behördenpost verstehen und ordnen – als Orientierung, nicht als Rechts- oder Finanzberatung.",
  templates: [
    {
      id: "fin-budget",
      featured: true,
      title: "Monatsbudget aufstellen",
      category: C,
      tags: ["Budget", "Haushalt", "Sparen"],
      description: "Einnahmen und Ausgaben ordnen, Sparpotenzial finden, ein einfaches System vorschlagen.",
      prompt:
        "Hilf mir, ein Monatsbudget aufzustellen. Einnahmen: [EINNAHMEN]. Fixe Ausgaben: [FIXKOSTEN]. Variable Ausgaben (geschätzt): [VARIABEL]. Sparziel: [SPARZIEL]. Erstelle eine übersichtliche Tabelle, zeige, wie viel frei bleibt, nenne die drei Posten mit dem grössten Sparpotenzial, und schlage ein einfaches System vor (z. B. feste Töpfe), das ich mit wenig Aufwand durchhalte. Hinweis: allgemeine Orientierung, keine Finanzberatung.",
      placeholders: [
        { key: "EINNAHMEN", label: "Einnahmen", example: "CHF 5'800 netto" },
        { key: "FIXKOSTEN", label: "Fixkosten", example: "Miete 1'900, Krankenkasse 420, Abos 120" },
        { key: "VARIABEL", label: "Variable Ausgaben", example: "Essen 800, Freizeit 400, Mobilität 250" },
        { key: "SPARZIEL", label: "Sparziel", example: "CHF 10'000 in zwei Jahren" },
      ],
    },
    {
      id: "fin-rechnung",
      title: "Rechnung oder Offerte korrekt formulieren",
      category: C,
      tags: ["Rechnung", "Selbstständig", "Vorlage"],
      description: "Eine vollständige Rechnung mit allen Pflichtangaben und freundlichem Ton.",
      prompt:
        "Erstelle den Text einer Rechnung von [ABSENDER] an [KUNDE] für [LEISTUNG]. Betrag: [BETRAG]. Land: [LAND]. Enthalte alle üblichen Pflichtangaben (Rechnungsnummer, Datum, Leistungszeitraum, Steuerhinweis als Platzhalter, Zahlungsfrist, Zahlungsangaben) und einen kurzen, freundlichen Begleittext für die E-Mail. Kennzeichne, welche Angaben ich rechtlich prüfen sollte. Hinweis: keine Rechts- oder Steuerberatung.",
      placeholders: [
        { key: "ABSENDER", label: "Absender", example: "einer selbstständigen Fotografin" },
        { key: "KUNDE", label: "Kunde", example: "einen Tierpark" },
        { key: "LEISTUNG", label: "Leistung", example: "Fotoshooting und Bildbearbeitung" },
        { key: "BETRAG", label: "Betrag", example: "CHF 1'800" },
        { key: "LAND", label: "Land", example: "Schweiz" },
      ],
    },
    {
      id: "fin-vertrag-verstehen",
      title: "Vertrag in einfacher Sprache verstehen",
      category: C,
      tags: ["Vertrag", "Verständnis", "Risiken"],
      description: "Einen Vertragstext zusammenfassen, Risiken markieren und Fragen für die Beratung vorbereiten.",
      prompt:
        "Erkläre mir den folgenden Vertrag in einfacher Sprache. Meine Rolle: [ROLLE]. Fasse zusammen: Was verpflichte ich mich zu tun, was die andere Seite, Laufzeit und Kündigung, Kosten, Haftung. Markiere Klauseln, die für mich nachteilig oder ungewöhnlich sein könnten, und formuliere fünf Fragen, die ich einer Fachperson stellen sollte. Hinweis: Das ist keine Rechtsberatung. Vertrag:\n\n[VERTRAG]",
      placeholders: [
        { key: "ROLLE", label: "Meine Rolle", example: "Auftragnehmerin" },
        { key: "VERTRAG", label: "Vertrag", example: "(hier einfügen)" },
      ],
    },
    {
      id: "fin-behoerdenbrief",
      title: "Behördenbrief verstehen und beantworten",
      category: C,
      tags: ["Behörde", "Brief", "Antwort"],
      description: "Amtsdeutsch übersetzen, Fristen erkennen, eine passende Antwort formulieren.",
      prompt:
        "Ich habe folgenden Brief von [BEHÖRDE] erhalten. Erkläre mir in einfacher Sprache, was verlangt wird, welche Fristen gelten und was passiert, wenn ich nicht reagiere. Formuliere dann eine sachliche Antwort für meine Situation: [SITUATION]. Kennzeichne, wo ich Belege beilegen sollte. Hinweis: keine Rechtsberatung. Brief:\n\n[BRIEF]",
      placeholders: [
        { key: "BEHÖRDE", label: "Behörde", example: "dem Steueramt" },
        { key: "SITUATION", label: "Meine Situation", example: "ich brauche eine Fristverlängerung um vier Wochen" },
        { key: "BRIEF", label: "Brief", example: "(hier einfügen)" },
      ],
    },
    {
      id: "fin-angebote-vergleichen",
      title: "Angebote vergleichen (Versicherung, Abo, Handwerker)",
      category: C,
      tags: ["Vergleich", "Angebote", "Entscheidung"],
      description: "Mehrere Angebote strukturiert vergleichen und die richtigen Rückfragen stellen.",
      prompt:
        "Vergleiche die folgenden Angebote für [LEISTUNG]. Was mir wichtig ist: [KRITERIEN]. Erstelle eine Vergleichstabelle, rechne die Gesamtkosten über [ZEITRAUM] aus, nenne versteckte Kosten oder Einschränkungen, die ich prüfen sollte, und formuliere pro Anbieter zwei Rückfragen. Gib eine Empfehlung mit Begründung. Angebote:\n\n[ANGEBOTE]",
      placeholders: [
        { key: "LEISTUNG", label: "Leistung", example: "eine Haftpflichtversicherung" },
        { key: "KRITERIEN", label: "Kriterien", example: "Preis, Deckungssumme, Kündigungsfrist" },
        { key: "ZEITRAUM", label: "Zeitraum", example: "drei Jahre" },
        { key: "ANGEBOTE", label: "Angebote", example: "(hier einfügen)" },
      ],
    },
    {
      id: "fin-sparziel",
      title: "Sparziel planen",
      category: C,
      tags: ["Sparen", "Ziel", "Plan"],
      description: "Einen realistischen Sparplan mit Monatsbetrag und Zwischenzielen erstellen.",
      prompt:
        "Ich möchte [BETRAG] bis [FRIST] sparen für [ZWECK]. Ich kann monatlich etwa [MONATLICH] zurücklegen. Rechne aus, ob das reicht, schlage Anpassungen vor (mehr Zeit, kleinerer Betrag, Einmalbeiträge), nenne drei Alltagsstellschrauben, die den Betrag erhöhen, und erstelle Zwischenziele mit Terminen. Hinweis: allgemeine Orientierung, keine Anlageberatung.",
      placeholders: [
        { key: "BETRAG", label: "Betrag", example: "CHF 6'000" },
        { key: "FRIST", label: "Frist", example: "in 18 Monaten" },
        { key: "ZWECK", label: "Zweck", example: "eine Safari-Reise" },
        { key: "MONATLICH", label: "Monatlich", example: "CHF 250" },
      ],
    },
  ],
};
export default collection;
