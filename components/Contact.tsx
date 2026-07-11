export function Contact() {
  return (
    <section id="contact" className="container py-20">
      <div className="card p-8 md:p-12">
        <p className="eyebrow">Contact</p>

        <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-5xl">
          Available for creative roles, content work, photography and web projects.
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:joaofranciscoreis22@gmail.com"
            className="rounded-full bg-(--foreground) px-5 py-3 text-sm font-medium text-(--background)"
          >
            Email me
          </a>

          <a
            href="https://www.instagram.com/satchi.ph"
            target="_blank"
            className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/joao-francisco-reis"
            target="_blank"
            className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}