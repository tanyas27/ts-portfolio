"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <h2 className="font-mono text-sm text-[var(--accent)] mb-2">{"// projects"}</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">Featured <span className="text-gradient">work</span></h3>
        </motion.div>

        <div className="grid gap-6 mb-12">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group dark-glass p-8 rounded-2xl overflow-hidden"
            >
              <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-[var(--background)] bg-[var(--accent)] px-2.5 py-0.5 rounded-full font-semibold">Featured</span>
                  </div>
                  <h4 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors">{project.title}</h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 max-w-xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-mono text-[var(--accent)] bg-[var(--accent)]/5 rounded-md border border-[var(--accent)]/10">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a href={project.github} className="p-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="View source code"><GitHubIcon /></a>
                  <a href={project.link} className="p-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="View live project"><ExternalIcon /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <h4 className="font-mono text-sm text-[var(--text-muted)] mb-6">Other noteworthy projects</h4>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {other.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group dark-glass p-6 rounded-2xl block overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-between mb-3">
                <span className="text-2xl">📁</span>
                <div className="flex items-center gap-2 text-[var(--text-muted)]"><GitHubIcon /><ArrowIcon /></div>
              </div>
              <h5 className="relative z-10 font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">{project.title}</h5>
              <p className="relative z-10 text-xs text-[var(--text-muted)] leading-relaxed mb-4">{project.description}</p>
              <div className="relative z-10 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs font-mono text-[var(--text-muted)]">{t}{project.tech.indexOf(t) < 2 && " ·"}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
