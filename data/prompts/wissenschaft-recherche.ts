import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Wissenschaft & Recherche";
const collection: PromptCollection = {
  category: C,
  description: "Literatur sichten, Studien kritisch lesen, Hypothesen formulieren, Abstracts schreiben und Forschung verständlich machen.",
  templates: [
    {
      id: "wiss-literatur",
      featured: true,
      title: "Literaturrecherche planen",
      category: C,
      tags: ["Literatur", "Recherche", "Suchstrategie"],
      description: "Suchbegriffe, Datenbanken, Ein- und Ausschlusskriterien für eine systematische Suche.",
      prompt:
        "Plane eine Literaturrecherche zu [FRAGESTELLUNG] im Fachgebiet [FACH]. Entwickle: Suchbegriffe mit Synonymen auf Deutsch und Englisch, kombiniert zu Suchstrings, geeignete Datenbanken, Ein- und Ausschlusskriterien, ein Vorgehen zum Sichten (Titel, Abstract, Volltext), eine Tabelle zur Dokumentation und Hinweise, wie ich die Qualität der Quellen bewerte. Erfinde keine konkreten Publikationen.",
      placeholders: [
        { key: "FRAGESTELLUNG", label: "Fragestellung", example: "Wie beeinflusst Tourismus das Verhalten von Löwen?" },
        { key: "FACH", label: "Fachgebiet", example: "Verhaltensbiologie" },
      ],
    },
    {
      id: "wiss-studie-lesen",
      title: "Studie kritisch lesen",
      category: C,
      tags: ["Studie", "Kritik", "Methodik"],
      description: "Eine Studie strukturiert bewerten: Fragestellung, Methode, Ergebnisse, Grenzen.",
      prompt:
        "Analysiere die folgende Studie (oder ihren Abstract) kritisch. Fasse Fragestellung, Methode und Hauptergebnis zusammen, bewerte Stichprobe, Design, mögliche Verzerrungen und die Stärke der Schlussfolgerungen, nenne, was die Studie nicht zeigt, und formuliere drei Fragen, die ich an die Autoren stellen würde. Zielgruppe meiner Zusammenfassung: [ZIELGRUPPE]. Studie:\n\n[TEXT]",
      placeholders: [
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "mein Seminar" },
        { key: "TEXT", label: "Studie", example: "(hier einfügen)" },
      ],
    },
    {
      id: "wiss-hypothese",
      title: "Forschungsfrage und Hypothesen formulieren",
      category: C,
      tags: ["Hypothese", "Forschungsfrage", "Design"],
      description: "Aus einem Interesse eine prüfbare Fragestellung mit Hypothesen und Variablen machen.",
      prompt:
        "Ich interessiere mich für [THEMA]. Hilf mir, eine präzise Forschungsfrage zu formulieren, daraus zwei bis drei prüfbare Hypothesen abzuleiten, unabhängige und abhängige Variablen zu benennen, ein passendes Untersuchungsdesign vorzuschlagen (mit Begründung) und mögliche Störfaktoren zu nennen. Rahmen: [RAHMEN].",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "der Einfluss von Lärm auf das Jagdverhalten von Eulen" },
        { key: "RAHMEN", label: "Rahmen", example: "Bachelorarbeit, drei Monate Feldzeit" },
      ],
    },
    {
      id: "wiss-abstract",
      title: "Abstract schreiben",
      category: C,
      tags: ["Abstract", "Schreiben", "Publikation"],
      description: "Ein Abstract mit Hintergrund, Methode, Ergebnissen und Schlussfolgerung in der richtigen Länge.",
      prompt:
        "Schreibe ein Abstract für meine Arbeit. Titel: [TITEL]. Hintergrund: [HINTERGRUND]. Methode: [METHODE]. Hauptergebnisse: [ERGEBNISSE]. Schlussfolgerung: [SCHLUSS]. Maximal [LÄNGE] Wörter, Struktur Hintergrund, Ziel, Methode, Ergebnisse, Schlussfolgerung, präzise und ohne Wertungen wie „bahnbrechend“. Ergänze fünf Schlagworte. Sprache: [SPRACHE].",
      placeholders: [
        { key: "TITEL", label: "Titel", example: "Aktivitätsmuster von Uhus in stadtnahen Wäldern" },
        { key: "HINTERGRUND", label: "Hintergrund", example: "wenig Daten zu Uhus in Siedlungsnähe" },
        { key: "METHODE", label: "Methode", example: "GPS-Sender an 8 Tieren über 6 Monate" },
        { key: "ERGEBNISSE", label: "Ergebnisse", example: "Aktivität verschiebt sich in späte Nacht" },
        { key: "SCHLUSS", label: "Schlussfolgerung", example: "Lichtreduktion könnte helfen" },
        { key: "LÄNGE", label: "Länge", example: "250" },
        { key: "SPRACHE", label: "Sprache", example: "Englisch" },
      ],
    },
    {
      id: "wiss-datenerhebung",
      title: "Datenerhebung planen (Umfrage, Beobachtung, Experiment)",
      category: C,
      tags: ["Datenerhebung", "Methode", "Planung"],
      description: "Ein Erhebungsplan mit Stichprobe, Instrument, Ablauf und Ethik.",
      prompt:
        "Plane die Datenerhebung für [FRAGESTELLUNG]. Methode: [METHODE]. Zielgruppe oder Objekt: [ZIELGRUPPE]. Ressourcen: [RESSOURCEN]. Liefere: Stichprobengrösse mit Begründung, das Erhebungsinstrument (Fragen oder Beobachtungsprotokoll), Ablauf, wie ich Verzerrungen vermeide, ethische und Datenschutz-Aspekte, einen Pretest-Plan und wie die Daten später ausgewertet werden.",
      placeholders: [
        { key: "FRAGESTELLUNG", label: "Fragestellung", example: "Wie nehmen Besucher Löwen im Tierpark wahr?" },
        { key: "METHODE", label: "Methode", example: "Fragebogen" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "erwachsene Tierparkbesucher" },
        { key: "RESSOURCEN", label: "Ressourcen", example: "zwei Wochen, eine Person" },
      ],
    },
    {
      id: "wiss-peer-review",
      title: "Feedback als Gutachterin geben",
      category: C,
      tags: ["Review", "Feedback", "Gutachten"],
      description: "Ein strukturiertes, faires Gutachten zu einem Manuskript oder einer Arbeit.",
      prompt:
        "Verfasse ein Gutachten zum folgenden Manuskript für [KONTEXT]. Struktur: Zusammenfassung des Beitrags in drei Sätzen, Stärken, grössere Probleme (Methodik, Logik, Belege), kleinere Punkte (Sprache, Darstellung), konkrete Verbesserungsvorschläge, Empfehlung (annehmen, überarbeiten, ablehnen) mit Begründung. Fair, konkret, mit Verweis auf Abschnitte. Manuskript:\n\n[TEXT]",
      placeholders: [
        { key: "KONTEXT", label: "Kontext", example: "ein Seminar-Peer-Review" },
        { key: "TEXT", label: "Manuskript", example: "(hier einfügen)" },
      ],
    },
    {
      id: "wiss-populaer",
      title: "Forschung verständlich erklären",
      category: C,
      tags: ["Wissenschaftskommunikation", "Verständlich", "Öffentlichkeit"],
      description: "Ein Forschungsergebnis für die Öffentlichkeit aufbereiten, ohne es zu verfälschen.",
      prompt:
        "Erkläre das folgende Forschungsergebnis für [ZIELGRUPPE] in [FORMAT]. Regeln: keine Übertreibung der Bedeutung, Unsicherheiten benennen, ein Alltagsbeispiel, keine Fachwörter ohne Erklärung, ein klarer Merksatz am Ende. Maximal [LÄNGE] Wörter. Ergebnis:\n\n[ERGEBNIS]",
      placeholders: [
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Leser eines Naturmagazins" },
        { key: "FORMAT", label: "Format", example: "einem kurzen Artikel" },
        { key: "LÄNGE", label: "Länge", example: "300" },
        { key: "ERGEBNIS", label: "Ergebnis", example: "(hier einfügen)" },
      ],
    },
    {
      id: "wiss-interviewleitfaden",
      title: "Leitfaden für qualitative Interviews",
      category: C,
      tags: ["Interview", "Qualitativ", "Leitfaden"],
      description: "Ein Interviewleitfaden mit Einstieg, Themenblöcken und Nachfragen.",
      prompt:
        "Erstelle einen Interviewleitfaden für qualitative Interviews zu [THEMA] mit [ZIELGRUPPE]. Forschungsfrage: [FRAGE]. Struktur: Einstieg mit Einverständnis und Aufwärmfrage, drei bis vier Themenblöcke mit je Hauptfrage und Nachfragen, Abschlussfrage, Hinweise für die Interviewerin (neutral bleiben, Schweigen aushalten). Offene Fragen, keine Suggestion, Dauer etwa [DAUER].",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Erfahrungen von Rangern mit Wilderei" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Ranger in Nationalparks" },
        { key: "FRAGE", label: "Forschungsfrage", example: "Wie erleben Ranger die Zusammenarbeit mit Dorfgemeinschaften?" },
        { key: "DAUER", label: "Dauer", example: "45 Minuten" },
      ],
    },
  ],
};
export default collection;
