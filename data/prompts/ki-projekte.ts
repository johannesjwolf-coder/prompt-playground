import type { PromptCollection } from "@/lib/promptLibrary";

const C = "KI-Projekte & Agenten";
const collection: PromptCollection = {
  category: C,
  description: "Grössere Vorhaben mit KI planen und bauen: Chatbots über eigene Daten, Agenten, Workflows, Evaluation, Sicherheit und Kosten.",
  templates: [
    {
      id: "kip-rag-chatbot",
      featured: true,
      title: "Chatbot über eigene Dokumente (RAG) planen",
      category: C,
      tags: ["RAG", "Chatbot", "Dokumente", "Architektur"],
      description: "Ein Assistent, der Fragen aus den eigenen Dokumenten beantwortet: Architektur, Datenaufbereitung, Grenzen.",
      prompt:
        "Plane einen KI-Assistenten, der Fragen zu [DOKUMENTE] beantwortet. Nutzer: [NUTZER]. Umfang der Daten: [UMFANG]. Technik-Rahmen: [TECHNIK]. Liefere: Architektur (Aufbereitung, Zerlegung in Abschnitte, Suche, Antwortgenerierung), wie Quellen in der Antwort angezeigt werden, wie der Assistent mit Fragen umgeht, die nicht in den Dokumenten stehen, Datenschutz-Aspekte, eine Liste von 10 Testfragen mit erwarteten Antworten, und die drei häufigsten Fehler bei solchen Projekten.",
      placeholders: [
        { key: "DOKUMENTE", label: "Dokumente", example: "unsere internen Handbücher und FAQ" },
        { key: "NUTZER", label: "Nutzer", example: "Mitarbeitende im Kundenservice" },
        { key: "UMFANG", label: "Umfang", example: "etwa 300 PDF-Seiten" },
        { key: "TECHNIK", label: "Technik", example: "Next.js, Claude API, Vektordatenbank frei wählbar" },
      ],
    },
    {
      id: "kip-agent-design",
      title: "KI-Agent entwerfen (Werkzeuge, Schritte, Grenzen)",
      category: C,
      tags: ["Agent", "Tools", "Autonomie"],
      description: "Einen Agenten definieren, der Aufgaben mit Werkzeugen erledigt, inklusive Kontrollpunkten.",
      prompt:
        "Entwirf einen KI-Agenten für die Aufgabe [AUFGABE]. Verfügbare Werkzeuge oder Systeme: [WERKZEUGE]. Lege fest: Ziel und Erfolgskriterium, die Werkzeuge mit Ein- und Ausgaben, den Ablauf als Schleife (wahrnehmen, planen, handeln, prüfen), an welchen Stellen ein Mensch bestätigen muss, Abbruchregeln (Kosten, Zeit, Fehler), Protokollierung, und drei Szenarien, in denen der Agent scheitern könnte, mit Gegenmassnahme. Schreibe zusätzlich den Systemprompt des Agenten.",
      placeholders: [
        { key: "AUFGABE", label: "Aufgabe", example: "eingehende Support-Tickets sortieren und Standardantworten vorschlagen" },
        { key: "WERKZEUGE", label: "Werkzeuge", example: "Ticketsystem-API, Wissensdatenbank, E-Mail-Versand" },
      ],
    },
    {
      id: "kip-workflow",
      title: "Mehrstufigen KI-Workflow bauen (Prompt-Kette)",
      category: C,
      tags: ["Workflow", "Pipeline", "Prompt-Kette"],
      description: "Eine komplexe Aufgabe in Teilschritte mit je eigenem Prompt zerlegen.",
      prompt:
        "Zerlege die Aufgabe [AUFGABE] in einen mehrstufigen KI-Workflow. Eingabe: [EINGABE]. Gewünschte Ausgabe: [AUSGABE]. Für jeden Schritt: Zweck, der vollständige Prompt, Eingabe- und Ausgabeformat (so, dass der nächste Schritt es direkt verarbeiten kann), Prüfregel, ob das Ergebnis brauchbar ist, und was bei einem Fehlschlag passiert. Nenne, welche Schritte parallel laufen können und wo ein Mensch zwischenprüfen sollte.",
      placeholders: [
        { key: "AUFGABE", label: "Aufgabe", example: "aus einem Interview-Transkript einen Blogartikel, Social-Posts und ein Zitat-Bild erstellen" },
        { key: "EINGABE", label: "Eingabe", example: "Transkript als Text" },
        { key: "AUSGABE", label: "Ausgabe", example: "Artikel, 5 Posts, 3 Zitate" },
      ],
    },
    {
      id: "kip-spezifikation",
      title: "KI-Feature spezifizieren",
      category: C,
      tags: ["Spezifikation", "Produkt", "Anforderungen"],
      description: "Ein KI-Feature so beschreiben, dass Entwicklung, Design und Betrieb damit arbeiten können.",
      prompt:
        "Schreibe eine Spezifikation für das KI-Feature [FEATURE] im Produkt [PRODUKT]. Nutzer: [NUTZER]. Enthalte: Nutzerproblem, Ablauf aus Nutzersicht, was die KI genau tut (Eingabe, Ausgabe, Beispiele), Qualitätskriterien mit messbaren Zielen, Verhalten bei Unsicherheit und Fehlern, was das Feature bewusst nicht tut, Datenschutz und Datenfluss, Kostenabschätzung pro Nutzung, und offene Fragen. Klar genug, dass ein Team ohne Rückfragen starten kann.",
      placeholders: [
        { key: "FEATURE", label: "Feature", example: "automatische Zusammenfassung von Kundengesprächen" },
        { key: "PRODUKT", label: "Produkt", example: "unserem CRM" },
        { key: "NUTZER", label: "Nutzer", example: "Vertriebsmitarbeitende" },
      ],
    },
    {
      id: "kip-evaluation",
      title: "KI-Feature bewerten (Evaluation aufsetzen)",
      category: C,
      tags: ["Evaluation", "Qualität", "Messen"],
      description: "Ein Testset und Bewertungskriterien, um zu messen, ob die KI gut genug ist.",
      prompt:
        "Hilf mir, die Qualität von [FEATURE] zu messen. Eingaben sehen so aus: [EINGABEN]. Was eine gute Ausgabe ausmacht: [KRITERIEN]. Entwirf: ein Testset mit 20 Beispielen (leicht, typisch, schwierig, Randfälle), eine Bewertungsskala pro Kriterium mit klaren Beschreibungen, eine Anleitung, wie Menschen bewerten, ein Vorgehen, wie eine KI als Bewerter eingesetzt werden könnte und wo das nicht taugt, und eine Regel, ab welchem Ergebnis das Feature live gehen darf.",
      placeholders: [
        { key: "FEATURE", label: "Feature", example: "unser Prompt-Generator" },
        { key: "EINGABEN", label: "Eingaben", example: "kurze Ideen von Nutzern in einem Satz" },
        { key: "KRITERIEN", label: "Kriterien", example: "vollständig, verständlich, passende Platzhalter, keine Halluzination" },
      ],
    },
    {
      id: "kip-prompt-injection",
      title: "Sicherheits-Check für ein KI-Feature",
      category: C,
      tags: ["Sicherheit", "Prompt Injection", "Missbrauch"],
      description: "Risiken wie Prompt Injection, Datenabfluss und Missbrauch systematisch prüfen.",
      prompt:
        "Prüfe das KI-Feature [FEATURE] auf Sicherheitsrisiken. So funktioniert es: [BESCHREIBUNG]. Welche Daten es sieht: [DATEN]. Gehe durch: Prompt Injection über Nutzereingaben oder Dokumente, Abfluss vertraulicher Daten in Antworten, Missbrauch für unerwünschte Inhalte, Kostenexplosion durch Automatisierung, Manipulation von Werkzeugaufrufen. Für jedes Risiko: Beispielangriff, Wahrscheinlichkeit, Schaden, Gegenmassnahme in der Umsetzung, und wie ich es teste.",
      placeholders: [
        { key: "FEATURE", label: "Feature", example: "ein Chatbot, der Kundendokumente liest" },
        { key: "BESCHREIBUNG", label: "Beschreibung", example: "Nutzer laden PDFs hoch und stellen Fragen" },
        { key: "DATEN", label: "Daten", example: "Verträge und Rechnungen der Nutzer" },
      ],
    },
    {
      id: "kip-datenschutz",
      title: "Datenschutz-Check für KI-Einsatz",
      category: C,
      tags: ["Datenschutz", "DSG", "DSGVO"],
      description: "Fragen und Massnahmen, bevor personenbezogene Daten in eine KI fliessen.",
      prompt:
        "Wir wollen KI einsetzen für [ZWECK]. Betroffene Daten: [DATEN]. Anbieter oder Betrieb: [ANBIETER]. Land: [LAND]. Erstelle eine Checkliste: Rechtsgrundlage, Datenminimierung, welche Daten vor dem Senden entfernt oder pseudonymisiert werden, Speicherdauer beim Anbieter, Information der Betroffenen, Auftragsverarbeitung, Rechte der Betroffenen, und was intern dokumentiert werden muss. Markiere, was eine Fachperson prüfen sollte. Hinweis: keine Rechtsberatung.",
      placeholders: [
        { key: "ZWECK", label: "Zweck", example: "Zusammenfassung von Bewerbungsgesprächen" },
        { key: "DATEN", label: "Daten", example: "Namen, Lebensläufe, Gesprächsnotizen" },
        { key: "ANBIETER", label: "Anbieter", example: "Claude API" },
        { key: "LAND", label: "Land", example: "Schweiz" },
      ],
    },
    {
      id: "kip-kosten",
      title: "Kosten eines KI-Features schätzen",
      category: C,
      tags: ["Kosten", "Tokens", "Kalkulation"],
      description: "Eine nachvollziehbare Kostenschätzung pro Nutzung und pro Monat.",
      prompt:
        "Schätze die laufenden Kosten für [FEATURE]. Pro Nutzung: etwa [EINGABE] Eingabe und [AUSGABE] Ausgabe, plus Systemprompt von etwa [SYSTEM] Wörtern. Erwartete Nutzungen pro Monat: [NUTZUNGEN]. Preis pro Million Tokens (Eingabe/Ausgabe): [PREIS]. Rechne vor (Wörter zu Tokens grob 1 zu 1,4), zeige Kosten pro Nutzung und pro Monat, drei Hebel zum Sparen (Caching des Systemprompts, kürzere Ausgaben, günstigeres Modell für einfache Fälle) mit geschätzter Wirkung, und ein Worst-Case-Szenario bei Missbrauch.",
      placeholders: [
        { key: "FEATURE", label: "Feature", example: "Prompt-Generator auf unserer Website" },
        { key: "EINGABE", label: "Eingabe", example: "50 Wörter" },
        { key: "AUSGABE", label: "Ausgabe", example: "300 Wörter" },
        { key: "SYSTEM", label: "Systemprompt", example: "1'500" },
        { key: "NUTZUNGEN", label: "Nutzungen pro Monat", example: "5'000" },
        { key: "PREIS", label: "Preis", example: "10 / 50 USD" },
      ],
    },
    {
      id: "kip-prozess-automatisieren",
      title: "Geschäftsprozess mit KI automatisieren",
      category: C,
      tags: ["Automatisierung", "Prozess", "Unternehmen"],
      description: "Einen Prozess analysieren und entscheiden, welche Schritte KI übernehmen kann.",
      prompt:
        "Analysiere den Prozess [PROZESS] in [UNTERNEHMEN]. Schritte heute: [SCHRITTE]. Ziel: [ZIEL]. Bewerte pro Schritt: Eignung für KI (hoch, mittel, keine), Risiko bei Fehlern, nötige Datenbasis, und ob ein Mensch prüfen muss. Schlage eine Reihenfolge der Umsetzung vor, beginnend mit dem Schritt mit dem besten Verhältnis von Nutzen zu Risiko, und beschreibe für diesen Schritt die konkrete Lösung mit Prompt-Entwurf.",
      placeholders: [
        { key: "PROZESS", label: "Prozess", example: "Bearbeitung von Rechnungen im Posteingang" },
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "einer Treuhandfirma mit 12 Mitarbeitenden" },
        { key: "SCHRITTE", label: "Schritte", example: "öffnen, prüfen, kontieren, freigeben, ablegen" },
        { key: "ZIEL", label: "Ziel", example: "Bearbeitungszeit halbieren" },
      ],
    },
    {
      id: "kip-feinabstimmung",
      title: "Prompting, RAG oder Fine-Tuning?",
      category: C,
      tags: ["Entscheidung", "Fine-Tuning", "Ansatz"],
      description: "Den passenden Ansatz für ein KI-Problem wählen, mit Begründung.",
      prompt:
        "Ich möchte, dass eine KI [AUFGABE] kann. Verfügbare Daten: [DATEN]. Anforderungen an Genauigkeit und Stil: [ANFORDERUNGEN]. Budget und Team: [RESSOURCEN]. Vergleiche die Ansätze gutes Prompting mit Beispielen, Anbindung eigener Daten (RAG) und Fine-Tuning: Aufwand, Kosten, Qualität, Wartbarkeit, Risiken. Empfiehl einen Ansatz, nenne die Bedingungen, unter denen ich wechseln sollte, und beschreibe die ersten drei Schritte.",
      placeholders: [
        { key: "AUFGABE", label: "Aufgabe", example: "Produkttexte in unserem Markenstil schreiben" },
        { key: "DATEN", label: "Daten", example: "800 bestehende Produkttexte" },
        { key: "ANFORDERUNGEN", label: "Anforderungen", example: "konsistenter Stil, keine Faktenfehler" },
        { key: "RESSOURCEN", label: "Ressourcen", example: "eine Entwicklerin, kleines Budget" },
      ],
    },
    {
      id: "kip-kundenservice-assistent",
      title: "KI-Assistent für den Kundenservice planen",
      category: C,
      tags: ["Kundenservice", "Assistent", "Rollout"],
      description: "Vom Pilot bis zum Betrieb: Umfang, Übergabe an Menschen, Messung, Rollout.",
      prompt:
        "Plane einen KI-Assistenten für den Kundenservice von [UNTERNEHMEN]. Häufigste Anliegen: [ANLIEGEN]. Kanäle: [KANÄLE]. Definiere: welche Anliegen der Assistent vollständig löst, welche er nur vorbereitet, wann und wie er an Menschen übergibt, Tonalität, Umgang mit verärgerten Kunden, Kennzahlen für den Pilot, einen Rollout-Plan in drei Phasen und die Risiken für den Ruf des Unternehmens mit Gegenmassnahmen.",
      placeholders: [
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "einem Online-Shop für Outdoor-Ausrüstung" },
        { key: "ANLIEGEN", label: "Anliegen", example: "Lieferstatus, Rücksendungen, Produktfragen" },
        { key: "KANÄLE", label: "Kanäle", example: "Website-Chat und E-Mail" },
      ],
    },
    {
      id: "kip-daten-aufbereiten",
      title: "Daten für ein KI-Projekt aufbereiten",
      category: C,
      tags: ["Daten", "Aufbereitung", "Qualität"],
      description: "Rohdaten sichten, bereinigen und in eine Form bringen, die KI nutzen kann.",
      prompt:
        "Ich habe folgende Rohdaten für ein KI-Projekt: [DATEN]. Ziel des Projekts: [ZIEL]. Beschreibe einen Aufbereitungsplan: Sichtung und Qualitätsprüfung (Duplikate, Lücken, Fehler), Struktur der Zieldaten mit Feldern, Umgang mit persönlichen Daten, Zerlegung langer Texte in sinnvolle Einheiten, Anreicherung mit Metadaten, und ein Skript-Gerüst in [SPRACHE], das die Schritte ausführt. Nenne, wie ich die Datenqualität am Ende messe.",
      placeholders: [
        { key: "DATEN", label: "Daten", example: "5'000 Support-Tickets als CSV-Export" },
        { key: "ZIEL", label: "Ziel", example: "Antwortvorschläge für neue Tickets" },
        { key: "SPRACHE", label: "Skriptsprache", example: "Python" },
      ],
    },
  ],
};
export default collection;
