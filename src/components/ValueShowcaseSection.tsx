import SectionHeader from "@/components/SectionHeader";
import ValueCarousel from "@/components/ValueCarousel";
import type { ValueShowcaseSectionContent } from "@/types/content";

type ValueShowcaseSectionProps = {
  content: ValueShowcaseSectionContent;
};

export default function ValueShowcaseSection({
  content,
}: ValueShowcaseSectionProps) {
  if (content.items.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="values-heading"
      className="relative isolate overflow-hidden border-y border-stone-300 bg-stone-950 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-[-5rem] right-[12%] h-44 w-44 rotate-45 border-[2rem] border-white/10"
      />

      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24">
        <div id="values-heading">
          <SectionHeader content={content.header} tone="dark" />
        </div>
        <ValueCarousel items={content.items} />
      </div>
    </section>
  );
}
