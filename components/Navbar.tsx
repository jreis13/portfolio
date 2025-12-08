"use client";

import { useState } from "react";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <a href="#home" className="flex items-center">
          <div className="h-9 w-9 rounded-full bg-linear-to-tr from-sky-400 to-emerald-400 flex items-center justify-center text-[0.8rem] font-bold text-slate-950 tracking-wider hover:scale-[1.1] active:scale-[0.95] transition-transform">
            JR
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-sky-400 hover:scale-[1.03] transition-transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex rounded-full bg-linear-to-tr from-sky-400 to-emerald-400 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 hover:opacity-90 hover:scale-105 transition-transform"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-700 p-2 text-slate-200"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-slate-200" />
            <span className="block h-0.5 w-5 bg-slate-200" />
          </div>
        </button>
      </div>

      {open && (
        <div className="container mt-1 pb-3 md:hidden">
          <nav className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-200 flex flex-col items-center gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-1.5 hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-2 rounded-full bg-linear-to-tr from-sky-400 to-emerald-400 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 hover:opacity-90"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
