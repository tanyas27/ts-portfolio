"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm text-[var(--text-muted)]">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight mb-4"
        >
          {personalInfo.name.split(" ")[0]}{" "}
          <span className="text-gradient">{personalInfo.name.split(" ")[1]}</span>
        </motion.h1>

        {/* Title with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-lg sm:text-xl text-[var(--text-muted)] mb-6"
        >
          <span className="text-[var(--accent)]">const</span>{" "}
          <span className="text-[var(--foreground)]">role</span>{" "}
          <span className="text-[var(--accent)]">=</span>{" "}
          <span className="text-emerald-400">&quot;{personalInfo.title}&quot;</span>
          <span className="animate-blink text-[var(--accent)]">|</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group px-8 py-3.5 bg-[var(--accent)] text-white rounded-xl font-medium text-sm hover:bg-[var(--accent-light)] transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          >
            View My Work
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/10 text-[var(--foreground)] rounded-xl font-medium text-sm hover:bg-white/5 hover:border-white/20 transition-all"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Tech stack pills */}
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
                className="px-3 py-1 text-xs font-mono text-[var(--text-muted)] border border-white/5 rounded-md bg-white/[0.02]"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-[var(--accent)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
