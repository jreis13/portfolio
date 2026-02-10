"use client";

import Image from "next/image";
import React, { useEffect } from "react";

export type Project = {
  title: string;
  icon: React.ComponentProps<typeof Image>["src"];
  description: string;
  stack: string[];
  link?: string;
  screenshots?: { src: string; alt: string }[];
  recordings?: { src: string; label?: string }[];
  caseStudyPdf?: { href: string; label?: string };
};

export function ProjectModal({
  open,
  project,
  onClose,
}: {
  open: boolean;
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      <div className="absolute inset-0 bg-black/70" />

      <div
        className="absolute inset-0 flex items-center justify-center p-3 sm:p-4"
        onMouseDown={onClose}
        role="presentation"
      >
        <div
          className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl flex flex-col max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-2rem)]"
          onMouseDown={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} media`}
        >
          <div className="flex items-start justify-between gap-4 border-b border-slate-800 px-4 py-4 sm:px-6 sm:py-5">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <h3 className="text-lg sm:text-2xl font-semibold text-slate-50 truncate">
                  {project.title}
                </h3>
                <Image
                  src={project.icon}
                  alt={`${project.title} icon`}
                  className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
                />
              </div>

              <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-3xl">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] sm:text-xs text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {project.caseStudyPdf?.href ? (
                <a
                  href={project.caseStudyPdf.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-sky-400/40 hover:text-sky-300"
                >
                  {project.caseStudyPdf.label ?? "View case study (PDF)"}
                </a>
              ) : null}

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-sky-500 px-3 py-2 sm:px-4 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-sky-400"
                >
                  Visit site
                </a>
              ) : null}

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-100 hover:border-sky-400/40 cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="p-4 sm:p-6 space-y-8 sm:space-y-10">
              {project.recordings?.length ? (
                <section className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
                    Screen recording
                  </p>

                  <div className="flex flex-col gap-5 sm:gap-6">
                    {project.recordings.map((v) => (
                      <div
                        key={v.src}
                        className="overflow-hidden rounded-2xl border border-slate-800 bg-black"
                      >
                        <video src={v.src} controls className="w-full" />
                        {v.label ? (
                          <div className="border-t border-slate-800 px-4 py-3 text-sm text-slate-200">
                            {v.label}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              {project.screenshots?.length ? (
                <section className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
                    Screenshots
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {project.screenshots.map((img) => (
                      <a
                        key={img.src}
                        href={img.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40"
                      >
                        <div className="relative aspect-16/10 w-full">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition group-hover:scale-[1.03]"
                          />
                        </div>
                        <div className="border-t border-slate-800 px-4 py-3 text-sm text-slate-200">
                          {img.alt}
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              ) : null}

              {!project.recordings?.length &&
              !project.screenshots?.length &&
              !project.caseStudyPdf?.href ? (
                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-slate-200">
                  Add recordings or screenshots to showcase this project.
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
