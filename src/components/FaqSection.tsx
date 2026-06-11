"use client";

import { useId, useState } from "react";
import type { FaqCategoryContent, FaqItemContent } from "@/types/content";

type FaqSectionProps = {
    categories: FaqCategoryContent[];
};

export default function FaqSection({ categories }: FaqSectionProps) {
    return (
        <section className="border-b border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
                <div className="space-y-12">
                    {categories.map((category) => (
                        <div key={category.title}>
                            <div className="max-w-3xl">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                                    {category.title}
                                </h2>

                                {category.description ? (
                                    <p className="mt-4 text-lg leading-8 text-gray-600">
                                        {category.description}
                                    </p>
                                ) : null}
                            </div>

                            <div className="mt-8 divide-y divide-gray-200 rounded-3xl border border-gray-200 bg-white shadow-sm">
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
        <div>
            <h3>
                <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left outline-none transition duration-200 ease-out hover:bg-gray-50 focus-visible:bg-gray-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-950 motion-reduce:transition-none sm:px-6"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setIsOpen((current) => !current)}
                >
          <span className="text-base font-semibold text-gray-950">
            {item.question}
          </span>

                    <span
                        aria-hidden="true"
                        className={[
                            "shrink-0 text-xl text-gray-500 transition duration-200 ease-out motion-reduce:transition-none",
                            isOpen ? "rotate-45" : "rotate-0",
                        ].join(" ")}
                    >
            +
          </span>
                </button>
            </h3>

            <div
                id={contentId}
                hidden={!isOpen}
                className="px-5 pb-5 sm:px-6"
            >
                <p className="max-w-3xl text-sm leading-6 text-gray-600">
                    {item.answer}
                </p>

                {item.tags && item.tags.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                            <li
                                key={tag}
                                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                ) : null}

                {item.lastReviewedAt ? (
                    <p className="mt-4 text-xs text-gray-400">
                        Sist gjennomgått:{" "}
                        <time dateTime={item.lastReviewedAt}>{item.lastReviewedAt}</time>
                    </p>
                ) : null}
            </div>
        </div>
    );
}