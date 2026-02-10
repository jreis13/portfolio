export function Hero() {
  return (
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
        <div className="space-y-6">
          <p
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2300bcff' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
            }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-300"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for freelance projects and collaborations
          </p>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
              João Francisco Reis
            </h1>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
              Web Developer
            </p>
          </div>

          <p className="max-w-xl text-sm sm:text-base text-slate-300">
            Designing and building modern web experiences while focusing on
            clear structure, calm visuals and realistic implementation - from UI
            to integration.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="#projects"
              className="rounded-full hover:scale-[1.03] active:scale-[0.98] bg-linear-to-tr from-sky-400 to-emerald-400 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 hover:opacity-90"
            >
              View projects
            </a>
            <a
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2300bcff' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
              }}
              href="#contact"
              className="rounded-full hover:scale-[1.03] active:scale-[0.98] border border-slate-600 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200 hover:border-sky-400 hover:text-sky-300"
            >
              Contact
            </a>
            <div className="flex flex-wrap gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Next.js
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                TypeScript
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2300bcff' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
            }}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 hover:border-sky-400/40 hover:bg-slate-900/90"
          >
            <div className="grid gap-3 text-sm text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Focus
                </p>
                <p className="mt-1 text-slate-100">
                  Product-style web apps and tools
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Stack
                </p>
                <p className="mt-1 text-slate-100">
                  Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2300bcff' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
            }}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 hover:border-sky-400/40 hover:bg-slate-900/90"
          >
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
              Currently
            </p>
            <ul className="mt-3 space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Designing and building web projects.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Exploring projects that mix data, interfaces and clear
                  storytelling.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                <span>Open to collaborations and freelance work.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
