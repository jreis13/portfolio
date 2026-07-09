export function Hero() {
  return (
    <section className="container min-h-[82vh] pt-28 pb-16">
      <p className="eyebrow mb-5">Web • Photography • Design</p>

      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <h1 className="max-w-5xl text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Web, photography & visual content with a sharp digital eye.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I create digital experiences across websites, photography, video and
            design — combining web development with visual storytelling.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)]"
            >
              View selected work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--foreground)]"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="image-placeholder min-h-64 rounded-3xl p-4 flex items-end">
            Photography
          </div>
          <div className="image-placeholder mt-12 min-h-44 rounded-3xl p-4 flex items-end">
            Video
          </div>
          <div className="image-placeholder min-h-52 rounded-3xl p-4 flex items-end">
            Web
          </div>
          <div className="image-placeholder mt-10 min-h-36 rounded-3xl p-4 flex items-end">
            Design
          </div>
        </div>
      </div>
    </section>
  );
}