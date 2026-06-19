"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import type { ValueShowcaseItemContent } from "@/types/content";

type ValueCarouselProps = {
  items: ValueShowcaseItemContent[];
};

const SWIPE_THRESHOLD_PX = 48;

function getRelativePosition(index: number, activeIndex: number, total: number) {
  let position = index - activeIndex;

  if (position > total / 2) {
    position -= total;
  }

  if (position < -total / 2) {
    position += total;
  }

  return position;
}

function getSlideTransform(position: number) {
  if (position === 0) {
    return "translate3d(-50%, 0, 0) rotateY(0deg) scale(1)";
  }

  if (position === -1) {
    return "translate3d(calc(-50% - 62%), 6%, -170px) rotateY(32deg) scale(0.78)";
  }

  if (position === 1) {
    return "translate3d(calc(-50% + 62%), 6%, -170px) rotateY(-32deg) scale(0.78)";
  }

  return "translate3d(-50%, 9%, -260px) rotateY(0deg) scale(0.68)";
}

export default function ValueCarousel({ items }: ValueCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);

  const activeItem = items[activeIndex];

  const selectItem = (nextIndex: number) => {
    const normalizedIndex = (nextIndex + items.length) % items.length;
    setActiveIndex(normalizedIndex);
  };

  const selectPrevious = () => {
    selectItem(activeIndex - 1);
  };

  const selectNext = () => {
    selectItem(activeIndex + 1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectNext();
    }
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const startX = pointerStartX.current;
    pointerStartX.current = null;

    if (startX === null) {
      return;
    }

    const distance = event.clientX - startX;

    if (Math.abs(distance) < SWIPE_THRESHOLD_PX) {
      return;
    }

    if (distance < 0) {
      selectNext();
      return;
    }

    selectPrevious();
  };

  return (
    <div className="mt-12">
      <div
        aria-label="NAKFEs verdier"
        aria-roledescription="karusell"
        className="relative mx-auto h-[21rem] max-w-6xl touch-pan-y overflow-hidden outline-none sm:h-[28rem] lg:h-[34rem] [perspective:1450px] focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-950"
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          pointerStartX.current = null;
        }}
        tabIndex={0}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 h-px bg-white/16"
        />

        {items.map((item, index) => {
          const position = getRelativePosition(index, activeIndex, items.length);
          const isActive = position === 0;
          const isNeighbor = Math.abs(position) === 1;
          const isVisible = isActive || isNeighbor;

          return (
            <button
              aria-current={isActive ? "true" : undefined}
              aria-hidden={!isVisible}
              aria-label={
                isActive
                  ? `${item.title}. ${item.image.alt}`
                  : `Vis ${item.title}`
              }
              className={[
                "absolute left-1/2 top-0 h-[19rem] w-[min(78vw,38rem)] origin-center overflow-hidden text-left outline-none transition-[transform,opacity,filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-950 motion-reduce:transition-none sm:h-[25rem] lg:h-[30rem]",
                isActive ? "block" : isNeighbor ? "hidden sm:block" : "hidden",
                isActive ? "cursor-default" : "cursor-pointer",
              ].join(" ")}
              key={item.title}
              onClick={() => {
                if (!isActive) {
                  selectItem(index);
                }
              }}
              style={{
                filter: isActive ? "none" : "saturate(0.7) brightness(0.72)",
                opacity: isActive ? 1 : 0.64,
                pointerEvents: isVisible ? "auto" : "none",
                transform: getSlideTransform(position),
                zIndex: isActive ? 20 : 10,
              }}
              tabIndex={isVisible ? 0 : -1}
              type="button"
            >
              <Image
                alt=""
                className="object-cover"
                fill
                loading={isActive ? "eager" : "lazy"}
                sizes="(min-width: 1024px) 38rem, (min-width: 640px) 72vw, 78vw"
                src={item.image.src}
                style={{ objectPosition: item.image.position ?? "center" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-stone-950/92 via-stone-950/20 to-stone-950/8"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/68">
                  NAKFE-verdi
                </p>
                <p className="mt-2 text-4xl font-black leading-none tracking-[-0.06em] text-white sm:text-5xl">
                  {item.title}
                </p>
              </div>
            </button>
          );
        })}

        <div className="absolute inset-x-4 bottom-4 z-30 flex items-center justify-between sm:inset-x-6 sm:bottom-6">
          <button
            aria-label={`Vis forrige verdi, ${items[(activeIndex - 1 + items.length) % items.length].title}`}
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/36 bg-stone-950/78 text-white backdrop-blur-sm transition duration-200 ease-out hover:border-white hover:bg-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0"
            onClick={selectPrevious}
            type="button"
          >
            <ChevronLeft aria-hidden="true" size={20} strokeWidth={2.25} />
          </button>

          <button
            aria-label={`Vis neste verdi, ${items[(activeIndex + 1) % items.length].title}`}
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/36 bg-stone-950/78 text-white backdrop-blur-sm transition duration-200 ease-out hover:border-white hover:bg-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0"
            onClick={selectNext}
            type="button"
          >
            <ChevronRight aria-hidden="true" size={20} strokeWidth={2.25} />
          </button>
        </div>
      </div>

      <div className="mt-7 grid gap-8 border-t border-white/18 pt-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
        <nav aria-label="Velg verdi" className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-7">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                aria-pressed={isActive}
                className={[
                  "relative min-h-11 py-2 text-sm font-black uppercase tracking-[0.13em] outline-none transition duration-200 ease-out focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-950 motion-reduce:transition-none",
                  isActive
                    ? "text-white"
                    : "text-white/56 hover:text-white/88",
                ].join(" ")}
                key={item.title}
                onClick={() => {
                  selectItem(index);
                }}
                type="button"
              >
                {item.title}
                <span
                  aria-hidden="true"
                  className={[
                    "absolute bottom-0 left-0 h-0.5 bg-red-600 transition-[width] duration-200 ease-out motion-reduce:transition-none",
                    isActive ? "w-full" : "w-0",
                  ].join(" ")}
                />
              </button>
            );
          })}
        </nav>

        <div aria-live="polite" className="border-l-[6px] border-red-700 pl-5 sm:pl-6">
          <p className="text-2xl font-black leading-none tracking-[-0.045em] text-white sm:text-3xl">
            {activeItem.title}
          </p>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-white/76 sm:text-lg sm:leading-8">
            {activeItem.description}
          </p>
        </div>
      </div>
    </div>
  );
}
