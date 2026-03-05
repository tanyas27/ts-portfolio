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
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <h2 className="font-mono text-sm text-[var(--accent)] mb-2">{"// about me"}</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">Building what&apos;s <span className="text-gradient">next</span></h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
              {personalInfo.bio.split("\n").map((paragraph, i) => (
                <p key={i}>{paragraph.trim()}</p>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl dark-glass font-mono text-sm overflow-hidden">
              <div className="relative z-10 text-[var(--text-muted)]">
                <span className="text-[var(--accent)]">const</span>{" "}
                <span className="text-[var(--foreground)]">developer</span>{" "}
                <span className="text-[var(--accent)]">=</span> {"{"}
              </div>
              <div className="relative z-10 pl-6 mt-1 space-y-1">
                <div><span className="text-[var(--accent)]">location</span>: <span className="text-emerald-400">&quot;{personalInfo.location}&quot;</span>,</div>
                <div><span className="text-[var(--accent)]">focus</span>: <span className="text-emerald-400">&quot;Frontend + AI&quot;</span>,</div>
                <div><span className="text-[var(--accent)]">passion</span>: <span className="text-emerald-400">&quot;Developer Experience&quot;</span>,</div>
                <div><span className="text-[var(--accent)]">coffee</span>: <span className="text-orange-400">Infinity</span>,</div>
              </div>
              <div className="relative z-10 text-[var(--text-muted)]">{"}"}</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 gap-4 content-start">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="dark-glass p-6 rounded-2xl overflow-hidden"
              >
                <div className="relative z-10 text-3xl sm:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="relative z-10 text-sm text-[var(--text-muted)]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
