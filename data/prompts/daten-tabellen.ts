import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Daten & Tabellen";
const collection: PromptCollection = {
  category: C,
  description: "Excel- und Sheets-Formeln, Datenbereinigung, Auswertungen und Diagramme – verständlich erklärt.",
  templates: [
    {
      id: "daten-formel",
      featured: true,
      title: "Excel- oder Sheets-Formel bauen",
      category: C,
      tags: ["Excel", "Google Sheets", "Formel"],
      description: "Eine Formel aus einer Beschreibung, mit Erklärung und Fehlerfällen.",
      prompt:
        "Erstelle eine Formel für [PROGRAMM]. Meine Tabelle: [STRUKTUR]. Ich möchte: [ZIEL]. Liefere die Formel, erkläre jeden Teil in einem Satz, nenne, was passiert, wenn Zellen leer oder Text statt Zahl sind, und eine Variante, die auf einen ganzen Bereich kopiert werden kann.",
      placeholders: [
        { key: "PROGRAMM", label: "Programm", example: "Google Sheets" },
        { key: "STRUKTUR", label: "Tabellenstruktur", example: "Spalte A Datum, B Kategorie, C Betrag" },
        { key: "ZIEL", label: "Ziel", example: "Summe pro Kategorie für den aktuellen Monat" },
      ],
    },
    {
      id: "daten-bereinigen",
      title: "Daten bereinigen",
      category: C,
      tags: ["Bereinigung", "Duplikate", "Formatierung"],
      description: "Schritte und Formeln, um unsaubere Listen konsistent zu machen.",
      prompt:
        "Ich habe eine Liste in [PROGRAMM] mit folgenden Problemen: [PROBLEME]. Beispielzeilen:\n\n[BEISPIEL]\n\nGib mir eine Schritt-für-Schritt-Anleitung, um die Daten zu bereinigen (Duplikate, Leerzeichen, Gross-/Kleinschreibung, Formate), mit den nötigen Formeln oder Funktionen, und wie ich prüfe, dass nichts verloren gegangen ist.",
      placeholders: [
        { key: "PROGRAMM", label: "Programm", example: "Excel" },
        { key: "PROBLEME", label: "Probleme", example: "doppelte E-Mail-Adressen, uneinheitliche Datumsformate" },
        { key: "BEISPIEL", label: "Beispielzeilen", example: "(hier einfügen)" },
      ],
    },
    {
      id: "daten-auswertung",
      title: "Auswertung interpretieren",
      category: C,
      tags: ["Analyse", "Interpretation", "Kennzahlen"],
      description: "Zahlen in Erkenntnisse übersetzen: Was sagen die Daten, was nicht?",
      prompt:
        "Interpretiere die folgenden Daten zu [THEMA] für [ZIELGRUPPE]. Frage, die ich beantworten will: [FRAGE]. Liefere: die drei wichtigsten Beobachtungen mit Zahlen, mögliche Ursachen (als Hypothesen gekennzeichnet), was die Daten nicht beantworten können, und welche zusätzliche Information am meisten helfen würde. Daten:\n\n[DATEN]",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Website-Besuche der letzten drei Monate" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "die Geschäftsleitung" },
        { key: "FRAGE", label: "Frage", example: "Warum sinken die Anfragen trotz mehr Besuchern?" },
        { key: "DATEN", label: "Daten", example: "(hier als Tabelle oder CSV einfügen)" },
      ],
    },
    {
      id: "daten-diagramm",
      title: "Passendes Diagramm wählen",
      category: C,
      tags: ["Diagramm", "Visualisierung", "Präsentation"],
      description: "Welches Diagramm zeigt die Aussage am klarsten, und wie beschriftet man es?",
      prompt:
        "Ich möchte folgende Aussage mit einem Diagramm zeigen: [AUSSAGE]. Meine Daten: [DATEN]. Zielgruppe: [ZIELGRUPPE]. Empfiehl den Diagrammtyp und begründe ihn, schlage Titel (als Aussage-Satz), Achsenbeschriftungen, Farben und Hervorhebung vor, und nenne zwei Diagrammtypen, die hier irreführend wären.",
      placeholders: [
        { key: "AUSSAGE", label: "Aussage", example: "Die Löwenpopulation ist seit 1990 um die Hälfte gesunken" },
        { key: "DATEN", label: "Daten", example: "Jahreswerte 1990 bis 2025" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Website-Besucher" },
      ],
    },
    {
      id: "daten-dashboard",
      title: "Kennzahlen und Dashboard planen",
      category: C,
      tags: ["KPI", "Dashboard", "Kennzahlen"],
      description: "Die wenigen Kennzahlen, die wirklich zählen, und wie man sie darstellt.",
      prompt:
        "Plane ein Dashboard für [BEREICH] von [UNTERNEHMEN]. Ziel: [ZIEL]. Schlage maximal [ANZAHL] Kennzahlen vor, pro Kennzahl: Definition, Datenquelle, Zielwert oder Vergleich, wie oft aktualisiert, und welche Entscheidung sie auslöst. Beschreibe die Anordnung auf einem Bildschirm und nenne Kennzahlen, die verlockend, aber irreführend wären.",
      placeholders: [
        { key: "BEREICH", label: "Bereich", example: "Online-Marketing" },
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "einem Tierpark" },
        { key: "ZIEL", label: "Ziel", example: "mehr Online-Ticketverkäufe" },
        { key: "ANZAHL", label: "Anzahl Kennzahlen", example: "6" },
      ],
    },
    {
      id: "daten-umfrage-auswerten",
      title: "Umfrage auswerten",
      category: C,
      tags: ["Umfrage", "Auswertung", "Bericht"],
      description: "Aus Umfrageantworten einen kurzen Bericht mit Zahlen und Zitaten.",
      prompt:
        "Werte die folgende Umfrage zu [THEMA] aus ([ANZAHL] Antworten). Erstelle einen Kurzbericht: Kernergebnis in zwei Sätzen, Ergebnisse pro Frage mit Prozentwerten, Muster in den offenen Antworten mit je einem Zitat, Einschränkungen der Umfrage (Stichprobe, Formulierungen) und drei Empfehlungen. Antworten:\n\n[ANTWORTEN]",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Zufriedenheit mit unserer Website" },
        { key: "ANZAHL", label: "Anzahl Antworten", example: "84" },
        { key: "ANTWORTEN", label: "Antworten", example: "(hier einfügen)" },
      ],
    },
    {
      id: "daten-struktur",
      title: "Tabelle sinnvoll aufbauen",
      category: C,
      tags: ["Struktur", "Tabelle", "Vorlage"],
      description: "Wie eine Tabelle aufgebaut sein sollte, damit sie später auswertbar bleibt.",
      prompt:
        "Ich möchte in [PROGRAMM] [ZWECK] erfassen. Entwirf die Tabellenstruktur: Spalten mit Name, Typ und Beispielwert, welche Spalten Auswahllisten bekommen, wie ich Eingabefehler verhindere (Validierung), und welche Auswertungen später möglich sind. Nenne die drei häufigsten Fehler beim Aufbau solcher Tabellen.",
      placeholders: [
        { key: "PROGRAMM", label: "Programm", example: "Google Sheets" },
        { key: "ZWECK", label: "Zweck", example: "Tierbeobachtungen mit Datum, Ort, Art, Anzahl" },
      ],
    },
    {
      id: "daten-erklaeren",
      title: "Statistik-Begriff verständlich erklären",
      category: C,
      tags: ["Statistik", "Erklärung", "Verständnis"],
      description: "Einen Statistik- oder Datenbegriff mit Alltagsbeispiel verstehen.",
      prompt:
        "Erkläre mir [BEGRIFF] so, dass ich es [ZIELGRUPPE] weitererklären könnte. Nutze ein Beispiel aus [KONTEXT], zeige eine typische Fehlinterpretation und wie man sie vermeidet, und gib mir einen Satz, mit dem ich den Begriff in einem Bericht korrekt verwende.",
      placeholders: [
        { key: "BEGRIFF", label: "Begriff", example: "Median versus Durchschnitt" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "meinem Team ohne Statistikkenntnisse" },
        { key: "KONTEXT", label: "Kontext", example: "Besucherzahlen eines Tierparks" },
      ],
    },
  ],
};
export default collection;
