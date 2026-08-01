"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ContentImage } from "@/types/common";

type PageHeroBackgroundCarouselProps = {
  images?: ContentImage[];
  intervalMs?: number;
};

export default function PageHeroBackgroundCarousel({
                                                     images = [],
                                                     intervalMs = 5500,
                                                   }: PageHeroBackgroundCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeActiveIndex = images.length > 0 ? activeIndex % images.length : 0;

  useEffect(() => {
    if (images.length <= 1) return;

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [images.length, intervalMs]);

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
                  "absolute inset-0 transition-opacity duration-[1100ms] ease-out motion-reduce:transition-none",
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
