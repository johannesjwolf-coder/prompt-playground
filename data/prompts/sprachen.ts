import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Sprachen";
const collection: PromptCollection = {
  category: C,
  description: "Sprachen lernen und üben: Gespräche, Korrekturen, Vokabeln, Grammatik und Übersetzungen mit Erklärung.",
  templates: [
    {
      id: "spr-konversation",
      featured: true,
      title: "Konversation üben mit Korrektur",
      category: C,
      tags: ["Konversation", "Üben", "Korrektur"],
      description: "Ein Gespräch in der Zielsprache, bei dem Fehler behutsam korrigiert werden.",
      prompt:
        "Lass uns auf [SPRACHE] sprechen. Mein Niveau: [NIVEAU]. Thema: [THEMA]. Du führst ein natürliches Gespräch, stellst Fragen und hältst deine Antworten kurz. Wenn ich einen Fehler mache, antwortest du zuerst normal weiter und fügst danach in Klammern eine kurze Korrektur mit einem Wort Erklärung an. Verwende nur Wörter, die zu meinem Niveau passen, und beginne mit einer einfachen Frage.",
      placeholders: [
        { key: "SPRACHE", label: "Sprache", example: "Englisch" },
        { key: "NIVEAU", label: "Niveau", example: "B1" },
        { key: "THEMA", label: "Thema", example: "meine letzte Reise" },
      ],
    },
    {
      id: "spr-text-korrigieren",
      title: "Text korrigieren und erklären",
      category: C,
      tags: ["Korrektur", "Grammatik", "Schreiben"],
      description: "Fehler finden, korrigieren und die Regel dahinter kurz erklären.",
      prompt:
        "Korrigiere den folgenden Text auf [SPRACHE]. Zeige zuerst die korrigierte Fassung, dann eine Tabelle mit: Fehler, Korrektur, Regel in einem Satz, Fehlerart (Grammatik, Wortwahl, Rechtschreibung, Stil). Markiere die drei Fehler, die ich am ehesten wieder machen werde, und gib mir für jeden eine Übungsaufgabe. Text:\n\n[TEXT]",
      placeholders: [
        { key: "SPRACHE", label: "Sprache", example: "Englisch" },
        { key: "TEXT", label: "Text", example: "(hier einfügen)" },
      ],
    },
    {
      id: "spr-vokabeln",
      title: "Vokabeln im Kontext lernen",
      category: C,
      tags: ["Vokabeln", "Lernkarten", "Kontext"],
      description: "Vokabeln zu einem Thema mit Beispielsatz, Eselsbrücke und Übung.",
      prompt:
        "Erstelle [ANZAHL] Vokabeln auf [SPRACHE] zum Thema [THEMA] für Niveau [NIVEAU]. Pro Vokabel: Wort mit Artikel oder Wortart, Übersetzung, ein Beispielsatz aus dem Alltag, eine Eselsbrücke, wenn sinnvoll. Danach: ein kurzer Lückentext mit zehn dieser Wörter und die Lösung. Formatiere so, dass ich es direkt als Lernkarten nutzen kann.",
      placeholders: [
        { key: "ANZAHL", label: "Anzahl", example: "20" },
        { key: "SPRACHE", label: "Sprache", example: "Spanisch" },
        { key: "THEMA", label: "Thema", example: "Tiere und Natur" },
        { key: "NIVEAU", label: "Niveau", example: "A2" },
      ],
    },
    {
      id: "spr-grammatik",
      title: "Grammatikregel verständlich erklären",
      category: C,
      tags: ["Grammatik", "Regel", "Erklärung"],
      description: "Eine Regel mit Beispielen, Ausnahmen und typischen Fehlern deutschsprachiger Lernender.",
      prompt:
        "Erkläre die Grammatikregel [REGEL] auf [SPRACHE] für Deutschsprachige auf Niveau [NIVEAU]. Struktur: die Regel in einem Satz, drei Beispiele mit Übersetzung, die häufigsten Fehler, die Deutschsprachige machen (und warum, im Vergleich zum Deutschen), Ausnahmen, und fünf Übungssätze mit Lösungen.",
      placeholders: [
        { key: "REGEL", label: "Regel", example: "Present Perfect versus Past Simple" },
        { key: "SPRACHE", label: "Sprache", example: "Englisch" },
        { key: "NIVEAU", label: "Niveau", example: "B1" },
      ],
    },
    {
      id: "spr-uebersetzung-erklaert",
      title: "Übersetzung mit Erklärung der Entscheidungen",
      category: C,
      tags: ["Übersetzung", "Erklärung", "Stil"],
      description: "Eine Übersetzung, bei der schwierige Stellen und Alternativen erklärt werden.",
      prompt:
        "Übersetze den folgenden Text von [AUSGANGSSPRACHE] nach [ZIELSPRACHE]. Tonalität beibehalten: [TONALITÄT]. Erkläre danach die fünf schwierigsten Stellen: Was war das Problem, welche Alternativen gab es, warum hast du dich so entschieden. Nenne Redewendungen, die sich nicht direkt übertragen lassen. Text:\n\n[TEXT]",
      placeholders: [
        { key: "AUSGANGSSPRACHE", label: "Ausgangssprache", example: "Deutsch" },
        { key: "ZIELSPRACHE", label: "Zielsprache", example: "Französisch" },
        { key: "TONALITÄT", label: "Tonalität", example: "locker, mit Humor" },
        { key: "TEXT", label: "Text", example: "(hier einfügen)" },
      ],
    },
    {
      id: "spr-niveau-anpassen",
      title: "Text auf ein Sprachniveau anpassen",
      category: C,
      tags: ["Vereinfachen", "Niveau", "Leichte Sprache"],
      description: "Einen Text so umschreiben, dass er zu einem Sprachniveau passt, ohne Inhalt zu verlieren.",
      prompt:
        "Schreibe den folgenden Text so um, dass er für Lernende auf Niveau [NIVEAU] ([SPRACHE]) verständlich ist. Behalte alle wichtigen Informationen, verwende kurze Sätze und häufige Wörter, erkläre unvermeidbare Fachwörter in Klammern. Liste danach die zehn Wörter auf, die für das Niveau am schwierigsten sind, mit einfacher Erklärung. Text:\n\n[TEXT]",
      placeholders: [
        { key: "NIVEAU", label: "Niveau", example: "A2" },
        { key: "SPRACHE", label: "Sprache", example: "Deutsch" },
        { key: "TEXT", label: "Text", example: "(hier einfügen)" },
      ],
    },
    {
      id: "spr-aussprache",
      title: "Aussprache und Betonung erklären",
      category: C,
      tags: ["Aussprache", "Sprechen", "Betonung"],
      description: "Schwierige Laute und Betonungen mit Vergleichen zum Deutschen erklären.",
      prompt:
        "Hilf mir mit der Aussprache auf [SPRACHE]. Diese Wörter oder Sätze fallen mir schwer: [WÖRTER]. Erkläre für jedes: Lautschrift, welche Laute es im Deutschen nicht gibt und wie ich sie mit Mund und Zunge bilde, ein deutsches Wort mit ähnlichem Laut als Vergleich, wo die Betonung liegt, und ein kurzer Satz zum Üben.",
      placeholders: [
        { key: "SPRACHE", label: "Sprache", example: "Englisch" },
        { key: "WÖRTER", label: "Wörter", example: "thorough, world, rural" },
      ],
    },
    {
      id: "spr-pruefung",
      title: "Sprachprüfung simulieren",
      category: C,
      tags: ["Prüfung", "Simulation", "Zertifikat"],
      description: "Eine Prüfungssituation mit Aufgaben, Zeitvorgabe und Bewertung.",
      prompt:
        "Simuliere den Teil [PRÜFUNGSTEIL] der Prüfung [PRÜFUNG] ([SPRACHE], Niveau [NIVEAU]). Stelle mir eine realistische Aufgabe mit Zeitvorgabe, warte auf meine Antwort, und bewerte danach nach den offiziellen Kriterien (Aufgabenerfüllung, Wortschatz, Grammatik, Kohärenz) mit Punkten und je einem Satz Begründung. Nenne zwei Dinge, die sofort mehr Punkte bringen würden.",
      placeholders: [
        { key: "PRÜFUNGSTEIL", label: "Prüfungsteil", example: "Schreiben" },
        { key: "PRÜFUNG", label: "Prüfung", example: "Cambridge B2 First" },
        { key: "SPRACHE", label: "Sprache", example: "Englisch" },
        { key: "NIVEAU", label: "Niveau", example: "B2" },
      ],
    },
  ],
};
export default collection;
