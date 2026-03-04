"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[var(--text-muted)]">
          <span className="text-[var(--accent)]">&lt;</span>
          Built with Next.js, Tailwind & Framer Motion
          <span className="text-[var(--accent)]"> /&gt;</span>
        </p>
        <p className="font-mono text-xs text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Tanya Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
