import Link from "next/link";
import type { HomeHeroContent } from "@/types/content";

type HeroProps = {
  content: HomeHeroContent;
};

export default function Hero({ content }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          {content.eyebrow}
        </p>

        <h1
          id="hero-heading"
          className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl"
        >
          {content.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          {content.description}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={content.primaryAction.href}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gray-950 px-6 text-sm font-semibold text-white transition duration-200 ease-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
          >
            {content.primaryAction.label}
          </Link>

          <Link
            href={content.secondaryAction.href}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-950 transition duration-200 ease-out hover:border-gray-950 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
          >
            {content.secondaryAction.label}
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
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

        <p className="mt-5 text-sm leading-6 text-gray-600">{content.note}</p>
      </div>
    </section>
  );
}
