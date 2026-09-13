import type { PromptCollection } from "@/lib/promptLibrary";
import { flattenCollections } from "@/lib/promptLibrary";
import liveActionWebsite from "./live-action-website";
import websitesLandingpages from "./websites-landingpages";
import videoFilm from "./video-film";
import texteContent from "./texte-content";
import marketingSocial from "./marketing-social";
import bilderDesign from "./bilder-design";
import appsCode from "./apps-code";
import businessPlanung from "./business-planung";
import lernenErklaeren from "./lernen-erklaeren";
import bueroEmail from "./buero-email";
import kundenserviceShop from "./kundenservice-shop";
import hrBewerbung from "./hr-bewerbung";
import alltagPlanung from "./alltag-planung";
import kreativesSchreiben from "./kreatives-schreiben";
import datenTabellen from "./daten-tabellen";
import rollenExperten from "./rollen-experten";
import sprachen from "./sprachen";
import kiBilderStile from "./ki-bilder-stile";
import spieleUnterhaltung from "./spiele-unterhaltung";
import entwicklerWerkzeuge from "./entwickler-werkzeuge";
import produktivitaet from "./produktivitaet";
import finanzenVerwaltung from "./finanzen-verwaltung";
import musikAudio from "./musik-audio";
import promptHandwerk from "./prompt-handwerk";
import gesundheitWohlbefinden from "./gesundheit-wohlbefinden";
import kiProjekte from "./ki-projekte";
import startupIdeen from "./startup-ideen";
import alltagKleineHelfer from "./alltag-kleine-helfer";
import allgemeinePrompts from "./allgemeine-prompts";
import schuleStudium from "./schule-studium";
import vereineFamilie from "./vereine-familie";
import wohnenImmobilien from "./wohnen-immobilien";
import wissenschaftRecherche from "./wissenschaft-recherche";
import meinePrompts from "./meine-prompts.json";

/**
 * Alle Prompt-Sammlungen der Website.
 * Neue Sammlung hinzufügen: Datei in diesem Ordner anlegen (TS oder JSON) und hier eintragen.
 * Die Reihenfolge hier bestimmt die Reihenfolge der Kategorien in der Oberfläche.
 */
export const collections: PromptCollection[] = [
  liveActionWebsite,
  websitesLandingpages,
  videoFilm,
  texteContent,
  marketingSocial,
  bilderDesign,
  appsCode,
  businessPlanung,
  lernenErklaeren,
  bueroEmail,
  kundenserviceShop,
  hrBewerbung,
  alltagPlanung,
  kreativesSchreiben,
  datenTabellen,
  rollenExperten,
  sprachen,
  kiBilderStile,
  spieleUnterhaltung,
  entwicklerWerkzeuge,
  produktivitaet,
  finanzenVerwaltung,
  musikAudio,
  promptHandwerk,
  gesundheitWohlbefinden,
  kiProjekte,
  startupIdeen,
  alltagKleineHelfer,
  allgemeinePrompts,
  schuleStudium,
  vereineFamilie,
  wohnenImmobilien,
  wissenschaftRecherche,
  meinePrompts as PromptCollection,
];

export const allTemplates = flattenCollections(collections);

export const categories = collections.map((c) => c.category);

/** Templates shown as idea chips next to the empty input field (in archive order). */
export const featuredTemplates = allTemplates.filter((t) => t.featured);

/** Compact archive overview for the owl's system prompt (titles per category). */
export const archiveSummary = collections
  .map((c) => `${c.category}: ${c.templates.map((t) => t.title).join("; ")}`)
  .join("\n");
