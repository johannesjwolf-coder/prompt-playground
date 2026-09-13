import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Websites & Landingpages";
const collection: PromptCollection = {
  category: C,
  description: "Klassische Websites, Landingpages und einzelne Seitenbereiche – von der Struktur bis zum fertigen Text.",
  templates: [
    {
      id: "web-landingpage",
      featured: true,
      title: "Landingpage mit klarem Ziel",
      category: C,
      tags: ["Landingpage", "Conversion", "Struktur"],
      description: "Eine einseitige Landingpage, die Besucher zu genau einer Handlung führt.",
      prompt:
        "Erstelle eine Landingpage für [ANGEBOT]. Zielgruppe: [ZIELGRUPPE]. Die eine gewünschte Handlung: [HANDLUNG]. Aufbau: Hero mit Nutzenversprechen in einem Satz, Problem-Abschnitt, Lösung mit drei Vorteilen, Social Proof, Einwände und Antworten, abschliessender Call-to-Action. Schreibe alle Texte fertig aus, in der Du-Form, konkret und ohne Marketing-Floskeln. Schlage für jeden Abschnitt ein Bildmotiv vor und beschreibe das Layout für Desktop und Smartphone.",
      placeholders: [
        { key: "ANGEBOT", label: "Angebot", example: "einen Online-Kurs für Naturfotografie" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Einsteiger mit Spiegelreflexkamera" },
        { key: "HANDLUNG", label: "Gewünschte Handlung", example: "Anmeldung zur kostenlosen Probelektion" },
      ],
    },
    {
      id: "web-sitemap",
      title: "Seitenstruktur und Navigation planen",
      category: C,
      tags: ["Sitemap", "Navigation", "Konzept"],
      description: "Bevor gestaltet wird: eine sinnvolle Seitenstruktur mit Navigation und Inhalten pro Seite.",
      prompt:
        "Plane die Seitenstruktur einer Website für [PROJEKT]. Zielgruppe: [ZIELGRUPPE]. Wichtigste Ziele der Website: [ZIELE]. Liefere eine Sitemap mit maximal [ANZAHL] Hauptseiten, für jede Seite: Zweck, die drei wichtigsten Inhalte und den Call-to-Action. Schlage eine Hauptnavigation mit kurzen, verständlichen Bezeichnungen vor und begründe, was bewusst weggelassen wird.",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "ein Tierpark" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Familien und Schulen" },
        { key: "ZIELE", label: "Ziele", example: "Ticketverkauf und Informationen zu Öffnungszeiten" },
        { key: "ANZAHL", label: "Anzahl Hauptseiten", example: "6" },
      ],
    },
    {
      id: "web-ueber-uns",
      title: "Über-uns-Seite mit Persönlichkeit",
      category: C,
      tags: ["Über uns", "Story", "Vertrauen"],
      description: "Eine Über-uns-Seite, die Vertrauen schafft, ohne langweilig zu werden.",
      prompt:
        "Schreibe die Über-uns-Seite für [UNTERNEHMEN]. Wir sind: [KURZBESCHREIBUNG]. Gründungsgeschichte in Stichworten: [GESCHICHTE]. Werte: [WERTE]. Aufbau: Einstieg mit einem Satz, der zeigt, wofür wir stehen; unsere Geschichte in drei Absätzen; das Team (Platzhalter für Namen und Rollen); was uns unterscheidet; Einladung zum Kontakt. Tonalität: [TONALITÄT]. Keine Floskeln wie „leidenschaftlich“ oder „innovativ“ ohne konkreten Beleg.",
      placeholders: [
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "die Wildlife-Filmproduktion Savannenlicht" },
        { key: "KURZBESCHREIBUNG", label: "Kurzbeschreibung", example: "ein Team aus drei Filmemachern in Basel" },
        { key: "GESCHICHTE", label: "Geschichte", example: "2019 gegründet nach einer Kenia-Reise" },
        { key: "WERTE", label: "Werte", example: "Respekt vor Tieren, Geduld, Handwerk" },
        { key: "TONALITÄT", label: "Tonalität", example: "warm und ehrlich" },
      ],
    },
    {
      id: "web-faq",
      title: "FAQ-Bereich mit echten Fragen",
      category: C,
      tags: ["FAQ", "Support", "SEO"],
      description: "Häufige Fragen, die Besucher wirklich stellen, mit kurzen, hilfreichen Antworten.",
      prompt:
        "Erstelle einen FAQ-Bereich für [ANGEBOT]. Zielgruppe: [ZIELGRUPPE]. Denke aus Sicht der Besucher: Welche [ANZAHL] Fragen tauchen vor dem Kauf oder der Anmeldung auf? Formuliere jede Frage so, wie sie jemand wirklich stellen würde, und antworte in maximal drei Sätzen, ehrlich und ohne Verkaufsdruck. Gruppiere die Fragen sinnvoll und markiere, welche sich für strukturierte Daten (FAQ-Schema) eignen.",
      placeholders: [
        { key: "ANGEBOT", label: "Angebot", example: "eine geführte Fotosafari" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Reisende ohne Safari-Erfahrung" },
        { key: "ANZAHL", label: "Anzahl Fragen", example: "10" },
      ],
    },
    {
      id: "web-preise",
      title: "Preisseite verständlich gestalten",
      category: C,
      tags: ["Preise", "Pakete", "Conversion"],
      description: "Pakete, Preise und Unterschiede so darstellen, dass die Entscheidung leicht fällt.",
      prompt:
        "Gestalte eine Preisseite für [ANGEBOT] mit [ANZAHL] Paketen: [PAKETE]. Für jedes Paket: Name, Preis, ein Satz, für wen es passt, und die wichtigsten Leistungen als kurze Liste. Hebe das empfohlene Paket hervor und begründe es. Ergänze einen Vergleich der Unterschiede, drei häufige Fragen zu Zahlung und Kündigung und einen Call-to-Action pro Paket. Sprache: klar, ohne Kleingedrucktes-Ton.",
      placeholders: [
        { key: "ANGEBOT", label: "Angebot", example: "eine Foto-Software" },
        { key: "ANZAHL", label: "Anzahl Pakete", example: "3" },
        { key: "PAKETE", label: "Pakete", example: "Basis, Pro, Studio" },
      ],
    },
    {
      id: "web-kontakt",
      title: "Kontaktseite, die Hürden abbaut",
      category: C,
      tags: ["Kontakt", "Formular", "UX"],
      description: "Kontaktseite mit Formular, Alternativen und Erwartungsmanagement.",
      prompt:
        "Erstelle die Kontaktseite für [UNTERNEHMEN]. Besucher sollen wissen: Wie erreichen sie uns, wie schnell antworten wir, was passiert nach dem Absenden. Formular mit maximal [ANZAHL] Feldern (welche und warum), Alternativen (Telefon, E-Mail, Adresse, Öffnungszeiten), eine freundliche Bestätigungsnachricht und Fehlermeldungen, die weiterhelfen. Tonalität: [TONALITÄT].",
      placeholders: [
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "eine Tierarztpraxis" },
        { key: "ANZAHL", label: "Formularfelder", example: "4" },
        { key: "TONALITÄT", label: "Tonalität", example: "freundlich und ruhig" },
      ],
    },
    {
      id: "web-onepager",
      title: "One-Pager für ein kleines Unternehmen",
      category: C,
      tags: ["One-Pager", "KMU", "Komplett"],
      description: "Eine einzige, gut strukturierte Seite mit allem, was ein kleines Unternehmen braucht.",
      prompt:
        "Erstelle einen One-Pager für [UNTERNEHMEN] in [ORT]. Leistungen: [LEISTUNGEN]. Aufbau: Hero mit Angebot und Standort in einem Satz, Leistungen mit je zwei Sätzen, „Warum wir“, Kundenstimmen (Platzhalter), Kontakt mit Karte und Öffnungszeiten. Schreibe alle Texte, schlage eine Farbwelt vor und beschreibe das Layout so, dass es ohne Designer umsetzbar ist. Alles auch auf dem Smartphone gut lesbar.",
      placeholders: [
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "die Hundeschule Pfotenwerk" },
        { key: "ORT", label: "Ort", example: "Luzern" },
        { key: "LEISTUNGEN", label: "Leistungen", example: "Welpenkurs, Einzeltraining, Social Walks" },
      ],
    },
    {
      id: "web-seo-check",
      title: "Bestehende Seite auf SEO und Klarheit prüfen",
      category: C,
      tags: ["SEO", "Review", "Optimierung"],
      description: "Eine vorhandene Seite analysieren lassen und konkrete Verbesserungen erhalten.",
      prompt:
        "Analysiere den folgenden Seitentext auf Verständlichkeit, Struktur und Suchmaschinen-Eignung. Hauptkeyword: [KEYWORD]. Zielgruppe: [ZIELGRUPPE]. Gib mir: die drei grössten Schwächen, eine überarbeitete Version des Textes mit klarer Überschriften-Hierarchie, einen Seitentitel (maximal 60 Zeichen) und eine Meta-Beschreibung (maximal 155 Zeichen). Hier der Text:\n\n[TEXT]",
      placeholders: [
        { key: "KEYWORD", label: "Hauptkeyword", example: "Fotosafari Kenia" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Hobbyfotografen" },
        { key: "TEXT", label: "Seitentext", example: "(hier den bestehenden Text einfügen)" },
      ],
    },
    {
      id: "web-barrierefrei",
      title: "Website barrierefrei machen",
      category: C,
      tags: ["Barrierefreiheit", "Accessibility", "Checkliste"],
      description: "Konkrete Massnahmen, damit die Website für alle nutzbar ist.",
      prompt:
        "Prüfe das Konzept meiner Website für [PROJEKT] auf Barrierefreiheit und gib mir eine priorisierte Massnahmenliste. Berücksichtige Kontraste, Tastaturbedienung, Alt-Texte, Überschriftenstruktur, Formulare, Videos mit Untertiteln und Bewegung (prefers-reduced-motion). Für jede Massnahme: Warum wichtig, wie umsetzen, wie testen. Technik: [TECHNIK].",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "eine Tierpark-Website mit Videos" },
        { key: "TECHNIK", label: "Technik", example: "Next.js und Tailwind CSS" },
      ],
    },
    {
      id: "web-blog-konzept",
      title: "Blog-Bereich mit Themenplan",
      category: C,
      tags: ["Blog", "Content", "Themenplan"],
      description: "Ein Blog, der zur Website passt: Rubriken, erste Artikel-Ideen und Format.",
      prompt:
        "Konzipiere den Blog-Bereich für die Website von [PROJEKT]. Zielgruppe: [ZIELGRUPPE]. Ziel des Blogs: [ZIEL]. Schlage drei Rubriken vor, für jede Rubrik fünf Artikelideen mit Arbeitstitel und einem Satz Inhalt, ein wiederkehrendes Format (z. B. Serie oder Interview) und einen realistischen Veröffentlichungsrhythmus. Beschreibe, wie die Artikelseite aufgebaut sein soll (Einleitung, Bilder, Zwischenüberschriften, Abschluss).",
      placeholders: [
        { key: "PROJEKT", label: "Projekt", example: "eine Safari-Reiseagentur" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Reisende, die zum ersten Mal nach Afrika fahren" },
        { key: "ZIEL", label: "Ziel", example: "Vertrauen aufbauen und Anfragen erhöhen" },
      ],
    },
  ],
};
export default collection;
