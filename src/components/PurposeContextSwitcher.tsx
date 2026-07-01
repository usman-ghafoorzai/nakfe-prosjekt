"use client";

import { useState } from "react";
import type { PurposeContextContent } from "@/types/about";

type PurposeContextSwitcherProps = {
  contexts: PurposeContextContent[];
};

export default function PurposeContextSwitcher({
  contexts,
}: PurposeContextSwitcherProps) {
  const firstContext = contexts[0];
  const [activeContextId, setActiveContextId] = useState(firstContext?.id ?? "");

  if (!firstContext) {
    return null;
  }

  const activeContext =
    contexts.find((context) => context.id === activeContextId) ?? firstContext;

  return (
    <div className="mt-10 max-w-2xl">
      <div
        className="flex flex-wrap border-y border-stone-950/15"
        aria-label="Velg hvor du vil lese om arbeidet"
      >
        {contexts.map((context) => {
          const isActive = context.id === activeContext.id;

          return (
            <button
              key={context.id}
              type="button"
              aria-pressed={isActive}
              aria-controls={`purpose-context-${context.id}`}
              onClick={() => setActiveContextId(context.id)}
              className={[
                "relative min-h-12 px-0 py-3 pr-8 text-left text-sm font-bold transition duration-200 ease-out focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none",
                isActive
                  ? "text-stone-950"
                  : "text-stone-600 hover:text-stone-950",
              ].join(" ")}
            >
              {context.label}
              <span
                className={[
                  "absolute bottom-0 left-0 h-1 transition duration-200 ease-out motion-reduce:transition-none",
                  isActive ? "w-full bg-red-700" : "w-0 bg-transparent",
                ].join(" ")}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>

      <div
        key={activeContext.id}
        id={`purpose-context-${activeContext.id}`}
        className="nakfe-purpose-panel border-b border-stone-950/15 py-7"
        aria-live="polite"
      >
        <p className="max-w-xl text-lg font-medium leading-8 text-stone-800 sm:text-xl">
          {activeContext.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3" aria-label="Sentrale områder">
          {activeContext.highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-stone-700">
              <span className="h-2 w-2 shrink-0 bg-red-700" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
