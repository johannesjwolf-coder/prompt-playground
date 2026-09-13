import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Prompt-Handwerk";
const collection: PromptCollection = {
  category: C,
  description: "Prompts über Prompts: verbessern, strukturieren, testen, Systemprompts und Personas für eigene KI-Assistenten schreiben.",
  templates: [
    {
      id: "ph-verbessern",
      featured: true,
      title: "Prompt verbessern",
      category: C,
      tags: ["Prompt", "Verbessern", "Struktur"],
      description: "Einen bestehenden Prompt nach bewährten Regeln stärken: Rolle, Kontext, Ziel, Format, Grenzen.",
      prompt:
        "Verbessere den folgenden Prompt. Ziel des Prompts: [ZIEL]. Prüfe und ergänze: klare Rolle oder Perspektive, Kontext, konkrete Aufgabe, gewünschtes Ausgabeformat, Grenzen (Länge, Tonalität, was vermieden werden soll), Beispiele, falls sie helfen. Liefere den verbesserten Prompt, danach eine Liste der Änderungen mit Begründung, und zwei Varianten: eine kürzere und eine strengere. Prompt:\n\n[PROMPT]",
      placeholders: [
        { key: "ZIEL", label: "Ziel", example: "gute Produkttexte für einen Shop" },
        { key: "PROMPT", label: "Prompt", example: "(hier einfügen)" },
      ],
    },
    {
      id: "ph-systemprompt",
      title: "Systemprompt für einen eigenen Assistenten",
      category: C,
      tags: ["Systemprompt", "Assistent", "Chatbot"],
      description: "Ein vollständiger Systemprompt mit Rolle, Regeln, Grenzen und Beispielen.",
      prompt:
        "Schreibe einen Systemprompt für einen KI-Assistenten namens [NAME]. Aufgabe: [AUFGABE]. Zielgruppe: [ZIELGRUPPE]. Tonalität: [TONALITÄT]. Enthalte: Rolle und Zweck, was der Assistent tut und was nicht, wie er mit Unklarheiten umgeht (nachfragen oder Annahme nennen), Ausgabeformat, Umgang mit heiklen Themen, drei Beispiel-Dialoge (kurz) und eine Regel für den Fall, dass er etwas nicht weiss. Klar strukturiert, ohne Widersprüche.",
      placeholders: [
        { key: "NAME", label: "Name", example: "Weise Eule" },
        { key: "AUFGABE", label: "Aufgabe", example: "Besuchern helfen, gute Prompts für ihr Projekt zu formulieren" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Menschen ohne KI-Erfahrung" },
        { key: "TONALITÄT", label: "Tonalität", example: "ruhig, präzise, mit trockenem Humor" },
      ],
    },
    {
      id: "ph-beispiele",
      title: "Beispiele für einen Prompt erzeugen (Few-Shot)",
      category: C,
      tags: ["Few-Shot", "Beispiele", "Qualität"],
      description: "Gute Beispielpaare erzeugen, die einer KI zeigen, wie die Antwort aussehen soll.",
      prompt:
        "Ich möchte einer KI mit Beispielen zeigen, wie sie [AUFGABE] erledigen soll. Gewünschter Stil der Antworten: [STIL]. Erstelle [ANZAHL] Beispielpaare aus Eingabe und idealer Antwort, die unterschiedliche Fälle abdecken (einfach, Randfall, schwierig). Erkläre bei jedem kurz, was es der KI beibringt, und formuliere den Rahmen-Prompt, in den die Beispiele eingebettet werden.",
      placeholders: [
        { key: "AUFGABE", label: "Aufgabe", example: "Kundenanfragen in Kategorien einordnen" },
        { key: "STIL", label: "Stil", example: "knapp, nur die Kategorie plus ein Satz Begründung" },
        { key: "ANZAHL", label: "Anzahl Beispiele", example: "5" },
      ],
    },
    {
      id: "ph-ausgabeformat",
      title: "Ausgabeformat präzise festlegen",
      category: C,
      tags: ["Format", "JSON", "Struktur"],
      description: "Einer KI ein exaktes Ausgabeformat vorgeben, das sich weiterverarbeiten lässt.",
      prompt:
        "Formuliere eine Anweisung, mit der eine KI ihre Antwort auf [AUFGABE] immer im Format [FORMAT] liefert. Definiere die Felder mit Name, Typ, Pflicht oder optional, erlaubte Werte, und ein vollständiges Beispiel. Ergänze Regeln für Sonderfälle (keine Daten, Unsicherheit, mehrere Treffer) und wie die KI reagieren soll, wenn sie das Format nicht einhalten kann.",
      placeholders: [
        { key: "AUFGABE", label: "Aufgabe", example: "Informationen aus Stellenanzeigen extrahieren" },
        { key: "FORMAT", label: "Format", example: "JSON" },
      ],
    },
    {
      id: "ph-testen",
      title: "Prompt testen mit Testfällen",
      category: C,
      tags: ["Test", "Qualität", "Evaluation"],
      description: "Testfälle erzeugen, um zu prüfen, ob ein Prompt zuverlässig funktioniert.",
      prompt:
        "Erstelle Testfälle für den folgenden Prompt. Pro Testfall: eine Eingabe, das erwartete Verhalten, was ein Fehlschlag wäre. Decke ab: Normalfälle, leere oder unsinnige Eingaben, sehr lange Eingaben, Eingaben mit Anweisungen, die den Prompt umgehen wollen, und Grenzfälle des Themas. Mindestens [ANZAHL] Testfälle, als Tabelle. Prompt:\n\n[PROMPT]",
      placeholders: [
        { key: "ANZAHL", label: "Anzahl Testfälle", example: "10" },
        { key: "PROMPT", label: "Prompt", example: "(hier einfügen)" },
      ],
    },
    {
      id: "ph-schritt-fuer-schritt",
      title: "Denkschritte vorgeben (Chain of Thought)",
      category: C,
      tags: ["Reasoning", "Schritte", "Genauigkeit"],
      description: "Einen Prompt so bauen, dass die KI vor der Antwort strukturiert nachdenkt.",
      prompt:
        "Baue einen Prompt für die Aufgabe [AUFGABE], der die KI anleitet, in klaren Schritten vorzugehen: erst Verständnis der Aufgabe wiedergeben, dann relevante Informationen sammeln, dann Optionen abwägen, dann die Antwort geben, zuletzt die Antwort gegen die Anforderungen prüfen. Die Schritte sollen sichtbar, aber knapp sein; die finale Antwort klar vom Denkprozess getrennt. Zielgruppe der Antwort: [ZIELGRUPPE].",
      placeholders: [
        { key: "AUFGABE", label: "Aufgabe", example: "eine Entscheidung zwischen drei Hosting-Anbietern" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "nicht-technische Geschäftsleitung" },
      ],
    },
    {
      id: "ph-persona-chatbot",
      title: "Persona für einen Website-Chatbot",
      category: C,
      tags: ["Persona", "Chatbot", "Marke"],
      description: "Charakter, Sprache und Grenzen eines Chatbots festlegen, passend zur Marke.",
      prompt:
        "Entwickle die Persona für den Chatbot von [MARKE]. Zielgruppe: [ZIELGRUPPE]. Markenwerte: [WERTE]. Lege fest: Name und Selbstbeschreibung in einem Satz, Tonalität mit drei Beispielantworten, Wörter und Formulierungen, die er nutzt und die er vermeidet, wie er begrüsst und sich verabschiedet, was er niemals tut (z. B. Preise erfinden), und wie er an Menschen übergibt. Formuliere alles als Anweisungsblock, der direkt in einen Systemprompt passt.",
      placeholders: [
        { key: "MARKE", label: "Marke", example: "einen Tierpark" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Familien" },
        { key: "WERTE", label: "Werte", example: "Respekt vor Tieren, Bildung, Freundlichkeit" },
      ],
    },
    {
      id: "ph-bildprompt-aus-text",
      title: "Bild-Prompt aus einer Textidee",
      category: C,
      tags: ["Bild-KI", "Übersetzung", "Prompt"],
      description: "Eine vage Bildidee in einen präzisen, strukturierten Bild-Prompt übersetzen.",
      prompt:
        "Übersetze diese Bildidee in einen präzisen Prompt für eine Bild-KI: [IDEE]. Verwendung: [VERWENDUNG]. Strukturiere in: Motiv, Handlung, Umgebung, Licht, Kamera und Perspektive, Stil und Medium, Farbstimmung, Format, Negativliste (was nicht im Bild sein soll). Liefere den Prompt auf Deutsch und Englisch und drei Varianten, die jeweils einen Aspekt verändern (Stil, Licht, Perspektive).",
      placeholders: [
        { key: "IDEE", label: "Bildidee", example: "eine Eule liest nachts in einer Bibliothek bei Kerzenlicht" },
        { key: "VERWENDUNG", label: "Verwendung", example: "Startseite einer Website" },
      ],
    },
  ],
};
export default collection;
