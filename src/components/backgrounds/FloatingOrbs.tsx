"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    size: 600,
    color: "rgba(99, 102, 241, 0.08)",
    x: "10%",
    y: "20%",
    duration: 25,
    delay: 0,
  },
  {
    size: 400,
    color: "rgba(139, 92, 246, 0.06)",
    x: "70%",
    y: "10%",
    duration: 30,
    delay: 2,
  },
  {
    size: 350,
    color: "rgba(99, 102, 241, 0.05)",
    x: "80%",
    y: "60%",
    duration: 28,
    delay: 4,
  },
  {
    size: 500,
    color: "rgba(168, 85, 247, 0.04)",
    x: "20%",
    y: "70%",
    duration: 35,
    delay: 1,
  },
  {
    size: 250,
    color: "rgba(59, 130, 246, 0.06)",
    x: "50%",
    y: "40%",
    duration: 22,
    delay: 3,
  },
];

export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            left: orb.x,
            top: orb.y,
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 80, -60, 40, 0],
            y: [0, -60, 40, -80, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
