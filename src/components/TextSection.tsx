import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import type { TextSectionContent, TextSectionVisualContent } from "@/types/content";

type TextSectionProps = {
  content: TextSectionContent;
};

type ToneStyles = {
  section: string;
  block: string;
  accent: string;
  soft: string;
  imageFrame: string;
};

const toneStyles: Record<NonNullable<TextSectionVisualContent["tone"]>, ToneStyles> = {
  warm: {
    section: "bg-[#f7f1e8]",
    block: "bg-[#2b211b] text-white",
    accent: "bg-red-700",
    soft: "bg-red-700/10",
    imageFrame: "bg-[#e8d8c2]",
  },
  sage: {
    section: "bg-[#eef1e7]",
    block: "bg-[#17241d] text-white",
    accent: "bg-emerald-800",
    soft: "bg-emerald-800/10",
    imageFrame: "bg-[#d7dfce]",
  },
  neutral: {
    section: "bg-stone-100",
    block: "bg-stone-950 text-white",
    accent: "bg-stone-800",
    soft: "bg-stone-800/10",
    imageFrame: "bg-stone-200",
  },
};

export default function TextSection({ content }: TextSectionProps) {
  const tone = content.visual?.tone ?? "warm";
  const styles = toneStyles[tone];
  const hasImage = Boolean(content.image?.src);
  const imagePlacement = content.visual?.imagePlacement ?? "end";
  const imageFirst = hasImage && imagePlacement === "start";

  return (
    <section className={`relative isolate overflow-hidden border-b border-stone-300/70 ${styles.section}`}>
      <div className="pointer-events-none absolute left-0 top-0 hidden h-24 w-24 bg-red-700 md:block" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-7rem] top-16 h-72 w-72 rotate-45 border-[2.4rem] border-white/50" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-[12%] h-44 w-44 rounded-full bg-white/45 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-18 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.82fr)] lg:items-center lg:gap-16">
        <div className={imageFirst ? "lg:order-2" : undefined}>
          <SectionHeader content={content.header} />

          {content.body.length > 0 ? (
            <div className="mt-8 max-w-2xl space-y-5 text-lg font-medium leading-8 text-stone-800">
              {content.body.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === 0 ? "border-l-[10px] border-red-700 bg-white/60 py-4 pl-5 pr-4 text-xl font-bold leading-8 text-stone-950 shadow-sm shadow-stone-900/5" : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}

          {content.action ? (
            <div className="mt-9">
              <Link
                href={content.action.href}
                aria-label={content.action.ariaLabel}
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-red-700 px-6 text-sm font-black uppercase tracking-[0.14em] text-white transition duration-200 ease-out hover:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0"
              >
                {content.action.label}
                <span className="text-lg leading-none transition duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          ) : null}
        </div>

        {hasImage ? (
          <figure className={`relative ${imageFirst ? "lg:order-1" : undefined}`}>
            <div className={`absolute -left-4 -top-4 h-full w-full ${styles.imageFrame}`} aria-hidden="true" />
            <div className="absolute -right-5 bottom-8 z-20 h-24 w-24 bg-red-700 mix-blend-multiply" aria-hidden="true" />
            <div className="relative z-10 min-h-[19rem] overflow-hidden rounded-tl-[4rem] bg-stone-200 shadow-2xl shadow-stone-950/15 sm:min-h-[25rem] lg:min-h-[31rem]">
              <Image
                src={content.image!.src}
                alt={content.image!.isDecorative ? "" : content.image!.alt}
                fill
                sizes="(min-width: 1024px) 32rem, 100vw"
                className="object-cover grayscale-[18%] transition duration-300 ease-out hover:scale-[1.015] hover:grayscale-0 motion-reduce:transition-none motion-reduce:hover:scale-100"
                style={{ objectPosition: content.image!.position ?? "center" }}
              />
            </div>

            {content.image?.caption || content.image?.credit ? (
              <figcaption className="relative z-20 mt-4 max-w-md border-l-[10px] border-red-700 bg-white px-5 py-4 text-sm font-semibold leading-6 text-stone-700 shadow-sm shadow-stone-950/5">
                {content.image.caption ? <span>{content.image.caption}</span> : null}
                {content.image.credit ? (
                  <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-stone-500">
                    {content.image.credit}
                  </span>
                ) : null}
              </figcaption>
            ) : null}
          </figure>
        ) : (
          <div className={`hidden min-h-80 items-end p-8 lg:flex ${styles.block}`} aria-hidden="true">
            <div>
              <div className="h-16 w-16 bg-red-700" />
              <p className="mt-6 max-w-xs text-3xl font-black leading-none tracking-[-0.05em]">
                Kunnskap. Fellesskap. Endring.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
