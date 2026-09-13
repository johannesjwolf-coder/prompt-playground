import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Produktivität & Selbstorganisation";
const collection: PromptCollection = {
  category: C,
  description: "Ziele setzen, Tage planen, Prioritäten klären, Gewohnheiten aufbauen, aus Fehlern lernen.",
  templates: [
    {
      id: "prod-tagesplan",
      featured: true,
      title: "Tagesplan mit Energie-Kurve",
      category: C,
      tags: ["Tagesplan", "Fokus", "Zeit"],
      description: "Aufgaben so auf den Tag verteilen, dass Konzentration und Termine zusammenpassen.",
      prompt:
        "Plane meinen Tag. Aufgaben: [AUFGABEN]. Feste Termine: [TERMINE]. Ich bin am konzentriertesten: [ENERGIE]. Arbeitszeit: [ARBEITSZEIT]. Lege die anspruchsvollste Aufgabe in meine beste Zeit, bündle kleine Aufgaben, plane Pausen und einen Puffer für Unerwartetes ein. Gib mir den Plan als Zeitleiste und nenne die eine Aufgabe, die ich heute unbedingt schaffen sollte.",
      placeholders: [
        { key: "AUFGABEN", label: "Aufgaben", example: "Angebot schreiben, 20 E-Mails, Video schneiden, Einkauf" },
        { key: "TERMINE", label: "Termine", example: "11 Uhr Kundencall, 15 Uhr Kinder abholen" },
        { key: "ENERGIE", label: "Beste Zeit", example: "morgens zwischen 8 und 11" },
        { key: "ARBEITSZEIT", label: "Arbeitszeit", example: "8 bis 17 Uhr" },
      ],
    },
    {
      id: "prod-ziele",
      title: "Ziel konkret machen",
      category: C,
      tags: ["Ziele", "Planung", "Messbar"],
      description: "Aus einem vagen Wunsch ein messbares Ziel mit Zwischenschritten machen.",
      prompt:
        "Hilf mir, dieses Ziel konkret zu machen: [ZIEL]. Bis wann: [FRIST]. Warum es mir wichtig ist: [WARUM]. Formuliere es messbar, zerlege es in drei bis fünf Zwischenziele mit Terminen, nenne für jedes den ersten kleinen Schritt, die wahrscheinlichste Hürde und wie ich damit umgehe, und schlage vor, wie ich wöchentlich den Fortschritt prüfe, ohne mich zu stressen.",
      placeholders: [
        { key: "ZIEL", label: "Ziel", example: "meine eigene Website online bringen" },
        { key: "FRIST", label: "Frist", example: "in drei Monaten" },
        { key: "WARUM", label: "Warum", example: "um Aufträge als Fotografin zu bekommen" },
      ],
    },
    {
      id: "prod-prioritaeten",
      title: "Aufgaben priorisieren",
      category: C,
      tags: ["Prioritäten", "Entscheiden", "Überblick"],
      description: "Eine lange Liste nach Wirkung und Dringlichkeit sortieren und Ballast streichen.",
      prompt:
        "Hier ist meine Aufgabenliste: [AUFGABEN]. Mein wichtigstes Ziel gerade: [ZIEL]. Sortiere die Aufgaben in vier Gruppen: jetzt, planen, delegieren oder vereinfachen, streichen. Begründe jede Zuordnung in einem Satz, nenne die drei Aufgaben mit dem besten Verhältnis von Wirkung zu Aufwand, und frage mich nach allem, was du wissen müsstest, um besser zu sortieren.",
      placeholders: [
        { key: "AUFGABEN", label: "Aufgaben", example: "(Liste hier einfügen)" },
        { key: "ZIEL", label: "Ziel", example: "das Projekt bis Monatsende abschliessen" },
      ],
    },
    {
      id: "prod-gewohnheit",
      title: "Gewohnheit aufbauen",
      category: C,
      tags: ["Gewohnheit", "Routine", "Verhalten"],
      description: "Eine neue Gewohnheit so klein und konkret anlegen, dass sie bleibt.",
      prompt:
        "Ich möchte die Gewohnheit aufbauen: [GEWOHNHEIT]. Bisherige Versuche: [VERSUCHE]. Mein Alltag: [ALLTAG]. Entwirf eine Startversion, die weniger als fünf Minuten dauert, kopple sie an eine bestehende Routine, nenne die wahrscheinlichsten Störungen und was ich dann tue, und wie ich nach vier Wochen entscheide, ob ich steigere. Keine Motivationssprüche, nur Mechanik.",
      placeholders: [
        { key: "GEWOHNHEIT", label: "Gewohnheit", example: "jeden Tag 20 Minuten schreiben" },
        { key: "VERSUCHE", label: "Bisherige Versuche", example: "zweimal begonnen, nach zwei Wochen aufgehört" },
        { key: "ALLTAG", label: "Alltag", example: "Bürojob, Kinder, abends müde" },
      ],
    },
    {
      id: "prod-notizen",
      title: "Notizen ordnen und verdichten",
      category: C,
      tags: ["Notizen", "Struktur", "Wissen"],
      description: "Aus unsortierten Notizen eine klare Struktur mit Kernpunkten und offenen Fragen.",
      prompt:
        "Ordne die folgenden Notizen zu [THEMA]. Erstelle eine Gliederung mit Überschriften, fasse pro Abschnitt die Kernpunkte in Stichworten zusammen, markiere Widersprüche und offene Fragen, und liste am Ende alle Aufgaben, die in den Notizen versteckt sind. Erfinde nichts dazu. Notizen:\n\n[NOTIZEN]",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Ideen für mein Website-Projekt" },
        { key: "NOTIZEN", label: "Notizen", example: "(hier einfügen)" },
      ],
    },
    {
      id: "prod-retro",
      title: "Rückblick und Lernen aus einem Projekt",
      category: C,
      tags: ["Retrospektive", "Lernen", "Reflexion"],
      description: "Ein strukturierter Rückblick: Was lief gut, was nicht, was ändern wir.",
      prompt:
        "Führe mit mir einen Rückblick auf [PROJEKT]. Ergebnis: [ERGEBNIS]. Stelle mir nacheinander diese Fragen und warte jeweils auf meine Antwort: Was lief besser als erwartet? Was hat am meisten Zeit gekostet? Was würde ich sofort anders machen? Was habe ich vermieden? Fasse am Ende drei konkrete Regeln für das nächste Projekt zusammen und eine Sache, die ich beibehalten sollte.",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "den Relaunch meiner Website" },
        { key: "ERGEBNIS", label: "Ergebnis", example: "zwei Wochen zu spät, aber gut gelungen" },
      ],
    },
    {
      id: "prod-entscheidung-schnell",
      title: "Schnelle Entscheidung mit Pro und Contra",
      category: C,
      tags: ["Entscheidung", "Pro Contra", "Schnell"],
      description: "Eine kleinere Entscheidung in fünf Minuten sauber durchdenken.",
      prompt:
        "Ich muss entscheiden: [ENTSCHEIDUNG]. Option A: [OPTION A]. Option B: [OPTION B]. Was mir wichtig ist: [WICHTIG]. Liste pro Option die drei stärksten Argumente dafür und dagegen, nenne, was ich in einem Jahr eher bereuen würde, und gib eine klare Empfehlung mit einem Satz Begründung. Wenn eine dritte Option offensichtlich ist, nenne sie.",
      placeholders: [
        { key: "ENTSCHEIDUNG", label: "Entscheidung", example: "ob ich den Kurs jetzt oder im Frühling buche" },
        { key: "OPTION A", label: "Option A", example: "jetzt buchen, günstiger" },
        { key: "OPTION B", label: "Option B", example: "im Frühling, mehr Zeit" },
        { key: "WICHTIG", label: "Wichtig", example: "wirklich dranbleiben können" },
      ],
    },
    {
      id: "prod-wochenrueckblick",
      title: "Wochenrückblick in zehn Minuten",
      category: C,
      tags: ["Rückblick", "Woche", "Reflexion"],
      description: "Ein kurzes Ritual, um die Woche abzuschliessen und die nächste zu planen.",
      prompt:
        "Leite mich durch einen Wochenrückblick. Meine Woche in Stichworten: [WOCHE]. Ziele, die ich hatte: [ZIELE]. Stelle mir vier kurze Fragen nacheinander (Erreichtes, Gelerntes, Ungelöstes, Energie), warte jeweils auf meine Antwort, und erstelle danach: drei Prioritäten für nächste Woche, eine Sache, die ich weglasse, und einen Satz, den ich mir für die Woche merke.",
      placeholders: [
        { key: "WOCHE", label: "Woche", example: "viel Kundenarbeit, Website liegen geblieben, gut geschlafen" },
        { key: "ZIELE", label: "Ziele", example: "Website-Texte fertig, zwei Angebote raus" },
      ],
    },
  ],
};
export default collection;
