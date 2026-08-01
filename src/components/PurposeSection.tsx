import Image from "next/image";
import PurposeContextSwitcher from "@/components/PurposeContextSwitcher";
import SectionHeader from "@/components/SectionHeader";
import type { PurposeSectionContent } from "@/types/about";

type PurposeSectionProps = {
  content: PurposeSectionContent;
};

export default function PurposeSection({ content }: PurposeSectionProps) {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-stone-300/70 bg-[#f7f1e8]"
      aria-label={content.header.eyebrow ?? content.header.title}
    >
      <div
        className="pointer-events-none absolute right-[-7rem] top-16 h-72 w-72 rotate-45 border-[2.4rem] border-white/50"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-24 xl:gap-28">
        <div>
          <SectionHeader content={content.header} />
          <PurposeContextSwitcher contexts={content.contexts} />
        </div>

        <figure className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full bg-[#e8d8c2]" aria-hidden="true" />
          <div className="relative z-10 min-h-[19rem] overflow-hidden bg-stone-200 shadow-2xl shadow-stone-950/15 sm:min-h-[25rem] lg:min-h-[31rem]">
            <Image
              src={content.image.src}
              alt={content.image.isDecorative ? "" : content.image.alt}
              fill
              sizes="(min-width: 1024px) 32rem, 100vw"
              className="object-cover grayscale-[18%]"
              style={{ objectPosition: content.image.position ?? "center" }}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
