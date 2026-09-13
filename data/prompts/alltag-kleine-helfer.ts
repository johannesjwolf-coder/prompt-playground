import type { PromptCollection } from "@/lib/promptLibrary";

const C = "Alltag: Kleine Helfer";
const collection: PromptCollection = {
  category: C,
  description: "Kurze Prompts für die kleinen Dinge: Nachrichten, Absagen, Glückwünsche, Inserate, Reparaturen, Pflanzen, Haustiere.",
  templates: [
    {
      id: "kh-nachricht",
      featured: true,
      title: "Kurze Nachricht formulieren (WhatsApp, SMS)",
      category: C,
      tags: ["Nachricht", "WhatsApp", "Kurz"],
      description: "Eine kurze Nachricht, die freundlich und klar rüberkommt.",
      prompt:
        "Formuliere eine kurze Nachricht an [EMPFÄNGER]. Anliegen: [ANLIEGEN]. Tonalität: [TONALITÄT]. Maximal drei Sätze, natürlich wie im Chat, kein Betreff, keine Floskeln. Gib mir zwei Varianten: eine ganz kurz, eine etwas wärmer.",
      placeholders: [
        { key: "EMPFÄNGER", label: "Empfänger", example: "meine Nachbarin" },
        { key: "ANLIEGEN", label: "Anliegen", example: "ob sie am Wochenende meine Pflanzen giessen könnte" },
        { key: "TONALITÄT", label: "Tonalität", example: "freundlich, locker" },
      ],
    },
    {
      id: "kh-absage",
      title: "Termin absagen oder verschieben",
      category: C,
      tags: ["Absage", "Termin", "Höflich"],
      description: "Höflich absagen, ohne lange Erklärungen, mit Alternative.",
      prompt:
        "Schreibe eine Absage oder Verschiebung für [TERMIN] an [EMPFÄNGER]. Grund (kann vage bleiben): [GRUND]. Alternative: [ALTERNATIVE]. Kurz, ehrlich, ohne übertriebene Entschuldigung, mit konkretem Vorschlag für einen neuen Termin. Form: [FORM].",
      placeholders: [
        { key: "TERMIN", label: "Termin", example: "das Abendessen am Freitag" },
        { key: "EMPFÄNGER", label: "Empfänger", example: "einen Freund" },
        { key: "GRUND", label: "Grund", example: "ich bin erschöpft und brauche Ruhe" },
        { key: "ALTERNATIVE", label: "Alternative", example: "nächste Woche Mittwoch oder Donnerstag" },
        { key: "FORM", label: "Form", example: "WhatsApp" },
      ],
    },
    {
      id: "kh-glueckwunsch",
      title: "Glückwunsch, der nicht nach Vorlage klingt",
      category: C,
      tags: ["Glückwunsch", "Karte", "Persönlich"],
      description: "Persönliche Glückwünsche zu Geburtstag, Hochzeit, Geburt oder Erfolg.",
      prompt:
        "Schreibe einen Glückwunsch zu [ANLASS] für [PERSON]. Unsere Beziehung: [BEZIEHUNG]. Etwas Persönliches, das ich erwähnen möchte: [PERSÖNLICH]. Länge: [LÄNGE]. Warm, konkret, ohne Standardsprüche und ohne Reime. Zwei Varianten: eine herzlich, eine mit Humor.",
      placeholders: [
        { key: "ANLASS", label: "Anlass", example: "dem 50. Geburtstag" },
        { key: "PERSON", label: "Person", example: "meinen Onkel" },
        { key: "BEZIEHUNG", label: "Beziehung", example: "wir sehen uns selten, mögen uns aber sehr" },
        { key: "PERSÖNLICH", label: "Persönlich", example: "seine Begeisterung für Vogelbeobachtung" },
        { key: "LÄNGE", label: "Länge", example: "vier bis fünf Sätze" },
      ],
    },
    {
      id: "kh-entschuldigung",
      title: "Sich aufrichtig entschuldigen",
      category: C,
      tags: ["Entschuldigung", "Beziehung", "Ehrlich"],
      description: "Eine Entschuldigung, die Verantwortung übernimmt, ohne sich zu rechtfertigen.",
      prompt:
        "Hilf mir, mich bei [PERSON] zu entschuldigen. Was passiert ist: [VORFALL]. Was ich verstanden habe: [EINSICHT]. Was ich anders machen werde: [ÄNDERUNG]. Formuliere eine Entschuldigung, die Verantwortung übernimmt, das Gefühl der anderen Person anerkennt, keine Rechtfertigung enthält und nichts verspricht, was ich nicht halten kann. Form: [FORM]. Kurz und ehrlich.",
      placeholders: [
        { key: "PERSON", label: "Person", example: "meiner Kollegin" },
        { key: "VORFALL", label: "Vorfall", example: "ich habe sie im Meeting unterbrochen und ihre Idee als meine dargestellt" },
        { key: "EINSICHT", label: "Einsicht", example: "das war respektlos und hat ihr geschadet" },
        { key: "ÄNDERUNG", label: "Änderung", example: "ich stelle es im nächsten Meeting richtig" },
        { key: "FORM", label: "Form", example: "persönliches Gespräch" },
      ],
    },
    {
      id: "kh-einkaufsliste",
      title: "Einkaufsliste aus Rezepten",
      category: C,
      tags: ["Einkauf", "Rezept", "Liste"],
      description: "Aus mehreren Rezepten eine zusammengefasste Einkaufsliste nach Abteilungen.",
      prompt:
        "Erstelle aus den folgenden Rezepten eine Einkaufsliste für [PERSONEN] Personen. Fasse gleiche Zutaten zusammen, rechne Mengen um, sortiere nach Abteilungen im Supermarkt und markiere, was ich wahrscheinlich schon zu Hause habe ([VORRAT]). Rezepte:\n\n[REZEPTE]",
      placeholders: [
        { key: "PERSONEN", label: "Personen", example: "4" },
        { key: "VORRAT", label: "Vorrat", example: "Öl, Salz, Pfeffer, Reis, Zwiebeln" },
        { key: "REZEPTE", label: "Rezepte", example: "(hier einfügen)" },
      ],
    },
    {
      id: "kh-kleinanzeige",
      title: "Kleinanzeige, die verkauft",
      category: C,
      tags: ["Kleinanzeige", "Verkaufen", "Inserat"],
      description: "Titel, Beschreibung und Preisargument für ein Inserat auf einer Kleinanzeigen-Plattform.",
      prompt:
        "Schreibe eine Kleinanzeige für [GEGENSTAND]. Zustand: [ZUSTAND]. Preis: [PREIS]. Besonderheiten: [BESONDERHEITEN]. Liefere: einen Titel mit den Suchbegriffen, die Käufer eingeben, eine ehrliche Beschreibung in maximal 100 Wörtern, Hinweise zu Abholung oder Versand und einen Satz, der Interessenten zum Schreiben bringt. Keine Übertreibungen, keine Ausrufezeichen-Flut.",
      placeholders: [
        { key: "GEGENSTAND", label: "Gegenstand", example: "eine Spiegelreflexkamera mit zwei Objektiven" },
        { key: "ZUSTAND", label: "Zustand", example: "gebraucht, leichte Gebrauchsspuren, voll funktionsfähig" },
        { key: "PREIS", label: "Preis", example: "CHF 450, Verhandlungsbasis" },
        { key: "BESONDERHEITEN", label: "Besonderheiten", example: "Originalverpackung, Rechnung vorhanden" },
      ],
    },
    {
      id: "kh-bewertung-schreiben",
      title: "Bewertung schreiben (Restaurant, Produkt, Handwerker)",
      category: C,
      tags: ["Bewertung", "Rezension", "Fair"],
      description: "Eine faire, hilfreiche Bewertung, die anderen wirklich weiterhilft.",
      prompt:
        "Schreibe eine Bewertung für [WAS]. Meine Erfahrung: [ERFAHRUNG]. Sterne: [STERNE]. Die Bewertung soll anderen helfen: konkret, was gut war, was nicht, für wen es passt, ein Tipp. Fair und ohne Pauschalurteile, maximal 120 Wörter. Tonalität: [TONALITÄT].",
      placeholders: [
        { key: "WAS", label: "Bewertet wird", example: "ein Handwerker, der unser Bad renoviert hat" },
        { key: "ERFAHRUNG", label: "Erfahrung", example: "pünktlich, sauber, aber teurer als besprochen" },
        { key: "STERNE", label: "Sterne", example: "4 von 5" },
        { key: "TONALITÄT", label: "Tonalität", example: "sachlich, freundlich" },
      ],
    },
    {
      id: "kh-reklamation-kunde",
      title: "Reklamation als Kunde schreiben",
      category: C,
      tags: ["Reklamation", "Kunde", "Beschwerde"],
      description: "Eine Beschwerde, die ernst genommen wird: sachlich, konkret, mit klarer Forderung.",
      prompt:
        "Schreibe eine Reklamation an [UNTERNEHMEN]. Was ich gekauft habe: [PRODUKT]. Was nicht stimmt: [PROBLEM]. Was ich möchte: [FORDERUNG]. Struktur: Sachverhalt mit Datum und Bestellnummer als Platzhalter, das Problem konkret, meine Erwartung mit Frist, freundlicher, aber bestimmter Ton, Hinweis, dass ich Belege beilegen kann. Maximal 180 Wörter.",
      placeholders: [
        { key: "UNTERNEHMEN", label: "Unternehmen", example: "einen Online-Shop" },
        { key: "PRODUKT", label: "Produkt", example: "eine Jacke" },
        { key: "PROBLEM", label: "Problem", example: "Reissverschluss nach zwei Wochen kaputt" },
        { key: "FORDERUNG", label: "Forderung", example: "Ersatz oder Rückerstattung innert 14 Tagen" },
      ],
    },
    {
      id: "kh-pflanze",
      title: "Pflanze retten oder pflegen",
      category: C,
      tags: ["Pflanzen", "Pflege", "Zuhause"],
      description: "Diagnose und Pflegeplan für eine kränkelnde Zimmer- oder Balkonpflanze.",
      prompt:
        "Meine Pflanze [PFLANZE] hat folgende Symptome: [SYMPTOME]. Standort: [STANDORT]. Giessen: [GIESSEN]. Nenne die wahrscheinlichsten Ursachen in Reihenfolge, wie ich sie unterscheide, was ich sofort tun soll, und einen einfachen Pflegeplan für die nächsten vier Wochen. Sag mir auch, woran ich erkenne, dass es besser wird.",
      placeholders: [
        { key: "PFLANZE", label: "Pflanze", example: "Monstera" },
        { key: "SYMPTOME", label: "Symptome", example: "gelbe Blätter unten, braune Spitzen" },
        { key: "STANDORT", label: "Standort", example: "zwei Meter vom Südfenster" },
        { key: "GIESSEN", label: "Giessen", example: "einmal pro Woche reichlich" },
      ],
    },
    {
      id: "kh-haustier",
      title: "Haustier-Frage (Verhalten, Alltag)",
      category: C,
      tags: ["Haustier", "Verhalten", "Alltag"],
      description: "Alltagsfragen zu Verhalten und Gewohnheiten eines Haustiers, mit Grenzen zum Tierarzt.",
      prompt:
        "Ich habe [TIER], [ALTER]. Situation: [SITUATION]. Was ich bisher versucht habe: [VERSUCHE]. Erkläre mögliche Gründe für das Verhalten, gib mir einen Schritt-für-Schritt-Plan für die nächsten zwei Wochen, nenne, was ich vermeiden sollte, und sage klar, bei welchen Anzeichen ich zum Tierarzt gehen muss. Hinweis: keine tierärztliche Diagnose.",
      placeholders: [
        { key: "TIER", label: "Tier", example: "einen Hund (Border Collie)" },
        { key: "ALTER", label: "Alter", example: "2 Jahre" },
        { key: "SITUATION", label: "Situation", example: "bellt, sobald jemand an der Tür klingelt" },
        { key: "VERSUCHE", label: "Versuche", example: "ignorieren, Leckerli beim Klingeln" },
      ],
    },
    {
      id: "kh-reparatur",
      title: "Reparatur-Anleitung Schritt für Schritt",
      category: C,
      tags: ["Reparatur", "Anleitung", "Heimwerken"],
      description: "Eine verständliche Anleitung für eine kleine Reparatur, inklusive Werkzeug und Sicherheit.",
      prompt:
        "Erkläre mir, wie ich [REPARATUR] selbst mache. Meine Erfahrung: [ERFAHRUNG]. Werkzeug, das ich habe: [WERKZEUG]. Liefere: benötigtes Material und Werkzeug, Sicherheitshinweise, Schritte mit je einem Satz, woran ich merke, dass der Schritt geklappt hat, typische Fehler, und die klare Grenze, ab der ich eine Fachperson holen sollte.",
      placeholders: [
        { key: "REPARATUR", label: "Reparatur", example: "einen tropfenden Wasserhahn in der Küche reparieren" },
        { key: "ERFAHRUNG", label: "Erfahrung", example: "wenig, ich habe mal ein Regal aufgehängt" },
        { key: "WERKZEUG", label: "Werkzeug", example: "Schraubenzieher, Zange, Rollgabelschlüssel" },
      ],
    },
    {
      id: "kh-schwieriges-gespraech",
      title: "Schwieriges Gespräch vorbereiten",
      category: C,
      tags: ["Gespräch", "Konflikt", "Vorbereitung"],
      description: "Ein heikles Gespräch strukturieren: Ziel, Einstieg, Sätze, Reaktionen.",
      prompt:
        "Hilf mir, ein schwieriges Gespräch mit [PERSON] vorzubereiten. Thema: [THEMA]. Was ich erreichen will: [ZIEL]. Was ich befürchte: [BEFÜRCHTUNG]. Gib mir: einen ruhigen Einstiegssatz, drei Kernaussagen in Ich-Form, wie ich auf wahrscheinliche Reaktionen reagiere (Abwehr, Rückzug, Gegenangriff), was ich nicht sagen sollte, und einen Satz für den Abschluss, der eine Vereinbarung ermöglicht.",
      placeholders: [
        { key: "PERSON", label: "Person", example: "meinem Mitbewohner" },
        { key: "THEMA", label: "Thema", example: "die ungleiche Verteilung der Hausarbeit" },
        { key: "ZIEL", label: "Ziel", example: "eine faire Aufteilung, ohne Streit" },
        { key: "BEFÜRCHTUNG", label: "Befürchtung", example: "dass er sich angegriffen fühlt" },
      ],
    },
    {
      id: "kh-kindern-erklaeren",
      title: "Kindern etwas erklären",
      category: C,
      tags: ["Kinder", "Erklärung", "Familie"],
      description: "Eine kindgerechte Erklärung für schwierige Fragen, mit Vergleich aus ihrer Welt.",
      prompt:
        "Erkläre [THEMA] für ein Kind von [ALTER] Jahren. Anlass der Frage: [ANLASS]. Antworte ehrlich und altersgerecht, mit einem Vergleich aus der Welt des Kindes, in maximal sechs Sätzen. Nenne danach zwei Anschlussfragen, die das Kind wahrscheinlich stellt, mit kurzen Antworten, und was ich lieber nicht sagen sollte.",
      placeholders: [
        { key: "THEMA", label: "Thema", example: "warum Löwen andere Tiere fressen" },
        { key: "ALTER", label: "Alter", example: "6" },
        { key: "ANLASS", label: "Anlass", example: "wir haben eine Naturdoku gesehen" },
      ],
    },
    {
      id: "kh-geschenkkarte",
      title: "Text für eine Geschenkkarte",
      category: C,
      tags: ["Karte", "Text", "Kurz"],
      description: "Zwei bis drei Zeilen für eine Karte, passend zu Anlass und Beziehung.",
      prompt:
        "Schreibe drei Varianten eines Kartentexts zu [ANLASS] für [PERSON]. Beziehung: [BEZIEHUNG]. Maximal drei Zeilen, ohne Reime, ohne Standardsprüche, je eine Variante: herzlich, humorvoll, schlicht. Passend zum Geschenk: [GESCHENK].",
      placeholders: [
        { key: "ANLASS", label: "Anlass", example: "dem Abschied einer Kollegin" },
        { key: "PERSON", label: "Person", example: "Sarah" },
        { key: "BEZIEHUNG", label: "Beziehung", example: "drei Jahre im gleichen Team" },
        { key: "GESCHENK", label: "Geschenk", example: "ein Bildband über Afrika" },
      ],
    },
    {
      id: "kh-nachbarn-notiz",
      title: "Notiz an Nachbarn oder Hausgemeinschaft",
      category: C,
      tags: ["Nachbarn", "Notiz", "Aushang"],
      description: "Ein freundlicher Aushang oder Zettel, der ankommt, ohne zu belehren.",
      prompt:
        "Schreibe eine Notiz an [EMPFÄNGER]. Anliegen: [ANLIEGEN]. Ton: freundlich, respektvoll, ohne Vorwürfe, maximal 80 Wörter, mit einem konkreten Wunsch oder Vorschlag und einer Möglichkeit, auf mich zuzukommen. Falls es ein Aushang ist, mit kurzer Überschrift.",
      placeholders: [
        { key: "EMPFÄNGER", label: "Empfänger", example: "die Nachbarn im Haus" },
        { key: "ANLIEGEN", label: "Anliegen", example: "wir feiern am Samstag Geburtstag, es könnte bis 23 Uhr lauter werden" },
      ],
    },
  ],
};
export default collection;
