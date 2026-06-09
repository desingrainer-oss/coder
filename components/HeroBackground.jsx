"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const GRID = 50;
const GAP = 10;

function lerpColor(t) {
  const center = { r: 0, g: 191, b: 255 };
  const mid = { r: 59, g: 130, b: 246 };
  const edge = { r: 0, g: 26, b: 65 };

  let r, g, b;
  if (t < 0.45) {
    const u = t / 0.45;
    r = center.r + (mid.r - center.r) * u;
    g = center.g + (mid.g - center.g) * u;
    b = center.b + (mid.b - center.b) * u;
  } else {
    const u = (t - 0.45) / 0.55;
    r = mid.r + (edge.r - mid.r) * u;
    g = mid.g + (edge.g - mid.g) * u;
    b = mid.b + (edge.b - mid.b) * u;
  }

  const alpha = Math.max(0.15, 1 - t * 0.88);
  return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${alpha})`;
}

function buildDots() {
  const cx = (GRID - 1) / 2;
  const cy = (GRID - 1) / 2;
  const maxR = Math.min(cx, cy) * GAP;
  const dots = [];

  for (let row = 0; row < GRID; row++) {
    for (let col = 0; col < GRID; col++) {
      const x = col * GAP;
      const y = row * GAP;
      const dx = x - cx * GAP;
      const dy = y - cy * GAP;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > maxR * 0.99) continue;

      const t = dist / maxR;
      const angle = Math.atan2(dy, dx);
      dots.push({
        id: `${row}-${col}`,
        x: x + GAP / 2,
        y: y + GAP / 2,
        r: Math.max(0.8, 2.8 - t * 1.35),
        fill: lerpColor(t),
        t,
        dist,
        phase: angle / Math.PI + dist * 0.04 + (row + col) * 0.03,
      });
    }
  }

  return dots;
}

function AnimatedDot({ dot, reduced }) {
  if (reduced) {
    return <circle cx={dot.x} cy={dot.y} r={dot.r} fill={dot.fill} />;
  }

  const base = 0.62 + (1 - dot.t) * 0.38;
  const pulse = 1.15 + (1 - dot.t) * 0.25;

  return (
    <motion.circle
      cx={dot.x}
      cy={dot.y}
      fill={dot.fill}
      initial={{ opacity: base * 0.5, r: dot.r }}
      animate={{
        opacity: [base * 0.35, base * pulse, base * 0.4, base * (pulse * 0.9), base * 0.35],
        r: [
          dot.r * 0.9,
          dot.r * (1.08 + (1 - dot.t) * 0.14),
          dot.r * 0.92,
          dot.r * (1.05 + (1 - dot.t) * 0.1),
          dot.r * 0.9,
        ],
      }}
      transition={{
        duration: 2.2 + dot.t * 1.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: dot.phase,
      }}
    />
  );
}

export default function HeroBackground() {
  const reduced = useReducedMotion();
  const dots = useMemo(() => buildDots(), []);
  const size = (GRID - 1) * GAP + GAP;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      {/* Contenedor derecho — centrado vertical en todo el hero */}
      <div className="absolute inset-y-0 right-0 w-full sm:w-[82%] lg:w-[68%] min-w-0 opacity-80 sm:opacity-95 lg:opacity-100">
        {/* Semicírculo navy */}
        <div
          className="absolute right-0 top-0 bottom-0 my-auto rounded-full bg-[#001A41]"
          style={{
            width: "clamp(480px, 62vw, 980px)",
            height: "clamp(480px, 62vw, 980px)",
            transform: "translateX(40%)",
          }}
        />

        {/* Cluster de puntos — centrado en el semicírculo visible */}
        <div
          className="absolute right-0 top-0 bottom-0 my-auto flex items-center justify-center"
          style={{
            width: "clamp(480px, 62vw, 980px)",
            height: "clamp(480px, 62vw, 980px)",
            transform: "translateX(12%)",
          }}
        >
          <div className="relative scale-[1.08] sm:scale-110 lg:scale-[1.14]">
          <motion.div
            className="relative"
            style={{ width: size, height: size }}
            animate={reduced ? undefined : { scale: [1, 1.045, 1] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              viewBox={`0 0 ${size} ${size}`}
              className="w-full h-full overflow-visible"
              style={{ filter: "drop-shadow(0 0 42px rgba(0, 191, 255, 0.38))" }}
            >
              {dots.map((dot) => (
                <AnimatedDot key={dot.id} dot={dot} reduced={reduced} />
              ))}
            </svg>

            {!reduced && (
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(0,191,255,0.28) 0%, rgba(59,130,246,0.12) 42%, rgba(0,26,65,0) 78%)",
                }}
                animate={{
                  opacity: [0.45, 0.95, 0.55, 0.9, 0.45],
                  scale: [1, 1.06, 1.02, 1.08, 1],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
