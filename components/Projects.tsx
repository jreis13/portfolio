"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import CleanCraftIcon from "@/public/projects/CleanCraft/CleanCraftIcon.png";
import PortalIcon from "@/public/projects/evtolPortal/PortalIcon.png";
import MedmarkIcon from "@/public/projects/Medmark/MedmarkIcon.webp";

import { ProjectModal, type Project } from "@/components/ProjectModal";

export function Projects() {
  const projects = useMemo(() => {
    const list: Project[] = [
      {
        title: "Medmark",
        icon: MedmarkIcon,
        description:
          "The redesigned website for Medmark, Ireland's largest network of Occupational Health providers with clients across multiple sectors.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        link: "https://medmark-oh.vercel.app/",
        recordings: [
          {
            src: "/projects/Medmark/medmark-sr.mp4",
            label: "Homepage walkthrough",
          },
        ],
        screenshots: [
          {
            src: "/projects/Medmark/medmark-ss1.png",
            alt: "Hero + navigation",
          },
          {
            src: "/projects/Medmark/medmark-ss2.png",
            alt: "Services modal / detail",
          },
          {
            src: "/projects/Medmark/medmark-ss3.png",
            alt: "Clinics map + layout",
          },
        ],
      },
      {
        title: "Clean Craft",
        icon: CleanCraftIcon,
        description:
          "A modern website for a power washing business, built to generate leads with clear service pages & fast mobile UX.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        link: "https://clean-craft.vercel.app/",
        recordings: [
          {
            src: "/projects/CleanCraft/cc-sr.mp4",
            label: "Model browsing + details",
          },
        ],
        screenshots: [
          {
            src: "/projects/CleanCraft/cc-ss1.png",
            alt: "Landing page",
          },
          {
            src: "/projects/CleanCraft/cc-ss2.png",
            alt: "How it works section",
          },
          {
            src: "/projects/CleanCraft/cc-ss3.png",
            alt: "Contact form",
          },
        ],
      },
      {
        title: "evtol Portal",
        icon: PortalIcon,
        description:
          "A portal for managing and simulating eVTOL (electric Vertical Take-Off and Landing) aircraft operations.",
        stack: ["Next.js", "Tailwind CSS"],
        link: "https://evtol-portal.vercel.app/",
        recordings: [
          {
            src: "/projects/evtolPortal/ep-sr.mp4",
            label: "Navigation walkthrough",
          },
        ],
        screenshots: [
          { src: "/projects/evtolPortal/ep-ss1.png", alt: "Landing / hero" },
          {
            src: "/projects/evtolPortal/ep-ss2.png",
            alt: "Overview",
          },
          {
            src: "/projects/evtolPortal/ep-ss3.png",
            alt: "Simulation Engine",
          },
        ],
      },
    ];

    return list;
  }, []);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
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
              <button
                key={p.title}
                type="button"
                onClick={() => {
                  setActive(p);
                  setOpen(true);
                }}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2300bcff' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
                }}
                className="text-left group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:bg-slate-900/80 hover:border-sky-400/40 transition cursor-pointer"
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

                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400/80">
                  View media →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        open={open}
        project={active}
        onClose={() => {
          setOpen(false);
          setActive(null);
        }}
      />
    </>
  );
}
