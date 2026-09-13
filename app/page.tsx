"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LibraryBackground from "@/components/owl/LibraryBackground";
import OwlStage from "@/components/owl/OwlStage";
import StonePlatform from "@/components/owl/StonePlatform";
import PromptLibrary from "@/components/PromptLibrary";
import PlaceholderEditor from "@/components/PlaceholderEditor";
import IdeaChips from "@/components/IdeaChips";
import { LONG_RESPONSE_MS, useOwlQuest } from "@/lib/useOwlQuest";
import { DEFAULT_DEPTH, DEPTHS, DEPTH_ORDER, OWL_NAME, OWL_TAGLINE, type Depth } from "@/lib/owl";
import { fillTemplate, isFullyFilled, type PromptTemplate } from "@/lib/promptLibrary";
import { copyText } from "@/lib/clipboard";

type SavedPrompt = {
  id: string;
  idea: string;
  template: PromptTemplate;
  values: Record<string, string>;
  date: string;
};

const STORAGE_KEY = "weise-eule:meine-prompts:v2";
const PLACEHOLDER_SPLIT = /(\[[A-ZÄÖÜ0-9_\- ]{2,}\])/g;
const PLACEHOLDER_TEST = /^\[[A-ZÄÖÜ0-9_\- ]{2,}\]$/;

export default function Home() {
  const [idea, setIdea] = useState("");
  const [depth, setDepth] = useState<Depth>(DEFAULT_DEPTH);
  const [activeTemplate, setActiveTemplate] = useState<PromptTemplate | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  const [typing, setTyping] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [celebrateToken, setCelebrateToken] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [archiveRefresh, setArchiveRefresh] = useState(0);

  const perchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // The owl hands over a generated template → show its fields and refresh the archive list.
  const receiveTemplate = useCallback((t: PromptTemplate) => {
    setActiveTemplate(t);
    // Keep values whose placeholder key still exists (refinement rounds).
    setValues((prev) => {
      const keep: Record<string, string> = {};
      for (const k of Object.keys(prev)) if (t.prompt.includes(`[${k}]`)) keep[k] = prev[k];
      return keep;
    });
    setFeedback("");
    setArchiveRefresh((n) => n + 1);
  }, []);
  const quest = useOwlQuest(receiveTemplate);

  // Persistence of "Meine Prompts" (localStorage).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setSavedPrompts(JSON.parse(raw));
    } catch {}
  }, []);
  const persist = (list: SavedPrompt[]) => {
    setSavedPrompts(list);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {}
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  const onType = (value: string) => {
    setIdea(value);
    setTyping(true);
    if (typingTimer.current) clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => setTyping(false), 1800);
  };

  const askOwl = () => {
    if (!idea.trim()) {
      showToast("Sag der Eule zuerst, was du vorhast 🪶");
      return;
    }
    setTyping(false);
    void quest.run({ idea, depth });
  };

  const refine = () => {
    if (!activeTemplate) return;
    if (!feedback.trim()) {
      showToast("Sag der Eule, was anders sein soll 🪶");
      return;
    }
    void quest.run({ idea: idea || activeTemplate.title, depth, feedback, previous: activeTemplate });
  };

  const useTemplate = (t: PromptTemplate) => {
    setActiveTemplate(t);
    setValues({});
    if (!idea.trim()) setIdea(t.title);
    showToast(`Vorlage geladen: ${t.title}`);
  };

  const filledPrompt = useMemo(
    () => (activeTemplate ? fillTemplate(activeTemplate.prompt, values) : ""),
    [activeTemplate, values]
  );
  const complete = filledPrompt ? isFullyFilled(filledPrompt) : false;

  const copyPrompt = async () => {
    if (!filledPrompt) return;
    const ok = await copyText(filledPrompt);
    showToast(ok ? "Prompt kopiert 📋 – viel Erfolg!" : "Kopieren fehlgeschlagen");
    if (ok) setCelebrateToken((n) => n + 1);
  };

  const savePrompt = () => {
    if (!activeTemplate) return;
    persist([
      { id: Date.now().toString(), idea, template: activeTemplate, values, date: new Date().toLocaleDateString("de-DE") },
      ...savedPrompts,
    ]);
    showToast("In deiner Bibliothek gespeichert 📚");
  };

  const loadSaved = (s: SavedPrompt) => {
    setIdea(s.idea);
    setActiveTemplate(s.template);
    setValues(s.values);
  };

  const deleteSaved = (id: string) => persist(savedPrompts.filter((p) => p.id !== id));

  const exportLibrary = () => {
    const blob = new Blob([JSON.stringify(savedPrompts, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "meine-prompts.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const statusLine = (() => {
    switch (quest.status) {
      case "flying":
        return quest.revealMode === "live"
          ? "🪶 Die Eule kehrt zurück …"
          : quest.revealMode === "deferred"
          ? "📖 Die Eule hat das Buch gefunden und bringt es …"
          : "🦉 Die Eule durchsucht die Bibliothek und schreibt deine Vorlage …";
      case "done":
        return quest.elapsedMs != null
          ? `✅ Vorlage in ${(quest.elapsedMs / 1000).toFixed(1)}s erstellt – fülle unten die Felder aus.`
          : "✅ Vorlage bereit – fülle unten die Felder aus.";
      case "error":
        return `⚠️ ${quest.error ?? "Die Eule kam ohne Buch zurück."}`;
      default:
        return "Die Eule wartet auf deine Idee.";
    }
  })();

  const renderPrompt = (text: string) =>
    text.split(PLACEHOLDER_SPLIT).map((part, i) =>
      PLACEHOLDER_TEST.test(part) ? (
        <mark key={i} className="ph-mark">
          {part}
        </mark>
      ) : (
        <span key={i}>{part}</span>
      )
    );

  return (
    <div className="playground">
      <LibraryBackground />
      <OwlStage
        command={quest.command}
        perchRef={perchRef}
        gazeRef={inputRef}
        userTyping={typing}
        onLanded={quest.onOwlLanded}
        celebrateToken={celebrateToken}
      />

      <main className="relative z-10 min-h-screen px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-amber-50 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              🦉 {OWL_NAME}
            </h1>
            <p className="mt-1 text-amber-200/70">{OWL_TAGLINE}</p>
          </header>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left column: idea → fields */}
            <div className="space-y-6 lg:col-span-2">
              <section className="glass-card p-6">
                <label className="mb-3 block text-sm font-semibold text-amber-100/90">1. Was möchtest du erreichen?</label>
                {!idea.trim() && !activeTemplate && <IdeaChips onPick={useTemplate} />}
                <div className="prompt-row">
                  <textarea
                    ref={inputRef}
                    value={idea}
                    onChange={(e) => onType(e.target.value)}
                    onFocus={() => setTyping(true)}
                    onBlur={() => setTyping(false)}
                    onKeyDown={(e) => {
                      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") askOwl();
                    }}
                    placeholder="z. B. „Eine Website über Löwen“, „Ein Live-Video auf meiner Webseite“ oder „Eine Rede für die Hochzeit meiner Schwester“ … (⌘/Ctrl + Enter)"
                    className="prompt-input"
                    disabled={quest.busy}
                  />
                  <div className="perch-column">
                    <StonePlatform ref={perchRef} className="perch" />
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <motion.button whileTap={{ scale: 0.97 }} onClick={askOwl} disabled={quest.busy} className="btn-primary sm:flex-1">
                    {quest.busy ? "🦉 Eule unterwegs …" : "🦉 Eule fragen"}
                  </motion.button>
                  <div className="depth-picker" role="radiogroup" aria-label="Gründlichkeit der Eule">
                    {DEPTH_ORDER.map((d) => (
                      <button
                        key={d}
                        type="button"
                        role="radio"
                        aria-checked={depth === d}
                        onClick={() => setDepth(d)}
                        className={`depth-chip ${depth === d ? "depth-chip--active" : ""}`}
                        disabled={quest.busy}
                        title={DEPTHS[d].hint}
                        data-depth={d}
                      >
                        {DEPTHS[d].label}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-amber-100/60" aria-live="polite">
                  <span>
                    {statusLine}
                    {quest.status === "idle" && (
                      <span className="text-amber-100/35"> Braucht sie länger als {LONG_RESPONSE_MS / 1000}s, bringt sie die Vorlage als Buch zurück.</span>
                    )}
                  </span>
                  {quest.busy && (
                    <button type="button" onClick={quest.cancel} className="cancel-link" data-testid="cancel-quest">
                      ✕ Abbrechen
                    </button>
                  )}
                </p>
              </section>

              <AnimatePresence>
                {activeTemplate && (
                  <motion.section
                    key={activeTemplate.id}
                    className="glass-card p-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <label className="mb-1 block text-sm font-semibold text-amber-100/90">2. Details ergänzen</label>
                    <PlaceholderEditor
                      template={activeTemplate}
                      values={values}
                      onChange={setValues}
                      onClose={() => {
                        setActiveTemplate(null);
                        setValues({});
                      }}
                    />
                    <div className="refine-box" data-testid="refine-box">
                      <label className="mb-1 block text-xs font-semibold text-amber-100/80">
                        Passt noch nicht? Sag der Eule, was anders sein soll
                      </label>
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <input
                          type="text"
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") refine();
                          }}
                          placeholder="z. B. „kürzer und lockerer“, „mehr Fokus auf Video“, „für Kinder statt Erwachsene“"
                          className="placeholder-input flex-1"
                          disabled={quest.busy}
                          data-testid="refine-input"
                        />
                        <button type="button" onClick={refine} disabled={quest.busy} className="btn-mini whitespace-nowrap" data-testid="refine-button">
                          🦉 Anderen Ansatz suchen
                        </button>
                      </div>
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
            </div>

            {/* Right column: the prompt to copy, own library, archive */}
            <aside className="space-y-6">
              <section className={`glass-card book-box p-6 ${quest.bookGlow ? "book-box--glow" : ""}`}>
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-amber-100/90">
                  📖 3. Dein Prompt
                  {quest.busy && <span className="quill-spinner" aria-hidden />}
                </h3>
                <div className="book-page book-page--result" data-testid="result-prompt">
                  <AnimatePresence mode="wait">
                    {activeTemplate ? (
                      <motion.div
                        key={activeTemplate.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="whitespace-pre-wrap"
                      >
                        {renderPrompt(filledPrompt)}
                      </motion.div>
                    ) : (
                      <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="book-placeholder">
                        {quest.busy
                          ? "Die Seiten sind noch leer – die Eule schreibt …"
                          : "Hier entsteht dein fertiger Prompt. Kopiere ihn dann in Claude, ChatGPT, Gemini oder ein Bild- und Video-Tool."}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                {activeTemplate && (
                  <div className="answer-actions flex-wrap">
                    <button type="button" onClick={copyPrompt} className="btn-mini" data-testid="copy-prompt">
                      {complete ? "📋 Prompt kopieren" : "📋 Kopieren (Platzhalter offen)"}
                    </button>
                    <button type="button" onClick={savePrompt} className="btn-mini btn-mini--ghost">
                      💾 Merken
                    </button>
                  </div>
                )}
              </section>

              <section className="glass-card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-amber-100/90">📚 Meine Prompts ({savedPrompts.length})</h3>
                  {savedPrompts.length > 0 && (
                    <button onClick={exportLibrary} className="text-xs text-blue-400 hover:text-blue-300">
                      ⬇ Export
                    </button>
                  )}
                </div>
                <div className="max-h-[400px] space-y-2 overflow-y-auto pr-1">
                  {savedPrompts.length === 0 ? (
                    <p className="text-sm text-amber-100/40">Noch nichts gemerkt. Fülle einen Prompt aus und klicke „Merken“.</p>
                  ) : (
                    savedPrompts.map((saved) => (
                      <motion.div key={saved.id} layout initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} className="saved-item">
                        <p className="mb-1 truncate text-sm font-medium text-amber-50/90">{saved.template.title}</p>
                        <p className="mb-2 truncate text-xs text-amber-100/40">
                          {saved.date} · {saved.idea || "ohne Idee"}
                        </p>
                        <div className="flex gap-2">
                          <button onClick={() => loadSaved(saved)} className="btn-mini flex-1">
                            Laden
                          </button>
                          <button onClick={() => deleteSaved(saved.id)} className="btn-mini btn-mini--danger">
                            ✕
                          </button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </section>

              <PromptLibrary
                onUse={useTemplate}
                onCopied={(ok) => showToast(ok ? "Vorlage kopiert 📋" : "Kopieren fehlgeschlagen")}
                disabled={quest.busy}
                refreshToken={archiveRefresh}
              />
            </aside>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {toast && (
          <motion.div className="toast" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
