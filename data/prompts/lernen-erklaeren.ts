import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Lernen & Erklären";
const collection: PromptCollection = {
  category: C,
  description: "Themen verstehen, Lernpläne erstellen, Inhalte für Unterricht und Präsentationen aufbereiten.",
  templates: [
    {
      id: "lern-erklaerung",
      featured: true,
      title: "Thema in drei Stufen erklären",
      category: C,
      tags: ["Erklärung", "Verständnis", "Stufen"],
      description: "Ein Thema für Kinder, Einsteiger und Fortgeschrittene erklären, mit Beispielen.",
      prompt:
        "Erkläre mir [THEMA] in drei Stufen: erst so, dass es ein zehnjähriges Kind versteht, dann für einen interessierten Erwachsenen ohne Vorwissen, dann für jemanden mit Grundkenntnissen in [FACHGEBIET]. Nutze pro Stufe ein Beispiel oder einen Vergleich, und nenne am Ende die drei häufigsten Missverständnisse zu diesem Thema.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "wie Löwen im Rudel zusammenleben" },
        { key: "FACHGEBIET", label: "Fachgebiet", example: "Biologie" },
      ],
    },
    {
      id: "lern-lernplan",
      title: "Lernplan für ein neues Thema",
      category: C,
      tags: ["Lernplan", "Selbststudium", "Struktur"],
      description: "Ein Lernplan mit Etappen, Übungen und Erfolgskontrolle für einen festen Zeitraum.",
      prompt:
        "Erstelle einen Lernplan, mit dem ich [THEMA] in [ZEITRAUM] lerne, bei etwa [STUNDEN] Stunden pro Woche. Mein Stand heute: [VORWISSEN]. Mein Ziel: [ZIEL]. Gliedere in Etappen mit klaren Lernzielen, nenne pro Etappe Übungen mit echtem Ergebnis, wie ich prüfe, ob ich es verstanden habe, und wo ich mich typischerweise verzettle.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Videoschnitt" },
        { key: "ZEITRAUM", label: "Zeitraum", example: "8 Wochen" },
        { key: "STUNDEN", label: "Stunden pro Woche", example: "5" },
        { key: "VORWISSEN", label: "Vorwissen", example: "keine Erfahrung, aber viel eigenes Material" },
        { key: "ZIEL", label: "Ziel", example: "ein 3-minütiges Safari-Video selbst schneiden" },
      ],
    },
    {
      id: "lern-unterricht",
      title: "Unterrichtseinheit planen",
      category: C,
      tags: ["Unterricht", "Lektion", "Schule"],
      description: "Eine Lektion mit Einstieg, Erarbeitung, Sicherung und Material.",
      prompt:
        "Plane eine Unterrichtseinheit zum Thema [THEMA] für [KLASSE], Dauer [DAUER]. Lernziele: [LERNZIELE]. Aufbau: Einstieg, der Neugier weckt; Erarbeitung mit aktiver Beteiligung; Sicherung; Ausblick. Für jede Phase: Zeit, Methode, Material, was die Lehrperson sagt oder fragt. Ergänze eine Aufgabe zur Differenzierung und drei Prüffragen.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Lebensraum Savanne" },
        { key: "KLASSE", label: "Klasse", example: "eine 6. Klasse" },
        { key: "DAUER", label: "Dauer", example: "90 Minuten" },
        { key: "LERNZIELE", label: "Lernziele", example: "Nahrungskette erklären, Bedrohungen benennen" },
      ],
    },
    {
      id: "lern-praesentation",
      title: "Präsentation strukturieren",
      category: C,
      tags: ["Präsentation", "Folien", "Vortrag"],
      description: "Eine Folienstruktur mit Kernaussage pro Folie und Sprechernotizen.",
      prompt:
        "Strukturiere eine Präsentation über [THEMA] für [PUBLIKUM], Dauer [DAUER]. Ziel: [ZIEL]. Liefere maximal [ANZAHL] Folien: pro Folie Titel als Kernaussage (ganzer Satz), Inhalt in Stichworten, Bild- oder Grafikidee und Sprechernotizen in zwei bis drei Sätzen. Beginne mit einem Einstieg, der das Publikum betrifft, und ende mit einer klaren Botschaft.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Löwenschutz in Ostafrika" },
        { key: "PUBLIKUM", label: "Publikum", example: "Vereinsmitglieder" },
        { key: "DAUER", label: "Dauer", example: "15 Minuten" },
        { key: "ZIEL", label: "Ziel", example: "Unterstützung für ein Projekt gewinnen" },
        { key: "ANZAHL", label: "Anzahl Folien", example: "10" },
      ],
    },
    {
      id: "lern-quiz",
      title: "Quiz mit Erklärungen",
      category: C,
      tags: ["Quiz", "Fragen", "Prüfung"],
      description: "Fragen in verschiedenen Schwierigkeitsgraden mit Lösungen und kurzen Erklärungen.",
      prompt:
        "Erstelle ein Quiz mit [ANZAHL] Fragen zu [THEMA] für [ZIELGRUPPE]. Mische leichte, mittlere und schwere Fragen, nutze Multiple Choice mit vier Antworten und plausiblen Ablenkern. Gib pro Frage die Lösung und eine Erklärung in zwei Sätzen, warum die anderen Antworten nicht stimmen. Am Ende eine Auswertung nach Punkten mit freundlichem Kommentar.",
      placeholders: [
        { key: "ANZAHL", label: "Anzahl Fragen", example: "10" },
        { key: "THEMA", label: "Thema", example: "Löwen" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Website-Besucher jeden Alters" },
      ],
    },
    {
      id: "lern-recherche",
      title: "Recherche-Plan mit Quellen",
      category: C,
      tags: ["Recherche", "Quellen", "Faktenprüfung"],
      description: "Wie man ein Thema gründlich recherchiert: Fragen, Quellenarten, Prüfkriterien.",
      prompt:
        "Erstelle einen Recherche-Plan zu [THEMA]. Ziel der Recherche: [ZIEL]. Formuliere die fünf Leitfragen, nenne pro Frage geeignete Quellenarten (wissenschaftlich, offiziell, journalistisch, Erfahrungsberichte), Kriterien, um Quellen zu prüfen, und typische Fehlinformationen zu diesem Thema. Kennzeichne klar, wo du dir nicht sicher bist. Verwende keine erfundenen Quellenangaben.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Bestandsentwicklung der Löwen in Afrika" },
        { key: "ZIEL", label: "Ziel", example: "belastbare Zahlen für eine Website" },
      ],
    },
    {
      id: "lern-glossar",
      title: "Glossar erstellen",
      category: C,
      tags: ["Glossar", "Begriffe", "Verständlichkeit"],
      description: "Fachbegriffe eines Themas kurz und verständlich definieren.",
      prompt:
        "Erstelle ein Glossar mit [ANZAHL] wichtigen Begriffen zu [THEMA] für [ZIELGRUPPE]. Pro Begriff: Definition in maximal zwei Sätzen, ein Beispiel, verwandte Begriffe. Alphabetisch sortiert, ohne Fremdwörter in den Erklärungen, die selbst erklärt werden müssten.",
      placeholders: [
        { key: "ANZAHL", label: "Anzahl Begriffe", example: "15" },
        { key: "THEMA", label: "Thema", example: "Livestreaming-Technik" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Einsteiger ohne Technikwissen" },
      ],
    },
    {
      id: "lern-feynman",
      title: "Verständnis prüfen (Erkläre es mir zurück)",
      category: C,
      tags: ["Lernen", "Feedback", "Prüfen"],
      description: "Die KI als Lernpartner: du erklärst, sie findet Lücken und stellt Rückfragen.",
      prompt:
        "Ich erkläre dir jetzt [THEMA], so wie ich es verstanden habe. Deine Aufgabe: Höre zu, finde Lücken, Fehler und unklare Stellen, stelle mir drei Rückfragen, die mein Verständnis prüfen, und erkläre erst danach, was ich verbessern sollte. Sei präzise, nicht schmeichelnd. Hier meine Erklärung:\n\n[ERKLÄRUNG]",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "wie Prompt-Vorlagen mit Platzhaltern funktionieren" },
        { key: "ERKLÄRUNG", label: "Deine Erklärung", example: "(hier schreiben)" },
      ],
    },
  ],
};
export default collection;
