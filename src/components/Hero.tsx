"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { useTheme } from "@/hooks/useTheme";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background landscape image */}
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${theme === "light" ? "/hero-landscape-light.jpg" : "/hero-landscape.jpg"}`}
        alt="Mountain landscape"
        fill
        priority
        className="object-cover transition-opacity duration-500"
        quality={90}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark-glass-pill mb-8"
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-sm text-[var(--text-muted)]">
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight mb-4"
        >
          {personalInfo.name.split(" ")[0]}{" "}
          <span className="text-gradient">
            {personalInfo.name.split(" ")[1]}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-lg sm:text-xl text-[var(--text-muted)] mb-6"
        >
          <span className="text-[var(--accent)]">const</span>{" "}
          <span className="text-[var(--foreground)]">role</span>{" "}
          <span className="text-[var(--accent)]">=</span>{" "}
          <span className="text-emerald-400">
            &quot;{personalInfo.title}&quot;
          </span>
          <span className="animate-blink text-[var(--accent)]">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3 accent-pill rounded-full text-sm transition-all hover:shadow-lg hover:shadow-[var(--accent)]/20"
          >
            View My Work
            <span className="inline-block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 dark-glass-pill rounded-full text-sm text-[var(--foreground)] transition-all"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {["React", "Next.js", "TypeScript", "AI/LLM", "Node.js"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono text-[var(--text-muted)] dark-glass-pill rounded-md"
              >
                {tech}
              </span>
            ),
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-[var(--border)] rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-[var(--accent)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
