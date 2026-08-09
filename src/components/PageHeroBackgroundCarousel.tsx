"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ContentImage } from "@/types/common";

type PageHeroBackgroundCarouselProps = {
  images?: ContentImage[];
  intervalMs?: number;
};

export default function PageHeroBackgroundCarousel({
  images = [],
  intervalMs = 4500,
}: PageHeroBackgroundCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const safeActiveIndex = images.length > 0 ? activeIndex % images.length : 0;
  const imageSourcesKey = images.map((image) => image.src).join("|");

  useEffect(() => {
    const imageSources = imageSourcesKey ? imageSourcesKey.split("|") : [];

    activeIndexRef.current = imageSources.length > 0
      ? activeIndexRef.current % imageSources.length
      : 0;

    if (imageSources.length <= 1) {
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let timeoutId: number | undefined;
    let isCancelled = false;

    function preloadImage(index: number) {
      const image = new window.Image();
      image.decoding = "async";
      image.src = imageSources[index];
    }

    function scheduleNextImage() {
      if (isCancelled || reducedMotionQuery.matches) {
        return;
      }

      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }

      timeoutId = window.setTimeout(() => {
        timeoutId = undefined;
        const nextIndex = (activeIndexRef.current + 1) % imageSources.length;
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
        preloadImage((nextIndex + 1) % imageSources.length);
        scheduleNextImage();
      }, intervalMs);
    }

    function handleReducedMotionChange() {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
        timeoutId = undefined;
      }

      scheduleNextImage();
    }

    preloadImage(1);
    scheduleNextImage();
    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

    return () => {
      isCancelled = true;
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
      reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
    };
  }, [imageSourcesKey, intervalMs]);

  if (images.length === 0) {
    return (
        <div
            className="absolute inset-0 bg-[linear-gradient(135deg,#030712,#111827_48%,#030712)]"
            aria-hidden="true"
        />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-gray-950" aria-hidden="true">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={[
            "absolute inset-0 transition-opacity duration-[900ms] ease-out motion-reduce:transition-none",
            index === safeActiveIndex ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          <Image
            src={image.src}
            alt=""
            fill
            preload={index === 0}
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: image.position ?? "center",
            }}
          />
        </div>
      ))}
    </div>
  );
}
