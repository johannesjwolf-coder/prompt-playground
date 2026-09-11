"use client";
import { forwardRef } from "react";

type Props = { className?: string };

/**
 * Mossy stone perch. The owl (rendered in the fixed OwlStage layer) is
 * positioned on top of this element via its bounding box.
 */
const StonePlatform = forwardRef<HTMLDivElement, Props>(function StonePlatform(
  { className },
  ref
) {
  return (
    <div ref={ref} className={className} style={{ lineHeight: 0 }}>
      <svg viewBox="0 0 240 90" width="100%" style={{ overflow: "visible", display: "block" }}>
        <defs>
          <linearGradient id="stone-top" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8C8578" />
            <stop offset="100%" stopColor="#5E5850" />
          </linearGradient>
          <linearGradient id="stone-side" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4E483F" />
            <stop offset="100%" stopColor="#2B2620" />
          </linearGradient>
          <radialGradient id="stone-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Ground shadow */}
        <ellipse cx="120" cy="82" rx="118" ry="12" fill="url(#stone-shadow)" />
        {/* Side / thickness */}
        <path
          d="M14 44 C 10 62, 20 76, 42 78 L 198 78 C 222 76, 232 60, 226 44 Z"
          fill="url(#stone-side)"
        />
        {/* Top slab */}
        <path
          d="M18 40 C 30 22, 70 14, 120 16 C 170 14, 212 22, 224 40 C 228 52, 200 58, 120 58 C 40 58, 12 52, 18 40 Z"
          fill="url(#stone-top)"
          stroke="#3A342C"
          strokeWidth="2"
        />
        {/* Cracks */}
        <path d="M70 30 L 84 42 L 80 52" fill="none" stroke="#3A342C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M150 24 L 160 36 L 176 40" fill="none" stroke="#3A342C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M112 46 L 124 50" fill="none" stroke="#3A342C" strokeWidth="1.2" strokeLinecap="round" />
        {/* Moss */}
        <g fill="#4F7A3A" opacity="0.85">
          <ellipse cx="40" cy="44" rx="14" ry="5" />
          <ellipse cx="200" cy="46" rx="16" ry="5" />
          <ellipse cx="128" cy="20" rx="12" ry="4" />
        </g>
        <g fill="#7AAE58" opacity="0.7">
          <circle cx="36" cy="42" r="2.5" />
          <circle cx="46" cy="45" r="2" />
          <circle cx="196" cy="44" r="2.4" />
          <circle cx="206" cy="47" r="1.8" />
          <circle cx="126" cy="19" r="2" />
        </g>
        {/* Highlights */}
        <path d="M40 28 C 70 20, 110 18, 150 20" fill="none" stroke="#B5AD9D" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      </svg>
    </div>
  );
});

export default StonePlatform;
