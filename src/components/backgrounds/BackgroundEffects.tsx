"use client";

import dynamic from "next/dynamic";
import FloatingOrbs from "./FloatingOrbs";
import AnimatedGrid from "./AnimatedGrid";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

export default function BackgroundEffects() {
  return (
    <>
      <AnimatedGrid />
      <FloatingOrbs />
      <ParticleField />
    </>
  );
}
