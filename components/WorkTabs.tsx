"use client";

import { useState } from "react";

const tabs = ["Selected", "Photography", "Video", "Web", "Design"] as const;

const projects = {
  Selected: [
    {
      title: "Healthcare website rebuild",
      type: "Web / UX",
      text: "Full implementation focused on accessibility, structure and UX.",
    },
    {
      title: "Sports imagery",
      type: "Photography",
      text: "Fast-paced BJJ photography, photo editing and social-first image selection.",
    },
    {
      title: "Social media direction",
      type: "Content",
      text: "Reels, carousels, content planning and visual identity for digital platforms.",
    },
  ],
  Photography: [
    {
      title: "BJJ event photography",
      type: "Photography",
      text: "Action-focused images for athletes, gyms and social media.",
    },
  ],
  Video: [
    {
      title: "Short-form video experiments",
      type: "Video",
      text: "A growing collection of reels, edits and social-first clips.",
    },
  ],
  Web: [
    {
      title: "Medmark website work",
      type: "Web",
      text: "Next.js, UX improvements, page structure, components and deployment support.",
    },
  ],
  Design: [
    {
      title: "Presentation and content design",
      type: "Design",
      text: "Clean layouts, typography, hierarchy and branded visual systems.",
    },
  ],
};

export function WorkTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]>("Selected");

  return (
    <section id="work" className="container py-20">
      <div className="mb-8 flex flex-col gap-4 border-t border-[var(--border)] pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-3 text-4xl font-medium tracking-[-0.04em]">
            A mix of web, content and visual storytelling.
          </h2>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-full cursor-pointer px-4 py-2 text-sm transition ${
              active === tab
                ? "bg-[var(--foreground)] text-[var(--background)]"
                : "border border-[var(--border)] text-[var(--muted)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {projects[active].map((project) => (
          <article key={project.title} className="card p-5">
            <div className="image-placeholder mb-5 aspect-[4/3] rounded-2xl" />
            <p className="eyebrow">{project.type}</p>
            <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
              {project.title}
            </h3>
            <p className="mt-3 leading-7 text-[var(--muted)]">
              {project.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}