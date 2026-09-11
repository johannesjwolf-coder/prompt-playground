"use client";
import { motion } from "framer-motion";

type Props = { x?: number; y?: number; width?: number; glow?: boolean };

/** A glowing golden grimoire. Rendered inside an existing <svg>. */
export default function MagicBook({ x = 0, y = 0, width = 64, glow = true }: Props) {
  const s = width / 64;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <defs>
        <linearGradient id="book-cover" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7A1F2B" />
          <stop offset="100%" stopColor="#3E0F17" />
        </linearGradient>
        <radialGradient id="book-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF4C2" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#FFD700" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
        <filter id="book-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      {glow && (
        <motion.ellipse
          cx="32"
          cy="22"
          rx="46"
          ry="30"
          fill="url(#book-glow)"
          animate={{ opacity: [0.7, 1, 0.7], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "32px 22px" }}
        />
      )}
      {/* Pages */}
      <rect x="6" y="6" width="52" height="34" rx="2" fill="#FFF3D6" />
      <rect x="6" y="6" width="52" height="34" rx="2" fill="none" stroke="#E3C98F" />
      {/* Cover */}
      <rect x="2" y="2" width="60" height="34" rx="3" fill="url(#book-cover)" stroke="#2A0A10" strokeWidth="1.5" />
      <rect x="8" y="7" width="48" height="24" rx="2" fill="none" stroke="#FFD700" strokeWidth="1.2" opacity="0.8" />
      {/* Rune / emblem */}
      <motion.g
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="32" cy="19" r="8" fill="none" stroke="#FFD700" strokeWidth="1.6" />
        <path d="M32 11 L34.5 16.5 L40 19 L34.5 21.5 L32 27 L29.5 21.5 L24 19 L29.5 16.5 Z" fill="#FFD700" />
        <circle cx="32" cy="19" r="14" fill="#FFD700" opacity="0.25" filter="url(#book-blur)" />
      </motion.g>
      {/* Spine highlight */}
      <rect x="2" y="2" width="5" height="34" rx="2" fill="#5A1520" />
      {/* Sparkles */}
      {[
        [0, 0, 0],
        [64, 4, 0.4],
        [58, 40, 0.8],
        [4, 36, 1.2],
      ].map(([sx, sy, d], i) => (
        <motion.path
          key={i}
          d="M0 -5 L1.3 -1.3 L5 0 L1.3 1.3 L0 5 L-1.3 1.3 L-5 0 L-1.3 -1.3 Z"
          fill="#FFF7D6"
          style={{ transformOrigin: `${sx}px ${sy}px` }}
          transform={`translate(${sx} ${sy})`}
          animate={{ scale: [0, 1.2, 0], rotate: [0, 90], opacity: [0, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: d as number, ease: "easeInOut" }}
        />
      ))}
    </g>
  );
}
