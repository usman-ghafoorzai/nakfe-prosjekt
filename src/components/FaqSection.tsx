"use client";

import { useId, useState } from "react";
import type { FaqCategoryContent, FaqItemContent } from "@/types/content";

type FaqSectionProps = {
  categories: FaqCategoryContent[];
};

export default function FaqSection({ categories }: FaqSectionProps) {
  return (
    <section className="nakfe-section bg-[#f7f1e8]">
      <div className="nakfe-container py-16 sm:py-20 lg:py-24">
        <div className="space-y-16 lg:space-y-20">
          {categories.map((category, index) => (
            <div key={category.title} className="grid gap-10 lg:grid-cols-[minmax(18rem,0.42fr)_1fr] lg:gap-14">
              <div className="lg:pt-3">
                <p className="nakfe-eyebrow text-red-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 text-4xl font-black leading-[0.96] tracking-[-0.06em] text-stone-950 sm:text-5xl">
                  {category.title}
                </h2>

                {category.description ? (
                  <p className="mt-6 max-w-3xl text-base font-semibold leading-7 text-stone-700">
                    {category.description}
                  </p>
                ) : null}
              </div>

              <div className="divide-y divide-stone-950/12 bg-white shadow-sm shadow-stone-950/5">
                {category.items.map((item) => (
                  <FaqItem key={item.question} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type FaqItemProps = {
  item: FaqItemContent;
};

function FaqItem({ item }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="border-l-[12px] border-transparent transition duration-200 ease-out has-[button[aria-expanded='true']]:border-red-700 motion-reduce:transition-none">
      <h3>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-6 px-5 py-6 text-left outline-none transition duration-200 ease-out hover:bg-[#f7f1e8] focus-visible:bg-[#f7f1e8] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-700 motion-reduce:transition-none sm:px-7"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="text-xl font-black leading-tight tracking-[-0.035em] text-stone-950">
            {item.question}
          </span>

          <span
            aria-hidden="true"
            className={[
              "grid h-10 w-10 shrink-0 place-items-center border-2 border-stone-950 text-2xl font-black leading-none text-stone-950 transition duration-200 ease-out motion-reduce:transition-none",
              isOpen ? "rotate-45 bg-stone-950 text-white" : "rotate-0 bg-white",
            ].join(" ")}
          >
            +
          </span>
        </button>
      </h3>

      <div id={contentId} hidden={!isOpen} className="px-5 pb-6 sm:px-7">
        <p className="max-w-3xl text-base font-semibold leading-7 text-stone-700">
          {item.answer}
        </p>

        {item.tags && item.tags.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li key={tag} className="bg-[#f7f1e8] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-stone-600">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        {item.lastReviewedAt ? (
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
            Sist gjennomgått: <time dateTime={item.lastReviewedAt}>{item.lastReviewedAt}</time>
          </p>
        ) : null}
      </div>
    </div>
  );
}
