"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import type { ValueShowcaseSectionContent } from "@/types/content";

type ValueShowcaseSectionProps = {
  content: ValueShowcaseSectionContent;
};

export default function ValueShowcaseSection({
  content,
}: ValueShowcaseSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = content.items[activeIndex];

  if (content.items.length === 0) {
    return null;
  }

  return (
    <section className="border-y border-stone-200 bg-stone-50/80">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeader content={content.header} />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-3">
            {content.items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.title}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={[
                    "flex w-full items-start gap-4 rounded-3xl border px-5 py-5 text-left outline-none transition duration-200 ease-out motion-reduce:transition-none",
                    isActive
                      ? "border-stone-300 bg-white text-gray-950 shadow-sm shadow-stone-950/5"
                      : "border-stone-200 bg-white/60 text-gray-700 hover:border-stone-300 hover:bg-white/80",
                    "focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2",
                  ].join(" ")}
                >
                  <span className="mt-0.5 text-xs font-semibold tracking-[0.24em] text-stone-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0">
                    <span className="block text-base font-semibold text-gray-950">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-gray-600">
                      {item.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm shadow-stone-950/5">
            <div className="relative min-h-[18rem] bg-stone-100 sm:min-h-[24rem]">
              <Image
                src={activeItem.image.src}
                alt={activeItem.image.isDecorative ? "" : activeItem.image.alt}
                fill
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="object-cover"
                style={{ objectPosition: activeItem.image.position ?? "center" }}
              />
            </div>

            <div className="border-t border-stone-100 px-6 py-6 sm:px-8">
              <p className="text-xs font-semibold tracking-[0.24em] text-stone-400">
                {String(activeIndex + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-950">
                {activeItem.title}
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
                {activeItem.description}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
