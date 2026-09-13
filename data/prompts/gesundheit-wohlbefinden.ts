import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Gesundheit & Wohlbefinden";
const collection: PromptCollection = {
  category: C,
  description: "Bewegung, Schlaf, Pausen, Ernährung und Ausflüge – alltagstauglich und ohne medizinischen Anspruch.",
  templates: [
    {
      id: "ges-einsteiger-training",
      featured: true,
      title: "Trainingsplan für Einsteiger",
      category: C,
      tags: ["Training", "Einsteiger", "Bewegung"],
      description: "Ein sanfter Einstieg in regelmässige Bewegung, passend zu Zeit und Alltag.",
      prompt:
        "Erstelle einen Einsteiger-Trainingsplan für [PERSON]. Ziel: [ZIEL]. Zeit: [ZEIT] pro Woche. Ort: [ORT]. Der Plan soll in den ersten zwei Wochen bewusst leicht sein, dann langsam steigern, Übungen mit kurzer Technik-Beschreibung enthalten, Aufwärmen und Dehnen einplanen und mir sagen, woran ich merke, dass ich es übertreibe. Hinweis: Bei Beschwerden oder Vorerkrankungen ärztlich abklären.",
      placeholders: [
        { key: "PERSON", label: "Person", example: "mich, 42, lange keinen Sport gemacht" },
        { key: "ZIEL", label: "Ziel", example: "fitter werden und Rückenschmerzen vorbeugen" },
        { key: "ZEIT", label: "Zeit pro Woche", example: "3 x 25 Minuten" },
        { key: "ORT", label: "Ort", example: "zu Hause ohne Geräte" },
      ],
    },
    {
      id: "ges-schlaf",
      title: "Abendroutine für besseren Schlaf",
      category: C,
      tags: ["Schlaf", "Routine", "Abend"],
      description: "Eine Abendroutine, die zum Alltag passt, mit den wirksamsten Stellschrauben.",
      prompt:
        "Hilf mir, eine Abendroutine für besseren Schlaf zu entwickeln. Mein Abend heute: [ABEND]. Probleme: [PROBLEME]. Schlafenszeit: [ZEIT]. Schlage eine Routine für die letzten 90 Minuten vor, die realistisch ist, nenne die drei Stellschrauben mit der grössten Wirkung, was ich in den ersten Tagen erwarten kann, und wie ich nach zwei Wochen prüfe, ob es hilft. Hinweis: Bei anhaltenden Schlafproblemen ärztlichen Rat einholen.",
      placeholders: [
        { key: "ABEND", label: "Abend heute", example: "bis 23 Uhr am Laptop, dann Handy im Bett" },
        { key: "PROBLEME", label: "Probleme", example: "einschlafen dauert lange, nachts wach" },
        { key: "ZEIT", label: "Schlafenszeit", example: "23 Uhr" },
      ],
    },
    {
      id: "ges-pausen",
      title: "Pausen und Stressabbau im Arbeitstag",
      category: C,
      tags: ["Stress", "Pausen", "Arbeit"],
      description: "Kleine Pausen und Übungen, die sich in einen vollen Arbeitstag einbauen lassen.",
      prompt:
        "Mein Arbeitstag: [ARBEITSTAG]. Was mich stresst: [STRESS]. Schlage fünf kurze Pausen-Rituale (1 bis 5 Minuten) vor, die in diesen Tag passen, mit genauer Anleitung, wann ich sie einbaue und woran ich merke, dass sie wirken. Ergänze eine Regel für den Umgang mit Unterbrechungen und eine Sache, die ich am Abend lassen sollte.",
      placeholders: [
        { key: "ARBEITSTAG", label: "Arbeitstag", example: "8 Stunden Bildschirm, viele Meetings" },
        { key: "STRESS", label: "Stress", example: "ständige Unterbrechungen, Zeitdruck" },
      ],
    },
    {
      id: "ges-mealprep",
      title: "Meal-Prep für die Woche",
      category: C,
      tags: ["Meal-Prep", "Kochen", "Vorkochen"],
      description: "Ein Vorkoch-Plan für den Sonntag, der die Woche entspannt.",
      prompt:
        "Erstelle einen Meal-Prep-Plan für [PERSONEN] für [ANZAHL] Mittagessen unter der Woche. Vorlieben und Einschränkungen: [VORLIEBEN]. Zeit am Sonntag: [ZEIT]. Nutze Basis-Komponenten, die sich kombinieren lassen, damit es nicht jeden Tag gleich schmeckt. Liefere: Einkaufsliste, Ablauf beim Kochen in Reihenfolge, wie ich lagere und aufwärme, und welche Portionen sich einfrieren lassen.",
      placeholders: [
        { key: "PERSONEN", label: "Personen", example: "zwei Personen" },
        { key: "ANZAHL", label: "Anzahl Mittagessen", example: "4" },
        { key: "VORLIEBEN", label: "Vorlieben", example: "viel Gemüse, Hühnchen okay, keine Pilze" },
        { key: "ZEIT", label: "Zeit am Sonntag", example: "2 Stunden" },
      ],
    },
    {
      id: "ges-wanderung",
      title: "Wanderung oder Ausflug planen",
      category: C,
      tags: ["Wandern", "Ausflug", "Natur"],
      description: "Eine Tour, die zu Kondition, Zeit und Wetter passt, mit Packliste.",
      prompt:
        "Plane eine Wanderung in der Region [REGION] für [PERSONEN]. Kondition: [KONDITION]. Zeit: [ZEIT]. Jahreszeit: [JAHRESZEIT]. Schlage zwei bis drei Touren vor mit Länge, Höhenmetern, Dauer, Einkehr, Anreise mit öffentlichem Verkehr und einem Satz, was die Tour besonders macht. Ergänze eine Packliste und drei Sicherheitshinweise für diese Jahreszeit. Nenne, welche Angaben ich vor Ort prüfen sollte (Öffnungszeiten, Wetter, Sperrungen).",
      placeholders: [
        { key: "REGION", label: "Region", example: "Berner Oberland" },
        { key: "PERSONEN", label: "Personen", example: "zwei Erwachsene und ein Kind (9)" },
        { key: "KONDITION", label: "Kondition", example: "mittel, wenig Erfahrung im Gebirge" },
        { key: "ZEIT", label: "Zeit", example: "ein Tag" },
        { key: "JAHRESZEIT", label: "Jahreszeit", example: "Oktober" },
      ],
    },
    {
      id: "ges-tagebuch",
      title: "Reflexionsfragen für ein Tagebuch",
      category: C,
      tags: ["Tagebuch", "Reflexion", "Achtsamkeit"],
      description: "Kurze, wechselnde Fragen für ein tägliches Tagebuch-Ritual.",
      prompt:
        "Erstelle 30 Reflexionsfragen für ein tägliches Tagebuch mit Fokus auf [FOKUS]. Die Fragen sollen in zwei bis fünf Minuten beantwortbar sein, abwechseln zwischen Rückblick, Dankbarkeit, Lernen und Vorausschau, und keine Frage zweimal in ähnlicher Form stellen. Gruppiere sie nach Wochentagen und schlage ein Format vor (Papier oder App), das zu [ALLTAG] passt.",
      placeholders: [
        { key: "FOKUS", label: "Fokus", example: "Gelassenheit und Energie" },
        { key: "ALLTAG", label: "Alltag", example: "morgens wenig Zeit, abends ruhiger" },
      ],
    },
  ],
};
export default collection;
