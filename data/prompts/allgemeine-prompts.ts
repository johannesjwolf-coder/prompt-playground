import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Allgemeine Prompts";
const collection: PromptCollection = {
  category: C,
  description: "Grundbausteine, die immer passen: zusammenfassen, erklären, vergleichen, brainstormen, prüfen, umformulieren.",
  templates: [
    {
      id: "allg-zusammenfassen",
      featured: true,
      title: "Zusammenfassen in drei Längen",
      category: C,
      tags: ["Zusammenfassung", "Kurz", "Basis"],
      description: "Einen Text als Satz, als Absatz und als Stichpunkte zusammenfassen.",
      prompt:
        "Fasse den folgenden Text zusammen, in drei Längen: ein Satz, ein Absatz mit maximal 80 Wörtern, und fünf Stichpunkte mit den wichtigsten Aussagen. Zielgruppe: [ZIELGRUPPE]. Behalte Zahlen und Namen exakt bei, erfinde nichts dazu, und nenne am Ende, was der Text offen lässt. Text:\n\n[TEXT]",
      placeholders: [
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "jemand, der den Text nicht gelesen hat" },
        { key: "TEXT", label: "Text", example: "(hier einfügen)" },
      ],
    },
    {
      id: "allg-einfach-erklaeren",
      title: "Einfach erklären",
      category: C,
      tags: ["Erklärung", "Einfach", "Basis"],
      description: "Etwas so erklären, dass es jeder versteht, mit Beispiel und Vergleich.",
      prompt:
        "Erkläre [THEMA] so, dass es [ZIELGRUPPE] versteht. Nutze kurze Sätze, ein Beispiel aus dem Alltag und einen Vergleich. Keine Fachwörter ohne Erklärung. Maximal 150 Wörter. Danach: die eine Sache, die man sich merken sollte, in einem Satz.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "was ein Token bei KI-Modellen ist" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "meine Grossmutter" },
      ],
    },
    {
      id: "allg-vergleich",
      title: "Zwei Dinge vergleichen",
      category: C,
      tags: ["Vergleich", "Tabelle", "Entscheidung"],
      description: "Ein strukturierter Vergleich mit Kriterien, Tabelle und Empfehlung.",
      prompt:
        "Vergleiche [A] und [B] für den Zweck [ZWECK]. Wähle fünf bis sieben sinnvolle Kriterien, erstelle eine Vergleichstabelle, nenne pro Option den grössten Vorteil und Nachteil, und gib eine Empfehlung mit Bedingungen (wann A, wann B). Kennzeichne, wo du unsicher bist.",
      placeholders: [
        { key: "A", label: "Option A", example: "ein Newsletter" },
        { key: "B", label: "Option B", example: "ein Podcast" },
        { key: "ZWECK", label: "Zweck", example: "eine kleine Community aufbauen" },
      ],
    },
    {
      id: "allg-brainstorm",
      title: "20 Ideen ohne Filter",
      category: C,
      tags: ["Brainstorming", "Ideen", "Kreativ"],
      description: "Viele Ideen in kurzer Zeit, von naheliegend bis gewagt.",
      prompt:
        "Gib mir 20 Ideen für [AUFGABE]. Rahmenbedingungen: [RAHMEN]. Die ersten fünf dürfen naheliegend sein, danach zunehmend ungewöhnlich; mische Perspektiven (Kunde, Kind, Konkurrent, Zukunft). Eine Zeile pro Idee. Markiere am Ende drei Ideen, die am ehesten umsetzbar sind, und eine, die am mutigsten ist.",
      placeholders: [
        { key: "AUFGABE", label: "Aufgabe", example: "wie unsere Website mehr Besucher zum Ausprobieren bringt" },
        { key: "RAHMEN", label: "Rahmen", example: "kein Budget, eine Woche Zeit" },
      ],
    },
    {
      id: "allg-checkliste",
      title: "Checkliste erstellen",
      category: C,
      tags: ["Checkliste", "Vollständigkeit", "Vorbereitung"],
      description: "Eine vollständige, sortierte Checkliste für ein Vorhaben.",
      prompt:
        "Erstelle eine Checkliste für [VORHABEN]. Kontext: [KONTEXT]. Gruppiere in Phasen (vorher, währenddessen, nachher), formuliere jeden Punkt als abhakbare Handlung, markiere die Punkte, die oft vergessen werden, und die, die man nicht nachholen kann. Maximal 30 Punkte.",
      placeholders: [
        { key: "VORHABEN", label: "Vorhaben", example: "den Launch einer neuen Website" },
        { key: "KONTEXT", label: "Kontext", example: "kleines Team, erste Website" },
      ],
    },
    {
      id: "allg-anleitung",
      title: "Schritt-für-Schritt-Anleitung",
      category: C,
      tags: ["Anleitung", "Schritte", "How-to"],
      description: "Eine Anleitung, die jemand ohne Vorwissen befolgen kann.",
      prompt:
        "Schreibe eine Schritt-für-Schritt-Anleitung für [AUFGABE] für [ZIELGRUPPE]. Vor dem ersten Schritt: was man braucht und wie lange es dauert. Jeder Schritt: eine Handlung, ein Satz, woran man erkennt, dass er geklappt hat. Danach: die drei häufigsten Probleme und ihre Lösung.",
      placeholders: [
        { key: "AUFGABE", label: "Aufgabe", example: "eine eigene E-Mail-Signatur einrichten" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Menschen ohne Technikkenntnisse" },
      ],
    },
    {
      id: "allg-pro-contra",
      title: "Pro und Contra",
      category: C,
      tags: ["Pro Contra", "Abwägen", "Entscheidung"],
      description: "Die stärksten Argumente für und gegen eine Sache, fair gewichtet.",
      prompt:
        "Nenne die jeweils fünf stärksten Argumente für und gegen [THESE]. Aus Sicht von: [PERSPEKTIVE]. Gewichte jedes Argument (stark, mittel, schwach) und begründe kurz. Danach: welche Information die Entscheidung am meisten beeinflussen würde und ein Fazit in zwei Sätzen, das beide Seiten ernst nimmt.",
      placeholders: [
        { key: "THESE", label: "These", example: "ein Café sollte eine eigene App haben" },
        { key: "PERSPEKTIVE", label: "Perspektive", example: "der Inhaberin" },
      ],
    },
    {
      id: "allg-umformulieren",
      title: "Umformulieren in eine andere Tonalität",
      category: C,
      tags: ["Umformulieren", "Tonalität", "Stil"],
      description: "Denselben Inhalt in einem anderen Ton, für ein anderes Publikum.",
      prompt:
        "Formuliere den folgenden Text um: Tonalität [TONALITÄT], Zielgruppe [ZIELGRUPPE], Länge [LÄNGE]. Der Inhalt bleibt vollständig erhalten, nur Ton, Wortwahl und Satzlänge ändern sich. Zeige danach in drei Punkten, was du verändert hast. Text:\n\n[TEXT]",
      placeholders: [
        { key: "TONALITÄT", label: "Tonalität", example: "locker und freundlich" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "junge Erwachsene" },
        { key: "LÄNGE", label: "Länge", example: "etwa gleich lang" },
        { key: "TEXT", label: "Text", example: "(hier einfügen)" },
      ],
    },
    {
      id: "allg-fragen",
      title: "Die richtigen Fragen stellen",
      category: C,
      tags: ["Fragen", "Verstehen", "Vorbereitung"],
      description: "Gute Fragen zu einem Thema, bevor man entscheidet oder loslegt.",
      prompt:
        "Ich beschäftige mich mit [THEMA] und möchte [ZIEL]. Formuliere 15 Fragen, die ich mir oder anderen stellen sollte, bevor ich loslege: Verständnisfragen, Risikofragen, Fragen zu Alternativen, Fragen, die unangenehm sind. Sortiere nach Wichtigkeit und nenne bei den drei wichtigsten, wie ich eine Antwort bekomme.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "der Wechsel zu einer neuen Software im Team" },
        { key: "ZIEL", label: "Ziel", example: "eine Entscheidung bis Monatsende" },
      ],
    },
    {
      id: "allg-tabelle",
      title: "Text in Tabelle umwandeln",
      category: C,
      tags: ["Tabelle", "Struktur", "Umwandeln"],
      description: "Aus Fliesstext oder Notizen eine saubere Tabelle machen.",
      prompt:
        "Wandle den folgenden Text in eine Tabelle um. Spalten: [SPALTEN] (oder schlage passende vor, wenn ich keine nenne). Eine Zeile pro Element, fehlende Werte als „–“, keine Interpretation über den Text hinaus. Nenne danach, welche Informationen sich nicht in die Tabelle bringen liessen. Text:\n\n[TEXT]",
      placeholders: [
        { key: "SPALTEN", label: "Spalten", example: "Name, Aufgabe, Termin, Status" },
        { key: "TEXT", label: "Text", example: "(hier einfügen)" },
      ],
    },
    {
      id: "allg-plan-aus-ziel",
      title: "Plan aus einem Ziel ableiten",
      category: C,
      tags: ["Plan", "Ziel", "Schritte"],
      description: "Vom Ziel rückwärts zu den nächsten Schritten.",
      prompt:
        "Mein Ziel: [ZIEL]. Frist: [FRIST]. Ausgangslage: [AUSGANGSLAGE]. Plane rückwärts vom Ziel: Was muss eine Woche vorher stehen, was einen Monat vorher, was jetzt? Liefere Meilensteine mit Datum, den ersten Schritt für morgen, die grösste Abhängigkeit von anderen und einen Plan B, falls die Hälfte der Zeit wegfällt.",
      placeholders: [
        { key: "ZIEL", label: "Ziel", example: "einen Vortrag vor 100 Leuten halten" },
        { key: "FRIST", label: "Frist", example: "in acht Wochen" },
        { key: "AUSGANGSLAGE", label: "Ausgangslage", example: "Thema steht, noch keine Folien, wenig Übung" },
      ],
    },
    {
      id: "allg-faktencheck",
      title: "Aussagen prüfen lassen",
      category: C,
      tags: ["Faktencheck", "Prüfen", "Quellen"],
      description: "Behauptungen auf Plausibilität prüfen und offene Punkte markieren.",
      prompt:
        "Prüfe die folgenden Aussagen auf Plausibilität. Für jede Aussage: wahrscheinlich richtig, wahrscheinlich falsch oder unklar, mit Begründung in zwei Sätzen, was ich prüfen müsste und welche Art Quelle dafür geeignet ist. Erfinde keine Quellen, keine Zahlen ohne Kennzeichnung als Schätzung. Aussagen:\n\n[AUSSAGEN]",
      placeholders: [{ key: "AUSSAGEN", label: "Aussagen", example: "(hier einfügen)" }],
    },
  ],
};
export default collection;
