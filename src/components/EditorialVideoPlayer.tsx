"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ContentImage, ContentVideo } from "@/types/common";

type EditorialVideoPlayerProps = {
  fallbackText: string;
  fallbackImage: ContentImage;
  label: string;
  video: ContentVideo;
};

export default function EditorialVideoPlayer({
  fallbackText,
  fallbackImage,
  label,
  video,
}: EditorialVideoPlayerProps) {
  const [canAutoplayVideo, setCanAutoplayVideo] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateVideoPreference = () => {
      setCanAutoplayVideo(!motionQuery.matches);
    };

    updateVideoPreference();
    motionQuery.addEventListener("change", updateVideoPreference);

    return () => {
      motionQuery.removeEventListener("change", updateVideoPreference);
    };
  }, []);

  if (canAutoplayVideo && !videoFailed) {
    return (
      <video
        aria-label={label}
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        controls
        muted
        onError={() => setVideoFailed(true)}
        playsInline
        poster={video.poster.src}
        preload="metadata"
        style={{ objectPosition: video.poster.position ?? "center" }}
      >
        <source src={video.src} type="video/mp4" />
        {video.captionsSrc ? (
          <track
            default={video.captionsDefault}
            kind="captions"
            label={video.captionsLabel}
            src={video.captionsSrc}
            srcLang={video.captionsLanguage ?? "no"}
          />
        ) : null}
        {fallbackText}
      </video>
    );
  }

  return (
    <Image
      alt={fallbackImage.alt}
      className="object-cover"
      fill
      sizes="(min-width: 1280px) 80rem, (min-width: 640px) 92vw, 100vw"
      src={fallbackImage.src}
      style={{ objectPosition: fallbackImage.position ?? "center" }}
    />
  );
}
