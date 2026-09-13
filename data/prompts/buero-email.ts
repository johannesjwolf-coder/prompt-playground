import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Büro & E-Mails";
const collection: PromptCollection = {
  category: C,
  description: "E-Mails, Protokolle, Berichte und Formulierungen für den Arbeitsalltag – klar, höflich, auf den Punkt.",
  templates: [
    {
      id: "buero-email-antwort",
      featured: true,
      title: "E-Mail beantworten",
      category: C,
      tags: ["E-Mail", "Antwort", "Formulierung"],
      description: "Eine eingegangene E-Mail freundlich und vollständig beantworten.",
      prompt:
        "Schreibe eine Antwort auf die folgende E-Mail. Absender: [ABSENDER]. Meine Position dazu: [POSITION]. Tonalität: [TONALITÄT], Anrede: [ANREDE]. Beantworte alle Fragen der E-Mail, halte dich kurz, ende mit einem klaren nächsten Schritt. E-Mail:\n\n[EMAIL]",
      placeholders: [
        { key: "ABSENDER", label: "Absender", example: "ein Kunde" },
        { key: "POSITION", label: "Meine Position", example: "Termin verschieben auf nächste Woche" },
        { key: "TONALITÄT", label: "Tonalität", example: "freundlich, professionell" },
        { key: "ANREDE", label: "Anrede", example: "Sie" },
        { key: "EMAIL", label: "E-Mail", example: "(hier einfügen)" },
      ],
    },
    {
      id: "buero-email-schwierig",
      title: "Schwierige Nachricht überbringen",
      category: C,
      tags: ["E-Mail", "Absage", "Konflikt"],
      description: "Eine Absage, Verzögerung oder Kritik so formulieren, dass die Beziehung intakt bleibt.",
      prompt:
        "Formuliere eine E-Mail an [EMPFÄNGER], in der ich [NACHRICHT] mitteile. Hintergrund: [HINTERGRUND]. Bleibe ehrlich, ohne Ausflüchte, zeige Verständnis für die Situation des Empfängers, biete eine Alternative oder einen nächsten Schritt an. Keine Floskeln, keine übertriebenen Entschuldigungen, maximal 150 Wörter.",
      placeholders: [
        { key: "EMPFÄNGER", label: "Empfänger", example: "einen langjährigen Kunden" },
        { key: "NACHRICHT", label: "Nachricht", example: "dass sich die Lieferung um zwei Wochen verzögert" },
        { key: "HINTERGRUND", label: "Hintergrund", example: "Lieferengpass beim Zulieferer" },
      ],
    },
    {
      id: "buero-protokoll",
      title: "Protokoll aus Notizen",
      category: C,
      tags: ["Protokoll", "Meeting", "Notizen"],
      description: "Aus losen Meeting-Notizen ein strukturiertes Protokoll mit Aufgaben machen.",
      prompt:
        "Erstelle aus den folgenden Notizen ein Protokoll für das Meeting „[MEETING]“ vom [DATUM]. Struktur: Teilnehmende, Besprochene Themen (je zwei bis drei Sätze), Entscheidungen, Aufgaben mit Verantwortlichen und Termin, Offene Punkte. Ergänze nichts, was nicht in den Notizen steht; markiere Unklares mit „(zu klären)“. Notizen:\n\n[NOTIZEN]",
      placeholders: [
        { key: "MEETING", label: "Meeting", example: "Wochenplanung Marketing" },
        { key: "DATUM", label: "Datum", example: "14. September" },
        { key: "NOTIZEN", label: "Notizen", example: "(hier einfügen)" },
      ],
    },
    {
      id: "buero-statusbericht",
      title: "Statusbericht für Vorgesetzte",
      category: C,
      tags: ["Bericht", "Status", "Management"],
      description: "Ein kurzer Statusbericht, der Fortschritt, Probleme und nächste Schritte zeigt.",
      prompt:
        "Schreibe einen Statusbericht zu [PROJEKT] für [EMPFÄNGER]. Zeitraum: [ZEITRAUM]. Fortschritte: [FORTSCHRITTE]. Probleme: [PROBLEME]. Struktur: Gesamtstatus in einem Satz (grün, gelb oder rot mit Begründung), Erreichtes, Risiken und Probleme mit Vorschlag, nächste Schritte, wo ich Unterstützung brauche. Maximal 250 Wörter, keine Rechtfertigungen.",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "Website-Relaunch" },
        { key: "EMPFÄNGER", label: "Empfänger", example: "die Geschäftsleitung" },
        { key: "ZEITRAUM", label: "Zeitraum", example: "letzte zwei Wochen" },
        { key: "FORTSCHRITTE", label: "Fortschritte", example: "Design abgenommen, Texte zu 70 % fertig" },
        { key: "PROBLEME", label: "Probleme", example: "Fotograf hat abgesagt" },
      ],
    },
    {
      id: "buero-anfrage",
      title: "Anfrage an Lieferanten oder Dienstleister",
      category: C,
      tags: ["Anfrage", "Offerte", "Lieferant"],
      description: "Eine präzise Anfrage, damit die Antwort vergleichbar und vollständig wird.",
      prompt:
        "Schreibe eine Anfrage an [ANBIETER] für [LEISTUNG]. Rahmenbedingungen: [RAHMEN]. Frage gezielt nach: Preis und was enthalten ist, Zeitplan, Referenzen, Ablauf der Zusammenarbeit, offene Fragen des Anbieters an uns. Bitte um Antwort bis [FRIST]. Höflich, klar strukturiert, maximal 200 Wörter.",
      placeholders: [
        { key: "ANBIETER", label: "Anbieter", example: "eine Videoproduktionsfirma" },
        { key: "LEISTUNG", label: "Leistung", example: "einen 90-Sekunden-Imagefilm" },
        { key: "RAHMEN", label: "Rahmen", example: "Budget bis CHF 8'000, Dreh im Oktober" },
        { key: "FRIST", label: "Frist", example: "Ende nächster Woche" },
      ],
    },
    {
      id: "buero-nachfassen",
      title: "Freundlich nachfassen",
      category: C,
      tags: ["Nachfassen", "Erinnerung", "Follow-up"],
      description: "Eine Erinnerung, die nicht drängt, aber eine Antwort auslöst.",
      prompt:
        "Schreibe eine kurze Nachfass-E-Mail an [EMPFÄNGER]. Worum es ging: [ANLIEGEN]. Meine letzte Nachricht war am [DATUM]. Erinnere freundlich, mache das Antworten leicht (z. B. eine konkrete Frage oder zwei Optionen zur Auswahl), nenne, bis wann ich eine Rückmeldung brauche und warum. Maximal 100 Wörter.",
      placeholders: [
        { key: "EMPFÄNGER", label: "Empfänger", example: "einen potenziellen Kunden" },
        { key: "ANLIEGEN", label: "Anliegen", example: "das Angebot für die neue Website" },
        { key: "DATUM", label: "Datum der letzten Nachricht", example: "2. September" },
      ],
    },
    {
      id: "buero-abwesenheit",
      title: "Abwesenheitsnotiz",
      category: C,
      tags: ["Abwesenheit", "Autoreply", "Urlaub"],
      description: "Eine hilfreiche Abwesenheitsnotiz mit Vertretung und Erwartung.",
      prompt:
        "Schreibe eine Abwesenheitsnotiz für [NAME], abwesend von [VON] bis [BIS]. Vertretung: [VERTRETUNG]. Nenne, wann ich wieder erreichbar bin, ob Mails gelesen werden, an wen man sich bei Dringendem wendet. Tonalität: [TONALITÄT]. Eine Version auf Deutsch und eine auf Englisch, je maximal 60 Wörter.",
      placeholders: [
        { key: "NAME", label: "Name", example: "Lena Marti" },
        { key: "VON", label: "Von", example: "1. Oktober" },
        { key: "BIS", label: "Bis", example: "14. Oktober" },
        { key: "VERTRETUNG", label: "Vertretung", example: "Jonas Keller, jonas@beispiel.ch" },
        { key: "TONALITÄT", label: "Tonalität", example: "freundlich, knapp" },
      ],
    },
    {
      id: "buero-stellungnahme",
      title: "Stellungnahme oder Begründung",
      category: C,
      tags: ["Stellungnahme", "Begründung", "Argumentation"],
      description: "Einen Standpunkt sachlich begründen, mit Argumenten und Gegenargumenten.",
      prompt:
        "Schreibe eine Stellungnahme zu [THEMA] aus Sicht von [ROLLE]. Mein Standpunkt: [STANDPUNKT]. Struktur: Ausgangslage, Standpunkt in einem Satz, drei Argumente mit Belegen oder Beispielen, das stärkste Gegenargument und meine Antwort darauf, Empfehlung. Sachlich, ohne Polemik, maximal 400 Wörter.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Einführung einer Vier-Tage-Woche im Team" },
        { key: "ROLLE", label: "Rolle", example: "Teamleitung" },
        { key: "STANDPUNKT", label: "Standpunkt", example: "Pilotversuch für sechs Monate" },
      ],
    },
  ],
};
export default collection;
