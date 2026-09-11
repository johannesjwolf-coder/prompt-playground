"use client";
import { animate, AnimatePresence, motion, useMotionValue, type AnimationPlaybackControls } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import Owl, { type OwlMood } from "./Owl";

export type OwlCommand = "sit" | "search" | "return" | "returnWithBook";

type Props = {
  command: OwlCommand;
  /** Element the owl perches on (its top-center is the landing spot). */
  perchRef: RefObject<HTMLElement | null>;
  /** Element the owl should glance at while the user types (e.g. the textarea). */
  gazeRef?: RefObject<HTMLElement | null>;
  /** True while the user is focused on / typing into the input. */
  userTyping?: boolean;
  onLanded?: (withBook: boolean) => void;
};

type Point = { x: number; y: number };

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/** Sample a cubic bezier into keyframes with eased parameterisation → organic, non-linear flight. */
function curveKeyframes(from: Point, to: Point, steps = 28): { xs: number[]; ys: number[] } {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.hypot(dx, dy) || 1;
  // Perpendicular offset for a swooping arc, random side and magnitude.
  const side = Math.random() < 0.5 ? -1 : 1;
  const bulge = dist * rand(0.25, 0.6) * side;
  const nx = -dy / dist;
  const ny = dx / dist;
  const c1 = { x: from.x + dx * 0.25 + nx * bulge, y: from.y + dy * 0.25 + ny * bulge };
  const c2 = { x: from.x + dx * 0.75 + nx * bulge * rand(0.3, 1), y: from.y + dy * 0.75 + ny * bulge * rand(0.3, 1) };
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = easeInOut(i / steps);
    const mt = 1 - t;
    xs.push(mt ** 3 * from.x + 3 * mt ** 2 * t * c1.x + 3 * mt * t ** 2 * c2.x + t ** 3 * to.x);
    ys.push(mt ** 3 * from.y + 3 * mt ** 2 * t * c1.y + 3 * mt * t ** 2 * c2.y + t ** 3 * to.y);
  }
  return { xs, ys };
}

export default function OwlStage({ command, perchRef, gazeRef, userTyping, onLanded }: Props) {
  const owlRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const facing = useMotionValue(1); // 1 = drawn orientation, -1 = mirrored
  const tilt = useMotionValue(0);
  const [mood, setMood] = useState<OwlMood>("idle");
  const [lookAt, setLookAt] = useState<Point | null>(null);
  const [sparkle, setSparkle] = useState<Point | null>(null);
  const [ready, setReady] = useState(false);

  const cmdRef = useRef<OwlCommand>(command);
  const flyingRef = useRef(false);
  const activeRef = useRef<AnimationPlaybackControls[]>([]);
  const cancelRef = useRef<(() => void) | null>(null);
  const onLandedRef = useRef(onLanded);
  useEffect(() => {
    onLandedRef.current = onLanded;
  }, [onLanded]);

  const owlSize = useCallback(() => {
    const el = owlRef.current;
    return el ? { w: el.offsetWidth, h: el.offsetHeight } : { w: 200, h: 230 };
  }, []);

  const perchPoint = useCallback((): Point => {
    const el = perchRef.current;
    const { w, h } = owlSize();
    if (!el) return { x: window.innerWidth - w - 40, y: window.innerHeight - h - 40 };
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2 - w / 2, y: r.top + r.height * 0.42 - h };
  }, [perchRef, owlSize]);

  const randomPoint = useCallback((): Point => {
    const { w, h } = owlSize();
    const margin = 20;
    return {
      x: rand(margin, Math.max(margin, window.innerWidth - w - margin)),
      y: rand(margin, Math.max(margin, window.innerHeight - h - margin)),
    };
  }, [owlSize]);

  const stopActive = useCallback(() => {
    activeRef.current.forEach((c) => c.stop());
    activeRef.current = [];
    cancelRef.current?.();
    cancelRef.current = null;
  }, []);

  /** Fly one bezier segment; resolves when done or cancelled. */
  const flySegment = useCallback(
    (to: Point, duration: number) => {
      const from = { x: x.get(), y: y.get() };
      const { xs, ys } = curveKeyframes(from, to);
      const dir = Math.sign(to.x - from.x) || 1;
      const ax = animate(x, xs, { duration, ease: "linear" });
      const ay = animate(y, ys, { duration, ease: "linear" });
      const af = animate(facing, dir, { type: "spring", stiffness: 180, damping: 20 });
      const at = animate(tilt, [tilt.get(), dir * rand(8, 16), dir * rand(-4, 4)], { duration, ease: "easeInOut" });
      activeRef.current = [ax, ay, af, at];
      return new Promise<boolean>((resolve) => {
        let done = false;
        cancelRef.current = () => {
          if (!done) {
            done = true;
            resolve(false);
          }
        };
        Promise.all([ax.finished, ay.finished]).then(() => {
          if (!done) {
            done = true;
            cancelRef.current = null;
            resolve(true);
          }
        });
      });
    },
    [x, y, facing, tilt]
  );

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const land = useCallback(
    async (withBook: boolean) => {
      // Final approach: settle onto the perch, face the user.
      setMood(withBook ? "carrying" : "flying");
      await flySegment(perchPoint(), rand(2.0, 2.6));
      const p = perchPoint();
      x.set(p.x);
      y.set(p.y);
      animate(facing, 1, { duration: 0.3 });
      animate(tilt, 0, { type: "spring", stiffness: 200, damping: 14 });
      flyingRef.current = false;
      setMood("happy");
      onLandedRef.current?.(withBook);
      await sleep(2400);
      if (!flyingRef.current) setMood("idle");
    },
    [flySegment, perchPoint, x, y, facing, tilt]
  );

  const startSearching = useCallback(async () => {
    if (flyingRef.current) return;
    flyingRef.current = true;
    setMood("flying");
    // Take off: a quick upward hop, then the hunt.
    await flySegment({ x: x.get() + rand(-80, 80), y: Math.max(20, y.get() - rand(160, 260)) }, 0.9);
    setMood("searching");
    while (cmdRef.current === "search") {
      const completed = await flySegment(randomPoint(), rand(2, 3));
      if (!completed) break;
      if (cmdRef.current !== "search") break;
      // Hover and peer around the shelves.
      const hoverEnd = Date.now() + rand(300, 700);
      while (Date.now() < hoverEnd && cmdRef.current === "search") await sleep(50);
    }
    const cmd = cmdRef.current;
    if (cmd === "returnWithBook") {
      // Found it! Eyes wide, sparkle burst, then carry it home.
      stopActive();
      setMood("found");
      const { w, h } = owlSize();
      setSparkle({ x: x.get() + w / 2, y: y.get() + h * 0.9 });
      animate(tilt, [tilt.get(), -6, 6, 0], { duration: 0.6 });
      await sleep(850);
      setSparkle(null);
      await land(true);
    } else if (cmd === "return") {
      await land(false);
    } else {
      // Command flipped back to "sit" mid-search (e.g. error): just come home.
      await land(false);
    }
  }, [flySegment, randomPoint, land, owlSize, stopActive, x, y, tilt]);

  // React to commands.
  useEffect(() => {
    cmdRef.current = command;
    if (command === "search") {
      void startSearching();
    } else if (command === "return" || command === "returnWithBook") {
      if (flyingRef.current) {
        // Interrupt the current segment; the search loop handles the trip home.
        cancelRef.current?.();
        cancelRef.current = null;
      } else {
        void land(command === "returnWithBook");
      }
    }
    // "sit": nothing to do, perch tracking below keeps us in place.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [command]);

  // Keep the owl glued to the perch while sitting (scroll / resize), and place it initially.
  useEffect(() => {
    const place = () => {
      if (flyingRef.current) return;
      const p = perchPoint();
      x.set(p.x);
      y.set(p.y);
      setReady(true);
    };
    place();
    const raf = requestAnimationFrame(place);
    window.addEventListener("scroll", place, { passive: true });
    window.addEventListener("resize", place);
    const ro = perchRef.current ? new ResizeObserver(place) : null;
    if (perchRef.current && ro) ro.observe(perchRef.current);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", place);
      window.removeEventListener("resize", place);
      ro?.disconnect();
    };
  }, [perchPoint, perchRef, x, y]);

  // Gaze: glance at the input while the user types.
  useEffect(() => {
    if (!userTyping || !gazeRef?.current || flyingRef.current) {
      setLookAt(null);
      return;
    }
    const update = () => {
      const g = gazeRef.current?.getBoundingClientRect();
      if (!g) return;
      const { w, h } = owlSize();
      const ox = x.get() + w / 2;
      const oy = y.get() + h * 0.4;
      const dx = g.left + g.width * 0.6 - ox;
      const dy = g.top + g.height * 0.4 - oy;
      const len = Math.hypot(dx, dy) || 1;
      setLookAt({ x: (dx / len) * facing.get(), y: dy / len });
    };
    update();
    const id = setInterval(update, 400);
    return () => clearInterval(id);
  }, [userTyping, gazeRef, owlSize, x, y, facing]);

  return (
    <div className="owl-layer" aria-hidden>
      <motion.div
        ref={owlRef}
        className="owl-actor"
        style={{ x, y, scaleX: facing, rotate: tilt, opacity: ready ? 1 : 0 }}
      >
        <motion.div
          animate={mood === "idle" || mood === "happy" ? { y: 0 } : { y: [0, -7, 0] }}
          transition={{ duration: 0.84, repeat: mood === "idle" || mood === "happy" ? 0 : Infinity, ease: "easeInOut" }}
        >
          <Owl mood={mood} lookAt={lookAt} className="owl-svg" />
        </motion.div>
        {/* Soft ground shadow when perched */}
        <motion.div
          className="owl-shadow"
          animate={{ opacity: mood === "idle" || mood === "happy" ? 0.45 : 0, scale: mood === "idle" || mood === "happy" ? 1 : 0.5 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      <AnimatePresence>
        {sparkle && (
          <motion.div
            key="burst"
            className="sparkle-burst"
            style={{ left: sparkle.x, top: sparkle.y }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i / 12) * Math.PI * 2;
              return (
                <motion.span
                  key={i}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                  animate={{
                    x: Math.cos(a) * rand(70, 140),
                    y: Math.sin(a) * rand(70, 140),
                    scale: [0, 1.4, 0],
                    opacity: [1, 1, 0],
                  }}
                  transition={{ duration: 0.85, ease: "easeOut" }}
                />
              );
            })}
            <motion.div
              className="sparkle-ring"
              initial={{ scale: 0, opacity: 0.9 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
