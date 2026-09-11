"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { OwlCommand } from "@/components/owl/OwlStage";
import type { Effort, ModelId } from "@/lib/models";

/** Responses whose first token arrives later than this are "long": the owl brings the book back before the text shows. */
export const LONG_RESPONSE_MS = 3500;

export type QuestStatus = "idle" | "flying" | "revealing" | "done" | "error";
export type RevealMode = "live" | "deferred" | null;

type Params = { prompt: string; temperature: number; maxTokens: number; model: ModelId; effort: Effort };

export function useOwlQuest() {
  const [status, setStatus] = useState<QuestStatus>("idle");
  const [command, setCommand] = useState<OwlCommand>("sit");
  const [revealMode, setRevealMode] = useState<RevealMode>(null);
  const [result, setResult] = useState("");
  const [elapsedMs, setElapsedMs] = useState<number | null>(null);
  const [bookGlow, setBookGlow] = useState(false);

  const bufferRef = useRef("");
  const modeRef = useRef<RevealMode>(null);
  const streamDoneRef = useRef(false);
  const landedRef = useRef(false);
  const abortRef = useRef<AbortController | null>(null);
  const revealTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearReveal = () => {
    if (revealTimerRef.current) clearInterval(revealTimerRef.current);
    revealTimerRef.current = null;
  };

  /** Typewriter reveal of the buffered text (used after the owl lands with the book).
   *  Time-based so it always finishes in ~REVEAL_MS regardless of render cost. */
  const revealBuffered = useCallback(() => {
    clearReveal();
    const full = bufferRef.current;
    const REVEAL_MS = Math.min(2200, 600 + full.length * 0.8);
    const start = performance.now();
    setStatus("revealing");
    revealTimerRef.current = setInterval(() => {
      const t = Math.min(1, (performance.now() - start) / REVEAL_MS);
      const eased = 1 - Math.pow(1 - t, 2);
      setResult(full.slice(0, Math.ceil(full.length * eased)));
      if (t >= 1) {
        clearReveal();
        setResult(full);
        setStatus("done");
      }
    }, 16);
  }, []);

  const finish = useCallback(() => {
    // Both the stream and the owl are done.
    if (modeRef.current === "deferred") revealBuffered();
    else setStatus("done");
  }, [revealBuffered]);

  const onOwlLanded = useCallback(
    (withBook: boolean) => {
      landedRef.current = true;
      setCommand("sit");
      if (withBook) {
        setBookGlow(true);
        setTimeout(() => setBookGlow(false), 2500);
      }
      if (streamDoneRef.current) finish();
    },
    [finish]
  );

  const run = useCallback(
    async ({ prompt, temperature, maxTokens, model, effort }: Params) => {
      abortRef.current?.abort();
      const ac = new AbortController();
      abortRef.current = ac;
      clearReveal();

      bufferRef.current = "";
      modeRef.current = null;
      streamDoneRef.current = false;
      landedRef.current = false;
      setResult("");
      setRevealMode(null);
      setElapsedMs(null);
      setStatus("flying");
      setCommand("search");

      const t0 = performance.now();
      try {
        const res = await fetch("/api/prompt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt, temperature, maxTokens, model, effort }),
          signal: ac.signal,
        });

        if (!res.ok || !res.body) {
          let msg = `HTTP ${res.status}`;
          try {
            const data = await res.json();
            if (data?.error) msg = data.error;
          } catch {}
          throw new Error(msg);
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          if (!chunk) continue;
          bufferRef.current += chunk;

          if (modeRef.current === null) {
            const dt = performance.now() - t0;
            const mode: RevealMode = dt < LONG_RESPONSE_MS ? "live" : "deferred";
            modeRef.current = mode;
            setRevealMode(mode);
            // Fast answer: the owl heads home right away while the text streams in.
            if (mode === "live") setCommand("return");
          }
          if (modeRef.current === "live") setResult(bufferRef.current);
        }

        streamDoneRef.current = true;
        setElapsedMs(Math.round(performance.now() - t0));

        if (modeRef.current === null) {
          // Empty response.
          modeRef.current = "live";
          setRevealMode("live");
          bufferRef.current = "(Leere Antwort)";
          setResult(bufferRef.current);
          setCommand("return");
        } else if (modeRef.current === "deferred") {
          // Long answer: the owl found the book – bring it home, then reveal.
          setCommand("returnWithBook");
        }
        if (landedRef.current) finish();
      } catch (err) {
        if (ac.signal.aborted) return;
        streamDoneRef.current = true;
        modeRef.current = "live";
        setRevealMode("live");
        setResult("Fehler: " + (err instanceof Error ? err.message : String(err)));
        setStatus("error");
        setCommand("return");
      }
    },
    [finish]
  );

  useEffect(() => () => {
    abortRef.current?.abort();
    clearReveal();
  }, []);

  const loadResult = useCallback((text: string) => {
    clearReveal();
    bufferRef.current = text;
    setResult(text);
    setStatus(text ? "done" : "idle");
    setRevealMode(null);
  }, []);

  return {
    status,
    command,
    revealMode,
    result,
    elapsedMs,
    bookGlow,
    busy: status === "flying" || status === "revealing",
    run,
    onOwlLanded,
    loadResult,
  };
}
