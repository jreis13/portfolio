export function About() {
  return (
    <section id="about" className="container py-20">
      <div className="grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-[0.7fr_1.3fr]">
        <p className="eyebrow">About</p>

        <div>
          <h2 className="text-4xl font-medium tracking-[-0.04em]">
            I design, build and capture digital experiences.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            With a background in web development, I enjoy creating thoughtful
            digital experiences through web design, photography and visual storytelling.
            <br /> I'm constantly exploring new ways to combine technology and creativity to
            build work that's both functional and visually engaging.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="pill">Web Development</span>
            <span className="pill">Photography</span>
            <span className="pill">Video</span>
            <span className="pill">Design</span>
            <span className="pill">Social content</span>
          </div>
        </div>
      </div>
    </section>
  );
}