"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <h2 className="font-mono text-sm text-[var(--accent)] mb-2">{"// skills & tools"}</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">My <span className="text-gradient">tech stack</span></h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="dark-glass p-6 rounded-2xl overflow-hidden"
            >
              <h4 className="relative z-10 font-mono text-sm text-[var(--accent)] mb-5 flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                {group.category}
              </h4>
              <div className="relative z-10 space-y-4">
                {group.items.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-[var(--foreground)]">{skill.name}</span>
                      <span className="text-xs font-mono text-[var(--text-muted)]">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: gi * 0.1 + si * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--accent-dark)] to-[var(--accent)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
