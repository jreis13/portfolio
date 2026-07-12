"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const tabs = ["Selected", "Photography / Video", "Web", "Design"] as const;

type Tab = (typeof tabs)[number];

type Project = {
  id: string;
  title: string;
  type: string;
  text: string;
  details?: string[];
  thumbnail?: string | StaticImageData;
  website?: string;
  isPhotography?: boolean;
};

type WorkTabsProps = {
  photographyImages: StaticImageData[];
  webImages: StaticImageData[];
  designImages: StaticImageData[];
};

export function WorkTabs({ photographyImages, webImages, designImages }: WorkTabsProps) {
  const [active, setActive] = useState<Tab>("Selected");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const bjjProject: Project = {
    id: "bjj-photography",
    title: "BJJ photography and content",
    type: "Photography / Video",
    text: "Fast-paced BJJ photography, photo editing and social-first image selection.",
    thumbnail: photographyImages[0],
    isPhotography: true,
  };

  const medmarkProject: Project = {
    id: "medmark-website",
    title: "Medmark website redesign",
    type: "Web",
    text: "Complete redesign and redevelopment of a nationwide healthcare provider's website using Next.js.",
    details: [
      "Rebuilt the website with reusable Next.js and TypeScript components.",
      "Improved navigation, accessibility and responsive layouts across the site.",
      "Managed deployment, domain migration and ongoing feature development.",
    ],
    thumbnail: webImages[0],
    website: "https://www.medmark.ie",
  };

  const cleanCraftProject: Project = {
    id: "clean-craft-website",
    title: "Clean Craft brand & website",
    type: "Web",
    text: "Designed and developed a modern brand website for a new cleaning company entering the market.",
    details: [
      "Created the visual identity and website from concept to launch.",
      "Designed a clean, trustworthy interface focused on lead generation.",
      "Built a responsive Next.js website optimised for performance and SEO.",
    ],
    thumbnail: webImages[1],
    website: "https://cleancraft.pt",
  };

  const raisinProject: Project = {
    id: "raisin-website",
    title: "Raisin website redesign",
    type: "Web",
    text: "Concept redesign for the Raisin natural wine platform, focusing on a cleaner interface and improved user experience.",
    details: [
      "Refreshed the visual identity with a cleaner, more premium aesthetic.",
      "Improved page layouts, navigation and mobile responsiveness.",
      "Built reusable components and a scalable frontend using Next.js.",
    ],
    thumbnail: webImages[2],
    website: "https://raisin-wines.vercel.app",
  };

  const curaProject: Project = {
    id: "cura-website",
    title: "Cura concept design",
    type: "Design",
    text: "Web design concept exploring healthcare, UI design and modern frontend development.",
    details: [
      "Designed the user interface and overall product experience.",
      "Built an interactive prototype using Next.js and TypeScript.",
      "Explored dashboard design, accessibility and component-based architecture.",
    ],
    thumbnail: designImages[0],
    website: "https://cura-io.vercel.app",
  };

  const projects: Record<Tab, Project[]> = {
    Selected: [
      bjjProject,
      medmarkProject,
      curaProject
    ],

    "Photography / Video": [
      {
        ...bjjProject,
      },
    ],

    Web: [
      {
        ...medmarkProject,
      },
      {
        ...cleanCraftProject,
      },
      {
        ...raisinProject,
      },
    ],

    Design: [
      {
        ...curaProject,
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
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition ${
                active === tab
                  ? "border-transparent bg-(--foreground) text-(--background)"
                  : "border-white/10 text-(--muted) hover:border-white/30 hover:text-(--foreground)"
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
              className="card group flex h-full cursor-pointer flex-col items-stretch p-5 text-left align-top transition duration-300 hover:-translate-y-1 hover:border-[rgba(243,240,232,0.28)]"            >
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
              className="absolute right-4 top-4 z-30 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
              <X size={20} strokeWidth={2} />
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
                        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition hover:bg-white hover:text-black md:left-6"
                      >
                        <ArrowLeft size={24} strokeWidth={2} />
                      </button>

                      <button
                        type="button"
                        onClick={showNextImage}
                        aria-label="Next photograph"
                        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition hover:bg-white hover:text-black md:right-6"
                      >
                        <ArrowRight size={24} strokeWidth={2} />
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
                {selectedProject.website && (
                  <div className="mt-10 border-t border-white/10 pt-7">
                    <a
                      href={selectedProject.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm font-medium transition hover:border-white/30 hover:bg-white/5"
                    >
                      Visit website
                    </a>
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