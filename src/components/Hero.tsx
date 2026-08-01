import Image from "next/image";
import type { HomeHeroContent } from "@/types/home";

type HeroProps = {
  content: HomeHeroContent;
};

export default function Hero({ content }: HeroProps) {
  const rotatingWords = content.rotatingWords ?? [];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden bg-stone-950"
    >
      <Image
        src={content.backgroundImage.src}
        alt={content.backgroundImage.alt}
        fill
        preload
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: content.backgroundImage.position ?? "center" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/58 to-stone-950/20" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-stone-950/65 to-transparent" aria-hidden="true" />
      <div className="absolute left-0 top-24 hidden h-28 w-28 bg-red-700 md:block" aria-hidden="true" />
      <div className="absolute right-[8%] top-[22%] hidden h-44 w-44 rotate-45 border-[2rem] border-white/18 lg:block" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-start px-4 pb-36 pt-28 sm:px-6 sm:pt-32 lg:pt-36">
        <div className="max-w-4xl">
          <h1
            id="hero-heading"
            className="mt-8 max-w-5xl text-balance text-5xl font-black leading-[0.93] tracking-[-0.07em] text-white sm:text-6xl lg:text-8xl"
          >
            {content.title}
          </h1>

          {content.description ? (
            <p className="mt-7 max-w-2xl border-l-[12px] border-red-700 bg-stone-950/55 py-4 pl-5 pr-6 text-lg font-semibold leading-8 text-white shadow-xl shadow-stone-950/25 backdrop-blur-sm sm:text-xl">
              {content.description}
            </p>
          ) : null}

          {rotatingWords.length > 0 ? (
            <div className="mt-10 max-w-4xl">
              <p className="inline-flex bg-stone-950/72 px-3 py-2 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-stone-950/25 backdrop-blur-sm">
                Arbeidet vårt handler om
              </p>

              <div
                className="relative mt-4 h-20 overflow-hidden sm:h-24"
                aria-label={rotatingWords.join(", ")}
              >
                <div className="absolute left-0 top-1/2 h-14 w-2 -translate-y-1/2 bg-red-700 sm:h-16" />

                {rotatingWords.map((word, index) => (
                  <span
                    key={word}
                    className="nakfe-hero-word absolute inset-0 flex items-center pl-7 text-5xl font-black leading-none tracking-[-0.06em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] sm:pl-9 sm:text-7xl"
                    style={{ animationDelay: `${index * 2.2}s` }}
                    aria-hidden={index !== 0}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
