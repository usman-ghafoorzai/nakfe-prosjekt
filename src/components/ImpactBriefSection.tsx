"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ImpactBriefSectionContent } from "@/types/content";

type ImpactBriefSectionProps = {
  content: ImpactBriefSectionContent;
};

type DialogStatistic =
    ImpactBriefSectionContent["statisticsDialog"]["statistics"][number];

function clampPercentage(value: number) {
  return Math.min(Math.max(value, 0), 100);
}

function StatisticCard({ stat }: { stat: DialogStatistic }) {
  return (
      <article className="relative overflow-hidden bg-white p-5 shadow-sm shadow-stone-950/5">
        <div className="absolute left-0 top-0 h-full w-1.5 bg-red-700" aria-hidden="true" />

        <p className="pl-4 text-[0.68rem] font-black uppercase tracking-[0.18em] text-stone-500">
          {stat.label}
        </p>

        <p className="mt-3 pl-4 text-5xl font-black leading-none tracking-[-0.08em] text-red-700 sm:text-6xl">
          {stat.value}
        </p>

        <p className="mt-4 max-w-md pl-4 text-sm font-semibold leading-6 text-stone-700">
          {stat.description}
        </p>

        {typeof stat.barValue === "number" ? (
            <div
                className="mt-5 pl-4"
                aria-label={`${stat.barLabel ?? stat.label}: ${stat.barValue} prosent`}
            >
              <div className="flex justify-between gap-4 text-[0.68rem] font-black uppercase tracking-[0.14em] text-stone-500">
                <span>{stat.barLabel ?? stat.label}</span>
                <span>{stat.barValue}%</span>
              </div>

              <div className="mt-2 h-3 bg-stone-200">
                <div
                    className="h-full bg-red-700"
                    style={{ width: `${clampPercentage(stat.barValue)}%` }}
                />
              </div>
            </div>
        ) : null}
      </article>
  );
}

export default function ImpactBriefSection({ content }: ImpactBriefSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
      <section
          aria-labelledby="impact-brief-heading"
          className="relative z-30 -mt-16 bg-transparent px-4 sm:-mt-20 sm:px-6 lg:-mt-24"
      >
        <div className="mx-auto max-w-6xl lg:-translate-x-12 xl:-translate-x-24">
          <div className="relative bg-[#e7e1d8] shadow-2xl shadow-stone-950/20">
            <div className="grid gap-10 px-5 py-8 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end lg:gap-12 lg:px-10 lg:py-10">
              <div className="max-w-4xl">
                <p className="inline-flex items-center gap-3 text-[0.76rem] font-black uppercase tracking-[0.22em] text-red-800">
                  {content.eyebrow}
                </p>

                <h2
                    id="impact-brief-heading"
                    className="mt-4 max-w-4xl text-balance text-3xl font-black leading-[0.98] tracking-[-0.055em] text-stone-950 sm:text-4xl lg:text-5xl"
                >
                  {content.title}
                </h2>

                <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-stone-800">
                  {content.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch">
                <Link
                    href={content.primaryAction.href}
                    aria-label={content.primaryAction.ariaLabel}
                    target={content.primaryAction.isExternal ? "_blank" : undefined}
                    rel={content.primaryAction.isExternal ? "noreferrer" : undefined}
                    className="inline-flex min-h-12 items-center justify-center gap-3 bg-red-700 px-6 text-sm font-black uppercase tracking-[0.14em] text-white transition duration-200 ease-out hover:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0"
                >
                  {content.primaryAction.label}
                  <span aria-hidden="true">↗</span>
                </Link>

                <button
                    type="button"
                    aria-label={content.secondaryAction.ariaLabel}
                    onClick={() => setIsOpen(true)}
                    className="inline-flex min-h-12 items-center justify-center border-2 border-stone-950 bg-white px-6 text-sm font-black uppercase tracking-[0.14em] text-stone-950 transition duration-200 ease-out hover:bg-stone-950 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0"
                >
                  {content.secondaryAction.label}
                </button>
              </div>
            </div>

            <div className="grid border-t border-stone-950/10 md:grid-cols-2">
              {content.highlights.map((highlight) => (
                  <article
                      key={highlight.label}
                      className="border-stone-950/10 px-6 py-6 first:border-b md:first:border-b-0 md:first:border-r lg:px-10"
                  >
                    <p className="text-5xl font-black leading-none tracking-[-0.08em] text-red-700 sm:text-6xl">
                      {highlight.value}
                    </p>
                    <h3 className="mt-3 text-xl font-black leading-tight tracking-[-0.035em] text-stone-950">
                      {highlight.label}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-stone-700">
                      {highlight.description}
                    </p>
                  </article>
              ))}
            </div>
          </div>
        </div>

        <dialog
            ref={dialogRef}
            aria-labelledby="statistics-dialog-heading"
            className="nakfe-stat-dialog w-[min(94vw,64rem)] max-w-none bg-transparent p-0 text-stone-950 backdrop:bg-stone-950/70"
            onCancel={() => setIsOpen(false)}
            onClose={() => setIsOpen(false)}
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setIsOpen(false);
              }
            }}
        >
          <div className="nakfe-stat-panel relative overflow-hidden bg-[#f7f1e8] shadow-2xl shadow-stone-950/30">
            <div
                className="absolute right-[-5rem] top-10 h-44 w-44 rotate-45 border-[1.7rem] border-red-700/15"
                aria-hidden="true"
            />

            <div className="relative px-6 py-7 sm:px-9 sm:py-9">
              <div className="flex items-start justify-between gap-6">
                <div className="max-w-3xl">
                  <p className="nakfe-eyebrow text-red-800">
                    Tallene bak arbeidet
                  </p>

                  <h2
                      id="statistics-dialog-heading"
                      className="mt-4 text-3xl font-black leading-[0.96] tracking-[-0.06em] text-stone-950 sm:text-5xl"
                  >
                    {content.statisticsDialog.title}
                  </h2>

                  <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-stone-700 sm:text-lg">
                    {content.statisticsDialog.description}
                  </p>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center border-2 border-stone-950 bg-white text-2xl font-black leading-none text-stone-950 transition duration-200 hover:bg-stone-950 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4"
                >
                  <span className="sr-only">Lukk statistikk</span>
                  ×
                </button>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="bg-stone-950 p-6 text-white sm:p-7">
                  <p className="text-[0.72rem] font-black uppercase tracking-[0.2em] text-white/60">
                    Utdanning, arbeid og opplæring
                  </p>

                  <div className="mt-6 grid gap-6">
                    {content.statisticsDialog.statistics.slice(0, 2).map((stat) => (
                        <div key={`${stat.value}-${stat.label}`}>
                          <p className="text-6xl font-black leading-none tracking-[-0.08em] text-white sm:text-7xl">
                            {stat.value}
                          </p>

                          <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-white/60">
                            {stat.label}
                          </p>

                          <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-white/78">
                            {stat.description}
                          </p>

                          {typeof stat.barValue === "number" ? (
                              <div
                                  className="mt-4"
                                  aria-label={`${stat.barLabel ?? stat.label}: ${stat.barValue} prosent`}
                              >
                                <div className="h-4 bg-white/15">
                                  <div
                                      className="h-full bg-red-600"
                                      style={{ width: `${clampPercentage(stat.barValue)}%` }}
                                  />
                                </div>
                              </div>
                          ) : null}
                        </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  {content.statisticsDialog.statistics.slice(2).map((stat) => (
                      <StatisticCard key={`${stat.value}-${stat.label}`} stat={stat} />
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-stone-950/15 pt-5">
                <h3 className="text-sm font-black uppercase tracking-[0.18em] text-stone-950">
                  Tallgrunnlag
                </h3>

                <ul className="mt-4 grid gap-3 text-sm font-semibold leading-6 text-stone-700 sm:grid-cols-2">
                  {content.statisticsDialog.citations.map((citation) => (
                      <li
                          key={citation.href}
                          className="border-l-4 border-red-700 bg-white px-4 py-3"
                      >
                        <a
                            href={citation.href}
                            target="_blank"
                            rel="noreferrer"
                            className="underline decoration-red-700 decoration-2 underline-offset-4 hover:text-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
                        >
                          {citation.text}
                        </a>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </dialog>
      </section>
  );
}
