"use client";

import PageHeroBackgroundCarousel from "@/components/PageHeroBackgroundCarousel";
import type { PageHeroContent } from "@/types/content";

type PageHeroProps = {
  content: PageHeroContent;
};

export default function PageHero({ content }: PageHeroProps) {
  return (
    <section aria-labelledby="page-hero-heading" className="relative isolate overflow-hidden bg-stone-950">
      <PageHeroBackgroundCarousel images={content.backgroundImages} />

      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/88 via-stone-950/62 to-stone-950/20" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-stone-950/65 to-transparent" aria-hidden="true" />
      <div className="absolute left-0 top-24 h-24 w-24 bg-red-700" aria-hidden="true" />
      <div className="absolute right-[9%] top-[24%] hidden h-40 w-40 rotate-45 border-[1.8rem] border-white/16 lg:block" aria-hidden="true" />

      <div className="relative z-20 mx-auto flex min-h-[24rem] max-w-6xl items-end px-4 pb-14 pt-28 sm:min-h-[28rem] sm:px-6 sm:pb-18 lg:min-h-[32rem] lg:pb-20">
        <div className="max-w-4xl pl-0 sm:pl-8">
          {content.eyebrow ? (
            <p className="nakfe-eyebrow bg-white px-4 py-3 text-stone-950 shadow-lg shadow-stone-950/20">
              {content.eyebrow}
            </p>
          ) : null}

          <h1 id="page-hero-heading" className="mt-7 max-w-5xl text-balance text-5xl font-black leading-[0.92] tracking-[-0.07em] text-white sm:text-6xl lg:text-8xl">
            {content.title}
          </h1>

          {content.description ? (
            <p className="mt-7 max-w-2xl border-l-[12px] border-red-700 bg-stone-950/55 py-4 pl-5 pr-6 text-lg font-semibold leading-8 text-white shadow-xl shadow-stone-950/25 backdrop-blur-sm sm:text-xl">
              {content.description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
