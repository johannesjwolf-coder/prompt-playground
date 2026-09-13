import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Schule & Studium";
const collection: PromptCollection = {
  category: C,
  description: "Lernen, Arbeiten schreiben, Prüfungen vorbereiten und Referate halten – ehrlich unterstützt, nicht abgeschrieben.",
  templates: [
    {
      id: "schu-gliederung",
      featured: true,
      title: "Hausarbeit oder Aufsatz gliedern",
      category: C,
      tags: ["Gliederung", "Hausarbeit", "Struktur"],
      description: "Eine Gliederung mit Fragestellung, Kapiteln und rotem Faden.",
      prompt:
        "Hilf mir, eine Arbeit zu gliedern. Thema: [THEMA]. Art: [ART]. Umfang: [UMFANG]. Vorgaben: [VORGABEN]. Schlage eine präzise Fragestellung vor, eine Gliederung mit Kapiteln und Unterkapiteln, je einem Satz, was das Kapitel leistet, und wie die Kapitel logisch aufeinander aufbauen. Nenne, welche Quellenarten ich für welches Kapitel brauche.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Auswirkungen von Tourismus auf Löwenpopulationen" },
        { key: "ART", label: "Art", example: "Maturaarbeit" },
        { key: "UMFANG", label: "Umfang", example: "25 Seiten" },
        { key: "VORGABEN", label: "Vorgaben", example: "eigene Umfrage muss enthalten sein" },
      ],
    },
    {
      id: "schu-lernkarten",
      title: "Lernkarten aus einem Text",
      category: C,
      tags: ["Lernkarten", "Wiederholung", "Prüfung"],
      description: "Frage-Antwort-Karten aus Lernstoff, mit Schwierigkeitsstufen.",
      prompt:
        "Erstelle aus dem folgenden Lernstoff [ANZAHL] Lernkarten im Format Frage / Antwort. Mische Definitionen, Zusammenhänge und Anwendungsfragen, markiere den Schwierigkeitsgrad, halte Antworten kurz (maximal drei Sätze) und vermeide Fragen, die sich mit Ja oder Nein beantworten lassen. Stoff:\n\n[STOFF]",
      placeholders: [
        { key: "ANZAHL", label: "Anzahl", example: "25" },
        { key: "STOFF", label: "Stoff", example: "(hier einfügen)" },
      ],
    },
    {
      id: "schu-pruefung",
      title: "Prüfungsvorbereitung planen",
      category: C,
      tags: ["Prüfung", "Plan", "Zeit"],
      description: "Ein Lernplan bis zur Prüfung, mit Wiederholungen und Pufferzeit.",
      prompt:
        "Erstelle einen Lernplan für die Prüfung [PRÜFUNG] am [DATUM]. Stoffgebiete: [STOFF]. Verfügbare Zeit: [ZEIT]. Mein Stand: [STAND]. Verteile den Stoff mit Wiederholungen in wachsenden Abständen, plane Übungsprüfungen ein, lasse die letzten zwei Tage für Wiederholung und Erholung frei, und nenne für jedes Stoffgebiet eine aktive Lernmethode statt nur Lesen.",
      placeholders: [
        { key: "PRÜFUNG", label: "Prüfung", example: "Biologie-Abschlussprüfung" },
        { key: "DATUM", label: "Datum", example: "in drei Wochen" },
        { key: "STOFF", label: "Stoff", example: "Genetik, Ökologie, Evolution" },
        { key: "ZEIT", label: "Zeit", example: "2 Stunden pro Tag" },
        { key: "STAND", label: "Stand", example: "Genetik gut, Ökologie kaum gelernt" },
      ],
    },
    {
      id: "schu-referat",
      title: "Referat vorbereiten",
      category: C,
      tags: ["Referat", "Vortrag", "Schule"],
      description: "Aufbau, Folien und Sprechtext für ein Referat, mit Einstieg und Abschluss.",
      prompt:
        "Bereite ein Referat über [THEMA] vor, Dauer [DAUER], für [KLASSE]. Liefere: einen Einstieg, der die Zuhörer packt, eine Gliederung mit maximal [FOLIEN] Folien (Titel plus Stichworte), einen Sprechtext in einfacher Sprache, eine Frage oder Aktivität für das Publikum, einen Abschluss und drei mögliche Fragen der Lehrperson mit Antworten.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Löwen in der Savanne" },
        { key: "DAUER", label: "Dauer", example: "10 Minuten" },
        { key: "KLASSE", label: "Klasse", example: "eine 8. Klasse" },
        { key: "FOLIEN", label: "Folien", example: "8" },
      ],
    },
    {
      id: "schu-argumentation",
      title: "Argumentativen Aufsatz aufbauen",
      category: C,
      tags: ["Aufsatz", "Argumentation", "Erörterung"],
      description: "Struktur, Argumente und Übergänge für eine Erörterung.",
      prompt:
        "Hilf mir, eine Erörterung zu [THESE] aufzubauen. Meine Position: [POSITION]. Erstelle: Einleitung mit Aufhänger, drei Argumente mit je Beleg oder Beispiel, das stärkste Gegenargument und seine Entkräftung, Schluss mit Ausblick. Schreibe die Übergangssätze und nenne Formulierungen, die ich vermeiden sollte. Den Text selbst schreibe ich; gib mir die Bausteine.",
      placeholders: [
        { key: "THESE", label: "These", example: "Handys sollten in der Schule verboten werden" },
        { key: "POSITION", label: "Position", example: "dagegen" },
      ],
    },
    {
      id: "schu-hausaufgabe-verstehen",
      title: "Hausaufgabe verstehen statt abschreiben",
      category: C,
      tags: ["Hausaufgabe", "Verstehen", "Nachhilfe"],
      description: "Die KI als Nachhilfe: Hinweise statt Lösungen, Schritt für Schritt.",
      prompt:
        "Ich habe folgende Aufgabe in [FACH]: [AUFGABE]. Löse sie nicht für mich. Erkläre mir zuerst, worum es geht, gib mir dann einen ersten Hinweis und warte auf meinen Versuch. Bei Fehlern erklärst du, was schiefgelaufen ist, und gibst den nächsten Hinweis. Erst wenn ich zweimal feststecke, zeigst du den nächsten Schritt. Am Ende fasst du zusammen, was ich gelernt habe.",
      placeholders: [
        { key: "FACH", label: "Fach", example: "Mathematik" },
        { key: "AUFGABE", label: "Aufgabe", example: "(hier einfügen)" },
      ],
    },
    {
      id: "schu-zitieren",
      title: "Richtig zitieren und Quellen angeben",
      category: C,
      tags: ["Zitieren", "Quellen", "Literaturverzeichnis"],
      description: "Quellenangaben nach einem Zitierstil formatieren und Zitate korrekt einbauen.",
      prompt:
        "Formatiere die folgenden Quellen nach dem Zitierstil [STIL] für ein Literaturverzeichnis, und zeige für jede, wie ein Kurzbeleg im Text aussieht. Erkläre danach in fünf Punkten, wann ich direkt zitiere, wann ich paraphrasiere, und wie ich Plagiate vermeide. Kennzeichne fehlende Angaben, die ich nachschlagen muss. Quellen:\n\n[QUELLEN]",
      placeholders: [
        { key: "STIL", label: "Zitierstil", example: "APA 7" },
        { key: "QUELLEN", label: "Quellen", example: "(hier einfügen)" },
      ],
    },
    {
      id: "schu-motivationsschreiben",
      title: "Motivationsschreiben für Studium oder Stipendium",
      category: C,
      tags: ["Motivationsschreiben", "Bewerbung", "Studium"],
      description: "Ein persönliches Schreiben, das Motivation belegt statt behauptet.",
      prompt:
        "Hilf mir bei einem Motivationsschreiben für [PROGRAMM] an [INSTITUTION]. Mein Hintergrund: [HINTERGRUND]. Warum dieses Programm: [MOTIVATION]. Was ich beitragen kann: [BEITRAG]. Struktur: Einstieg mit einem konkreten Erlebnis, Verbindung zwischen Erfahrung und Programm, Ziele nach dem Abschluss, Abschluss ohne Floskeln. Maximal [LÄNGE] Wörter, in der Ich-Form, jede Aussage mit Beispiel belegt.",
      placeholders: [
        { key: "PROGRAMM", label: "Programm", example: "den Master in Umweltwissenschaften" },
        { key: "INSTITUTION", label: "Institution", example: "der ETH Zürich" },
        { key: "HINTERGRUND", label: "Hintergrund", example: "Bachelor Biologie, Praktikum im Nationalpark" },
        { key: "MOTIVATION", label: "Motivation", example: "Artenschutz mit Datenanalyse verbinden" },
        { key: "BEITRAG", label: "Beitrag", example: "Feldforschungserfahrung, Programmierkenntnisse" },
        { key: "LÄNGE", label: "Länge", example: "500" },
      ],
    },
    {
      id: "schu-studienwahl",
      title: "Studien- oder Ausbildungswahl klären",
      category: C,
      tags: ["Studienwahl", "Orientierung", "Entscheidung"],
      description: "Interessen und Stärken mit möglichen Wegen abgleichen.",
      prompt:
        "Hilf mir bei der Wahl von Studium oder Ausbildung. Interessen: [INTERESSEN]. Stärken: [STÄRKEN]. Was mir im Beruf wichtig ist: [WICHTIG]. Was ich vermeiden möchte: [VERMEIDEN]. Stelle mir zuerst fünf klärende Fragen, dann schlage fünf Wege vor (auch unerwartete), mit typischem Alltag, Anforderungen, Chancen und wie ich jeden Weg in einem Tag ausprobieren könnte.",
      placeholders: [
        { key: "INTERESSEN", label: "Interessen", example: "Tiere, Fotografie, Technik" },
        { key: "STÄRKEN", label: "Stärken", example: "geduldig, genau, gut im Erklären" },
        { key: "WICHTIG", label: "Wichtig", example: "draussen sein, Sinn" },
        { key: "VERMEIDEN", label: "Vermeiden", example: "reine Büroarbeit" },
      ],
    },
    {
      id: "schu-zusammenfassung-kapitel",
      title: "Lehrbuchkapitel zusammenfassen und verstehen",
      category: C,
      tags: ["Zusammenfassung", "Lehrbuch", "Verständnis"],
      description: "Kernaussagen, Begriffe und Prüffragen aus einem Kapitel.",
      prompt:
        "Fasse das folgende Kapitel zusammen für [FACH], Niveau [NIVEAU]: Kernaussagen in maximal zehn Stichpunkten, die fünf wichtigsten Begriffe mit Erklärung, ein Beispiel, das die Hauptidee zeigt, und fünf Prüffragen mit Antworten. Nenne, was im Kapitel schwer verständlich ist und wie ich es mir merken kann. Kapitel:\n\n[TEXT]",
      placeholders: [
        { key: "FACH", label: "Fach", example: "Biologie" },
        { key: "NIVEAU", label: "Niveau", example: "Gymnasium" },
        { key: "TEXT", label: "Kapitel", example: "(hier einfügen)" },
      ],
    },
  ],
};
export default collection;
