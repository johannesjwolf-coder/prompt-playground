import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Marketing & Social Media";
const collection: PromptCollection = {
  category: C,
  description: "Kampagnen, Posts, Anzeigen und Content-Pläne – mit klarer Zielgruppe und messbarem Ziel.",
  templates: [
    {
      id: "mkt-contentplan",
      featured: true,
      title: "Content-Plan für 4 Wochen",
      category: C,
      tags: ["Content-Plan", "Redaktionsplan", "Social Media"],
      description: "Ein realistischer Redaktionsplan mit Themen, Formaten und Zielen pro Woche.",
      prompt:
        "Erstelle einen Content-Plan für 4 Wochen für [MARKE] auf [PLATTFORMEN]. Zielgruppe: [ZIELGRUPPE]. Ziel: [ZIEL]. Pro Woche ein Schwerpunktthema, pro Beitrag: Datum, Plattform, Format (Bild, Video, Karussell, Text), Kernaussage, Hook und Call-to-Action. Mische Wissen, Einblicke hinter die Kulissen, Interaktion und Angebot im Verhältnis 4:3:2:1. Realistisch: maximal [ANZAHL] Beiträge pro Woche.",
      placeholders: [
        { key: "MARKE", label: "Marke", example: "einen Tierpark" },
        { key: "PLATTFORMEN", label: "Plattformen", example: "Instagram und Facebook" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Familien aus der Region" },
        { key: "ZIEL", label: "Ziel", example: "mehr Besuche in den Sommerferien" },
        { key: "ANZAHL", label: "Beiträge pro Woche", example: "4" },
      ],
    },
    {
      id: "mkt-anzeigen",
      title: "Anzeigentexte in drei Varianten",
      category: C,
      tags: ["Ads", "Anzeigen", "A/B-Test"],
      description: "Kurze Anzeigentexte mit Headline, Text und Call-to-Action für Tests.",
      prompt:
        "Schreibe drei Varianten eines Anzeigentexts für [ANGEBOT] auf [PLATTFORM]. Zielgruppe: [ZIELGRUPPE]. Jede Variante mit anderem Ansatz: Nutzen, Emotion, Beweis. Pro Variante: Headline (maximal 40 Zeichen), Haupttext (maximal 125 Zeichen), Beschreibung und Button-Text. Keine leeren Versprechen; nenne, welche Aussage ich belegen können muss.",
      placeholders: [
        { key: "ANGEBOT", label: "Angebot", example: "eine Fotosafari im Herbst" },
        { key: "PLATTFORM", label: "Plattform", example: "Meta Ads" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Hobbyfotografen 35 bis 60" },
      ],
    },
    {
      id: "mkt-kampagne",
      title: "Kampagnenidee mit Leitgedanke",
      category: C,
      tags: ["Kampagne", "Idee", "Kreation"],
      description: "Drei Kampagnenideen mit Leitgedanke, Bildwelt und Umsetzung über mehrere Kanäle.",
      prompt:
        "Entwickle drei Kampagnenideen für [MARKE] mit dem Ziel [ZIEL]. Zielgruppe: [ZIELGRUPPE]. Budgetrahmen: [BUDGET]. Pro Idee: Leitgedanke in einem Satz, Kernbotschaft, Bildwelt, drei konkrete Massnahmen auf verschiedenen Kanälen, wie wir den Erfolg messen, und das grösste Risiko. Wähle am Ende die stärkste Idee und begründe.",
      placeholders: [
        { key: "MARKE", label: "Marke", example: "ein Artenschutzverein" },
        { key: "ZIEL", label: "Ziel", example: "500 neue Mitglieder in sechs Monaten" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Naturinteressierte 25 bis 50" },
        { key: "BUDGET", label: "Budget", example: "klein, hauptsächlich organisch" },
      ],
    },
    {
      id: "mkt-instagram-post",
      title: "Instagram-Post mit Bildidee",
      category: C,
      tags: ["Instagram", "Post", "Caption"],
      description: "Ein einzelner Post: Bildidee, Caption, Hashtags und Call-to-Action.",
      prompt:
        "Erstelle einen Instagram-Post für [MARKE] zum Thema [THEMA]. Liefere: Bild- oder Videoidee mit Beschreibung, eine Caption mit starkem ersten Satz (wird in der Vorschau gezeigt), maximal 150 Wörter, einen Call-to-Action und 10 passende Hashtags (Mischung aus grossen und kleinen). Tonalität: [TONALITÄT].",
      placeholders: [
        { key: "MARKE", label: "Marke", example: "eine Safari-Lodge" },
        { key: "THEMA", label: "Thema", example: "der erste Regen nach der Trockenzeit" },
        { key: "TONALITÄT", label: "Tonalität", example: "ruhig und staunend" },
      ],
    },
    {
      id: "mkt-linkedin",
      title: "LinkedIn-Beitrag mit Haltung",
      category: C,
      tags: ["LinkedIn", "Personal Branding", "Beitrag"],
      description: "Ein persönlicher LinkedIn-Beitrag mit Erlebnis, Erkenntnis und Frage an die Leser.",
      prompt:
        "Schreibe einen LinkedIn-Beitrag aus der Sicht von [PERSON], [ROLLE]. Anlass oder Erlebnis: [ERLEBNIS]. Kernerkenntnis: [ERKENNTNIS]. Aufbau: erster Satz, der neugierig macht, kurze Geschichte in Ich-Form, die Erkenntnis in einem Absatz, eine ehrliche Frage an die Leser. Maximal 180 Wörter, kurze Absätze, keine Buzzwords, maximal drei Hashtags.",
      placeholders: [
        { key: "PERSON", label: "Person", example: "Lena Marti" },
        { key: "ROLLE", label: "Rolle", example: "Dokumentarfilmerin" },
        { key: "ERLEBNIS", label: "Erlebnis", example: "drei Wochen Warten auf eine einzige Löwenszene" },
        { key: "ERKENNTNIS", label: "Erkenntnis", example: "Geduld ist im Beruf wichtiger als Technik" },
      ],
    },
    {
      id: "mkt-zielgruppe",
      title: "Zielgruppe schärfen (Personas)",
      category: C,
      tags: ["Persona", "Zielgruppe", "Strategie"],
      description: "Zwei bis drei Personas mit Bedürfnissen, Einwänden und passenden Botschaften.",
      prompt:
        "Erstelle [ANZAHL] Personas für [ANGEBOT]. Für jede Persona: Name und Kurzprofil, Situation und Ziele, grösste Sorge oder Einwand, wo sie sich informiert, welche Botschaft sie überzeugt und welche sie abschreckt. Leite daraus drei gemeinsame Botschaften ab, die für alle Personas funktionieren. Bleibe realistisch, keine Klischees.",
      placeholders: [
        { key: "ANZAHL", label: "Anzahl Personas", example: "3" },
        { key: "ANGEBOT", label: "Angebot", example: "eine Live-Webcam mit Bezahl-Mitgliedschaft" },
      ],
    },
    {
      id: "mkt-slogan",
      title: "Slogan und Claim",
      category: C,
      tags: ["Slogan", "Claim", "Marke"],
      description: "Kurze, merkfähige Claims in verschiedenen Richtungen.",
      prompt:
        "Entwickle 15 Slogans für [MARKE]. Wofür wir stehen: [POSITIONIERUNG]. Zielgruppe: [ZIELGRUPPE]. Maximal 6 Wörter, gut aussprechbar, ohne abgenutzte Wörter wie „Erlebnis“ oder „Leidenschaft“. Gruppiere in: nüchtern, emotional, spielerisch. Nenne deine drei Favoriten mit einem Satz Begründung und prüfe, ob sie auch auf Englisch funktionieren würden.",
      placeholders: [
        { key: "MARKE", label: "Marke", example: "einen Tierfilm-Kanal" },
        { key: "POSITIONIERUNG", label: "Positionierung", example: "echte Natur ohne Inszenierung" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Menschen, die Ruhe suchen" },
      ],
    },
    {
      id: "mkt-launch-email",
      title: "E-Mail-Sequenz für einen Launch",
      category: C,
      tags: ["E-Mail", "Sequenz", "Launch"],
      description: "Vier aufeinander aufbauende E-Mails vor und nach einem Start.",
      prompt:
        "Schreibe eine E-Mail-Sequenz von vier Mails für den Launch von [ANGEBOT] an [ZIELGRUPPE]. Zeitplan: Ankündigung, Einblick, Start, Erinnerung. Pro Mail: Betreff, Vorschautext, Text mit maximal 200 Wörtern, ein Call-to-Action. Die Mails sollen aufeinander Bezug nehmen und Vertrauen aufbauen, nicht drängen. Tonalität: [TONALITÄT].",
      placeholders: [
        { key: "ANGEBOT", label: "Angebot", example: "einen Online-Kurs Tierfotografie" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Newsletter-Abonnenten" },
        { key: "TONALITÄT", label: "Tonalität", example: "persönlich und ruhig" },
      ],
    },
    {
      id: "mkt-community",
      title: "Community-Aktion zum Mitmachen",
      category: C,
      tags: ["Community", "Aktion", "Interaktion"],
      description: "Eine Mitmach-Aktion, die Beiträge, Reichweite und Bindung bringt.",
      prompt:
        "Entwirf eine Mitmach-Aktion für die Community von [MARKE] rund um [THEMA]. Ziel: [ZIEL]. Beschreibe: die Idee in zwei Sätzen, wie Teilnehmende mitmachen (einfach, in unter fünf Minuten), was sie davon haben, Regeln in drei Punkten, Ankündigungstext, Beispiele für Beiträge und wie wir die besten Beiträge zeigen. Vermeide Gewinnspiele mit rechtlichem Aufwand, wenn es anders geht.",
      placeholders: [
        { key: "MARKE", label: "Marke", example: "einen Tierpark" },
        { key: "THEMA", label: "Thema", example: "das schönste Löwenfoto der Besucher" },
        { key: "ZIEL", label: "Ziel", example: "Beiträge aus der Community und Reichweite" },
      ],
    },
    {
      id: "mkt-event-promo",
      title: "Veranstaltung bewerben",
      category: C,
      tags: ["Event", "Promotion", "Multichannel"],
      description: "Texte für alle Kanäle, um eine Veranstaltung bekannt zu machen.",
      prompt:
        "Bewirb die Veranstaltung [EVENT] am [DATUM] in [ORT]. Zielgruppe: [ZIELGRUPPE]. Liefere: einen Ankündigungspost für Social Media, einen Newsletter-Abschnitt, einen Text für die Website, eine Kurzversion für WhatsApp-Weiterleitung und eine Erinnerung zwei Tage vorher. Alle Texte nennen Datum, Ort, Kosten und den einen Grund, warum man kommen sollte.",
      placeholders: [
        { key: "EVENT", label: "Event", example: "Nachtführung durch das Löwengehege" },
        { key: "DATUM", label: "Datum", example: "Samstag, 20. Juni, 21 Uhr" },
        { key: "ORT", label: "Ort", example: "Tierpark Bergwald" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Erwachsene und Jugendliche ab 14" },
      ],
    },
  ],
};
export default collection;
