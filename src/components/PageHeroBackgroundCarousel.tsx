"use client";

import Image from "next/image";
import { useEffect } from "react";
import { usePageHeroCarousel } from "@/components/PageHeroCarouselProvider";
import type { ContentImage } from "@/types/common";

type PageHeroBackgroundCarouselProps = {
  images?: ContentImage[];
};

export default function PageHeroBackgroundCarousel({
  images = [],
}: PageHeroBackgroundCarouselProps) {
  const { activeIndex } = usePageHeroCarousel();
  const safeActiveIndex = images.length > 0 ? activeIndex % images.length : 0;
  const imageSourcesKey = images.map((image) => image.src).join("|");

  useEffect(() => {
    const imageSources = imageSourcesKey ? imageSourcesKey.split("|") : [];

    if (imageSources.length <= 1) {
      return;
    }

    const nextImage = new window.Image();
    nextImage.decoding = "async";
    nextImage.src = imageSources[(safeActiveIndex + 1) % imageSources.length];
  }, [imageSourcesKey, safeActiveIndex]);

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
            preload={index === safeActiveIndex}
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
