import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Business & Planung";
const collection: PromptCollection = {
  category: C,
  description: "Ideen prüfen, Angebote formulieren, Projekte planen und Entscheidungen strukturieren.",
  templates: [
    {
      id: "biz-idee-pruefen",
      featured: true,
      title: "Geschäftsidee ehrlich prüfen",
      category: C,
      tags: ["Idee", "Validierung", "Risiko"],
      description: "Eine Idee auf Nachfrage, Wettbewerb, Aufwand und Risiken abklopfen.",
      prompt:
        "Prüfe meine Geschäftsidee kritisch: [IDEE]. Zielgruppe: [ZIELGRUPPE]. Wie ich Geld verdienen will: [ERLÖSMODELL]. Beantworte: Welches Problem löst das wirklich? Wer löst es heute schon und wie? Was sind die drei grössten Annahmen, die stimmen müssen, und wie teste ich jede in einer Woche ohne viel Geld? Was spricht klar dagegen? Sei ehrlich, nicht ermutigend.",
      placeholders: [
        { key: "IDEE", label: "Idee", example: "eine bezahlte Live-Webcam-Plattform für Wildtiere" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Naturfans in Europa" },
        { key: "ERLÖSMODELL", label: "Erlösmodell", example: "Monatsabo" },
      ],
    },
    {
      id: "biz-angebot",
      title: "Angebot oder Offerte schreiben",
      category: C,
      tags: ["Offerte", "Angebot", "Kunden"],
      description: "Ein klares, faires Angebot mit Leistung, Ablauf, Preis und Bedingungen.",
      prompt:
        "Schreibe ein Angebot von [ANBIETER] an [KUNDE] für [LEISTUNG]. Enthalte: Ausgangslage in zwei Sätzen, Ziel, Leistungsumfang als Liste, was nicht enthalten ist, Ablauf mit Zeitplan, Preis [PREIS] mit Zahlungsbedingungen, Gültigkeit und nächste Schritte. Klar und freundlich, ohne Juristendeutsch. Maximal eine Seite.",
      placeholders: [
        { key: "ANBIETER", label: "Anbieter", example: "einer kleinen Webagentur" },
        { key: "KUNDE", label: "Kunde", example: "einen Tierpark" },
        { key: "LEISTUNG", label: "Leistung", example: "eine neue Website mit Live-Video-Bereich" },
        { key: "PREIS", label: "Preis", example: "CHF 12'000 pauschal" },
      ],
    },
    {
      id: "biz-projektplan",
      title: "Projektplan mit Meilensteinen",
      category: C,
      tags: ["Projekt", "Plan", "Meilensteine"],
      description: "Ein realistischer Plan mit Phasen, Meilensteinen, Verantwortlichkeiten und Risiken.",
      prompt:
        "Erstelle einen Projektplan für [PROJEKT]. Start: [START], gewünschtes Ende: [ENDE]. Beteiligte: [BETEILIGTE]. Gliedere in Phasen mit Meilensteinen, nenne pro Phase die Ergebnisse, wer was tut, Abhängigkeiten und den grössten Zeitfresser. Ergänze eine Liste von fünf Risiken mit Gegenmassnahmen und einen Vorschlag, wie wir wöchentlich den Stand prüfen.",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "Relaunch der Tierpark-Website" },
        { key: "START", label: "Start", example: "1. Oktober" },
        { key: "ENDE", label: "Ende", example: "15. Dezember" },
        { key: "BETEILIGTE", label: "Beteiligte", example: "Projektleitung, Designerin, Entwickler, Marketing" },
      ],
    },
    {
      id: "biz-entscheidung",
      title: "Entscheidung strukturiert treffen",
      category: C,
      tags: ["Entscheidung", "Optionen", "Kriterien"],
      description: "Optionen anhand von Kriterien vergleichen und eine begründete Empfehlung erhalten.",
      prompt:
        "Ich muss mich entscheiden: [ENTSCHEIDUNG]. Optionen: [OPTIONEN]. Was mir wichtig ist: [KRITERIEN]. Erstelle eine Bewertungsmatrix mit gewichteten Kriterien, bewerte jede Option nachvollziehbar, nenne pro Option das grösste Risiko und was ich später bereuen könnte. Gib eine Empfehlung und sage, welche Information die Entscheidung noch kippen könnte.",
      placeholders: [
        { key: "ENTSCHEIDUNG", label: "Entscheidung", example: "welche Plattform für unsere Live-Videos" },
        { key: "OPTIONEN", label: "Optionen", example: "YouTube Live, Vimeo, eigener Streaming-Server" },
        { key: "KRITERIEN", label: "Kriterien", example: "Kosten, Zuverlässigkeit, Datenschutz, Einbindung in die Website" },
      ],
    },
    {
      id: "biz-meeting",
      title: "Meeting vorbereiten und protokollieren",
      category: C,
      tags: ["Meeting", "Agenda", "Protokoll"],
      description: "Agenda mit Zielen vorab, Protokoll-Vorlage mit Entscheidungen und Aufgaben danach.",
      prompt:
        "Bereite ein Meeting zu [THEMA] vor, Dauer [DAUER], Teilnehmende: [TEILNEHMENDE]. Ziel des Meetings: [ZIEL]. Liefere eine Agenda mit Zeitblöcken und je einer Leitfrage, was vorab gelesen werden sollte, und eine Protokoll-Vorlage mit den Feldern Entscheidungen, Aufgaben (wer, bis wann), offene Punkte.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Konzept für den Live-Video-Bereich" },
        { key: "DAUER", label: "Dauer", example: "45 Minuten" },
        { key: "TEILNEHMENDE", label: "Teilnehmende", example: "Marketing, Technik, Geschäftsleitung" },
        { key: "ZIEL", label: "Ziel", example: "Entscheidung über Plattform und Budget" },
      ],
    },
    {
      id: "biz-kundenfeedback",
      title: "Kundenfeedback auswerten",
      category: C,
      tags: ["Feedback", "Auswertung", "Muster"],
      description: "Aus vielen Rückmeldungen Muster, Prioritäten und Massnahmen ableiten.",
      prompt:
        "Werte das folgende Kundenfeedback zu [PRODUKT] aus. Gruppiere nach Themen, zähle, wie oft jedes Thema vorkommt, unterscheide Lob, Kritik und Wünsche, zitiere pro Thema eine typische Aussage und leite drei priorisierte Massnahmen ab. Sag auch, was das Feedback nicht hergibt. Feedback:\n\n[FEEDBACK]",
      placeholders: [
        { key: "PRODUKT", label: "Produkt", example: "unsere Tierpark-App" },
        { key: "FEEDBACK", label: "Feedback", example: "(hier einfügen)" },
      ],
    },
    {
      id: "biz-pitch",
      title: "Kurz-Pitch in 60 Sekunden",
      category: C,
      tags: ["Pitch", "Präsentation", "Elevator Pitch"],
      description: "Ein Pitch, der in einer Minute Problem, Lösung und Wirkung auf den Punkt bringt.",
      prompt:
        "Schreibe einen 60-Sekunden-Pitch für [PROJEKT] vor [PUBLIKUM]. Ziel des Pitches: [ZIEL]. Aufbau: ein Satz, der das Problem greifbar macht; unsere Lösung in zwei Sätzen; warum wir; ein Beleg oder Beispiel; die konkrete Bitte am Ende. Gesprochene Sprache, keine Folien-Sprache, maximal 150 Wörter. Ergänze drei kritische Fragen, die danach kommen könnten, mit kurzen Antworten.",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "eine Live-Webcam-Plattform für Wildtiere" },
        { key: "PUBLIKUM", label: "Publikum", example: "einer Stiftung für Naturschutz" },
        { key: "ZIEL", label: "Ziel", example: "ein Folgegespräch über Förderung" },
      ],
    },
    {
      id: "biz-wochenplan",
      title: "Woche planen mit Prioritäten",
      category: C,
      tags: ["Planung", "Produktivität", "Prioritäten"],
      description: "Aufgaben sortieren, realistische Tagesblöcke bilden und Pufferzeit einplanen.",
      prompt:
        "Hilf mir, meine Woche zu planen. Meine Aufgaben: [AUFGABEN]. Feste Termine: [TERMINE]. Wichtigstes Ziel der Woche: [ZIEL]. Sortiere nach Wirkung und Dringlichkeit, verteile die Aufgaben in realistische Blöcke pro Tag mit Pufferzeit, markiere, was ich streichen oder delegieren sollte, und schlage vor, wann ich am Freitag prüfe, was geklappt hat.",
      placeholders: [
        { key: "AUFGABEN", label: "Aufgaben", example: "Website-Texte, Angebot schreiben, Videos schneiden, Buchhaltung" },
        { key: "TERMINE", label: "Termine", example: "Dienstag 10 Uhr Kundengespräch, Donnerstag Dreh" },
        { key: "ZIEL", label: "Wochenziel", example: "Angebot rausschicken" },
      ],
    },
  ],
};
export default collection;
