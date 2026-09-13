import type { PromptCollection } from "@/lib/promptLibrary";

const C = "KI-Bilder: Stile & Anwendungen";
const collection: PromptCollection = {
  category: C,
  description: "Fertige Bild-Prompts für typische Anwendungen: Logo, Produktfoto, Porträt, Poster, Sticker, Buchcover und mehr.",
  templates: [
    {
      id: "kib-logo",
      featured: true,
      title: "Logo-Entwurf mit Bild-KI",
      category: C,
      tags: ["Logo", "Bild-KI", "Marke"],
      description: "Ein Prompt für Logo-Entwürfe: flach, skalierbar, mit klarer Symbolik.",
      prompt:
        "Formuliere einen Prompt für eine Bild-KI, der Logo-Entwürfe für [MARKE] erzeugt. Branche: [BRANCHE]. Symbolik: [SYMBOL]. Stil: flaches Vektordesign, klare Formen, maximal zwei Farben ([FARBEN]), auf weissem Hintergrund, ohne Text, ohne Verläufe, ohne 3D-Effekte, gut erkennbar auch klein. Erstelle vier Varianten des Prompts: minimalistisch, verspielt, klassisch, geometrisch. Gib jeden Prompt auf Deutsch und auf Englisch aus.",
      placeholders: [
        { key: "MARKE", label: "Marke", example: "Weise Eule" },
        { key: "BRANCHE", label: "Branche", example: "KI-Werkzeuge" },
        { key: "SYMBOL", label: "Symbolik", example: "eine Eule mit Buch" },
        { key: "FARBEN", label: "Farben", example: "Gold und Dunkelbraun" },
      ],
    },
    {
      id: "kib-produktfoto",
      title: "Produktfoto im Studio-Look",
      category: C,
      tags: ["Produktfoto", "E-Commerce", "Studio"],
      description: "Ein Prompt für saubere Produktbilder mit Licht, Hintergrund und Perspektive.",
      prompt:
        "Formuliere einen Prompt für eine Bild-KI für ein Produktfoto von [PRODUKT]. Look: professionelles Studiofoto, [HINTERGRUND], weiches Licht von links mit dezentem Schatten, Perspektive [PERSPEKTIVE], hohe Detailschärfe, Bildformat [FORMAT]. Ergänze eine Variante mit passender Umgebung (Lifestyle-Szene: [SZENE]) und nenne, was nicht im Bild sein soll. Deutsch und Englisch.",
      placeholders: [
        { key: "PRODUKT", label: "Produkt", example: "eine Outdoor-Kamera" },
        { key: "HINTERGRUND", label: "Hintergrund", example: "hellgrauer Verlauf" },
        { key: "PERSPEKTIVE", label: "Perspektive", example: "leicht von oben, Dreiviertelansicht" },
        { key: "FORMAT", label: "Format", example: "1:1" },
        { key: "SZENE", label: "Lifestyle-Szene", example: "auf einem Felsen in der Savanne bei Morgenlicht" },
      ],
    },
    {
      id: "kib-portraet",
      title: "Porträt oder Headshot",
      category: C,
      tags: ["Porträt", "Headshot", "Fotorealistisch"],
      description: "Ein Prompt für ein professionelles Porträt mit Licht, Hintergrund und Ausdruck.",
      prompt:
        "Formuliere einen Prompt für eine Bild-KI für ein Porträt: [PERSON]. Verwendung: [VERWENDUNG]. Ausdruck: [AUSDRUCK]. Licht: weiches Fensterlicht, leichte Tiefenunschärfe, Hintergrund [HINTERGRUND], Kamera 85 mm, Blende 2, Hochformat. Natürliche Hauttöne, keine übertriebene Glättung. Nenne Details zu Kleidung und Haltung, die zur Verwendung passen. Deutsch und Englisch.",
      placeholders: [
        { key: "PERSON", label: "Person", example: "eine Frau um 40 mit kurzen grauen Haaren" },
        { key: "VERWENDUNG", label: "Verwendung", example: "Team-Seite einer Website" },
        { key: "AUSDRUCK", label: "Ausdruck", example: "freundlich, ruhig, zugewandt" },
        { key: "HINTERGRUND", label: "Hintergrund", example: "unscharfe Bibliothek" },
      ],
    },
    {
      id: "kib-poster",
      title: "Poster oder Plakat",
      category: C,
      tags: ["Poster", "Plakat", "Illustration"],
      description: "Ein Prompt für ein plakatives Bild mit starkem Motiv und Platz für Text.",
      prompt:
        "Formuliere einen Prompt für eine Bild-KI für ein Poster zum Thema [THEMA]. Stil: [STIL]. Ein zentrales, klar erkennbares Motiv, kräftige Komposition, oben oder unten ein ruhiger Bereich für Text (Text selbst nicht generieren), Farbwelt [FARBEN], Hochformat 2:3, druckfähig hohe Auflösung. Erstelle drei Varianten mit unterschiedlichem Motiv-Ansatz. Deutsch und Englisch.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Wildlife Film Festival" },
        { key: "STIL", label: "Stil", example: "Retro-Siebdruck mit grobem Korn" },
        { key: "FARBEN", label: "Farben", example: "Ocker, Schwarz, Cremeweiss" },
      ],
    },
    {
      id: "kib-sticker",
      title: "Sticker-Set",
      category: C,
      tags: ["Sticker", "Set", "Cartoon"],
      description: "Ein Prompt für ein zusammenpassendes Sticker-Set mit konsistentem Stil.",
      prompt:
        "Formuliere einen Prompt für eine Bild-KI für ein Sticker-Set mit [ANZAHL] Motiven zum Thema [THEMA]. Stil: [STIL], dicke weisse Kontur, einfacher Hintergrund (freigestellt), konsistente Farbpalette, jedes Motiv einzeln erkennbar. Liste die Motive auf und formuliere den Prompt so, dass alle Motive im gleichen Stil entstehen (gleiche Beschreibung des Stils vor jedem Motiv). Deutsch und Englisch.",
      placeholders: [
        { key: "ANZAHL", label: "Anzahl Motive", example: "8" },
        { key: "THEMA", label: "Thema", example: "Eulen mit Büchern" },
        { key: "STIL", label: "Stil", example: "niedlicher Cartoon-Stil" },
      ],
    },
    {
      id: "kib-buchcover",
      title: "Buchcover",
      category: C,
      tags: ["Buchcover", "Verlag", "Illustration"],
      description: "Ein Prompt für ein Cover-Motiv, das Genre und Stimmung sofort erkennbar macht.",
      prompt:
        "Formuliere einen Prompt für eine Bild-KI für das Cover des Buches „[TITEL]“, Genre [GENRE]. Handlung in einem Satz: [HANDLUNG]. Stimmung: [STIMMUNG]. Das Motiv soll das Genre auf einen Blick zeigen, Platz für Titel und Autorenname lassen (Text nicht generieren), Hochformat, hohe Auflösung. Gib drei Motiv-Ideen mit je einem Prompt, Deutsch und Englisch, und nenne, welche Genre-Klischees wir vermeiden.",
      placeholders: [
        { key: "TITEL", label: "Titel", example: "Die Nacht der Löwen" },
        { key: "GENRE", label: "Genre", example: "Jugend-Abenteuer" },
        { key: "HANDLUNG", label: "Handlung", example: "Ein Junge muss ein verletztes Löwenjunges zu seinem Rudel zurückbringen" },
        { key: "STIMMUNG", label: "Stimmung", example: "abenteuerlich, warm, leicht bedrohlich" },
      ],
    },
    {
      id: "kib-interior",
      title: "Raumgestaltung visualisieren",
      category: C,
      tags: ["Interior", "Wohnen", "Visualisierung"],
      description: "Ein Prompt, der einen eingerichteten Raum fotorealistisch zeigt.",
      prompt:
        "Formuliere einen Prompt für eine Bild-KI, der [RAUM] im Stil [STIL] zeigt. Wichtige Elemente: [ELEMENTE]. Licht: [LICHT]. Fotorealistisch, Weitwinkel aus Augenhöhe, natürliche Materialien, aufgeräumt, keine Menschen. Erstelle zwei Varianten: eine für den Tag, eine für den Abend mit künstlichem Licht. Deutsch und Englisch.",
      placeholders: [
        { key: "RAUM", label: "Raum", example: "ein kleines Arbeitszimmer mit Dachschräge" },
        { key: "STIL", label: "Stil", example: "Dark Academia" },
        { key: "ELEMENTE", label: "Elemente", example: "Bücherregale bis zur Decke, Ledersessel, Schreibtisch aus Eiche" },
        { key: "LICHT", label: "Licht", example: "warmes Fensterlicht am Nachmittag" },
      ],
    },
    {
      id: "kib-charakter",
      title: "Charakter-Design (Maskottchen oder Figur)",
      category: C,
      tags: ["Charakter", "Maskottchen", "Design"],
      description: "Ein Prompt für eine Figur mit Charakterbogen, Posen und Ausdrücken.",
      prompt:
        "Formuliere einen Prompt für eine Bild-KI für das Charakter-Design von [FIGUR]. Persönlichkeit: [PERSÖNLICHKEIT]. Stil: [STIL]. Erzeuge einen Charakterbogen: Vorderansicht, Seitenansicht, drei Gesichtsausdrücke, zwei Posen, alles im gleichen Stil auf neutralem Hintergrund. Beschreibe Farbpalette und die zwei bis drei Merkmale, an denen man die Figur sofort erkennt. Deutsch und Englisch.",
      placeholders: [
        { key: "FIGUR", label: "Figur", example: "eine weise Eule als Bibliothekarin" },
        { key: "PERSÖNLICHKEIT", label: "Persönlichkeit", example: "ruhig, klug, mit trockenem Humor" },
        { key: "STIL", label: "Stil", example: "stilisierter Cartoon, warme Brauntöne" },
      ],
    },
    {
      id: "kib-infografik",
      title: "Illustration für eine Infografik",
      category: C,
      tags: ["Infografik", "Illustration", "Icons"],
      description: "Ein Prompt für Illustrationselemente, die zu einer Infografik passen.",
      prompt:
        "Formuliere einen Prompt für eine Bild-KI für Illustrationselemente einer Infografik zum Thema [THEMA]. Benötigte Elemente: [ELEMENTE]. Stil: flach, einheitliche Linienstärke, Farbpalette [FARBEN], freigestellt auf weissem Hintergrund, ohne Text und ohne Zahlen (die ergänze ich selbst). Formuliere einen Prompt pro Element mit identischer Stilbeschreibung, damit alles zusammenpasst. Deutsch und Englisch.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Lebensraum der Löwen" },
        { key: "ELEMENTE", label: "Elemente", example: "Löwe, Savanne, Wasserstelle, Karte von Afrika, Sonne" },
        { key: "FARBEN", label: "Farben", example: "Ocker, Dunkelgrün, Sand" },
      ],
    },
    {
      id: "kib-muster",
      title: "Nahtloses Muster (Pattern)",
      category: C,
      tags: ["Muster", "Pattern", "Textil"],
      description: "Ein Prompt für ein nahtlos wiederholbares Muster für Stoff, Papier oder Web.",
      prompt:
        "Formuliere einen Prompt für eine Bild-KI für ein nahtlos kachelbares Muster zum Thema [THEMA]. Stil: [STIL]. Elemente: [ELEMENTE]. Gleichmässige Verteilung, keine erkennbare Kante, Farbpalette [FARBEN], Verwendung: [VERWENDUNG]. Erstelle drei Varianten: dicht, luftig, monochrom. Deutsch und Englisch.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "Eulen und Bücher" },
        { key: "STIL", label: "Stil", example: "handgezeichnet, Aquarell" },
        { key: "ELEMENTE", label: "Elemente", example: "kleine Eulen, Federn, aufgeschlagene Bücher" },
        { key: "FARBEN", label: "Farben", example: "Beige, Braun, ein Hauch Gold" },
        { key: "VERWENDUNG", label: "Verwendung", example: "Geschenkpapier" },
      ],
    },
  ],
};
export default collection;
