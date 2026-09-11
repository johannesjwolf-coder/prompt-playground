"use client";
import { useMemo } from "react";

// Deterministic PRNG so server and client render identical shelves.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SPINES = [
  "#5E1F2A", "#7A2B33", "#2F4A3A", "#3B5D46", "#233A5C", "#2E4A73",
  "#6B4A1E", "#8A6420", "#4A3226", "#5A3A2A", "#3E2F4F", "#5A4470",
  "#7C5A2E", "#9B7A3A", "#1F2F3F", "#44251F",
];

type Book = { x: number; w: number; h: number; color: string; band: boolean; lean: number };

function shelfBooks(rng: () => number, width: number, shelfH: number): Book[] {
  const books: Book[] = [];
  let x = 0;
  while (x < width) {
    const w = 8 + rng() * 14;
    const h = shelfH * (0.55 + rng() * 0.4);
    const lean = rng() < 0.08 ? (rng() - 0.5) * 14 : 0;
    books.push({ x, w, h, color: SPINES[Math.floor(rng() * SPINES.length)], band: rng() < 0.55, lean });
    x += w + 1.5 + (rng() < 0.06 ? 12 : 0);
  }
  return books;
}

export default function LibraryBackground() {
  const W = 1600;
  const H = 900;
  const shelves = useMemo(() => {
    const rng = mulberry32(20240911);
    const rows: { y: number; h: number; books: Book[] }[] = [];
    const shelfH = 96;
    for (let i = 0; i < 8; i++) {
      const y = 40 + i * (shelfH + 14);
      rows.push({ y, h: shelfH, books: shelfBooks(rng, W, shelfH) });
    }
    return rows;
  }, []);

  const motes = useMemo(() => {
    const rng = mulberry32(7);
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: rng() * 100,
      top: rng() * 100,
      size: 2 + rng() * 3,
      dur: 14 + rng() * 16,
      delay: -rng() * 20,
    }));
  }, []);

  const candles = [
    { x: 6, y: 62 },
    { x: 92, y: 30 },
    { x: 78, y: 74 },
  ];

  return (
    <div className="library-bg" aria-hidden>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="library-shelves"
      >
        <defs>
          <linearGradient id="wood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5A3A22" />
            <stop offset="50%" stopColor="#3E2715" />
            <stop offset="100%" stopColor="#24150A" />
          </linearGradient>
          <linearGradient id="spine-shade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.12" />
            <stop offset="40%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="shelf-dark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill="#1A110A" />
        {shelves.map((row, ri) => (
          <g key={ri}>
            {/* back panel shadow */}
            <rect x="0" y={row.y - 10} width={W} height={row.h + 10} fill="url(#shelf-dark)" />
            {row.books.map((b, bi) => (
              <g
                key={bi}
                transform={`translate(${b.x} ${row.y + row.h - b.h}) rotate(${b.lean} ${b.w / 2} ${b.h})`}
              >
                <rect width={b.w} height={b.h} rx="1.5" fill={b.color} />
                <rect width={b.w} height={b.h} rx="1.5" fill="url(#spine-shade)" />
                {b.band && (
                  <>
                    <rect x="1" y={b.h * 0.18} width={b.w - 2} height="2" fill="#D9B45B" opacity="0.7" />
                    <rect x="1" y={b.h * 0.78} width={b.w - 2} height="2" fill="#D9B45B" opacity="0.7" />
                  </>
                )}
              </g>
            ))}
            {/* shelf board */}
            <rect x="0" y={row.y + row.h} width={W} height="12" fill="url(#wood)" />
            <rect x="0" y={row.y + row.h} width={W} height="2" fill="#7A5232" opacity="0.6" />
          </g>
        ))}
      </svg>

      {/* Candles */}
      {candles.map((c, i) => (
        <div key={i} className="candle" style={{ left: `${c.x}%`, top: `${c.y}%` }}>
          <div className="candle-glow" />
          <div className="candle-flame" />
          <div className="candle-wax" />
        </div>
      ))}

      {/* Dust motes */}
      {motes.map((m) => (
        <span
          key={m.id}
          className="mote"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            width: m.size,
            height: m.size,
            animationDuration: `${m.dur}s`,
            animationDelay: `${m.delay}s`,
          }}
        />
      ))}

      <div className="library-vignette" />
    </div>
  );
}
