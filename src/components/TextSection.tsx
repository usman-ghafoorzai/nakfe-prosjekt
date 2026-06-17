import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import type { TextSectionContent } from "@/types/content";

type TextSectionProps = {
  content: TextSectionContent;
};

type ToneStyles = {
  section: string;
  glowPrimary: string;
  glowSecondary: string;
  pattern: string;
  eyebrow: string;
  imageFrame: string;
};

const toneStyles: Record<NonNullable<TextSectionContent["visual"]>["tone"] & string, ToneStyles> = {
  warm: {
    section: "bg-[#fbf7f1]",
    glowPrimary: "bg-amber-200/35",
    glowSecondary: "bg-rose-200/20",
    pattern: "border-amber-900/10 bg-white/35",
    eyebrow: "bg-amber-900/10 text-amber-950",
    imageFrame: "bg-amber-100/50 ring-amber-950/10",
  },
  sage: {
    section: "bg-[#f5f8f4]",
    glowPrimary: "bg-emerald-200/25",
    glowSecondary: "bg-lime-200/20",
    pattern: "border-emerald-900/10 bg-white/40",
    eyebrow: "bg-emerald-900/10 text-emerald-950",
    imageFrame: "bg-emerald-100/45 ring-emerald-950/10",
  },
  neutral: {
    section: "bg-[#f8f7f4]",
    glowPrimary: "bg-stone-300/30",
    glowSecondary: "bg-stone-200/25",
    pattern: "border-stone-900/10 bg-white/40",
    eyebrow: "bg-stone-900/10 text-stone-950",
    imageFrame: "bg-stone-100 ring-stone-950/10",
  },
};

function getToneStyles(content: TextSectionContent): ToneStyles {
  return toneStyles[content.visual?.tone ?? "warm"];
}

function getLayoutClasses(content: TextSectionContent, hasImage: boolean) {
  if (!hasImage) {
    return {
      grid: "lg:grid-cols-1",
      copy: "max-w-3xl",
      image: "",
    };
  }

  const imageFirst = content.visual?.imagePlacement === "start";

  return {
    grid: "lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center",
    copy: imageFirst ? "lg:order-2" : "",
    image: imageFirst ? "lg:order-1" : "",
  };
}

function TextSectionPattern({ styles }: { styles: ToneStyles }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`absolute -right-24 top-20 h-72 w-72 rounded-full blur-3xl ${styles.glowPrimary}`}
      />
      <div
        className={`absolute -left-20 bottom-14 h-64 w-64 rounded-full blur-3xl ${styles.glowSecondary}`}
      />
      <div
        className={`absolute left-6 top-10 hidden h-28 w-28 rotate-6 rounded-[2rem] border md:block ${styles.pattern}`}
      />
      <svg
        className="absolute right-4 top-8 hidden h-40 w-40 text-stone-900/10 lg:block"
        viewBox="0 0 160 160"
        fill="none"
      >
        <path
          d="M12 98C38 58 61 43 93 54c30 10 35 42 13 62-27 25-82 18-78-19 4-35 49-55 87-38"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 122c36-18 73-18 112 0M31 45c32 14 64 14 96 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 8"
        />
      </svg>
    </div>
  );
}

export default function TextSection({ content }: TextSectionProps) {
  const hasImage = Boolean(content.image?.src);
  const styles = getToneStyles(content);
  const layout = getLayoutClasses(content, hasImage);
  const showPattern = content.visual?.pattern !== "none";

  return (
    <section className={`relative isolate overflow-hidden border-b border-stone-200 ${styles.section}`}>
      {showPattern ? <TextSectionPattern styles={styles} /> : null}

      <div
        className={`relative mx-auto grid max-w-6xl gap-12 px-4 py-18 sm:px-6 sm:py-24 lg:gap-16 ${layout.grid}`}
      >
        <div className={layout.copy}>
          {content.header.eyebrow ? (
            <p
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${styles.eyebrow}`}
            >
              {content.header.eyebrow}
            </p>
          ) : null}

          <SectionHeader content={{ ...content.header, eyebrow: undefined }} />

          {content.body.length > 0 ? (
            <div className="mt-7 max-w-2xl space-y-5 text-[1.03rem] leading-8 text-stone-700 sm:text-lg sm:leading-9">
              {content.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          {content.action ? (
            <div className="mt-9">
              <Link
                href={content.action.href}
                aria-label={content.action.ariaLabel}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-stone-300 bg-white/80 px-6 text-sm font-semibold text-stone-950 shadow-sm backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:border-stone-950 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
              >
                {content.action.label}
              </Link>
            </div>
          ) : null}
        </div>

        {hasImage ? (
          <figure className={`relative ${layout.image}`}>
            <div
              className={`relative min-h-[20rem] overflow-hidden rounded-[2rem] shadow-sm ring-1 sm:min-h-[28rem] lg:min-h-[32rem] ${styles.imageFrame}`}
            >
              <Image
                src={content.image!.src}
                alt={content.image!.isDecorative ? "" : content.image!.alt}
                fill
                sizes="(min-width: 1024px) 34rem, 100vw"
                className="object-cover transition duration-500 ease-out hover:scale-[1.025] motion-reduce:transition-none motion-reduce:hover:scale-100"
                style={{ objectPosition: content.image!.position ?? "center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-white/5" />
            </div>

            {content.image?.caption ? (
              <figcaption className="mt-4 max-w-md text-sm leading-6 text-stone-600">
                {content.image.caption}
                {content.image.credit ? (
                  <span className="text-stone-500"> Foto: {content.image.credit}</span>
                ) : null}
              </figcaption>
            ) : null}
          </figure>
        ) : null}
      </div>
    </section>
  );
}
