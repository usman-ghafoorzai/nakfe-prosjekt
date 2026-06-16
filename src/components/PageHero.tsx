"use client";

import PageHeroBackgroundCarousel from "@/components/PageHeroBackgroundCarousel";
import type { PageHeroContent } from "@/types/content";

type PageHeroProps = {
  content: PageHeroContent;
};

export default function PageHero({ content }: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-hero-heading"
      className="relative isolate overflow-hidden bg-gray-950"
    >
      <PageHeroBackgroundCarousel images={content.backgroundImages} />

      <div className="relative z-20 mx-auto flex min-h-[22rem] max-w-6xl items-center px-4 py-20 sm:min-h-[26rem] sm:px-6 sm:py-24 lg:min-h-[30rem] lg:py-28">
        <div className="max-w-3xl">
          <h1
            id="page-hero-heading"
            className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {content.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-100 sm:text-xl">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
