export function Skills() {
  const skillGroups = [
    {
      title: "Core",
      skills: ["Next.js", "React", "TypeScript", "JavaScript"],
    },
    {
      title: "Styling",
      skills: ["Tailwind CSS", "CSS Modules", "Responsive UI"],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "Vercel", "API Integrations"],
    },
    {
      title: "Other",
      skills: ["Airtable", "Stripe", "Auth0", "Framer Motion"],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="container space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
            Skills
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            Technologies & capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            Tools, frameworks and technologies I use to design and build clean,
            structured, modern web experiences.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:bg-slate-900/80 hover:border-sky-400/40 hover:scale-[1.02]"
            >
              <h3 className="text-sm font-semibold text-slate-50 uppercase tracking-[0.18em]">
                {group.title}
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
