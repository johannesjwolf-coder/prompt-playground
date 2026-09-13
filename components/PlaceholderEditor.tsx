"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { fillTemplate, isFullyFilled, placeholdersOf, type PromptTemplate } from "@/lib/promptLibrary";

type Props = {
  template: PromptTemplate;
  values: Record<string, string>;
  onChange: (values: Record<string, string>) => void;
  onClose: () => void;
};

/** Sits under the prompt textarea: one input per [PLATZHALTER], live-filled into the prompt. */
export default function PlaceholderEditor({ template, values, onChange, onClose }: Props) {
  const placeholders = useMemo(() => placeholdersOf(template), [template]);
  const filled = fillTemplate(template.prompt, values);
  const complete = isFullyFilled(filled);

  const useExamples = () => {
    const next = { ...values };
    for (const p of placeholders) if (p.example && !next[p.key]?.trim()) next[p.key] = p.example;
    onChange(next);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      className="placeholder-panel"
      data-testid="placeholder-editor"
    >
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold text-amber-100/90">
          🧩 {template.title}
          <span className="ml-2 font-normal text-amber-100/50">{template.category}</span>
        </p>
        <button type="button" onClick={onClose} className="text-xs text-amber-100/50 hover:text-amber-100/90">
          ✕ Vorlage schliessen
        </button>
      </div>

      {template.note && <p className="mb-2 text-xs text-amber-100/60">🦉 {template.note}</p>}
      {placeholders.length === 0 ? (
        <p className="text-xs text-amber-100/50">Diese Vorlage hat keine Platzhalter – der Prompt ist oben rechts fertig zum Kopieren.</p>
      ) : (
        <>
          <p className="mb-3 text-xs text-amber-100/50">
            Fülle die Felder aus – der Prompt oben rechts wird sofort aktualisiert. Leere Felder bleiben als [PLATZHALTER] sichtbar.
          </p>
          <div className="placeholder-grid">
            {placeholders.map((p) => (
              <label key={p.key} className="block">
                <span className="mb-1 block text-xs font-medium text-amber-100/70">
                  {p.label} <span className="font-mono text-amber-100/35">[{p.key}]</span>
                </span>
                <input
                  type="text"
                  value={values[p.key] ?? ""}
                  onChange={(e) => onChange({ ...values, [p.key]: e.target.value })}
                  placeholder={p.example ? `z. B. ${p.example}` : ""}
                  className="placeholder-input"
                  data-placeholder-key={p.key}
                />
              </label>
            ))}
          </div>
        </>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {placeholders.some((p) => p.example) && (
          <button type="button" onClick={useExamples} className="btn-mini btn-mini--ghost">
            Beispiele übernehmen
          </button>
        )}
        <span className="text-[11px] text-amber-100/45">
          {complete ? "Alle Platzhalter ersetzt." : `${placeholders.filter((p) => !values[p.key]?.trim()).length} Platzhalter offen`}
        </span>
      </div>
    </motion.div>
  );
}
