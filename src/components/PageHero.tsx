import Image from "next/image";
import Link from "next/link";
import type { PageHeroContent } from "@/types/content";

type PageHeroProps = {
  content: PageHeroContent;
};

export default function PageHero({ content }: PageHeroProps) {
  const hasImage = Boolean(content.image?.src);

  return (
    <section
      aria-labelledby="page-hero-heading"
      className="border-b border-gray-200 bg-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="max-w-3xl">
          {content.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              {content.eyebrow}
            </p>
          ) : null}

          <h1
            id="page-hero-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl"
          >
            {content.title}
          </h1>

          {content.description ? (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {content.description}
            </p>
          ) : null}

          {content.primaryAction || content.secondaryAction ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {content.primaryAction ? (
                <Link
                  href={content.primaryAction.href}
                  aria-label={content.primaryAction.ariaLabel}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-gray-950 px-6 text-sm font-semibold text-white transition duration-200 ease-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
                >
                  {content.primaryAction.label}
                </Link>
              ) : null}

              {content.secondaryAction ? (
                <Link
                  href={content.secondaryAction.href}
                  aria-label={content.secondaryAction.ariaLabel}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-950 transition duration-200 ease-out hover:border-gray-950 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
                >
                  {content.secondaryAction.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        {hasImage ? (
          <div className="relative min-h-[18rem] overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm sm:min-h-[24rem]">
            <Image
              src={content.image!.src}
              alt={content.image!.isDecorative ? "" : content.image!.alt}
              fill
              sizes="(min-width: 1024px) 34rem, 100vw"
              className="object-cover"
              style={{ objectPosition: content.image!.position ?? "center" }}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
