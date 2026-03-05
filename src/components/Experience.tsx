"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <h2 className="font-mono text-sm text-[var(--accent)] mb-2">{"// experience"}</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">Where I&apos;ve <span className="text-gradient">worked</span></h3>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)]/30 via-[var(--border)] to-transparent" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                <div className="absolute left-0 md:left-8 top-1 w-px h-px">
                  <div className="relative -left-[5px]">
                    <div className="w-2.5 h-2.5 bg-[var(--accent)] rounded-full" />
                    <div className="absolute inset-0 w-2.5 h-2.5 bg-[var(--accent)] rounded-full animate-ping opacity-30" />
                  </div>
                </div>

                <div className="dark-glass p-6 rounded-2xl overflow-hidden">
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--foreground)]">{job.role}</h4>
                      <p className="text-[var(--accent)] font-medium text-sm">{job.company}</p>
                    </div>
                    <span className="font-mono text-xs text-[var(--text-muted)] dark-glass-pill px-3 py-1 rounded-full shrink-0">{job.period}</span>
                  </div>
                  <p className="relative z-10 text-sm text-[var(--text-muted)] leading-relaxed mb-4">{job.description}</p>
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-mono text-[var(--accent)] bg-[var(--accent)]/5 rounded-md border border-[var(--accent)]/10">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
