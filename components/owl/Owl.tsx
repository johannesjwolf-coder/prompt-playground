"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MagicBook from "./MagicBook";

export type OwlMood = "idle" | "flying" | "searching" | "found" | "carrying" | "happy";

type Props = {
  mood: OwlMood;
  /** Normalised gaze direction (-1..1) in the owl's own (unflipped) space. */
  lookAt?: { x: number; y: number } | null;
  className?: string;
};

const C = {
  body: "#8B4513",
  bodyDark: "#5C2E0C",
  belly: "#D2691E",
  bellyLight: "#E8834A",
  cream: "#FFE8C2",
  gold: "#FFD700",
  beak: "#F4A300",
  pupil: "#1A1208",
};

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export default function Owl({ mood, lookAt, className }: Props) {
  const flying = mood === "flying" || mood === "searching" || mood === "carrying";
  const [blinkKey, setBlinkKey] = useState(0);
  const [headTilt, setHeadTilt] = useState(0);
  const [idleGaze, setIdleGaze] = useState({ x: 0, y: 0 });

  // Blink at organic intervals.
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const schedule = () => {
      t = setTimeout(() => {
        setBlinkKey((k) => k + 1);
        schedule();
      }, rand(2200, 5200));
    };
    schedule();
    return () => clearTimeout(t);
  }, []);

  // Head tilts + wandering gaze while idle; sharp scanning while searching.
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const schedule = () => {
      const searching = mood === "searching";
      t = setTimeout(
        () => {
          setHeadTilt(searching ? rand(-18, 18) : rand(-9, 9));
          setIdleGaze({ x: rand(-1, 1), y: rand(-0.6, 0.6) });
          schedule();
        },
        searching ? rand(350, 800) : rand(1400, 3800)
      );
    };
    schedule();
    return () => clearTimeout(t);
  }, [mood]);

  const gaze = lookAt ?? idleGaze;
  const px = Math.max(-1, Math.min(1, gaze.x)) * 5;
  const py = Math.max(-1, Math.min(1, gaze.y)) * 4;
  const happy = mood === "happy";
  const found = mood === "found";

  return (
    <svg
      viewBox="0 0 200 230"
      className={className}
      style={{ overflow: "visible", display: "block" }}
      aria-label="Bibliotheks-Eule"
      role="img"
    >
      <defs>
        <radialGradient id="owl-body" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor={C.body} />
        </radialGradient>
        <radialGradient id="owl-belly" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={C.bellyLight} />
          <stop offset="100%" stopColor={C.belly} />
        </radialGradient>
        <radialGradient id="owl-iris" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#FFF1A6" />
          <stop offset="60%" stopColor={C.gold} />
          <stop offset="100%" stopColor="#C89600" />
        </radialGradient>
      </defs>

      {/* Book carried in the claws */}
      {(mood === "carrying" || found) && (
        <motion.g
          initial={{ opacity: 0, scale: 0.3, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
          style={{ transformOrigin: "100px 215px" }}
        >
          <MagicBook x={68} y={196} width={64} />
        </motion.g>
      )}

      {/* Wings (behind body) */}
      <motion.path
        d="M52 118 C 10 120, -4 170, 30 200 C 45 178, 60 160, 62 132 Z"
        fill={C.bodyDark}
        style={{ transformOrigin: "56px 122px" }}
        animate={
          flying
            ? { rotate: [10, -55, 10], scaleY: [1, 1.15, 1] }
            : happy
            ? { rotate: [0, -25, 0, -25, 0] }
            : { rotate: 0, scaleY: 1 }
        }
        transition={
          flying
            ? { duration: 0.42, repeat: Infinity, ease: "easeInOut" }
            : happy
            ? { duration: 0.9, ease: "easeInOut" }
            : { duration: 0.4 }
        }
      />
      <motion.path
        d="M148 118 C 190 120, 204 170, 170 200 C 155 178, 140 160, 138 132 Z"
        fill={C.bodyDark}
        style={{ transformOrigin: "144px 122px" }}
        animate={
          flying
            ? { rotate: [-10, 55, -10], scaleY: [1, 1.15, 1] }
            : happy
            ? { rotate: [0, 25, 0, 25, 0] }
            : { rotate: 0, scaleY: 1 }
        }
        transition={
          flying
            ? { duration: 0.42, repeat: Infinity, ease: "easeInOut" }
            : happy
            ? { duration: 0.9, ease: "easeInOut" }
            : { duration: 0.4 }
        }
      />

      {/* Feet */}
      <motion.g
        animate={flying ? { y: -14, scaleY: 0.4, opacity: 0.6 } : { y: 0, scaleY: 1, opacity: 1 }}
        style={{ transformOrigin: "100px 200px" }}
        transition={{ duration: 0.3 }}
      >
        {[80, 120].map((fx) => (
          <g key={fx} fill={C.beak}>
            <ellipse cx={fx - 7} cy={212} rx={5} ry={7} />
            <ellipse cx={fx} cy={214} rx={5} ry={8} />
            <ellipse cx={fx + 7} cy={212} rx={5} ry={7} />
          </g>
        ))}
      </motion.g>

      {/* Body */}
      <motion.g
        animate={flying ? { y: [0, -3, 0] } : happy ? { y: [0, -10, 0, -6, 0] } : { y: [0, 1.5, 0] }}
        transition={
          flying
            ? { duration: 0.42, repeat: Infinity, ease: "easeInOut" }
            : happy
            ? { duration: 0.8, ease: "easeOut" }
            : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <ellipse cx="100" cy="145" rx="64" ry="68" fill="url(#owl-body)" stroke={C.bodyDark} strokeWidth="3" />
        <ellipse cx="100" cy="158" rx="42" ry="48" fill="url(#owl-belly)" />
        {/* Feather scallops on belly */}
        {[0, 1, 2, 3].map((row) => (
          <g key={row} fill="none" stroke="#B8561A" strokeWidth="2" opacity="0.7">
            {[-2, -1, 0, 1, 2].map((col) => {
              const cx = 100 + col * 16 + (row % 2 ? 8 : 0);
              const cy = 138 + row * 14;
              return <path key={col} d={`M${cx - 7} ${cy} q7 9 14 0`} />;
            })}
          </g>
        ))}

        {/* Head */}
        <motion.g
          style={{ transformOrigin: "100px 100px" }}
          animate={{ rotate: headTilt, x: px * 0.6 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          {/* Ear tufts */}
          <path d="M48 62 L40 18 L78 48 Z" fill={C.bodyDark} />
          <path d="M152 62 L160 18 L122 48 Z" fill={C.bodyDark} />
          <circle cx="100" cy="88" r="60" fill="url(#owl-body)" stroke={C.bodyDark} strokeWidth="3" />

          {/* Facial discs */}
          <circle cx="70" cy="92" r="31" fill={C.cream} />
          <circle cx="130" cy="92" r="31" fill={C.cream} />
          <circle cx="70" cy="92" r="31" fill="none" stroke="#E0B97F" strokeWidth="2" />
          <circle cx="130" cy="92" r="31" fill="none" stroke="#E0B97F" strokeWidth="2" />

          {/* Eyes */}
          {[70, 130].map((ex) => (
            <g key={ex}>
              <circle cx={ex} cy={92} r={22} fill="#fff" />
              <motion.g animate={{ x: px, y: py }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
                <circle cx={ex} cy={92} r={15} fill="url(#owl-iris)" />
                <motion.g
                  style={{ transformOrigin: `${ex}px 92px` }}
                  animate={{ scale: found ? 1.4 : mood === "searching" ? 0.75 : 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <circle cx={ex} cy={92} r={8} fill={C.pupil} />
                </motion.g>
                <circle cx={ex - 5} cy={86} r={3.5} fill="#fff" />
                <circle cx={ex + 4} cy={97} r={1.6} fill="#fff" opacity="0.8" />
              </motion.g>
              {/* Eyelid (blink) */}
              <motion.circle
                key={`${ex}-${blinkKey}`}
                cx={ex}
                cy={92}
                r={23}
                fill={C.body}
                style={{ transformOrigin: `${ex}px 70px` }}
                initial={{ scaleY: happy ? 1 : 0 }}
                animate={
                  happy
                    ? { scaleY: 1 }
                    : blinkKey > 0
                    ? { scaleY: [0, 1, 1, 0] }
                    : { scaleY: 0 }
                }
                transition={{ duration: 0.22, times: [0, 0.4, 0.55, 1] }}
              />
              {/* Happy closed eye ^ ^ */}
              {happy && (
                <path
                  d={`M${ex - 14} 96 Q${ex} 78 ${ex + 14} 96`}
                  fill="none"
                  stroke={C.pupil}
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              )}
            </g>
          ))}

          {/* Brows */}
          <motion.path
            d="M46 64 Q70 52 94 66"
            fill="none"
            stroke={C.bodyDark}
            strokeWidth="5"
            strokeLinecap="round"
            animate={{ y: mood === "searching" ? -4 : happy ? -6 : 0, rotate: mood === "searching" ? -6 : 0 }}
            style={{ transformOrigin: "70px 60px" }}
          />
          <motion.path
            d="M106 66 Q130 52 154 64"
            fill="none"
            stroke={C.bodyDark}
            strokeWidth="5"
            strokeLinecap="round"
            animate={{ y: mood === "searching" ? -4 : happy ? -6 : 0, rotate: mood === "searching" ? 6 : 0 }}
            style={{ transformOrigin: "130px 60px" }}
          />

          {/* Beak */}
          <path d="M91 108 L109 108 L100 128 Z" fill={C.beak} stroke="#C27F00" strokeWidth="1.5" strokeLinejoin="round" />

          {/* Blush when happy */}
          {happy && (
            <>
              <circle cx="52" cy="112" r="7" fill="#FF7A7A" opacity="0.5" />
              <circle cx="148" cy="112" r="7" fill="#FF7A7A" opacity="0.5" />
            </>
          )}
        </motion.g>
      </motion.g>
    </svg>
  );
}
