import type { PromptCollection } from "@/lib/promptLibrary";

const C = "HR & Bewerbung";
const collection: PromptCollection = {
  category: C,
  description: "Stellenanzeigen, Bewerbungen, Interviews und Feedback – für Arbeitgeber und Bewerbende.",
  templates: [
    {
      id: "hr-stellenanzeige",
      featured: true,
      title: "Stellenanzeige, die die Richtigen anspricht",
      category: C,
      tags: ["Stellenanzeige", "Recruiting", "Text"],
      description: "Eine ehrliche, konkrete Stellenanzeige ohne Buzzword-Bingo.",
      prompt:
        "Schreibe eine Stellenanzeige für [STELLE] bei [UNTERNEHMEN] in [ORT], Pensum [PENSUM]. Aufgaben: [AUFGABEN]. Was wir bieten: [ANGEBOT]. Aufbau: ein Einstieg, der zeigt, warum die Stelle wichtig ist; konkrete Aufgaben (keine Listen mit 20 Punkten); was jemand mitbringen sollte, getrennt in nötig und schön; was wir bieten mit Zahlen, wo möglich; Ablauf der Bewerbung. Geschlechtsneutral, Du-Form, maximal 400 Wörter.",
      placeholders: [
        { key: "STELLE", label: "Stelle", example: "Frontend-Entwicklerin oder -Entwickler" },
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "einer kleinen Webagentur" },
        { key: "ORT", label: "Ort", example: "Zürich, teilweise remote" },
        { key: "PENSUM", label: "Pensum", example: "80 bis 100 %" },
        { key: "AUFGABEN", label: "Aufgaben", example: "Websites mit React bauen, Kunden beraten" },
        { key: "ANGEBOT", label: "Angebot", example: "5 Wochen Ferien, Weiterbildungsbudget" },
      ],
    },
    {
      id: "hr-bewerbungsschreiben",
      title: "Bewerbungsschreiben aus Stichworten",
      category: C,
      tags: ["Bewerbung", "Motivationsschreiben", "Bewerbende"],
      description: "Aus Lebenslauf-Stichworten und der Stellenanzeige ein persönliches Schreiben.",
      prompt:
        "Schreibe ein Bewerbungsschreiben für die Stelle [STELLE] bei [UNTERNEHMEN]. Meine relevante Erfahrung: [ERFAHRUNG]. Warum diese Stelle: [MOTIVATION]. Beziehe dich auf die Anforderungen der Anzeige, belege jede Aussage mit einem konkreten Beispiel, vermeide Standardsätze wie „hiermit bewerbe ich mich“. Maximal 300 Wörter, selbstbewusst, aber nicht übertrieben. Anzeige:\n\n[ANZEIGE]",
      placeholders: [
        { key: "STELLE", label: "Stelle", example: "Videoproducer" },
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "einem Naturmagazin" },
        { key: "ERFAHRUNG", label: "Erfahrung", example: "3 Jahre Schnitt, 2 Dokus, Drohnenlizenz" },
        { key: "MOTIVATION", label: "Motivation", example: "Naturthemen und lange Formate" },
        { key: "ANZEIGE", label: "Stellenanzeige", example: "(hier einfügen)" },
      ],
    },
    {
      id: "hr-lebenslauf",
      title: "Lebenslauf schärfen",
      category: C,
      tags: ["Lebenslauf", "CV", "Bewerbende"],
      description: "Einen Lebenslauf auf eine Stelle zuschneiden: Wirkung statt Aufzählung.",
      prompt:
        "Überarbeite meinen Lebenslauf für die Stelle [STELLE]. Formuliere jede Station als Ergebnis (was ich bewirkt habe, mit Zahlen, wo möglich) statt als Aufgabenliste, streiche Irrelevantes, schlage eine Kurzprofil-Zeile oben vor und nenne drei Lücken, die ich im Gespräch erklären sollte. Lebenslauf:\n\n[LEBENSLAUF]",
      placeholders: [
        { key: "STELLE", label: "Stelle", example: "Projektleitung Digital" },
        { key: "LEBENSLAUF", label: "Lebenslauf", example: "(hier einfügen)" },
      ],
    },
    {
      id: "hr-interviewfragen",
      title: "Interviewfragen für ein Vorstellungsgespräch",
      category: C,
      tags: ["Interview", "Fragen", "Arbeitgeber"],
      description: "Fragen, die zeigen, wie jemand wirklich arbeitet, plus Bewertungskriterien.",
      prompt:
        "Erstelle [ANZAHL] Interviewfragen für die Stelle [STELLE]. Wichtigste Kompetenzen: [KOMPETENZEN]. Nutze verhaltensbasierte Fragen („Erzähl mir von einer Situation …“), pro Frage: worauf ich in der Antwort achte, was eine starke und was eine schwache Antwort ist. Ergänze drei Fragen, die die Bewerbenden uns stellen könnten, und wie wir ehrlich antworten.",
      placeholders: [
        { key: "ANZAHL", label: "Anzahl Fragen", example: "8" },
        { key: "STELLE", label: "Stelle", example: "Kundenberatung" },
        { key: "KOMPETENZEN", label: "Kompetenzen", example: "Geduld, Klarheit, Priorisieren unter Druck" },
      ],
    },
    {
      id: "hr-interview-vorbereitung",
      title: "Auf ein Vorstellungsgespräch vorbereiten",
      category: C,
      tags: ["Interview", "Vorbereitung", "Bewerbende"],
      description: "Wahrscheinliche Fragen, starke Antworten und eigene Rückfragen.",
      prompt:
        "Bereite mich auf ein Vorstellungsgespräch für [STELLE] bei [UNTERNEHMEN] vor. Mein Hintergrund: [HINTERGRUND]. Liste die zehn wahrscheinlichsten Fragen, gib mir zu jeder einen Antwortansatz mit meinem Hintergrund, nenne die zwei heikelsten Fragen für mich und wie ich ehrlich damit umgehe, und formuliere fünf gute Rückfragen an das Unternehmen.",
      placeholders: [
        { key: "STELLE", label: "Stelle", example: "Marketing-Verantwortliche" },
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "einem Tierpark" },
        { key: "HINTERGRUND", label: "Hintergrund", example: "5 Jahre Agentur, Quereinstieg aus Biologie" },
      ],
    },
    {
      id: "hr-feedback",
      title: "Mitarbeitergespräch und Feedback",
      category: C,
      tags: ["Feedback", "Gespräch", "Führung"],
      description: "Ein Feedbackgespräch vorbereiten: Beobachtungen, Wirkung, Wunsch.",
      prompt:
        "Hilf mir, ein Feedbackgespräch mit [PERSON] vorzubereiten. Anlass: [ANLASS]. Was gut läuft: [POSITIV]. Was sich ändern sollte: [ÄNDERUNG]. Formuliere Feedback nach dem Muster Beobachtung, Wirkung, Wunsch, ohne Bewertungen der Person. Schlage einen Gesprächsablauf vor, mögliche Reaktionen und wie ich darauf eingehe, und eine Vereinbarung zum Schluss.",
      placeholders: [
        { key: "PERSON", label: "Person", example: "einem Teammitglied" },
        { key: "ANLASS", label: "Anlass", example: "halbjährliches Gespräch" },
        { key: "POSITIV", label: "Positiv", example: "zuverlässig, gute Kundenkommunikation" },
        { key: "ÄNDERUNG", label: "Änderung", example: "Aufgaben werden spät abgegeben" },
      ],
    },
    {
      id: "hr-onboarding",
      title: "Onboarding-Plan für neue Mitarbeitende",
      category: C,
      tags: ["Onboarding", "Einarbeitung", "Plan"],
      description: "Die ersten 30 Tage strukturiert: Ziele, Kontakte, Lernschritte.",
      prompt:
        "Erstelle einen Onboarding-Plan für [STELLE] bei [UNTERNEHMEN] für die ersten 30 Tage. Wichtige Systeme und Themen: [THEMEN]. Gliedere in Woche 1 bis 4 mit Zielen, Aufgaben, Personen zum Kennenlernen und einem kurzen Check-in-Gespräch am Ende jeder Woche. Ergänze eine Willkommensnachricht und eine Liste, was vor dem ersten Tag bereit sein muss.",
      placeholders: [
        { key: "STELLE", label: "Stelle", example: "Content-Managerin" },
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "einer Naturschutzorganisation" },
        { key: "THEMEN", label: "Themen", example: "CMS, Bildarchiv, Social-Media-Richtlinien" },
      ],
    },
    {
      id: "hr-absage",
      title: "Absage an Bewerbende",
      category: C,
      tags: ["Absage", "Bewerbung", "Respekt"],
      description: "Eine respektvolle Absage, die den Eindruck des Unternehmens wahrt.",
      prompt:
        "Schreibe eine Absage an [PERSON] für die Stelle [STELLE]. Grund (intern): [GRUND]. Bedanke dich konkret, nenne einen ehrlichen, aber schonenden Grund, falls sinnvoll, wünsche alles Gute ohne Floskeln und lasse die Tür für die Zukunft offen, wenn das ehrlich gemeint ist. Maximal 120 Wörter.",
      placeholders: [
        { key: "PERSON", label: "Person", example: "eine Bewerberin nach dem zweiten Gespräch" },
        { key: "STELLE", label: "Stelle", example: "Projektleitung" },
        { key: "GRUND", label: "Grund", example: "andere Person mit mehr Führungserfahrung" },
      ],
    },
  ],
};
export default collection;
