import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Apps & Code";
const collection: PromptCollection = {
  category: C,
  description: "Von der App-Idee bis zum Code-Review: Anforderungen, Architektur, Komponenten, Tests und Fehlersuche.",
  templates: [
    {
      id: "code-app-konzept",
      featured: true,
      title: "App-Idee zu Anforderungen",
      category: C,
      tags: ["Konzept", "Anforderungen", "MVP"],
      description: "Aus einer Idee werden klare Anforderungen, ein MVP-Umfang und offene Fragen.",
      prompt:
        "Ich möchte eine App bauen: [IDEE]. Zielgruppe: [ZIELGRUPPE]. Hilf mir, daraus Anforderungen zu machen: Liste die Kernfunktionen für ein erstes brauchbares Produkt (MVP) und was bewusst später kommt, beschreibe die drei wichtigsten Nutzerwege Schritt für Schritt, nenne Datenobjekte mit ihren Feldern, technische Risiken und offene Fragen, die ich vor dem Bauen klären sollte. Plattform: [PLATTFORM].",
      placeholders: [
        { key: "IDEE", label: "Idee", example: "eine App, mit der Besucher im Tierpark Tiere per Karte finden" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Familien beim Besuch" },
        { key: "PLATTFORM", label: "Plattform", example: "Web-App fürs Smartphone" },
      ],
    },
    {
      id: "code-komponente",
      title: "UI-Komponente bauen",
      category: C,
      tags: ["Komponente", "React", "UI"],
      description: "Eine einzelne, wiederverwendbare Komponente mit klaren Props und Beispielen.",
      prompt:
        "Baue eine wiederverwendbare Komponente „[KOMPONENTE]“ mit [TECHNIK]. Sie soll: [ANFORDERUNGEN]. Liefere: die Komponente mit typisierten Props, Zustände (leer, laden, Fehler), Barrierefreiheit (Tastatur, ARIA), responsives Verhalten, ein Beispiel für den Einsatz und kurze Hinweise, wie ich Aussehen und Texte anpasse. Kein unnötiger Abstraktions-Overhead.",
      placeholders: [
        { key: "KOMPONENTE", label: "Komponente", example: "Bildergalerie mit Lightbox" },
        { key: "TECHNIK", label: "Technik", example: "React, TypeScript und Tailwind CSS" },
        { key: "ANFORDERUNGEN", label: "Anforderungen", example: "Tastaturnavigation, Bildunterschriften, Lazy Loading" },
      ],
    },
    {
      id: "code-api",
      title: "API-Endpunkt entwerfen",
      category: C,
      tags: ["API", "Backend", "Schnittstelle"],
      description: "Ein sauber definierter Endpunkt mit Validierung, Fehlern und Beispiel-Aufrufen.",
      prompt:
        "Entwirf einen API-Endpunkt für [ZWECK] in [TECHNIK]. Beschreibe: Route und Methode, Eingabe mit Validierung, Ausgabe mit Beispiel-JSON, Fehlerfälle mit Statuscodes und Meldungen, Authentifizierung, Rate Limiting falls sinnvoll. Liefere den Code, einen Beispielaufruf mit curl und zwei Tests (Erfolg und Fehler).",
      placeholders: [
        { key: "ZWECK", label: "Zweck", example: "das Speichern von Besucher-Fotos mit Beschreibung" },
        { key: "TECHNIK", label: "Technik", example: "Next.js Route Handler mit TypeScript" },
      ],
    },
    {
      id: "code-datenmodell",
      title: "Datenmodell und Datenbankschema",
      category: C,
      tags: ["Datenbank", "Schema", "Modell"],
      description: "Tabellen, Beziehungen und Indizes für eine Anwendung, mit Begründung.",
      prompt:
        "Entwirf das Datenmodell für [ANWENDUNG]. Wichtige Objekte: [OBJEKTE]. Liefere: Tabellen mit Feldern und Typen, Beziehungen, sinnvolle Indizes, wie gelöscht wird (hart oder weich), und drei typische Abfragen mit Beispiel-SQL. Datenbank: [DATENBANK]. Erkläre kurz die Entscheidungen, bei denen es Alternativen gab.",
      placeholders: [
        { key: "ANWENDUNG", label: "Anwendung", example: "eine Prompt-Bibliothek mit Nutzern und Favoriten" },
        { key: "OBJEKTE", label: "Objekte", example: "Nutzer, Prompt, Kategorie, Favorit" },
        { key: "DATENBANK", label: "Datenbank", example: "PostgreSQL" },
      ],
    },
    {
      id: "code-fehlersuche",
      title: "Fehler systematisch finden",
      category: C,
      tags: ["Debugging", "Fehler", "Analyse"],
      description: "Einen Fehler mit Fehlermeldung, Code und Kontext strukturiert eingrenzen.",
      prompt:
        "Ich habe einen Fehler in [TECHNIK]. Was passieren sollte: [ERWARTET]. Was passiert: [TATSÄCHLICH]. Fehlermeldung: [FEHLER]. Relevanter Code:\n\n[CODE]\n\nGehe systematisch vor: nenne die wahrscheinlichsten Ursachen in Reihenfolge, wie ich jede in unter zwei Minuten prüfe, und erst dann die Lösung. Wenn Informationen fehlen, sag genau, welche.",
      placeholders: [
        { key: "TECHNIK", label: "Technik", example: "Next.js mit TypeScript" },
        { key: "ERWARTET", label: "Erwartet", example: "das Bild lädt nach dem Klick" },
        { key: "TATSÄCHLICH", label: "Tatsächlich", example: "nichts passiert, keine Konsolenausgabe" },
        { key: "FEHLER", label: "Fehlermeldung", example: "(keine)" },
        { key: "CODE", label: "Code", example: "(hier einfügen)" },
      ],
    },
    {
      id: "code-review",
      title: "Code-Review anfordern",
      category: C,
      tags: ["Review", "Qualität", "Sicherheit"],
      description: "Einen Code-Ausschnitt auf Fehler, Lesbarkeit, Sicherheit und Performance prüfen lassen.",
      prompt:
        "Prüfe den folgenden Code ([TECHNIK]) wie eine erfahrene Kollegin im Review. Schwerpunkte: [SCHWERPUNKTE]. Liste Befunde nach Schwere sortiert, je mit Zeile, Problem, warum es zählt und konkretem Vorschlag. Keine Stil-Nörgelei ohne Nutzen. Nenne am Ende, was gut gelöst ist. Code:\n\n[CODE]",
      placeholders: [
        { key: "TECHNIK", label: "Technik", example: "TypeScript und React" },
        { key: "SCHWERPUNKTE", label: "Schwerpunkte", example: "Fehlerbehandlung, Performance, Sicherheit" },
        { key: "CODE", label: "Code", example: "(hier einfügen)" },
      ],
    },
    {
      id: "code-tests",
      title: "Tests für bestehenden Code schreiben",
      category: C,
      tags: ["Tests", "Unit-Test", "Qualität"],
      description: "Sinnvolle Tests mit Randfällen für eine Funktion oder Komponente.",
      prompt:
        "Schreibe Tests für den folgenden Code mit [TESTFRAMEWORK]. Decke ab: den Normalfall, Randfälle (leer, sehr gross, ungültig), Fehlerfälle. Benenne die Tests so, dass man ohne Code versteht, was geprüft wird. Nenne danach, was der Code tun müsste, damit er besser testbar wäre. Code:\n\n[CODE]",
      placeholders: [
        { key: "TESTFRAMEWORK", label: "Testframework", example: "Vitest" },
        { key: "CODE", label: "Code", example: "(hier einfügen)" },
      ],
    },
    {
      id: "code-erklaeren",
      title: "Code verständlich erklären",
      category: C,
      tags: ["Erklärung", "Lernen", "Dokumentation"],
      description: "Fremden Code Schritt für Schritt verstehen, auf dem passenden Niveau.",
      prompt:
        "Erkläre mir den folgenden Code für jemanden mit [NIVEAU]. Gehe von oben nach unten durch, erkläre zuerst, was er insgesamt tut, dann die wichtigen Abschnitte, und nenne Stellen, die fehleranfällig oder ungewöhnlich sind. Verwende Vergleiche aus dem Alltag, wo sie helfen. Code:\n\n[CODE]",
      placeholders: [
        { key: "NIVEAU", label: "Niveau", example: "Grundkenntnissen in JavaScript" },
        { key: "CODE", label: "Code", example: "(hier einfügen)" },
      ],
    },
    {
      id: "code-refactoring",
      title: "Refactoring-Plan",
      category: C,
      tags: ["Refactoring", "Struktur", "Wartbarkeit"],
      description: "Einen gewachsenen Code-Bereich in sicheren Schritten verbessern.",
      prompt:
        "Ich möchte [BEREICH] in meinem Projekt ([TECHNIK]) verbessern. Probleme heute: [PROBLEME]. Erstelle einen Refactoring-Plan in kleinen, einzeln testbaren Schritten. Pro Schritt: Ziel, Änderungen, Risiko, wie ich prüfe, dass nichts kaputt ist. Beginne mit den Schritten, die am meisten bringen und am wenigsten riskieren. Keine grosse Neuarchitektur, wenn es nicht nötig ist.",
      placeholders: [
        { key: "BEREICH", label: "Bereich", example: "die Seite mit dem Prompt-Formular" },
        { key: "TECHNIK", label: "Technik", example: "React und TypeScript" },
        { key: "PROBLEME", label: "Probleme", example: "800 Zeilen in einer Datei, Zustand schwer nachvollziehbar" },
      ],
    },
    {
      id: "code-deploy",
      title: "Deployment und Betrieb vorbereiten",
      category: C,
      tags: ["Deployment", "Hosting", "Checkliste"],
      description: "Checkliste und Konfiguration, um ein Projekt sicher online zu bringen.",
      prompt:
        "Bereite das Deployment von [PROJEKT] ([TECHNIK]) auf [HOSTING] vor. Liefere: eine Checkliste vor dem ersten Deploy (Umgebungsvariablen, Secrets, Build, Domains), die nötigen Konfigurationsdateien, wie ich Fehler nach dem Deploy erkenne (Logs, Monitoring), ein Vorgehen für Rollbacks und drei häufige Fehler bei diesem Setup.",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "eine Next.js-App mit API-Route" },
        { key: "TECHNIK", label: "Technik", example: "Next.js 16" },
        { key: "HOSTING", label: "Hosting", example: "Vercel" },
      ],
    },
  ],
};
export default collection;
