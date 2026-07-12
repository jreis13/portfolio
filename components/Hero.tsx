import Image, { type StaticImageData } from "next/image";

type HeroProps = {
  photographyImage: StaticImageData;
  designImage: StaticImageData;
  webImage: StaticImageData;
};

export function Hero({
  photographyImage,
  designImage,
  webImage,
}: HeroProps) {
  return (
    <section className="container pt-28 pb-16">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        {/* Left side */}
        <div>
          <p className="eyebrow mb-5">Web • Photography • Design</p>

          <h1 className="max-w-5xl text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Web, photography & visual content with a sharp digital eye.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-(--muted)">
            I create digital experiences across websites, photography, video and
            design — combining web development with visual storytelling.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-(--foreground) px-5 py-3 text-sm font-medium text-(--background) transition hover:opacity-85"
            >
              View selected work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-(--foreground) transition hover:border-white/30"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="grid gap-3 lg:pt-10">
          <div className="group relative aspect-[16/7] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={webImage}
              alt="Web development work"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

            <p className="absolute bottom-0 left-0 p-4 font-medium text-white">
              Web
            </p>
          </div>

            <div className="group relative aspect-[16/7] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={photographyImage}
                alt="Photography work"
                fill
              sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

              <p className="absolute bottom-0 left-0 p-4 font-medium text-white">
                Photography
              </p>
            </div>

            <div className="group relative aspect-[16/7] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={designImage}
                alt="Design work"
                fill
              sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

              <p className="absolute bottom-0 left-0 p-4 font-medium text-white">
                Design
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}