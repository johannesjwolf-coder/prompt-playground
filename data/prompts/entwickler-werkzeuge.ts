import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Entwickler-Werkzeuge";
const collection: PromptCollection = {
  category: C,
  description: "Kleine, präzise Helfer für den Programmieralltag: Regex, SQL, Git, Terminal, Dokumentation, Fehlermeldungen.",
  templates: [
    {
      id: "dev-regex",
      featured: true,
      title: "Regulären Ausdruck bauen",
      category: C,
      tags: ["Regex", "Muster", "Validierung"],
      description: "Ein Regex aus einer Beschreibung, mit Erklärung und Testfällen.",
      prompt:
        "Erstelle einen regulären Ausdruck für [SPRACHE ODER TOOL], der [ANFORDERUNG] erkennt. Beispiele, die passen sollen: [POSITIV]. Beispiele, die nicht passen dürfen: [NEGATIV]. Liefere den Ausdruck, erkläre jeden Teil in einer Zeile, nenne Randfälle, die er nicht abdeckt, und gib mir fünf Testfälle mit erwartetem Ergebnis.",
      placeholders: [
        { key: "SPRACHE ODER TOOL", label: "Sprache oder Tool", example: "JavaScript" },
        { key: "ANFORDERUNG", label: "Anforderung", example: "Schweizer Postleitzahlen (vierstellig, 1000 bis 9999)" },
        { key: "POSITIV", label: "Soll passen", example: "8000, 3011" },
        { key: "NEGATIV", label: "Darf nicht passen", example: "0800, 12345, 80a0" },
      ],
    },
    {
      id: "dev-sql",
      title: "SQL-Abfrage schreiben",
      category: C,
      tags: ["SQL", "Datenbank", "Abfrage"],
      description: "Eine Abfrage aus einer Beschreibung, mit Erklärung und Hinweis auf Performance.",
      prompt:
        "Schreibe eine SQL-Abfrage für [DATENBANK]. Tabellen: [TABELLEN]. Ich möchte: [ZIEL]. Liefere die Abfrage formatiert, erkläre die Joins und Filter in kurzen Sätzen, nenne, welche Indizes sie schnell machen, und eine Variante, falls die Datenmenge sehr gross ist. Wenn die Beschreibung mehrdeutig ist, nenne die Annahme, die du getroffen hast.",
      placeholders: [
        { key: "DATENBANK", label: "Datenbank", example: "PostgreSQL" },
        { key: "TABELLEN", label: "Tabellen", example: "users(id, name), orders(id, user_id, total, created_at)" },
        { key: "ZIEL", label: "Ziel", example: "die zehn Kunden mit dem höchsten Umsatz in den letzten 30 Tagen" },
      ],
    },
    {
      id: "dev-commit",
      title: "Commit-Nachricht aus Änderungen",
      category: C,
      tags: ["Git", "Commit", "Conventional Commits"],
      description: "Eine klare Commit-Nachricht im Conventional-Commits-Format aus einem Diff.",
      prompt:
        "Schreibe eine Commit-Nachricht im Conventional-Commits-Format für die folgenden Änderungen. Erste Zeile: Typ, optionaler Scope, maximal 72 Zeichen, Imperativ. Danach eine Leerzeile und ein kurzer Body mit dem Warum (nicht dem Was). Wenn die Änderungen mehrere Themen mischen, schlage vor, sie in mehrere Commits zu teilen. Sprache: [SPRACHE]. Änderungen:\n\n[DIFF]",
      placeholders: [
        { key: "SPRACHE", label: "Sprache", example: "Englisch" },
        { key: "DIFF", label: "Diff oder Beschreibung", example: "(git diff hier einfügen)" },
      ],
    },
    {
      id: "dev-git-hilfe",
      title: "Git-Problem lösen",
      category: C,
      tags: ["Git", "Problem", "Anleitung"],
      description: "Aus einer verfahrenen Git-Situation sicher herauskommen.",
      prompt:
        "Ich habe ein Git-Problem: [PROBLEM]. Aktueller Stand: [STAND]. Was ich erreichen will: [ZIEL]. Erkläre zuerst, was passiert ist, dann gib mir die Befehle Schritt für Schritt mit einem Satz Erklärung, markiere Befehle, die Daten verwerfen können, und sage, wie ich vorher ein Backup mache. Nenne den Befehl, mit dem ich prüfe, dass alles geklappt hat.",
      placeholders: [
        { key: "PROBLEM", label: "Problem", example: "ich habe auf dem falschen Branch committet" },
        { key: "STAND", label: "Stand", example: "3 Commits auf main, noch nicht gepusht" },
        { key: "ZIEL", label: "Ziel", example: "die Commits auf einen neuen Branch verschieben" },
      ],
    },
    {
      id: "dev-terminal",
      title: "Terminal-Befehl erklären oder bauen",
      category: C,
      tags: ["Terminal", "Shell", "Bash"],
      description: "Einen Shell-Befehl verstehen oder aus einer Beschreibung zusammensetzen.",
      prompt:
        "Ich arbeite mit [SHELL] auf [SYSTEM]. Aufgabe: [AUFGABE]. Gib mir den Befehl, erkläre jede Option in einer Zeile, nenne, was passieren kann, wenn Dateinamen Leerzeichen enthalten, und eine sichere Variante zum Testen (z. B. Trockenlauf oder nur Ausgabe). Wenn es mehrere Wege gibt, nenne den robustesten.",
      placeholders: [
        { key: "SHELL", label: "Shell", example: "bash" },
        { key: "SYSTEM", label: "System", example: "macOS" },
        { key: "AUFGABE", label: "Aufgabe", example: "alle .mov-Dateien in Unterordnern finden, die grösser als 1 GB sind" },
      ],
    },
    {
      id: "dev-fehlermeldung",
      title: "Fehlermeldung erklären",
      category: C,
      tags: ["Fehler", "Erklärung", "Debugging"],
      description: "Eine kryptische Fehlermeldung verstehen und die wahrscheinlichsten Ursachen prüfen.",
      prompt:
        "Erkläre mir diese Fehlermeldung aus [UMGEBUNG]: \n\n[FEHLER]\n\nWas bedeutet sie in einfachen Worten? Nenne die drei wahrscheinlichsten Ursachen in Reihenfolge, wie ich jede in unter zwei Minuten prüfe, und die Lösung für jede. Wenn du mehr Kontext brauchst, sag genau, welche Datei oder Ausgabe ich dir zeigen soll.",
      placeholders: [
        { key: "UMGEBUNG", label: "Umgebung", example: "Next.js Dev-Server" },
        { key: "FEHLER", label: "Fehlermeldung", example: "(hier einfügen)" },
      ],
    },
    {
      id: "dev-readme",
      title: "README für ein Projekt",
      category: C,
      tags: ["README", "Dokumentation", "Open Source"],
      description: "Eine README, die in zwei Minuten erklärt, was das Projekt ist und wie man startet.",
      prompt:
        "Schreibe eine README für [PROJEKT]. Was es tut: [BESCHREIBUNG]. Technik: [TECHNIK]. Zielgruppe der README: [ZIELGRUPPE]. Struktur: ein Satz, was das Projekt ist; ein Screenshot- oder Demo-Platzhalter; Installation in nummerierten Schritten; Nutzung mit einem Beispiel; Konfiguration (Umgebungsvariablen als Tabelle); Beitragen; Lizenz. Kurz, konkret, keine Marketing-Sprache.",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "Weise Eule" },
        { key: "BESCHREIBUNG", label: "Beschreibung", example: "eine Website, die aus Ideen fertige KI-Prompts macht" },
        { key: "TECHNIK", label: "Technik", example: "Next.js, TypeScript" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Entwickler, die es lokal starten wollen" },
      ],
    },
    {
      id: "dev-api-doku",
      title: "API-Dokumentation für einen Endpunkt",
      category: C,
      tags: ["API", "Dokumentation", "Referenz"],
      description: "Eine Referenz-Doku mit Parametern, Beispielen und Fehlercodes.",
      prompt:
        "Dokumentiere den API-Endpunkt [ENDPUNKT]. Zweck: [ZWECK]. Eingabe: [EINGABE]. Ausgabe: [AUSGABE]. Struktur: Beschreibung in zwei Sätzen, Authentifizierung, Parameter als Tabelle (Name, Typ, Pflicht, Beschreibung), Beispielanfrage mit curl, Beispielantwort, Fehlercodes mit Bedeutung, Hinweise zu Limits. Sprache: [SPRACHE].",
      placeholders: [
        { key: "ENDPUNKT", label: "Endpunkt", example: "POST /api/prompt" },
        { key: "ZWECK", label: "Zweck", example: "erzeugt aus einer Idee eine Prompt-Vorlage" },
        { key: "EINGABE", label: "Eingabe", example: "idea (string), depth (schnell|ausgewogen|gruendlich)" },
        { key: "AUSGABE", label: "Ausgabe", example: "JSON mit template-Objekt" },
        { key: "SPRACHE", label: "Sprache", example: "Deutsch" },
      ],
    },
    {
      id: "dev-daten-konvertieren",
      title: "Daten umwandeln (JSON, CSV, YAML)",
      category: C,
      tags: ["Konvertierung", "JSON", "CSV"],
      description: "Daten von einem Format ins andere bringen, mit Skript für die Wiederholung.",
      prompt:
        "Wandle die folgenden Daten von [VON] nach [NACH] um. Regeln: [REGELN]. Zeige das Ergebnis und schreibe zusätzlich ein kleines Skript in [SPRACHE], das die Umwandlung wiederholbar macht, inklusive Umgang mit fehlenden Feldern und Sonderzeichen. Daten:\n\n[DATEN]",
      placeholders: [
        { key: "VON", label: "Von", example: "CSV" },
        { key: "NACH", label: "Nach", example: "JSON" },
        { key: "REGELN", label: "Regeln", example: "Spalte „datum“ als ISO-Datum, leere Zellen als null" },
        { key: "SPRACHE", label: "Skriptsprache", example: "Node.js" },
        { key: "DATEN", label: "Daten", example: "(hier einfügen)" },
      ],
    },
    {
      id: "dev-automatisieren",
      title: "Wiederkehrende Aufgabe automatisieren",
      category: C,
      tags: ["Automatisierung", "Skript", "Workflow"],
      description: "Aus einer manuellen Routine ein Skript oder einen Workflow machen.",
      prompt:
        "Ich mache regelmässig von Hand: [AUFGABE]. Werkzeuge, die ich habe: [WERKZEUGE]. Ich kann: [KENNTNISSE]. Schlage die einfachste Automatisierung vor, die zu meinen Kenntnissen passt, liefere das Skript oder die Konfiguration mit Kommentaren, erkläre, wie ich es einrichte und testweise laufen lasse, und was ich prüfe, damit es nicht still kaputtgeht.",
      placeholders: [
        { key: "AUFGABE", label: "Aufgabe", example: "jeden Montag Bilder aus einem Ordner verkleinern und in einen anderen Ordner kopieren" },
        { key: "WERKZEUGE", label: "Werkzeuge", example: "macOS, Terminal" },
        { key: "KENNTNISSE", label: "Kenntnisse", example: "einfache Shell-Befehle" },
      ],
    },
  ],
};
export default collection;
