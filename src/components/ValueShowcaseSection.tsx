import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
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
    <section className="relative isolate overflow-hidden border-y border-stone-300 bg-stone-950 text-white">
      <div className="absolute left-0 top-0 h-28 w-28 bg-red-700" aria-hidden="true" />
      <div className="absolute bottom-[-5rem] right-[12%] h-44 w-44 rotate-45 border-[2rem] border-white/10" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24">
        <SectionHeader content={content.header} tone="dark" />

        <div className="mt-12 grid gap-px bg-white/16 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <article key={item.title} className="group bg-stone-950">
              <div className="relative min-h-[15rem] overflow-hidden bg-stone-800 sm:min-h-[18rem]">
                <Image
                  src={item.image.src}
                  alt={item.image.isDecorative ? "" : item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover opacity-78 grayscale-[25%] transition duration-300 ease-out group-hover:scale-[1.025] group-hover:opacity-100 group-hover:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  style={{ objectPosition: item.image.position ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" aria-hidden="true" />
                <p className="absolute left-5 top-5 bg-red-700 px-3 py-2 text-sm font-black leading-none tracking-[-0.03em] text-white">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              <div className="border-l-[12px] border-red-700 bg-white px-6 py-7 text-stone-950 lg:min-h-[15rem]">
                <h3 className="text-3xl font-black leading-none tracking-[-0.055em]">
                  {item.title}
                </h3>
                <p className="mt-5 text-base font-semibold leading-7 text-stone-700">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
