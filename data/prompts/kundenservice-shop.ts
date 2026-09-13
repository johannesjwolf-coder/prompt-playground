import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Kundenservice & Shop";
const collection: PromptCollection = {
  category: C,
  description: "Antworten auf Kundenanfragen, Reklamationen, Bewertungen und Texte für den Online-Shop.",
  templates: [
    {
      id: "ks-reklamation",
      featured: true,
      title: "Reklamation beantworten",
      category: C,
      tags: ["Reklamation", "Kundenservice", "Deeskalation"],
      description: "Eine verärgerte Kundin ernst nehmen, das Problem lösen, Vertrauen zurückgewinnen.",
      prompt:
        "Beantworte die folgende Reklamation im Namen von [UNTERNEHMEN]. Was wir anbieten können: [LÖSUNG]. Zeige echtes Verständnis in einem Satz, ohne Standardfloskeln; benenne, was schiefgelaufen ist, ohne Schuld abzuwälzen; nenne die Lösung konkret mit Zeitangabe; schliesse mit einer Einladung zum direkten Kontakt. Tonalität: [TONALITÄT], Anrede: Sie. Reklamation:\n\n[REKLAMATION]",
      placeholders: [
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "einem Online-Shop für Outdoor-Ausrüstung" },
        { key: "LÖSUNG", label: "Lösung", example: "Ersatzlieferung innert drei Tagen plus Gutschein" },
        { key: "TONALITÄT", label: "Tonalität", example: "warm, ruhig, verbindlich" },
        { key: "REKLAMATION", label: "Reklamation", example: "(hier einfügen)" },
      ],
    },
    {
      id: "ks-bewertung",
      title: "Auf Online-Bewertungen antworten",
      category: C,
      tags: ["Bewertung", "Google", "Reputation"],
      description: "Antworten auf positive und negative Bewertungen, die andere Leser überzeugen.",
      prompt:
        "Schreibe Antworten auf die folgenden Bewertungen für [UNTERNEHMEN]. Bedenke, dass andere Interessenten mitlesen. Bei Lob: konkret bedanken, etwas Persönliches aufgreifen, kein Werbetext. Bei Kritik: ernst nehmen, kurz erklären, Lösung anbieten, Gespräch ausserhalb der Plattform anbieten. Maximal 80 Wörter pro Antwort, Tonalität: [TONALITÄT]. Bewertungen:\n\n[BEWERTUNGEN]",
      placeholders: [
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "ein Tierpark" },
        { key: "TONALITÄT", label: "Tonalität", example: "herzlich, nicht unterwürfig" },
        { key: "BEWERTUNGEN", label: "Bewertungen", example: "(hier einfügen)" },
      ],
    },
    {
      id: "ks-antwortvorlagen",
      title: "Antwortvorlagen für häufige Anfragen",
      category: C,
      tags: ["Vorlagen", "Support", "Effizienz"],
      description: "Ein Set von Textbausteinen für die häufigsten Kundenanfragen.",
      prompt:
        "Erstelle Antwortvorlagen für den Kundenservice von [UNTERNEHMEN]. Häufige Anfragen: [ANFRAGEN]. Pro Anfrage: Betreff, Antworttext mit Platzhaltern in eckigen Klammern für Name und Details, ein Satz Hinweis, wann die Vorlage nicht passt. Tonalität: [TONALITÄT]. Die Vorlagen sollen persönlich klingen, nicht nach Automat.",
      placeholders: [
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "einen Online-Shop für Fotozubehör" },
        { key: "ANFRAGEN", label: "Häufige Anfragen", example: "Lieferstatus, Rücksendung, Rechnung, Produktberatung" },
        { key: "TONALITÄT", label: "Tonalität", example: "freundlich und lösungsorientiert" },
      ],
    },
    {
      id: "ks-produktkategorie",
      title: "Kategorietext für den Shop",
      category: C,
      tags: ["Shop", "Kategorie", "SEO"],
      description: "Ein Text für eine Shop-Kategorie, der berät und für Suchmaschinen gut lesbar ist.",
      prompt:
        "Schreibe einen Kategorietext für die Shop-Kategorie [KATEGORIE] von [SHOP]. Zielgruppe: [ZIELGRUPPE]. Hauptkeyword: [KEYWORD]. Aufbau: kurze Einleitung, worauf man beim Kauf achten sollte (drei bis fünf Kriterien), für wen welche Variante passt, ein Absatz zu Service und Versand. Maximal 300 Wörter, natürlich lesbar, ohne Keyword-Wiederholungen.",
      placeholders: [
        { key: "KATEGORIE", label: "Kategorie", example: "Teleobjektive" },
        { key: "SHOP", label: "Shop", example: "einem Fotofachhandel" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Hobbyfotografen" },
        { key: "KEYWORD", label: "Keyword", example: "Teleobjektiv kaufen" },
      ],
    },
    {
      id: "ks-versand-email",
      title: "Transaktions-E-Mails für den Shop",
      category: C,
      tags: ["E-Mail", "Bestellung", "Versand"],
      description: "Bestellbestätigung, Versandmitteilung und Nachfrage nach dem Kauf.",
      prompt:
        "Schreibe drei Transaktions-E-Mails für [SHOP]: Bestellbestätigung, Versandmitteilung, Nachfrage sieben Tage nach Lieferung. Jede Mail: Betreff, Text mit Platzhaltern für Name, Bestellnummer und Produkte, ein hilfreicher Hinweis (z. B. Rückgabe, Pflege, Support) und ein dezenter, passender Call-to-Action. Tonalität: [TONALITÄT]. Kurz, klar, keine Werbeflut.",
      placeholders: [
        { key: "SHOP", label: "Shop", example: "einen Shop für Naturfotobücher" },
        { key: "TONALITÄT", label: "Tonalität", example: "persönlich, ruhig" },
      ],
    },
    {
      id: "ks-rueckgabe",
      title: "Rückgabe- und Versandbedingungen verständlich",
      category: C,
      tags: ["AGB", "Rückgabe", "Verständlichkeit"],
      description: "Rechtlich nötige Informationen so schreiben, dass Kunden sie gerne lesen.",
      prompt:
        "Formuliere die Rückgabe- und Versandbedingungen für [SHOP] verständlich. Fakten: [FAKTEN]. Struktur: die drei wichtigsten Punkte zuerst, dann Details als kurze Fragen und Antworten, keine Schachtelsätze, keine Juristensprache. Kennzeichne Stellen, die ich rechtlich prüfen lassen sollte. Hinweis: Das ersetzt keine Rechtsberatung.",
      placeholders: [
        { key: "SHOP", label: "Shop", example: "einen Online-Shop in der Schweiz" },
        { key: "FAKTEN", label: "Fakten", example: "30 Tage Rückgabe, Versand CHF 6.90, gratis ab CHF 80" },
      ],
    },
    {
      id: "ks-chatbot",
      title: "Antworten für einen Website-Chat",
      category: C,
      tags: ["Chat", "FAQ", "Automatisierung"],
      description: "Kurze, freundliche Chat-Antworten und eine Übergabe an Menschen.",
      prompt:
        "Erstelle Chat-Antworten für die Website von [UNTERNEHMEN]. Themen: [THEMEN]. Pro Thema: eine Antwort mit maximal 50 Wörtern, eine Rückfrage, falls Details fehlen, und eine Formulierung für die Übergabe an einen Menschen. Begrüssung und Verabschiedung dazu. Tonalität: [TONALITÄT]. Keine Versprechen, die wir nicht halten können.",
      placeholders: [
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "einen Tierpark" },
        { key: "THEMEN", label: "Themen", example: "Öffnungszeiten, Tickets, Anfahrt, Hunde erlaubt?" },
        { key: "TONALITÄT", label: "Tonalität", example: "locker, hilfsbereit" },
      ],
    },
    {
      id: "ks-kundenumfrage",
      title: "Kundenumfrage entwerfen",
      category: C,
      tags: ["Umfrage", "Feedback", "Fragen"],
      description: "Eine kurze Umfrage, die ehrliche, auswertbare Antworten liefert.",
      prompt:
        "Entwirf eine Kundenumfrage für [UNTERNEHMEN] mit dem Ziel [ZIEL]. Maximal [ANZAHL] Fragen, Mischung aus Skala, Auswahl und einer offenen Frage. Formuliere neutral (keine Suggestivfragen), erkläre pro Frage kurz, was wir daraus lernen, und schreibe eine Einladung mit ehrlicher Zeitangabe und Dank.",
      placeholders: [
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "einen Online-Shop" },
        { key: "ZIEL", label: "Ziel", example: "herausfinden, warum Warenkörbe abgebrochen werden" },
        { key: "ANZAHL", label: "Anzahl Fragen", example: "6" },
      ],
    },
  ],
};
export default collection;
