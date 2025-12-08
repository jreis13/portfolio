export function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="container grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-start">
        <div className="grid gap-4 order-2 md:order-1">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 hover:border-sky-400/40 hover:bg-slate-900/90 hover:scale-[1.02]">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              What I do
            </p>
            <p className="mt-2 text-sm text-slate-100">
              Design and build modern web apps and landing pages, from structure
              and layout to integrations and deployment.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 hover:border-sky-400/40 hover:bg-slate-900/90 hover:scale-[1.02]">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              How I work
            </p>
            <p className="mt-2 text-sm text-slate-100">
              Calm UI, clear hierarchy, readable code and a focus on what can be
              shipped now while leaving space for future iterations.
            </p>
          </div>
        </div>

        <div className="space-y-4 order-1 md:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
            About
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            A developer who cares about structure, clarity and delivery.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            I am a developer who enjoys turning ideas into clear, realistic web
            experiences. <br /> I focus on clean layouts, calm visuals and
            implementations that work within real constraints, from UI details
            to API integrations.
          </p>
        </div>
      </div>
    </section>
  );
}
