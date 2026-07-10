"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

const tabs = ["Selected", "Photography / Video", "Web", "Design"] as const;

type Tab = (typeof tabs)[number];

type Project = {
  id: string;
  title: string;
  type: string;
  text: string;
  details?: string[];
  thumbnail?: string | StaticImageData;
  isPhotography?: boolean;
};

type WorkTabsProps = {
  photographyImages: StaticImageData[];
};

export function WorkTabs({ photographyImages }: WorkTabsProps) {
  const [active, setActive] = useState<Tab>("Selected");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const photographyProject: Project = {
    id: "bjj-photography",
    title: "Sports imagery",
    type: "Photography / Video",
    text: "Fast-paced BJJ photography, photo editing and social-first image selection.",
    thumbnail: photographyImages[0],
    isPhotography: true,
  };

  const projects: Record<Tab, Project[]> = {
    Selected: [
      {
        id: "healthcare-website",
        title: "Healthcare website rebuild",
        type: "Web / UX",
        text: "Full implementation focused on accessibility, structure and UX.",
        details: [
          "Complete redevelopment of the Medmark website using Next.js and TypeScript.",
          "Improved navigation, accessibility and responsive behaviour.",
          "Created reusable components to make future updates easier to manage.",
        ],
      },
      photographyProject,
      {
        id: "social-media-direction",
        title: "Social media direction",
        type: "Content",
        text: "Reels, carousels, content planning and visual identity for digital platforms.",
        details: [
          "Photography and visual content created for social media.",
          "Content selection and editing based on platform and audience.",
          "Consistent visual direction across posts and digital materials.",
        ],
      },
    ],

    "Photography / Video": [
      {
        ...photographyProject,
        title: "BJJ photography",
        text: "Action, atmosphere and documentary imagery from Brazilian Jiu-Jitsu training.",
      },
    ],

    Web: [
      {
        id: "medmark-website",
        title: "Medmark website work",
        type: "Web",
        text: "Next.js, UX improvements, page structure, components and deployment support.",
        details: [
          "Developed reusable frontend components using Next.js and TypeScript.",
          "Improved page structure, responsiveness and accessibility.",
          "Supported deployment, domains and ongoing website updates.",
        ],
      },
    ],

    Design: [
      {
        id: "presentation-design",
        title: "Presentation and content design",
        type: "Design",
        text: "Clean layouts, typography, hierarchy and branded visual systems.",
        details: [
          "Created structured presentation layouts with consistent typography.",
          "Improved visual hierarchy and made information easier to understand.",
          "Designed materials aligned with existing brand guidelines.",
        ],
      },
    ],
  };

  const galleryOpen =
    selectedProject?.isPhotography === true && photographyImages.length > 0;

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setImageIndex(0);
  };

  const showPreviousImage = () => {
    if (photographyImages.length === 0) return;

    setImageIndex((current) =>
      current === 0 ? photographyImages.length - 1 : current - 1
    );
  };

  const showNextImage = () => {
    if (photographyImages.length === 0) return;

    setImageIndex((current) =>
      current === photographyImages.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProject();
      }

      if (
        selectedProject.isPhotography &&
        photographyImages.length > 0 &&
        event.key === "ArrowLeft"
      ) {
        setImageIndex((current) =>
          current === 0 ? photographyImages.length - 1 : current - 1
        );
      }

      if (
        selectedProject.isPhotography &&
        photographyImages.length > 0 &&
        event.key === "ArrowRight"
      ) {
        setImageIndex((current) =>
          current === photographyImages.length - 1 ? 0 : current + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, photographyImages.length]);

  return (
    <>
      <section id="work" className="container py-20">
        <div className="mb-8 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Selected work</p>

            <h2 className="mt-3 text-4xl font-medium tracking-[-0.04em]">
              A mix of web, content and visual storytelling.
            </h2>
          </div>
        </div>

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Work categories"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm transition ${
                active === tab
                  ? "bg-(--foreground) text-(--background)"
                  : "border border-white/10 text-(--muted) hover:text-(--foreground)"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects[active].map((project) => (
            <button
              key={`${active}-${project.id}`}
              type="button"
              onClick={() => openProject(project)}
              className="card group cursor-pointer p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-[rgba(243,240,232,0.28)]"
            >
              <div className="relative mb-5 aspect-4/3 overflow-hidden rounded-2xl border border-white/10 bg-(--card)">
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="image-placeholder h-full w-full" />
                )}

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

                <span className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                  View
                </span>
              </div>

              <p className="eyebrow">{project.type}</p>

              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                {project.title}
              </h3>

              <p className="mt-3 leading-7 text-(--muted)">
                {project.text}
              </p>
            </button>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeProject();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className={`relative max-h-[92vh] w-full overflow-hidden rounded-3xl border border-white/15 bg-[#11110f] shadow-2xl ${
              galleryOpen ? "max-w-6xl" : "max-w-2xl"
            }`}
          >
            <button
              type="button"
              onClick={closeProject}
              aria-label="Close project"
              className="absolute right-4 top-4 z-30 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/60 text-2xl text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
              ×
            </button>

            {galleryOpen ? (
              <div className="flex max-h-[92vh] flex-col">
                <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black">
                  <div className="relative h-[68vh] w-full">
                    <Image
                      key={photographyImages[imageIndex].src}
                      src={photographyImages[imageIndex]}
                      alt={`BJJ photograph ${imageIndex + 1} of ${
                        photographyImages.length
                      }`}
                      fill
                      priority
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>

                  {photographyImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={showPreviousImage}
                        aria-label="Previous photograph"
                        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/55 text-3xl text-white backdrop-blur-md transition hover:bg-white hover:text-black md:left-6"
                      >
                        ‹
                      </button>

                      <button
                        type="button"
                        onClick={showNextImage}
                        aria-label="Next photograph"
                        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/55 text-3xl text-white backdrop-blur-md transition hover:bg-white hover:text-black md:right-6"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                <div className="flex items-center justify-between gap-6 border-t border-white/10 px-5 py-4 md:px-7">
                  <div>
                    <p className="eyebrow">{selectedProject.type}</p>

                    <h3
                      id="project-modal-title"
                      className="mt-1 text-lg font-medium md:text-xl"
                    >
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className="shrink-0 text-sm text-(--muted)">
                    {imageIndex + 1} / {photographyImages.length}
                  </p>
                </div>

                <div className="flex gap-2 overflow-x-auto border-t border-white/10 px-5 py-4">
                  {photographyImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setImageIndex(index)}
                      aria-label={`View photograph ${index + 1}`}
                      className={`relative h-16 w-20 shrink-0 cursor-pointer overflow-hidden rounded-lg border transition ${
                        imageIndex === index
                          ? "border-white"
                          : "border-white/10 opacity-55 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="max-h-[92vh] overflow-y-auto p-7 md:p-10">
                <p className="eyebrow">{selectedProject.type}</p>

                <h3
                  id="project-modal-title"
                  className="mt-4 pr-12 text-3xl font-medium tracking-[-0.04em] md:text-5xl"
                >
                  {selectedProject.title}
                </h3>

                <p className="mt-5 max-w-xl text-lg leading-8 text-(--muted)">
                  {selectedProject.text}
                </p>

                {selectedProject.details &&
                  selectedProject.details.length > 0 && (
                    <div className="mt-10 border-t border-white/10 pt-7">
                      <p className="eyebrow">Project overview</p>

                      <div className="mt-5 space-y-4">
                        {selectedProject.details.map((detail) => (
                          <p
                            key={detail}
                            className="leading-7 text-(--muted)"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}