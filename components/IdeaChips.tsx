"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { featuredTemplates, allTemplates } from "@/data/prompts";
import type { PromptTemplate } from "@/lib/promptLibrary";

type Props = { onPick: (t: PromptTemplate) => void; count?: number };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Ideas from the archive, shown while the input is empty. First render is deterministic (SSR-safe). */
export default function IdeaChips({ onPick, count = 7 }: Props) {
  const [ideas, setIdeas] = useState<PromptTemplate[]>(() => featuredTemplates.slice(0, count));

  const reshuffle = () => {
    const pool = shuffle(featuredTemplates).slice(0, Math.max(0, count - 2));
    const rest = shuffle(allTemplates.filter((t) => !pool.includes(t))).slice(0, count - pool.length);
    setIdeas(shuffle([...pool, ...rest]));
  };

  // Vary the initial set per visit, but only after hydration.
  useEffect(() => {
    const id = setTimeout(reshuffle, 0);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="idea-chips" data-testid="idea-chips">
      <span className="idea-label">💡 Ideen aus dem Archiv:</span>
      {ideas.map((t) => (
        <motion.button
          key={t.id}
          type="button"
          layout
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => onPick(t)}
          className="idea-chip"
          title={t.description}
        >
          {t.title}
        </motion.button>
      ))}
      <button type="button" onClick={reshuffle} className="idea-chip idea-chip--ghost" aria-label="Andere Ideen zeigen">
        🔀 andere Ideen
      </button>
    </div>
  );
}
