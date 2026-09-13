"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { OwlCommand } from "@/components/owl/OwlStage";
import type { Depth } from "@/lib/owl";
import type { PromptTemplate } from "@/lib/promptLibrary";

/** Answers that take longer than this are "long": the owl brings the result back as a book before it is shown. */
export const LONG_RESPONSE_MS = 3500;

export type QuestStatus = "idle" | "flying" | "done" | "error";
export type RevealMode = "live" | "deferred" | null;

type Params = {
  idea: string;
  depth: Depth;
  /** Refinement round: what should be different, plus the template it refers to. */
  feedback?: string;
  previous?: PromptTemplate | null;
};

/**
 * Drives one "quest": the owl flies off, the server generates a prompt template,
 * and the template is handed over either while the owl is still returning (fast)
 * or only once she has landed with the book (slow).
 */
export function useOwlQuest(onTemplate: (t: PromptTemplate) => void) {
  const [status, setStatus] = useState<QuestStatus>("idle");
  const [command, setCommand] = useState<OwlCommand>("sit");
  const [revealMode, setRevealMode] = useState<RevealMode>(null);
  const [error, setError] = useState<string | null>(null);
  const [elapsedMs, setElapsedMs] = useState<number | null>(null);
  const [bookGlow, setBookGlow] = useState(false);

  const pendingRef = useRef<PromptTemplate | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const onTemplateRef = useRef(onTemplate);
  useEffect(() => {
    onTemplateRef.current = onTemplate;
  }, [onTemplate]);

  const deliver = useCallback(() => {
    const t = pendingRef.current;
    pendingRef.current = null;
    if (t) onTemplateRef.current(t);
    setStatus("done");
  }, []);

  const onOwlLanded = useCallback(
    (withBook: boolean) => {
      setCommand("sit");
      if (withBook) {
        setBookGlow(true);
        setTimeout(() => setBookGlow(false), 2500);
        deliver();
      }
    },
    [deliver]
  );

  const run = useCallback(async ({ idea, depth, feedback, previous }: Params) => {
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;
    pendingRef.current = null;
    setError(null);
    setRevealMode(null);
    setElapsedMs(null);
    setStatus("flying");
    setCommand("search");

    const t0 = performance.now();
    try {
      const res = await fetch("/api/prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idea,
          depth,
          feedback: feedback || undefined,
          previous: previous ? { title: previous.title, prompt: previous.prompt } : undefined,
        }),
        signal: ac.signal,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success || !data.template) {
        throw new Error(data?.error || `HTTP ${res.status}`);
      }
      const dt = performance.now() - t0;
      setElapsedMs(Math.round(dt));
      pendingRef.current = data.template as PromptTemplate;

      if (dt < LONG_RESPONSE_MS) {
        // Fast: show right away while the owl is still gliding home.
        setRevealMode("live");
        setCommand("return");
        deliver();
      } else {
        // Slow: the owl found the book – it opens only once she has landed.
        setRevealMode("deferred");
        setCommand("returnWithBook");
      }
    } catch (err) {
      if (ac.signal.aborted) return;
      setError(err instanceof Error ? err.message : String(err));
      setStatus("error");
      setCommand("return");
    }
  }, [deliver]);

  /** Abort the running quest: the owl gives up the search and glides home without a book. */
  const cancel = useCallback(() => {
    if (!abortRef.current) return;
    abortRef.current.abort();
    abortRef.current = null;
    pendingRef.current = null;
    setStatus("idle");
    setRevealMode(null);
    setCommand("return");
  }, []);

  useEffect(() => () => abortRef.current?.abort(), []);

  return {
    status,
    command,
    revealMode,
    error,
    elapsedMs,
    bookGlow,
    busy: status === "flying",
    run,
    cancel,
    onOwlLanded,
  };
}
