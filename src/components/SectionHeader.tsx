import type { SectionHeaderContent } from "@/types/content";

type SectionHeaderProps = {
  content: SectionHeaderContent;
};

export default function SectionHeader({ content }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {content.eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
          {content.eyebrow}
        </p>
      ) : null}

      <h2
        className={`${
          content.eyebrow ? "mt-3" : ""
        } text-3xl font-semibold tracking-tight text-stone-950 text-balance sm:text-4xl lg:text-5xl`}
      >
        {content.title}
      </h2>

      {content.description ? (
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl sm:leading-9">
          {content.description}
        </p>
      ) : null}
    </div>
  );
}
