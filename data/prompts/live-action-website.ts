import type { PromptCollection } from "@/lib/promptLibrary";

/**
 * Kategorie „Live-Action Website“ – Start-Prompts für filmisch wirkende, moderne Websites.
 * Alle Texte sind eigenständig formuliert. Neue Vorlagen: einfach ein Objekt ans Array anhängen.
 */
const collection: PromptCollection = {
  category: "Live-Action Website",
  description:
    "Filmische, bildstarke Websites mit grossformatigen Foto- und Video-Bereichen, emotionaler Headline und klaren Handlungsaufforderungen.",
  templates: [
    {
      id: "law-loewen",
      featured: true,
      title: "Live-Action Website über Löwen",
      category: "Live-Action Website",
      tags: ["Komplett-Website", "Natur", "Storytelling", "Responsive"],
      description:
        "Eine Vorlage zum Erstellen einer filmischen, modernen Website über Löwen oder ein anderes Thema.",
      prompt:
        "Erstelle eine hochwertige, filmisch wirkende Live-Action-Website über [THEMA]. Zielgruppe: [ZIELGRUPPE]. Ziel der Website: [ZIEL]. Verwende grossformatige, realistische Bilder oder Video-Bereiche, eine emotionale Headline, klare Handlungsaufforderungen und ein modernes, responsives Layout. Baue diese Bereiche ein: Hero-Bereich, Einführung, Highlights, Bild- oder Szenen-Bereich, Fakten, Call-to-Action und Footer. Stil: [STIL]. Farbwelt: [FARBEN]. Die Website soll auf Desktop und Smartphone überzeugend funktionieren.",
      placeholders: [
        { key: "THEMA", label: "Thema der Website", example: "Löwen" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Naturinteressierte Familien und Schulklassen" },
        { key: "ZIEL", label: "Ziel der Website", example: "Begeisterung wecken und für ein Schutzprojekt spenden" },
        { key: "STIL", label: "Stil", example: "dokumentarisch, cineastisch, ruhig" },
        { key: "FARBEN", label: "Farbwelt", example: "Savannen-Gold, Erdbraun, tiefes Nachtblau" },
      ],
    },
    {
      id: "law-hero-video",
      title: "Filmischer Hero-Bereich mit Video",
      category: "Live-Action Website",
      tags: ["Hero", "Video", "Above the Fold"],
      description:
        "Nur der erste Bildschirm: ein Hero mit Video-Hintergrund, Headline, Subline und Call-to-Action, der sofort Emotion erzeugt.",
      prompt:
        "Entwirf den Hero-Bereich einer Live-Action-Website über [THEMA]. Der Hero füllt den ganzen Bildschirm und nutzt ein stumm laufendes Hintergrundvideo (mit statischem Ersatzbild für langsame Verbindungen). Formuliere eine emotionale Headline mit maximal 8 Wörtern, eine Subline mit einem Satz und einen primären Button „[CTA-TEXT]“. Beschreibe Bildkomposition, Kamerabewegung des Videos, Text-Position, Kontrast-Overlay und die Animation beim Laden. Tonalität: [TONALITÄT]. Liefere den Text auf Deutsch und eine Umsetzung als HTML/CSS mit [FRAMEWORK].",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Löwen in der Serengeti" },
        { key: "CTA-TEXT", label: "Button-Text", example: "Die Reise beginnen" },
        { key: "TONALITÄT", label: "Tonalität", example: "ehrfürchtig, ruhig, kraftvoll" },
        { key: "FRAMEWORK", label: "Technik", example: "Tailwind CSS" },
      ],
    },
    {
      id: "law-scrollytelling",
      featured: true,
      title: "Scrollytelling-Seite mit Kapiteln",
      category: "Live-Action Website",
      tags: ["Storytelling", "Scroll-Animation", "Kapitel"],
      description:
        "Eine Website, die beim Scrollen wie ein Film in Kapiteln erzählt: jede Sektion ein Bild, ein Satz, eine Stimmung.",
      prompt:
        "Konzipiere eine Scrollytelling-Website über [THEMA] mit [ANZAHL] Kapiteln. Jedes Kapitel besteht aus einem vollflächigen Bild oder Videoausschnitt, einer kurzen Kapitelüberschrift und maximal drei Sätzen Text, die beim Scrollen sanft einblenden. Schreibe für jedes Kapitel: Titel, Text, Bildbeschreibung (für Bildsuche oder KI-Bildgenerierung) und die gewünschte Scroll-Animation. Der rote Faden: [ERZÄHLBOGEN]. Beende die Seite mit einem Call-to-Action für [ZIEL]. Achte darauf, dass die Erzählung auch auf dem Smartphone ohne horizontale Effekte funktioniert.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Ein Tag im Leben eines Löwenrudels" },
        { key: "ANZAHL", label: "Anzahl Kapitel", example: "6" },
        { key: "ERZÄHLBOGEN", label: "Erzählbogen", example: "Von der Morgendämmerung bis zur nächtlichen Jagd" },
        { key: "ZIEL", label: "Ziel am Ende", example: "Newsletter-Anmeldung" },
      ],
    },
    {
      id: "law-naturdoku",
      title: "Dokumentarische Themen-Website",
      category: "Live-Action Website",
      tags: ["Dokumentation", "Fakten", "Bildung"],
      description:
        "Für Bildungs- und Naturthemen: filmische Optik kombiniert mit gut strukturierten Fakten, Zahlen und Quellenangaben.",
      prompt:
        "Erstelle eine dokumentarische Live-Action-Website über [THEMA] für [ZIELGRUPPE]. Kombiniere grossformatige, realistische Bilder mit klar gegliederten Wissensblöcken: Einführung, 5 zentrale Fakten mit Zahlen, eine Zeitleiste oder Karte, ein Abschnitt „Warum es wichtig ist“ und ein Bereich mit weiterführenden Quellen. Formuliere alle Texte verständlich in [SPRACHNIVEAU]. Schlage für jeden Abschnitt ein passendes Bildmotiv vor. Das Layout soll ruhig, seriös und modern wirken; nutze [FARBEN] als Farbwelt.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Der Rückgang der Löwenpopulation in Afrika" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Schülerinnen und Schüler ab 12 Jahren" },
        { key: "SPRACHNIVEAU", label: "Sprachniveau", example: "einfacher, klarer Sprache" },
        { key: "FARBEN", label: "Farbwelt", example: "Sand, Ocker, Dunkelgrün" },
      ],
    },
    {
      id: "law-produkt-launch",
      featured: true,
      title: "Produkt-Launch mit Kino-Look",
      category: "Live-Action Website",
      tags: ["Produkt", "Launch", "Marketing", "Conversion"],
      description:
        "Eine Launch-Seite, die ein Produkt wie einen Filmtrailer inszeniert: Teaser, Reveal, Features, Vorbestellung.",
      prompt:
        "Baue eine Launch-Website für [PRODUKT] im Stil eines Kinotrailers. Aufbau: Teaser-Hero mit Countdown oder Datum, Produkt-Reveal mit grossformatigem Bild oder Video, drei Feature-Sektionen mit je einem starken Satz und einem Bild, Social Proof (Zitate oder Logos), Preis- oder Vorbestell-Bereich und Footer. Zielgruppe: [ZIELGRUPPE]. Kernversprechen in einem Satz: [VERSPRECHEN]. Schreibe alle Texte in einer [TONALITÄT] Tonalität und schlage Micro-Animationen vor, die das Produkt hochwertig wirken lassen. Das Layout muss mobil zuerst gedacht sein.",
      placeholders: [
        { key: "PRODUKT", label: "Produkt", example: "eine Outdoor-Kamera für Wildtierfotografie" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "ambitionierte Hobbyfotografen" },
        { key: "VERSPRECHEN", label: "Kernversprechen", example: "Jedes Tier, jede Nacht – gestochen scharf" },
        { key: "TONALITÄT", label: "Tonalität", example: "selbstbewussten, knappen" },
      ],
    },
    {
      id: "law-event",
      title: "Event- oder Festival-Website",
      category: "Live-Action Website",
      tags: ["Event", "Programm", "Tickets"],
      description:
        "Stimmungsvolle Event-Seite mit Aftermovie-Hero, Programm, Line-up oder Speakern, Ort und Ticket-Bereich.",
      prompt:
        "Entwirf die Website für [EVENT] am [DATUM] in [ORT]. Die Seite soll die Atmosphäre des Events transportieren: Hero mit Aftermovie oder Stimmungsbild, ein Abschnitt „Was dich erwartet“, Programm oder Line-up in übersichtlicher Form, Ort mit Anreise, Ticket-Bereich mit klarem Call-to-Action und FAQ. Schreibe alle Texte für [ZIELGRUPPE]. Farbwelt und Stil: [STIL]. Berücksichtige, dass die meisten Besucher die Seite auf dem Smartphone öffnen.",
      placeholders: [
        { key: "EVENT", label: "Event", example: "das Wildlife Film Festival" },
        { key: "DATUM", label: "Datum", example: "12. bis 14. Juni 2027" },
        { key: "ORT", label: "Ort", example: "Zürich" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Film- und Naturfans zwischen 20 und 45" },
        { key: "STIL", label: "Stil & Farben", example: "nächtlich, warm beleuchtet, Gold auf Schwarz" },
      ],
    },
    {
      id: "law-reise",
      title: "Reise-Destination erleben",
      category: "Live-Action Website",
      tags: ["Reise", "Tourismus", "Galerie"],
      description:
        "Eine Destinationsseite, die Fernweh auslöst: Panorama-Hero, Erlebnisse, Reisezeit, Galerie und Buchung.",
      prompt:
        "Erstelle eine filmische Website für die Reise-Destination [DESTINATION]. Ziel: [ZIEL]. Aufbau: Panorama-Hero mit Video oder Bild, kurze emotionale Einführung, [ANZAHL] Erlebnisse mit je Bild, Titel und zwei Sätzen, Abschnitt „Beste Reisezeit“ mit einfacher Übersicht, Bildgalerie im Szenen-Stil, praktische Infos und ein Buchungs- oder Kontakt-Call-to-Action. Zielgruppe: [ZIELGRUPPE]. Schreibe konkret und bildhaft, ohne Floskeln. Schlage passende Bildmotive und eine Farbwelt vor, die zur Landschaft passt.",
      placeholders: [
        { key: "DESTINATION", label: "Destination", example: "die Masai Mara in Kenia" },
        { key: "ZIEL", label: "Ziel der Seite", example: "Safari-Anfragen generieren" },
        { key: "ANZAHL", label: "Anzahl Erlebnisse", example: "5" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Paare und kleine Gruppen mit Interesse an Fotografie" },
      ],
    },
    {
      id: "law-portfolio",
      title: "Portfolio für Filmemacher oder Fotografen",
      category: "Live-Action Website",
      tags: ["Portfolio", "Showreel", "Kreativ"],
      description:
        "Eine Portfolio-Seite, bei der die Arbeiten im Mittelpunkt stehen: Showreel, Projektkacheln, Über-mich, Kontakt.",
      prompt:
        "Gestalte eine Portfolio-Website für [NAME], [BERUF] mit Schwerpunkt [SCHWERPUNKT]. Die Arbeiten sollen für sich sprechen: Showreel oder Titelbild als Hero, ein Raster aus [ANZAHL] Projekten mit Vorschaubild, Titel und Kategorie, eine Projekt-Detailansicht mit grossem Bild oder Video und kurzer Beschreibung, ein persönlicher „Über mich“-Abschnitt und ein Kontaktbereich. Stil: reduziert, viel Weissraum oder tiefes Schwarz, Typografie als Gestaltungselement. Schreibe die Texte in der Ich-Form und formuliere eine einprägsame Positionierung in einem Satz.",
      placeholders: [
        { key: "NAME", label: "Name", example: "Lena Marti" },
        { key: "BERUF", label: "Beruf", example: "Dokumentarfilmerin" },
        { key: "SCHWERPUNKT", label: "Schwerpunkt", example: "Tier- und Naturfilm" },
        { key: "ANZAHL", label: "Anzahl Projekte", example: "8" },
      ],
    },
    {
      id: "law-kampagne",
      title: "Kampagnen-Website für eine gute Sache",
      category: "Live-Action Website",
      tags: ["Non-Profit", "Kampagne", "Spenden"],
      description:
        "Emotionale Kampagnenseite mit Problem, Lösung, Wirkung und klarem Spenden- oder Unterschriften-Aufruf.",
      prompt:
        "Erstelle eine Kampagnen-Website für [ORGANISATION] zum Thema [THEMA]. Ziel: [ZIEL]. Struktur: filmischer Hero mit einem Satz, der das Problem auf den Punkt bringt, Abschnitt „Das Problem“ mit einem starken Bild und drei Fakten, Abschnitt „Unsere Lösung“, Abschnitt „Deine Wirkung“ mit konkreten Beispielen (z. B. was 20, 50, 100 Franken bewirken), Stimmen von Betroffenen oder Fachleuten, ein Call-to-Action, der auf jeder Bildschirmgrösse sichtbar bleibt, und Footer mit Transparenz-Hinweisen. Tonalität: ehrlich, respektvoll, hoffnungsvoll, ohne Schuldzuweisung. Farbwelt: [FARBEN].",
      placeholders: [
        { key: "ORGANISATION", label: "Organisation", example: "eine Stiftung für Artenschutz" },
        { key: "THEMA", label: "Thema", example: "Schutz der letzten Löwenlebensräume" },
        { key: "ZIEL", label: "Ziel", example: "monatliche Spenderinnen und Spender gewinnen" },
        { key: "FARBEN", label: "Farbwelt", example: "warmes Orange, Sand, Anthrazit" },
      ],
    },
    {
      id: "law-restaurant",
      title: "Restaurant oder Food-Marke",
      category: "Live-Action Website",
      tags: ["Gastronomie", "Food", "Reservierung"],
      description:
        "Appetitanregende Website mit Food-Video, Story der Küche, Menü-Highlights, Ambiente-Galerie und Reservierung.",
      prompt:
        "Baue eine Live-Action-Website für [RESTAURANT] in [ORT], Küche: [KÜCHENSTIL]. Der Hero zeigt ein kurzes Video aus der Küche oder ein grossformatiges Gerichtefoto mit einer Headline, die Appetit macht. Danach: die Geschichte hinter dem Restaurant in drei Absätzen, [ANZAHL] Menü-Highlights mit Bild und einem Satz, Ambiente-Galerie, Öffnungszeiten und Standort, Reservierungs-Call-to-Action. Schreibe sinnlich und konkret (Geruch, Textur, Herkunft der Zutaten), aber ohne Übertreibung. Schlage Farbwelt und Typografie passend zum Küchenstil vor.",
      placeholders: [
        { key: "RESTAURANT", label: "Restaurant", example: "das Restaurant Savanne" },
        { key: "ORT", label: "Ort", example: "Bern" },
        { key: "KÜCHENSTIL", label: "Küchenstil", example: "moderne afrikanische Küche" },
        { key: "ANZAHL", label: "Anzahl Highlights", example: "4" },
      ],
    },
    {
      id: "law-sport",
      title: "Athlet oder Sport-Team in Szene setzen",
      category: "Live-Action Website",
      tags: ["Sport", "Personal Brand", "Dynamik"],
      description:
        "Dynamische Seite für Athletinnen, Athleten oder Teams: Action-Hero, Erfolge, Trainingsalltag, Sponsoren, Kontakt.",
      prompt:
        "Gestalte eine dynamische Live-Action-Website für [ATHLET ODER TEAM], Sportart: [SPORTART]. Hero mit Action-Video oder Bewegungsfoto und einer Headline, die die Haltung ausdrückt: [MOTTO]. Weitere Bereiche: Meilensteine und Erfolge als Zeitleiste, „Ein Tag im Training“ mit Bildern und kurzen Texten, aktuelle Termine oder Wettkämpfe, Sponsoren- und Partnerbereich, Social-Media-Einbindung und Kontakt für Medien und Partner. Stil: energiegeladen, hohe Kontraste, schnelle Schnitte in den Animationen. Farbwelt: [FARBEN].",
      placeholders: [
        { key: "ATHLET ODER TEAM", label: "Athlet oder Team", example: "die Trailrunnerin Mara Keller" },
        { key: "SPORTART", label: "Sportart", example: "Ultra-Trailrunning" },
        { key: "MOTTO", label: "Motto", example: "Weiter, als der Kopf erlaubt" },
        { key: "FARBEN", label: "Farbwelt", example: "Neon-Orange auf Schwarz" },
      ],
    },
    {
      id: "law-szenen-galerie",
      title: "Bild- oder Szenen-Bereich (Komponente)",
      category: "Live-Action Website",
      tags: ["Komponente", "Galerie", "Bildbereich"],
      description:
        "Nur ein Baustein: eine filmische Bild- oder Szenen-Sektion, die sich in jede bestehende Website einbauen lässt.",
      prompt:
        "Entwirf einen filmischen Szenen-Bereich für eine Website über [THEMA]. Er zeigt [ANZAHL] Szenen, jede als grossformatiges Bild mit einer kurzen Bildunterschrift (maximal 12 Wörter) und einem optionalen Zitat. Beschreibe für jede Szene das Bildmotiv, Lichtstimmung und Bildausschnitt. Schlage ein Layout vor, das auf dem Desktop als versetztes Raster und auf dem Smartphone als vertikale Abfolge funktioniert, inklusive sanfter Einblend-Animation beim Scrollen. Liefere den Code als [TECHNIK]-Komponente mit Beispiel-Daten.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Löwen bei Sonnenaufgang" },
        { key: "ANZAHL", label: "Anzahl Szenen", example: "6" },
        { key: "TECHNIK", label: "Technik", example: "React mit Tailwind CSS" },
      ],
    },
    {
      id: "law-texte",
      title: "Texte und Headlines für eine Live-Action Website",
      category: "Live-Action Website",
      tags: ["Copywriting", "Headlines", "SEO"],
      description:
        "Wenn das Design steht und nur die Worte fehlen: Headlines, Sublines, CTA-Texte und Meta-Angaben für alle Bereiche.",
      prompt:
        "Schreibe alle Texte für eine filmisch wirkende Website über [THEMA]. Zielgruppe: [ZIELGRUPPE]. Gewünschte Wirkung: [WIRKUNG]. Liefere für die Bereiche Hero, Einführung, Highlights, Fakten und Call-to-Action jeweils: eine Headline (maximal 8 Wörter), eine Subline (ein Satz) und den Fliesstext (maximal 60 Wörter). Ergänze drei Varianten für den Haupt-Button, einen Seitentitel und eine Meta-Beschreibung mit maximal 155 Zeichen. Vermeide Floskeln, Superlative ohne Beleg und Anglizismen, wenn es ein gutes deutsches Wort gibt.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Löwen" },
        { key: "ZIELGRUPPE", label: "Zielgruppe", example: "Erwachsene mit Interesse an Natur und Reisen" },
        { key: "WIRKUNG", label: "Gewünschte Wirkung", example: "Staunen und Respekt vor dem Tier" },
      ],
    },
    {
      id: "law-technik",
      title: "Technische Umsetzung mit Next.js und Animationen",
      category: "Live-Action Website",
      tags: ["Code", "Next.js", "Framer Motion", "Performance"],
      description:
        "Vom Konzept zum Code: eine saubere technische Vorgabe für die Umsetzung einer Live-Action Website.",
      prompt:
        "Setze eine Live-Action-Website über [THEMA] technisch um. Stack: [STACK]. Anforderungen: Hero mit Video (autoplay, stumm, mit Poster-Bild und reduzierter Bewegung bei prefers-reduced-motion), Scroll-Animationen für Einführung, Highlights und Szenen-Bereich, eine Fakten-Sektion mit animierten Zahlen, ein Call-to-Action-Bereich und ein Footer. Bilder responsiv und lazy geladen, Core Web Vitals im grünen Bereich, semantisches HTML, Alt-Texte für alle Bilder. Erstelle die Komponentenstruktur, die wichtigsten Komponenten mit Beispielinhalt und eine kurze Anleitung, wie ich Texte und Bilder austausche. Ordnerstruktur: [STRUKTUR].",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Löwen" },
        { key: "STACK", label: "Technik-Stack", example: "Next.js, TypeScript, Tailwind CSS, Framer Motion" },
        { key: "STRUKTUR", label: "Ordnerstruktur", example: "app/ für Seiten, components/ für Bausteine, public/media für Bilder und Videos" },
      ],
    },
    {
      id: "law-live-video",
      featured: true,
      title: "Live-Video in eine Webseite einbinden",
      category: "Live-Action Website",
      tags: ["Livestream", "Video", "Einbindung", "Technik"],
      description:
        "Ein Live-Video (Stream oder Webcam) als Herzstück einer Webseite: Einbettung, Fallback, Layout und Texte drumherum.",
      prompt:
        "Plane und erstelle einen Live-Video-Bereich für die Webseite von [PROJEKT]. Quelle des Live-Videos: [QUELLE]. Der Bereich soll das laufende Video grossformatig zeigen, mit Titel, kurzer Beschreibung, Live-Kennzeichnung und Zuschauerhinweis. Wenn kein Stream läuft: Ersatzbild oder Aufzeichnung mit Hinweis auf den nächsten Sendetermin ([SENDEZEITEN]). Berücksichtige Autoplay-Regeln der Browser (stumm starten, Ton per Klick), Datenschutz beim Einbetten, Ladezeit und Darstellung auf dem Smartphone. Liefere die Einbettung als Code für [TECHNIK], die Texte rund um das Video und eine Checkliste für den Livebetrieb.",
      placeholders: [
        { key: "PROJEKT", label: "Projekt oder Webseite", example: "ein Naturreservat mit Löwen-Webcam" },
        { key: "QUELLE", label: "Video-Quelle", example: "YouTube Live" },
        { key: "SENDEZEITEN", label: "Sendezeiten", example: "täglich 6 bis 9 Uhr und 17 bis 20 Uhr" },
        { key: "TECHNIK", label: "Technik", example: "HTML und Tailwind CSS" },
      ],
    },
    {
      id: "law-drohne",
      title: "Drohnen- oder Luftaufnahmen als Website-Sektion",
      category: "Live-Action Website",
      tags: ["Drohne", "Video", "Sektion", "Landschaft"],
      description:
        "Eine Sektion, die Drohnenvideos oder Luftaufnahmen wirkungsvoll inszeniert: Ausschnitt, Text-Overlay, Übergänge.",
      prompt:
        "Entwirf eine Website-Sektion mit Drohnen- oder Luftaufnahmen von [ORT ODER MOTIV] für [PROJEKT]. Beschreibe, welche Flugbewegung und welcher Ausschnitt als Loop-Video am besten wirkt, wie lang der Loop sein sollte und wie das Video komprimiert werden muss, damit die Seite schnell lädt. Ergänze ein Text-Overlay mit einer Headline (maximal 6 Wörter) und einem Satz, einen dezenten Übergang zur nächsten Sektion und ein statisches Ersatzbild für langsame Verbindungen. Liefere die Umsetzung als [TECHNIK]-Code.",
      placeholders: [
        { key: "ORT ODER MOTIV", label: "Ort oder Motiv", example: "die Savanne bei Sonnenuntergang" },
        { key: "PROJEKT", label: "Projekt", example: "eine Safari-Lodge-Website" },
        { key: "TECHNIK", label: "Technik", example: "React und Tailwind CSS" },
      ],
    },
  ],
};

export default collection;
