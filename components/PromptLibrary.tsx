"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { allTemplates, categories } from "@/data/prompts";
import { placeholdersOf, type PromptCollection, type PromptTemplate } from "@/lib/promptLibrary";
import { copyText } from "@/lib/clipboard";

type Props = {
  onUse: (template: PromptTemplate) => void;
  onCopied: (ok: boolean) => void;
  disabled?: boolean;
  /** Bump to re-fetch the community archive (e.g. after the owl created a new template). */
  refreshToken?: number;
};

export default function PromptLibrary({ onUse, onCopied, disabled, refreshToken = 0 }: Props) {
  const [category, setCategory] = useState<string>(""); // "" = alle Kategorien
  const [query, setQuery] = useState("");
  const [community, setCommunity] = useState<PromptTemplate[]>([]);

  // Templates the owl generated from user ideas (stored server-side, generic, no personal data).
  useEffect(() => {
    let cancelled = false;
    fetch("/api/archive")
      .then((r) => (r.ok ? r.json() : null))
      .then((c: PromptCollection | null) => {
        if (!cancelled && c?.templates) setCommunity(c.templates);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [refreshToken]);

  const communityIds = useMemo(() => new Set(community.map((t) => t.id)), [community]);
  const everything = useMemo(() => [...allTemplates, ...community], [community]);
  const allCategories = useMemo(() => {
    const extra = community.map((t) => t.category).filter((c) => !categories.includes(c));
    return [...categories, ...Array.from(new Set(extra))];
  }, [community]);

  const countByCategory = useMemo(() => {
    const m = new Map<string, number>();
    for (const t of everything) m.set(t.category, (m.get(t.category) ?? 0) + 1);
    return m;
  }, [everything]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return everything.filter((t) => {
      if (category && t.category !== category) return false;
      if (!q) return true;
      return (
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [category, query, everything]);

  const copyRaw = async (t: PromptTemplate) => onCopied(await copyText(t.prompt));

  return (
    <section className="glass-card p-6" data-testid="prompt-library">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-amber-100/90">
          📜 Prompt-Vorlagen{" "}
          <span className="text-amber-100/60">
            ({visible.length === everything.length ? everything.length : `${visible.length} von ${everything.length}`})
          </span>
        </h3>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory("")}
          className={`cat-chip ${category === "" ? "cat-chip--active" : ""}`}
        >
          Alle <span className="cat-count">{everything.length}</span>
        </button>
        {allCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c === category ? "" : c)}
            className={`cat-chip ${c === category ? "cat-chip--active" : ""}`}
          >
            {c} <span className="cat-count">{countByCategory.get(c) ?? 0}</span>
          </button>
        ))}
      </div>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Vorlagen durchsuchen…"
        className="lib-search mb-3"
        aria-label="Vorlagen durchsuchen"
      />

      <div className="max-h-[560px] space-y-2 overflow-y-auto pr-1">
        {visible.length === 0 ? (
          <p className="text-sm text-amber-100/40">Keine Vorlage gefunden.</p>
        ) : (
          visible.map((t) => {
            const ph = placeholdersOf(t);
            return (
              <motion.article
                key={t.id}
                layout
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="saved-item"
                data-testid={`template-${t.id}`}
              >
                <p className="text-sm font-semibold text-amber-50/95">
                  {t.title}
                  {communityIds.has(t.id) && <span className="eule-badge">🦉 von der Eule</span>}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-amber-100/60">{t.description}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {t.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {ph.length > 0 && (
                  <p className="mt-2 text-[11px] text-amber-100/40">
                    Platzhalter: {ph.map((p) => `[${p.key}]`).join(" ")}
                  </p>
                )}
                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => onUse(t)}
                    disabled={disabled}
                    className="btn-mini flex-1"
                  >
                    Verwenden &amp; anpassen
                  </button>
                  <button type="button" onClick={() => copyRaw(t)} className="btn-mini btn-mini--ghost">
                    Kopieren
                  </button>
                </div>
              </motion.article>
            );
          })
        )}
      </div>
    </section>
  );
}
