import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Spiele & Unterhaltung";
const collection: PromptCollection = {
  category: C,
  description: "Textabenteuer, Quiz, Rätsel, Rollenspiele und Spielideen für Abende mit Freunden oder Familie.",
  templates: [
    {
      id: "spiel-textadventure",
      featured: true,
      title: "Textabenteuer spielen",
      category: C,
      tags: ["Textadventure", "Interaktiv", "Geschichte"],
      description: "Die KI leitet ein interaktives Abenteuer, du entscheidest bei jedem Schritt.",
      prompt:
        "Leite ein Textabenteuer. Setting: [SETTING]. Meine Figur: [FIGUR]. Ziel des Abenteuers: [ZIEL]. Beschreibe jede Szene in maximal 120 Wörtern, ende jede Antwort mit drei nummerierten Handlungsoptionen plus der Möglichkeit, etwas Eigenes zu tun. Meine Entscheidungen haben echte Folgen, auch schlechte. Kein Erzählen meiner Gedanken oder Gefühle für mich. Tonalität: [TONALITÄT]. Beginne mit der ersten Szene.",
      placeholders: [
        { key: "SETTING", label: "Setting", example: "eine verlassene Bibliothek, in der die Bücher nachts leben" },
        { key: "FIGUR", label: "Figur", example: "eine junge Bibliothekarin mit einer Laterne" },
        { key: "ZIEL", label: "Ziel", example: "das verschwundene magische Buch finden" },
        { key: "TONALITÄT", label: "Tonalität", example: "geheimnisvoll, leicht humorvoll" },
      ],
    },
    {
      id: "spiel-quizmaster",
      title: "Quizmaster mit Punktestand",
      category: C,
      tags: ["Quiz", "Wissen", "Spiel"],
      description: "Ein Quiz mit steigendem Schwierigkeitsgrad, Punktestand und Erklärungen.",
      prompt:
        "Du bist der Quizmaster. Thema: [THEMA]. Spieler: [SPIELER]. Stelle eine Frage nach der anderen (Multiple Choice mit vier Antworten), beginne leicht und werde schwerer. Nach jeder Antwort: richtig oder falsch, ein Satz Erklärung, aktueller Punktestand. Nach [ANZAHL] Fragen: Auswertung mit einem humorvollen Titel für jeden Spieler. Keine Frage doppelt, keine Fangfragen ohne Sinn.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Tiere Afrikas" },
        { key: "SPIELER", label: "Spieler", example: "Anna und Jonas" },
        { key: "ANZAHL", label: "Anzahl Fragen", example: "10" },
      ],
    },
    {
      id: "spiel-raetsel",
      title: "Rätsel zum Knobeln",
      category: C,
      tags: ["Rätsel", "Logik", "Knobeln"],
      description: "Rätsel in verschiedenen Arten, mit Hinweisen auf Nachfrage und Lösung.",
      prompt:
        "Stelle mir [ANZAHL] Rätsel zum Thema [THEMA] für [ZIELGRUPPE], gemischt aus Logikrätseln, Wortspielen und Bilder-im-Kopf-Rätseln. Jeweils eines nach dem anderen; gib mir erst auf Nachfrage einen Hinweis (maximal drei, immer deutlicher), und die Lösung erst, wenn ich aufgebe oder richtig liege. Erkläre die Lösung in zwei Sätzen.",
      placeholders: [
        { key: "ANZAHL", label: "Anzahl", example: "5" },
        { key: "THEMA", label: "Thema", example: "Bibliothek und Bücher" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Erwachsene" },
      ],
    },
    {
      id: "spiel-escape",
      title: "Escape-Room-Rätselkette",
      category: C,
      tags: ["Escape Room", "Rätsel", "Party"],
      description: "Eine zusammenhängende Rätselkette für einen Escape-Room-Abend zu Hause.",
      prompt:
        "Entwirf einen Escape-Room-Abend zu Hause für [SPIELER] Personen, Dauer etwa [DAUER]. Thema und Geschichte: [THEMA]. Erstelle fünf bis sieben aufeinander aufbauende Rätsel (Codes, Zuordnung, verstecktes Wort, Logik) mit Lösung, benötigtem Material aus dem Haushalt, wie ich sie vorbereite und verstecke, einem Einleitungstext zum Vorlesen und einem Finale. Nenne, wo ich Hinweise gebe, falls die Gruppe feststeckt.",
      placeholders: [
        { key: "SPIELER", label: "Spieler", example: "4" },
        { key: "DAUER", label: "Dauer", example: "60 Minuten" },
        { key: "THEMA", label: "Thema", example: "das verschwundene Buch der Weisen Eule" },
      ],
    },
    {
      id: "spiel-rollenspiel-charakter",
      title: "Rollenspiel-Charakter erstellen",
      category: C,
      tags: ["Rollenspiel", "Charakter", "Pen & Paper"],
      description: "Ein spielbarer Charakter mit Hintergrund, Motivation und Eigenheiten.",
      prompt:
        "Erstelle einen Charakter für ein Pen-&-Paper-Rollenspiel im Setting [SETTING]. Rolle oder Klasse: [KLASSE]. Liefere: Name, Aussehen in drei Sätzen, Hintergrundgeschichte mit einem Geheimnis, Motivation, eine Schwäche, die im Spiel Probleme macht, drei Beziehungen zu anderen Figuren als Aufhänger, typische Sätze und ein Ziel für die erste Sitzung. Keine Regelwerte, nur Spielbares.",
      placeholders: [
        { key: "SETTING", label: "Setting", example: "eine magische Bibliotheksstadt" },
        { key: "KLASSE", label: "Rolle oder Klasse", example: "Gelehrte mit verbotenem Wissen" },
      ],
    },
    {
      id: "spiel-partyspiele",
      title: "Spielideen für einen Abend",
      category: C,
      tags: ["Party", "Spiele", "Gruppe"],
      description: "Spiele ohne Material, passend zu Gruppe, Stimmung und Ort.",
      prompt:
        "Schlage acht Spiele für [ANLASS] mit [ANZAHL] Personen ([ALTER]) vor. Ort: [ORT]. Stimmung: [STIMMUNG]. Pro Spiel: Regeln in maximal fünf Sätzen, Dauer, benötigtes Material (möglichst keines), was es besonders macht. Mische ruhige und laute Spiele, und nenne eines, das auch schüchterne Gäste gern mitspielen.",
      placeholders: [
        { key: "ANLASS", label: "Anlass", example: "einen Geburtstagsabend" },
        { key: "ANZAHL", label: "Anzahl Personen", example: "8" },
        { key: "ALTER", label: "Alter", example: "25 bis 45" },
        { key: "ORT", label: "Ort", example: "Wohnzimmer" },
        { key: "STIMMUNG", label: "Stimmung", example: "locker, viel Lachen" },
      ],
    },
    {
      id: "spiel-kinder-geschichte",
      title: "Mitmach-Geschichte für Kinder",
      category: C,
      tags: ["Kinder", "Geschichte", "Interaktiv"],
      description: "Eine Gute-Nacht-Geschichte, bei der das Kind mitentscheidet.",
      prompt:
        "Erzähle eine Mitmach-Geschichte für ein Kind von [ALTER] Jahren. Hauptfigur: [FIGUR]. Thema: [THEMA]. Erzähle in kurzen Abschnitten von maximal 80 Wörtern, stelle nach jedem Abschnitt eine einfache Frage mit zwei Möglichkeiten („Soll die Eule nach links oder nach rechts fliegen?“) und baue die Antwort ein. Freundlich, ohne Gruseliges, mit einem ruhigen Ende nach etwa acht Abschnitten.",
      placeholders: [
        { key: "ALTER", label: "Alter", example: "5" },
        { key: "FIGUR", label: "Figur", example: "eine kleine Eule namens Pip" },
        { key: "THEMA", label: "Thema", example: "die erste Nacht allein im Wald" },
      ],
    },
    {
      id: "spiel-wer-bin-ich",
      title: "„Wer bin ich?“ und Ratespiele",
      category: C,
      tags: ["Raten", "Spiel", "Unterhaltung"],
      description: "Die KI denkt sich etwas aus, du rätst mit Ja-Nein-Fragen.",
      prompt:
        "Spielen wir „Wer oder was bin ich?“. Du denkst dir [KATEGORIE] aus, passend für [ZIELGRUPPE], und verrätst es nicht. Ich stelle Ja-Nein-Fragen; du antwortest nur mit Ja, Nein oder „Teilweise“ plus höchstens drei Wörtern. Nach zehn Fragen gibst du mir einen Hinweis. Wenn ich richtig rate, bestätigst du es und erzählst zwei interessante Fakten dazu. Sag mir, wenn du bereit bist.",
      placeholders: [
        { key: "KATEGORIE", label: "Kategorie", example: "ein Tier" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Kinder ab 8" },
      ],
    },
  ],
};
export default collection;
