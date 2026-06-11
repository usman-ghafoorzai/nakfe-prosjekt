import Image from "next/image";
import Link from "next/link";
import type { HomeHeroContent } from "@/types/content";

type HeroProps = {
  content: HomeHeroContent;
};

export default function Hero({ content }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      <Image
        src={content.backgroundImage.src}
        alt={content.backgroundImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: content.backgroundImage.position }}
      />

      <div className="absolute inset-0 bg-gray-950/65" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-200">
            {content.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {content.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-100">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={content.primaryAction.href}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-red-500 px-6 text-sm font-semibold text-white transition duration-200 ease-out hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
            >
              {content.primaryAction.label}
            </Link>

            <Link
              href={content.secondaryAction.href}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition duration-200 ease-out hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
            >
              {content.secondaryAction.label}
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-sm backdrop-blur">
          <div className="rounded-2xl bg-white/95 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
              {content.highlightsLabel}
            </p>

            <ul className="mt-6 grid gap-3">
              {content.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center justify-between rounded-2xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700"
                >
                  <span>{highlight}</span>
                  <span aria-hidden="true" className="text-gray-400">
                    →
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-5 text-sm leading-6 text-gray-100">
            {content.note}
          </p>
        </div>
      </div>
    </section>
  );
}
