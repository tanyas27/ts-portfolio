"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "50+", label: "Projects Shipped" },
  { value: "8", label: "Engineers Led" },
  { value: "1M+", label: "Users Impacted" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-[var(--accent)] mb-2">
            {"// about me"}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">
            Building what&apos;s <span className="text-gradient">next</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
              {personalInfo.bio.split("\n").map((paragraph, i) => (
                <p key={i}>{paragraph.trim()}</p>
              ))}
            </div>

            {/* Code-style info block */}
            <div className="mt-8 p-5 rounded-xl bg-[var(--surface)] border border-white/5 font-mono text-sm">
              <div className="text-[var(--text-muted)]">
                <span className="text-[var(--accent)]">const</span>{" "}
                <span className="text-[var(--foreground)]">developer</span>{" "}
                <span className="text-[var(--accent)]">=</span> {"{"}
              </div>
              <div className="pl-6 mt-1 space-y-1">
                <div>
                  <span className="text-purple-400">location</span>:{" "}
                  <span className="text-emerald-400">
                    &quot;{personalInfo.location}&quot;
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-purple-400">focus</span>:{" "}
                  <span className="text-emerald-400">
                    &quot;Frontend + AI&quot;
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-purple-400">passion</span>:{" "}
                  <span className="text-emerald-400">
                    &quot;Developer Experience&quot;
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-purple-400">coffee</span>:{" "}
                  <span className="text-amber-400">Infinity</span>,
                </div>
              </div>
              <div className="text-[var(--text-muted)]">{"}"}</div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 content-start"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="glow-border p-6 rounded-2xl bg-[var(--surface)] border border-white/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
