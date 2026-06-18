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

      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/72 via-stone-950/42 to-stone-950/14" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-stone-950/42 to-transparent" aria-hidden="true" />
      <div className="absolute right-[9%] top-[24%] hidden h-40 w-40 rotate-45 border-[1.8rem] border-white/16 lg:block" aria-hidden="true" />

      <div className="relative z-20 mx-auto flex h-[24rem] max-w-6xl items-end px-4 pb-14 pt-28 sm:h-[28rem] sm:px-6 sm:pb-18 lg:h-[32rem] lg:pb-20">
        <div className="max-w-3xl lg:-ml-8 xl:-ml-10">
          {content.eyebrow ? (
            <p className="nakfe-eyebrow text-white/72">
              {content.eyebrow}
            </p>
          ) : null}

          <h1 id="page-hero-heading" className="mt-5 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>

          {content.description ? (
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/82 sm:text-lg">
              {content.description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
