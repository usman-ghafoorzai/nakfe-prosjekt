import type { PageHeroContent } from "@/types/content";

type PageHeroProps = {
  content: PageHeroContent;
};

export default function PageHero({ content }: PageHeroProps) {
  return (
      <section
          aria-labelledby="page-hero-heading"
          className="group relative isolate overflow-hidden border-b border-white/10 bg-gray-950"
      >
        <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.26),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(135deg,#030712,#111827_48%,#030712)] opacity-90 transition duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            aria-hidden="true"
        />

        <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.16] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
            aria-hidden="true"
        />

        <div
            className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-red-500/15 blur-3xl motion-safe:animate-pulse [animation-duration:7s]"
            aria-hidden="true"
        />

        <div
            className="absolute -right-20 top-16 hidden h-56 w-56 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm transition duration-700 ease-out group-hover:-translate-x-3 group-hover:translate-y-2 group-hover:border-red-200/20 lg:block motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
            aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
          <div className="max-w-3xl transition duration-500 ease-out group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-100 shadow-sm backdrop-blur transition duration-300 ease-out group-hover:border-red-200/30 group-hover:bg-white/15 motion-reduce:transition-none">
              {content.eyebrow}
            </p>

            <h1
                id="page-hero-heading"
                className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {content.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 sm:text-xl">
              {content.description}
            </p>
          </div>

          <div
              className="pointer-events-none absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent sm:left-6 sm:right-6"
              aria-hidden="true"
          />
        </div>
      </section>
  );
}