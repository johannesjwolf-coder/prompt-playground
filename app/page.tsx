"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LibraryBackground from "@/components/owl/LibraryBackground";
import OwlStage from "@/components/owl/OwlStage";
import StonePlatform from "@/components/owl/StonePlatform";
import { LONG_RESPONSE_MS, useOwlQuest } from "@/lib/useOwlQuest";
import { DEFAULT_EFFORT, DEFAULT_MODEL, EFFORTS, MODELS, type Effort, type ModelId } from "@/lib/models";

type SavedPrompt = { id: string; prompt: string; result: string; date: string };

const STORAGE_KEY = "prompt-playground:library";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(1000);
  const [model, setModel] = useState<ModelId>(DEFAULT_MODEL);
  const [effort, setEffort] = useState<Effort>(DEFAULT_EFFORT);
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  const [typing, setTyping] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const perchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const quest = useOwlQuest();

  // Library persistence (localStorage).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      // Hydrate from localStorage after mount (SSR renders an empty library).
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
    setPrompt(value);
    setTyping(true);
    if (typingTimer.current) clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => setTyping(false), 1800);
  };

  const testPrompt = () => {
    if (!prompt.trim()) {
      showToast("Erst einen Prompt eingeben 🪶");
      return;
    }
    setTyping(false);
    void quest.run({ prompt, temperature, maxTokens, model, effort });
  };

  const savePrompt = () => {
    if (!quest.result) return;
    persist([
      { id: Date.now().toString(), prompt, result: quest.result, date: new Date().toLocaleDateString("de-DE") },
      ...savedPrompts,
    ]);
    showToast("In der Bibliothek abgelegt 📚");
  };

  const loadPrompt = (saved: SavedPrompt) => {
    setPrompt(saved.prompt);
    quest.loadResult(saved.result);
  };

  const deletePrompt = (id: string) => persist(savedPrompts.filter((p) => p.id !== id));

  const exportLibrary = () => {
    const blob = new Blob([JSON.stringify(savedPrompts, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "prompt-bibliothek.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const statusLine = (() => {
    switch (quest.status) {
      case "flying":
        return quest.revealMode === "live"
          ? "🪶 Die Eule kehrt zurück – Antwort strömt herein …"
          : quest.revealMode === "deferred"
          ? "📖 Die Eule hat das Buch gefunden und bringt es …"
          : "🦉 Die Eule durchsucht die Bibliothek …";
      case "revealing":
        return "✨ Das Buch öffnet sich …";
      case "done":
        return quest.elapsedMs != null
          ? `✅ Antwort in ${(quest.elapsedMs / 1000).toFixed(1)}s (${quest.revealMode === "deferred" ? "lange Suche" : "schnell"})`
          : "✅ Antwort geladen";
      case "error":
        return "⚠️ Die Eule kam ohne Buch zurück.";
      default:
        return "Die Eule wartet auf deinen Prompt.";
    }
  })();

  return (
    <div className="playground">
      <LibraryBackground />
      <OwlStage
        command={quest.command}
        perchRef={perchRef}
        gazeRef={inputRef}
        userTyping={typing}
        onLanded={quest.onOwlLanded}
      />

      <main className="relative z-10 min-h-screen px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-amber-50 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              🦉 Prompt Engineering Playground
            </h1>
            <p className="mt-1 text-amber-200/70">
              Teste deine Prompts in Echtzeit mit Claude – die Eule sucht das passende Buch.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left column */}
            <div className="space-y-6 lg:col-span-2">
              {/* Prompt + perch */}
              <section className="glass-card p-6">
                <label className="mb-3 block text-sm font-semibold text-amber-100/90">Dein Prompt</label>
                <div className="prompt-row">
                  <textarea
                    ref={inputRef}
                    value={prompt}
                    onChange={(e) => onType(e.target.value)}
                    onFocus={() => setTyping(true)}
                    onBlur={() => setTyping(false)}
                    onKeyDown={(e) => {
                      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") testPrompt();
                    }}
                    placeholder="Schreib hier deinen Prompt ein… (⌘/Ctrl + Enter zum Senden)"
                    className="prompt-input"
                    disabled={quest.busy}
                  />
                  <div className="perch-column">
                    <StonePlatform ref={perchRef} className="perch" />
                  </div>
                </div>
              </section>

              {/* Parameters */}
              <section className="glass-card p-6">
                <h3 className="mb-4 text-lg font-semibold text-amber-100/90">Parameter</h3>
                <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-amber-100/70">Modell</label>
                    <div className="model-picker">
                      {(Object.keys(MODELS) as ModelId[]).map((id) => (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setModel(id)}
                          className={`model-chip ${model === id ? "model-chip--active" : ""}`}
                          disabled={quest.busy}
                        >
                          <span className="font-semibold">{MODELS[id].label}</span>
                          <span className="block text-xs opacity-70">{MODELS[id].hint}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {MODELS[model].controls === "effort" ? (
                    <div>
                      <div className="mb-2 flex justify-between">
                        <label className="text-sm font-medium text-amber-100/70">Effort (Denktiefe)</label>
                        <span className="font-semibold text-blue-400">{effort}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max={EFFORTS.length - 1}
                        step="1"
                        value={EFFORTS.indexOf(effort)}
                        onChange={(e) => setEffort(EFFORTS[parseInt(e.target.value)])}
                        className="slider"
                      />
                      <p className="mt-1 text-xs text-amber-100/50">
                        low = schnell &amp; knapp, max = maximale Gründlichkeit (Fable denkt immer mit)
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-2 flex justify-between">
                        <label className="text-sm font-medium text-amber-100/70">Temperatur (Kreativität)</label>
                        <span className="font-semibold text-blue-400">{temperature.toFixed(1)}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={temperature}
                        onChange={(e) => setTemperature(parseFloat(e.target.value))}
                        className="slider"
                      />
                      <p className="mt-1 text-xs text-amber-100/50">0 = Konsistent, 1 = Sehr kreativ</p>
                    </div>
                  )}
                  <div>
                    <div className="mb-2 flex justify-between">
                      <label className="text-sm font-medium text-amber-100/70">Max Tokens (Länge)</label>
                      <span className="font-semibold text-blue-400">{maxTokens}</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="4000"
                      step="100"
                      value={maxTokens}
                      onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                      className="slider"
                    />
                    <p className="mt-1 text-xs text-amber-100/50">Wie lange die Antwort sein soll</p>
                  </div>
                </div>
              </section>

              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={testPrompt}
                  disabled={quest.busy}
                  className="btn-primary flex-1"
                >
                  {quest.busy ? "🦉 Eule unterwegs …" : "🚀 Claude testen"}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={savePrompt}
                  disabled={!quest.result || quest.busy}
                  className="btn-secondary flex-1"
                >
                  💾 In Bibliothek speichern
                </motion.button>
              </div>

              <p className="text-sm text-amber-100/60" aria-live="polite">
                {statusLine}
                {quest.status === "idle" && (
                  <span className="text-amber-100/35"> Antworten über {LONG_RESPONSE_MS / 1000}s bringt sie als Buch zurück.</span>
                )}
              </p>
            </div>

            {/* Right column: the library */}
            <aside className="space-y-6">
              <section className={`glass-card book-box p-6 ${quest.bookGlow ? "book-box--glow" : ""}`}>
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-amber-100/90">
                  📖 Antwort von Claude
                  {quest.busy && <span className="quill-spinner" aria-hidden />}
                </h3>
                <div className="book-page">
                  <AnimatePresence mode="wait">
                    {quest.result ? (
                      <motion.div
                        key="text"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="whitespace-pre-wrap"
                      >
                        {quest.result}
                        {(quest.status === "flying" || quest.status === "revealing") && <span className="caret" />}
                      </motion.div>
                    ) : (
                      <motion.p
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="book-placeholder"
                      >
                        {quest.status === "flying"
                          ? "Die Seiten sind noch leer – die Eule sucht …"
                          : "Hier erscheint das, was die Eule aus der Bibliothek mitbringt."}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
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
                <div className="max-h-[520px] space-y-2 overflow-y-auto pr-1">
                  {savedPrompts.length === 0 ? (
                    <p className="text-sm text-amber-100/40">Noch keine Prompts gespeichert. Teste einen und speichere ihn!</p>
                  ) : (
                    savedPrompts.map((saved) => (
                      <motion.div
                        key={saved.id}
                        layout
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="saved-item"
                      >
                        <p className="mb-1 truncate text-sm font-medium text-amber-50/90">{saved.prompt.slice(0, 60)}</p>
                        <p className="mb-2 text-xs text-amber-100/40">{saved.date}</p>
                        <div className="flex gap-2">
                          <button onClick={() => loadPrompt(saved)} className="btn-mini flex-1">
                            Laden
                          </button>
                          <button onClick={() => deletePrompt(saved.id)} className="btn-mini btn-mini--danger">
                            ✕
                          </button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
