import Image from "next/image";

import CleanCraftIcon from "@/public/CleanCraftIcon.png";
import KoiRouteIcon from "@/public/KoiRouteIcon.png";
import MedmarkIcon from "@/public/MedmarkIcon.webp";

export function Projects() {
  const projects = [
    {
      title: "Medmark",
      icon: MedmarkIcon,
      description:
        "The new website of Medmark, Ireland's largest network of Occupational Health providers with clients across multiple sectors.",
      stack: ["Next.js", "Typescript", "Tailwind CSS"],
      link: "https://medmark-oh.vercel.app/",
    },
    {
      title: "Koi Route",
      icon: KoiRouteIcon,
      description:
        "A web platform for simulating and planning autonomous flight routes, built with Next.js and custom UI components.",
      stack: ["Next.js", "Tailwind CSS"],
      link: "https://koi-route.vercel.app/",
    },
    {
      title: "Clean Craft",
      icon: CleanCraftIcon,
      description:
        "A portal for electric vertical takeoff and landing (eVTOL) aircraft, providing users with the latest news, specifications, and industry insights.",
      stack: ["Next.js", "Typescript", "Tailwind CSS"],
      link: "https://clean-craft.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="container space-y-10">
        <div className="space-y-3 text-right ml-auto max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
            Projects
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            Selected work
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A few projects I’ve designed and built, focusing on clarity,
            structure and practical implementation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:bg-slate-900/80 hover:border-sky-400/40 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-slate-50 group-hover:text-sky-400">
                  {p.title}
                </h3>
                <Image
                  src={p.icon}
                  alt={`${p.title} icon`}
                  className="h-6 w-6 object-contain"
                />
              </div>

              <p className="mt-2 text-sm text-slate-300">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
