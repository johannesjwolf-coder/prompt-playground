import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Texte & Content";
const collection: PromptCollection = {
  category: C,
  description: "Artikel, Newsletter, Produkttexte und Überarbeitungen – klar, konkret und in der richtigen Tonalität.",
  templates: [
    {
      id: "txt-blogartikel",
      featured: true,
      title: "Blogartikel mit Struktur und Tiefe",
      category: C,
      tags: ["Blog", "Artikel", "SEO"],
      description: "Ein vollständiger Artikel mit Gliederung, Einstieg, Zwischenüberschriften und Fazit.",
      prompt:
        "Schreibe einen Blogartikel über [THEMA] für [ZIELGRUPPE], Länge etwa [LÄNGE] Wörter. Ziel des Artikels: [ZIEL]. Beginne mit einem Einstieg, der ein konkretes Problem oder eine Szene beschreibt, gliedere mit aussagekräftigen Zwischenüberschriften, nutze Beispiele und Zahlen (kennzeichne, wo ich Quellen prüfen muss) und schliesse mit einem Fazit und einer Handlungsempfehlung. Tonalität: [TONALITÄT]. Kein Füllmaterial, keine Wiederholungen.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "wie man Wildtiere fotografiert, ohne sie zu stören" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Hobbyfotografen" },
        { key: "LÄNGE", label: "Länge in Wörtern", example: "900" },
        { key: "ZIEL", label: "Ziel", example: "Vertrauen in unsere Fotoreisen aufbauen" },
        { key: "TONALITÄT", label: "Tonalität", example: "sachlich, freundlich" },
      ],
    },
    {
      id: "txt-newsletter",
      title: "Newsletter, den man gerne liest",
      category: C,
      tags: ["Newsletter", "E-Mail", "Betreff"],
      description: "Betreffzeilen, Aufbau und Text für eine Newsletter-Ausgabe.",
      prompt:
        "Schreibe eine Newsletter-Ausgabe für [ABSENDER] an [ZIELGRUPPE]. Inhalt dieser Ausgabe: [INHALT]. Liefere drei Betreffzeilen (maximal 50 Zeichen), einen Vorschautext, eine persönliche Einleitung in drei Sätzen, den Hauptteil mit klaren Abschnitten und einen einzigen Call-to-Action. Länge: gut lesbar in zwei Minuten. Tonalität: [TONALITÄT].",
      placeholders: [
        { key: "ABSENDER", label: "Absender", example: "ein Naturschutzverein" },
        { key: "ZIELGRUPPE", label: "Empfänger", example: "Mitglieder und Spender" },
        { key: "INHALT", label: "Inhalt", example: "neue Löwen-Webcam, Sommerfest, Spendenaufruf" },
        { key: "TONALITÄT", label: "Tonalität", example: "herzlich, direkt" },
      ],
    },
    {
      id: "txt-produkttext",
      title: "Produktbeschreibung, die verkauft",
      category: C,
      tags: ["Produkt", "Shop", "Nutzen"],
      description: "Produkttext mit Nutzen statt Feature-Liste, plus Kurzversion für Übersichten.",
      prompt:
        "Schreibe eine Produktbeschreibung für [PRODUKT]. Zielgruppe: [ZIELGRUPPE]. Wichtigste Eigenschaften: [EIGENSCHAFTEN]. Beginne mit dem grössten Nutzen in einem Satz, beschreibe dann das Erlebnis mit dem Produkt, übersetze jede Eigenschaft in einen konkreten Vorteil, nenne ehrlich, für wen es nicht geeignet ist, und schliesse mit einem Call-to-Action. Ergänze eine Kurzversion mit maximal 40 Wörtern und fünf Stichpunkte für die technische Übersicht.",
      placeholders: [
        { key: "PRODUKT", label: "Produkt", example: "ein leises Teleobjektiv für Tierfotografie" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "ambitionierte Hobbyfotografen" },
        { key: "EIGENSCHAFTEN", label: "Eigenschaften", example: "400 mm, Bildstabilisator, wetterfest, 1,2 kg" },
      ],
    },
    {
      id: "txt-ueberarbeiten",
      title: "Text überarbeiten und straffen",
      category: C,
      tags: ["Lektorat", "Kürzen", "Klarheit"],
      description: "Einen bestehenden Text klarer, kürzer und lesbarer machen, ohne den Inhalt zu verändern.",
      prompt:
        "Überarbeite den folgenden Text für [ZIELGRUPPE]. Ziel: klarer, kürzer, aktiver. Kürze um etwa [PROZENT] Prozent, entferne Füllwörter und Wiederholungen, löse Schachtelsätze auf, behalte alle Fakten und die Tonalität bei. Zeige mir danach in drei Punkten, was du geändert hast und warum. Text:\n\n[TEXT]",
      placeholders: [
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Website-Besucher" },
        { key: "PROZENT", label: "Kürzung in Prozent", example: "30" },
        { key: "TEXT", label: "Text", example: "(hier einfügen)" },
      ],
    },
    {
      id: "txt-tonalitaet",
      title: "Tonalität und Sprachregeln festlegen",
      category: C,
      tags: ["Tonalität", "Styleguide", "Marke"],
      description: "Ein kurzer Sprach-Leitfaden, damit alle Texte wie aus einem Guss klingen.",
      prompt:
        "Erstelle einen Sprach-Leitfaden für [MARKE]. Wir sind: [BESCHREIBUNG]. Zielgruppe: [ZIELGRUPPE]. Lege fest: drei Adjektive für die Tonalität mit je einem Beispielsatz, Du oder Sie, Umgang mit Fachbegriffen, Wörter, die wir nutzen, und Wörter, die wir vermeiden, Regeln für Überschriften und Buttons, und je ein Vorher-Nachher-Beispiel für eine Website-Überschrift, eine E-Mail und einen Social-Media-Post.",
      placeholders: [
        { key: "MARKE", label: "Marke", example: "eine Safari-Lodge" },
        { key: "BESCHREIBUNG", label: "Beschreibung", example: "familiengeführt, naturnah, ohne Luxus-Klischees" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Paare und Familien aus Europa" },
      ],
    },
    {
      id: "txt-headlines",
      title: "20 Headline-Varianten",
      category: C,
      tags: ["Headlines", "Varianten", "Test"],
      description: "Viele Überschriften-Varianten nach unterschiedlichen Mustern, um die beste zu finden.",
      prompt:
        "Schreibe 20 Headline-Varianten für [KONTEXT] zum Thema [THEMA]. Zielgruppe: [ZIELGRUPPE]. Nutze verschiedene Muster: Nutzenversprechen, Frage, Zahl, Gegensatz, Bild, Neugier ohne Clickbait. Maximal 8 Wörter pro Headline. Markiere deine drei Favoriten und begründe kurz, warum sie funktionieren.",
      placeholders: [
        { key: "KONTEXT", label: "Kontext", example: "den Hero-Bereich einer Website" },
        { key: "THEMA", label: "Thema", example: "Löwen hautnah erleben" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Reisende mit Fernweh" },
      ],
    },
    {
      id: "txt-pressemitteilung",
      title: "Pressemitteilung",
      category: C,
      tags: ["Presse", "PR", "Nachricht"],
      description: "Eine klassische Pressemitteilung mit allem, was Redaktionen brauchen.",
      prompt:
        "Schreibe eine Pressemitteilung über [ANLASS] von [ABSENDER]. Die wichtigsten Fakten: [FAKTEN]. Aufbau: Überschrift, Unterzeile, Ort und Datum, Kernaussage im ersten Absatz (wer, was, wann, wo, warum), Hintergrund, ein Zitat von [ZITATGEBER], Informationen über den Absender und Pressekontakt als Platzhalter. Sachlich, ohne Werbesprache, maximal 350 Wörter.",
      placeholders: [
        { key: "ANLASS", label: "Anlass", example: "die Eröffnung einer Löwen-Webcam" },
        { key: "ABSENDER", label: "Absender", example: "dem Tierpark Bergwald" },
        { key: "FAKTEN", label: "Fakten", example: "Start am 1. Mai, rund um die Uhr, kostenlos" },
        { key: "ZITATGEBER", label: "Zitatgeber", example: "der Direktorin" },
      ],
    },
    {
      id: "txt-uebersetzung",
      title: "Übersetzen mit Stilanpassung",
      category: C,
      tags: ["Übersetzung", "Lokalisierung", "Sprache"],
      description: "Eine Übersetzung, die sich in der Zielsprache natürlich liest und kulturell passt.",
      prompt:
        "Übersetze den folgenden Text von [AUSGANGSSPRACHE] nach [ZIELSPRACHE] für [ZIELGRUPPE]. Übertrage Sinn und Tonalität, nicht Wort für Wort; passe Redewendungen, Beispiele und Anrede an die Zielkultur an. Liste danach die Stellen auf, an denen du frei übersetzt hast, und warum. Text:\n\n[TEXT]",
      placeholders: [
        { key: "AUSGANGSSPRACHE", label: "Ausgangssprache", example: "Deutsch" },
        { key: "ZIELSPRACHE", label: "Zielsprache", example: "Englisch" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "internationale Reisende" },
        { key: "TEXT", label: "Text", example: "(hier einfügen)" },
      ],
    },
    {
      id: "txt-microcopy",
      title: "Microcopy für Buttons, Formulare und Hinweise",
      category: C,
      tags: ["Microcopy", "UX-Text", "Interface"],
      description: "Kleine Texte mit grosser Wirkung: Buttons, Fehlermeldungen, leere Zustände, Bestätigungen.",
      prompt:
        "Schreibe die Microcopy für [PRODUKT ODER SEITE]. Tonalität: [TONALITÄT]. Ich brauche: Button-Texte für die wichtigsten Aktionen ([AKTIONEN]), Fehlermeldungen für Formularfelder, die sagen, wie man es richtig macht, Texte für leere Zustände, Lade- und Erfolgsmeldungen und einen Hinweistext zum Datenschutz in einem Satz. Kurz, freundlich, ohne Ausrufezeichen-Inflation.",
      placeholders: [
        { key: "PRODUKT ODER SEITE", label: "Produkt oder Seite", example: "ein Ticketshop für einen Tierpark" },
        { key: "TONALITÄT", label: "Tonalität", example: "freundlich und klar" },
        { key: "AKTIONEN", label: "Aktionen", example: "Ticket kaufen, Warenkorb ansehen, Konto erstellen" },
      ],
    },
    {
      id: "txt-zusammenfassung",
      title: "Langen Text zusammenfassen",
      category: C,
      tags: ["Zusammenfassung", "Kernaussagen", "Briefing"],
      description: "Aus einem langen Dokument die Kernaussagen und Handlungspunkte ziehen.",
      prompt:
        "Fasse den folgenden Text für [ZIELGRUPPE] zusammen. Liefere: die Kernaussage in einem Satz, die fünf wichtigsten Punkte, offene Fragen oder Widersprüche, und konkrete nächste Schritte, falls der Text welche nahelegt. Maximal [LÄNGE] Wörter. Text:\n\n[TEXT]",
      placeholders: [
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "eine Geschäftsleitung ohne Fachwissen" },
        { key: "LÄNGE", label: "Maximale Länge", example: "200" },
        { key: "TEXT", label: "Text", example: "(hier einfügen)" },
      ],
    },
  ],
};
export default collection;
