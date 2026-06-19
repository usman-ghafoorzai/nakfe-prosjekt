"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type {
  ValueMedia,
  ValueShowcaseItemContent,
} from "@/types/content";

type ValueCarouselProps = {
  items: ValueShowcaseItemContent[];
};

type ValueSlideMediaProps = {
  media: ValueMedia;
  isActive: boolean;
  shouldAutoplayVideo: boolean;
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

function ValueSlideMedia({
  media,
  isActive,
  shouldAutoplayVideo,
}: ValueSlideMediaProps) {
  const objectPosition = media.position ?? "center";
  const shouldPlayVideo =
    media.type === "video" && isActive && shouldAutoplayVideo;

  if (shouldPlayVideo && media.type === "video") {
    return (
      <video
        aria-hidden="true"
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        poster={media.poster}
        preload="metadata"
        style={{ objectPosition }}
      >
        <source src={media.src} type="video/mp4" />
      </video>
    );
  }

  const imageSource = media.type === "video" ? media.poster : media.src;

  return (
    <Image
      alt=""
      className="object-cover"
      fill
      loading={isActive ? "eager" : "lazy"}
      sizes="(min-width: 1024px) 38rem, (min-width: 640px) 72vw, 78vw"
      src={imageSource}
      style={{ objectPosition }}
    />
  );
}

export default function ValueCarousel({ items }: ValueCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldAutoplayVideo, setShouldAutoplayVideo] = useState(false);
  const pointerStartX = useRef<number | null>(null);

  const activeItem = items[activeIndex];

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setShouldAutoplayVideo(!motionQuery.matches);
    };

    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    return () => {
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

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
        onPointerCancel={() => {
          pointerStartX.current = null;
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
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
          const mediaAlt = item.media?.alt ?? item.title;

          return (
            <button
              aria-current={isActive ? "true" : undefined}
              aria-label={
                isActive
                  ? `${item.title}. ${mediaAlt}`
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
              {item.media ? (
                <ValueSlideMedia
                  isActive={isActive}
                  media={item.media}
                  shouldAutoplayVideo={shouldAutoplayVideo}
                />
              ) : null}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-stone-950/92 via-stone-950/20 to-stone-950/8"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-4xl font-black leading-none tracking-[-0.06em] text-white sm:text-5xl">
                  {item.title}
                </p>
              </div>
            </button>
          );
        })}

        <div className="absolute inset-x-4 bottom-4 z-30 hidden items-center justify-between sm:inset-x-6 sm:bottom-6 sm:flex">
          <button
            aria-label={`Vis forrige verdi, ${items[(activeIndex - 1 + items.length) % items.length].title}`}
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/36 bg-stone-950/92 text-white transition duration-200 ease-out hover:border-white hover:bg-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0"
            onClick={selectPrevious}
            type="button"
          >
            <ChevronLeft aria-hidden="true" size={20} strokeWidth={2.25} />
          </button>

          <button
            aria-label={`Vis neste verdi, ${items[(activeIndex + 1) % items.length].title}`}
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/36 bg-stone-950/92 text-white transition duration-200 ease-out hover:border-white hover:bg-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0"
            onClick={selectNext}
            type="button"
          >
            <ChevronRight aria-hidden="true" size={20} strokeWidth={2.25} />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between sm:hidden">
        <button
          aria-label={`Vis forrige verdi, ${items[(activeIndex - 1 + items.length) % items.length].title}`}
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/36 bg-stone-950/92 text-white transition duration-200 ease-out hover:border-white hover:bg-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0"
          onClick={selectPrevious}
          type="button"
        >
          <ChevronLeft aria-hidden="true" size={20} strokeWidth={2.25} />
        </button>

        <button
          aria-label={`Vis neste verdi, ${items[(activeIndex + 1) % items.length].title}`}
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/36 bg-stone-950/92 text-white transition duration-200 ease-out hover:border-white hover:bg-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0"
          onClick={selectNext}
          type="button"
        >
          <ChevronRight aria-hidden="true" size={20} strokeWidth={2.25} />
        </button>
      </div>

      <div className="mt-6 border-t border-white/16 pt-8 sm:mt-10 sm:pt-10 lg:pt-12">
        <div aria-live="polite" className="max-w-4xl">
          <div aria-hidden="true" className="mb-6 h-1 w-12 bg-red-700" />

          <p className="text-2xl font-semibold leading-[1.35] tracking-[-0.035em] text-white sm:text-3xl lg:text-[2.35rem]">
            {activeItem.description}
          </p>
        </div>
      </div>
    </div>
  );
}
