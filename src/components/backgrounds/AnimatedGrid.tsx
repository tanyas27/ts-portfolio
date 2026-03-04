"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated grid lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(99, 102, 241, 0.04)"
              strokeWidth="0.5"
            />
          </pattern>
          <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#gridFade)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          mask="url(#gridMask)"
        />
      </svg>

      {/* Horizontal scanning line */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.15), transparent)",
        }}
        animate={{ y: [0, 2000] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Vertical scanning line */}
      <motion.div
        className="absolute top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.1), transparent)",
        }}
        animate={{ x: [0, 2000] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glowing intersection dots that pulse */}
      {[
        { x: "20%", y: "30%", delay: 0 },
        { x: "60%", y: "15%", delay: 2 },
        { x: "80%", y: "50%", delay: 4 },
        { x: "35%", y: "70%", delay: 1 },
        { x: "70%", y: "80%", delay: 3 },
        { x: "15%", y: "55%", delay: 5 },
        { x: "50%", y: "45%", delay: 2.5 },
        { x: "90%", y: "25%", delay: 1.5 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[var(--accent)]"
          style={{ left: dot.x, top: dot.y }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}
