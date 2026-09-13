import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Kreatives Schreiben";
const collection: PromptCollection = {
  category: C,
  description: "Geschichten, Figuren, Dialoge, Gedichte und Ideen – für Autorinnen, Autoren und alle, die es werden wollen.",
  templates: [
    {
      id: "krea-kurzgeschichte",
      featured: true,
      title: "Kurzgeschichte aus einer Prämisse",
      category: C,
      tags: ["Kurzgeschichte", "Erzählung", "Prämisse"],
      description: "Aus einer Idee wird eine Kurzgeschichte mit Figur, Konflikt und Wendung.",
      prompt:
        "Schreibe eine Kurzgeschichte von etwa [LÄNGE] Wörtern. Prämisse: [PRÄMISSE]. Genre: [GENRE]. Erzählperspektive: [PERSPEKTIVE]. Die Hauptfigur will etwas Konkretes, stösst auf ein Hindernis, und am Ende hat sich etwas verändert. Zeige, statt zu erklären; nutze Details, die man sehen, hören oder riechen kann; kein Anfang mit dem Wetter.",
      placeholders: [
        { key: "LÄNGE", label: "Länge in Wörtern", example: "1200" },
        { key: "PRÄMISSE", label: "Prämisse", example: "Eine Rangerin findet einen Löwen, der sich vor Menschen nicht fürchtet" },
        { key: "GENRE", label: "Genre", example: "leise Naturgeschichte" },
        { key: "PERSPEKTIVE", label: "Perspektive", example: "Ich-Erzählerin" },
      ],
    },
    {
      id: "krea-figur",
      title: "Figur entwickeln",
      category: C,
      tags: ["Figur", "Charakter", "Steckbrief"],
      description: "Eine glaubwürdige Figur mit Wunsch, Angst, Widerspruch und Stimme.",
      prompt:
        "Entwickle eine Figur für [PROJEKT]. Rolle in der Geschichte: [ROLLE]. Erstelle: Kurzbiografie, was sie will und warum, wovor sie Angst hat, ein innerer Widerspruch, eine Eigenheit in Sprache oder Verhalten, wie andere sie sehen, und eine Szene von 150 Wörtern, in der ihre Stimme hörbar wird. Vermeide Klischees des Genres [GENRE].",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "einen Roman über eine Wildtierstation" },
        { key: "ROLLE", label: "Rolle", example: "die Gegenspielerin" },
        { key: "GENRE", label: "Genre", example: "Familienroman" },
      ],
    },
    {
      id: "krea-dialog",
      title: "Dialog mit Subtext",
      category: C,
      tags: ["Dialog", "Subtext", "Szene"],
      description: "Ein Gespräch, in dem beide etwas anderes wollen, als sie sagen.",
      prompt:
        "Schreibe einen Dialog zwischen [FIGUR A] und [FIGUR B]. Situation: [SITUATION]. Was A wirklich will: [ZIEL A]. Was B wirklich will: [ZIEL B]. Keine Figur spricht ihr Ziel direkt aus. Nutze Unterbrechungen, Ausweichen und Pausen; wenig Regieanweisungen; die Szene endet mit einer kleinen Verschiebung im Machtverhältnis. Länge etwa 400 Wörter.",
      placeholders: [
        { key: "FIGUR A", label: "Figur A", example: "eine Tierpflegerin" },
        { key: "FIGUR B", label: "Figur B", example: "der neue Direktor" },
        { key: "SITUATION", label: "Situation", example: "spätabends beim Löwengehege" },
        { key: "ZIEL A", label: "Ziel A", example: "das Gehege darf nicht verkleinert werden" },
        { key: "ZIEL B", label: "Ziel B", example: "Kosten sparen, ohne als Bösewicht dazustehen" },
      ],
    },
    {
      id: "krea-plot",
      title: "Handlung in drei Akten",
      category: C,
      tags: ["Plot", "Struktur", "Roman"],
      description: "Aus einer Idee eine Handlungsstruktur mit Wendepunkten und offenen Fragen.",
      prompt:
        "Entwickle aus dieser Idee eine Handlung in drei Akten: [IDEE]. Genre: [GENRE], Zielgruppe: [ZIELGRUPPE]. Liefere: Logline, Hauptfigur mit Wunsch und Bedürfnis, auslösendes Ereignis, Wendepunkt nach Akt 1, Mittelpunkt, Tiefpunkt, Höhepunkt, Auflösung. Nenne drei Fragen, die die Geschichte beantworten muss, und zwei Stellen, an denen sie wahrscheinlich durchhängt.",
      placeholders: [
        { key: "IDEE", label: "Idee", example: "Ein Junge im Dorf am Nationalpark freundet sich mit einem verletzten Löwen an" },
        { key: "GENRE", label: "Genre", example: "Jugendroman" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "12 bis 15 Jahre" },
      ],
    },
    {
      id: "krea-gedicht",
      title: "Gedicht in einer bestimmten Form",
      category: C,
      tags: ["Gedicht", "Lyrik", "Form"],
      description: "Ein Gedicht mit Form, Bild und Thema, ohne Reimzwang-Kitsch.",
      prompt:
        "Schreibe ein Gedicht über [THEMA] in der Form [FORM]. Stimmung: [STIMMUNG]. Arbeite mit einem zentralen Bild, das sich durch das Gedicht entwickelt, vermeide abgenutzte Reime und Wörter wie „Herz“ oder „Seele“, nutze konkrete Sinneseindrücke. Liefere zwei Varianten: eine strenge in der Form und eine freiere.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "ein Löwe, der die Nacht bewacht" },
        { key: "FORM", label: "Form", example: "vier Strophen zu vier Zeilen" },
        { key: "STIMMUNG", label: "Stimmung", example: "ruhig, wach, leicht bedrohlich" },
      ],
    },
    {
      id: "krea-kinderbuch",
      title: "Kinderbuch-Geschichte mit Bildideen",
      category: C,
      tags: ["Kinderbuch", "Bilderbuch", "Vorlesen"],
      description: "Eine Vorlesegeschichte mit klarer Botschaft, Wiederholungen und Bildideen pro Seite.",
      prompt:
        "Schreibe eine Bilderbuch-Geschichte für Kinder von [ALTER] über [THEMA]. Hauptfigur: [FIGUR]. Botschaft (nicht ausgesprochen): [BOTSCHAFT]. Gliedere in [SEITEN] Doppelseiten mit je zwei bis vier Sätzen und einer Bildidee, nutze ein wiederkehrendes Element (Satz, Geräusch oder Frage), baue eine kleine Spannung auf und ein tröstliches Ende. Einfache, klangvolle Sprache zum Vorlesen.",
      placeholders: [
        { key: "ALTER", label: "Alter", example: "4 bis 6 Jahren" },
        { key: "THEMA", label: "Thema", example: "einen kleinen Löwen, der nicht brüllen kann" },
        { key: "FIGUR", label: "Figur", example: "Löwenjunge Kito" },
        { key: "BOTSCHAFT", label: "Botschaft", example: "Man muss nicht laut sein, um mutig zu sein" },
        { key: "SEITEN", label: "Doppelseiten", example: "12" },
      ],
    },
    {
      id: "krea-lektorat",
      title: "Lektorat für eine Szene",
      category: C,
      tags: ["Lektorat", "Feedback", "Überarbeiten"],
      description: "Ehrliches Feedback zu Spannung, Figuren, Sprache, mit konkreten Vorschlägen.",
      prompt:
        "Lektoriere die folgende Szene aus [PROJEKT], Genre [GENRE]. Beurteile: Spannung und Tempo, Glaubwürdigkeit der Figuren, Dialog, Sprache (Füllwörter, Wiederholungen, Klischees), Perspektive. Gib zu jedem Punkt ein konkretes Beispiel aus dem Text und einen Vorschlag. Am Ende: die eine Änderung mit der grössten Wirkung. Sei ehrlich, nicht höflich. Szene:\n\n[TEXT]",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "meinem Roman" },
        { key: "GENRE", label: "Genre", example: "Abenteuer" },
        { key: "TEXT", label: "Szene", example: "(hier einfügen)" },
      ],
    },
    {
      id: "krea-ideen",
      title: "20 Geschichtenideen",
      category: C,
      tags: ["Ideen", "Brainstorming", "Prämissen"],
      description: "Viele ungewöhnliche Prämissen zu einem Thema, um die beste zu finden.",
      prompt:
        "Gib mir 20 Prämissen für Geschichten zum Thema [THEMA] im Genre [GENRE]. Jede Prämisse in einem Satz mit Figur, Wunsch und Hindernis. Vermeide die zehn naheliegendsten Ideen; mische Perspektiven (Kind, Tier, Aussenseiter, Gegner), Zeiten und Tonlagen. Markiere die drei, die am meisten Konfliktpotenzial haben.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Löwen und Menschen" },
        { key: "GENRE", label: "Genre", example: "beliebig" },
      ],
    },
  ],
};
export default collection;
