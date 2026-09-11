/** Models the playground offers. Fable 5.1 is the most capable model; it has no
 * sampling params (temperature) – depth is controlled via `effort` instead. */
export const MODELS = {
  "claude-fable-5-1": {
    label: "Claude Fable 5.1",
    hint: "Stärkstes Modell · Denkt immer mit · Effort statt Temperatur",
    controls: "effort",
  },
  "claude-opus-4-6": {
    label: "Claude Opus 4.6",
    hint: "Opus-Klasse · unterstützt den Temperatur-Slider",
    controls: "temperature",
  },
} as const;

export type ModelId = keyof typeof MODELS;
export const DEFAULT_MODEL: ModelId = "claude-fable-5-1";

export const EFFORTS = ["low", "medium", "high", "xhigh", "max"] as const;
export type Effort = (typeof EFFORTS)[number];
export const DEFAULT_EFFORT: Effort = "high";

export function isModelId(v: unknown): v is ModelId {
  return typeof v === "string" && v in MODELS;
}
export function isEffort(v: unknown): v is Effort {
  return typeof v === "string" && (EFFORTS as readonly string[]).includes(v);
}
