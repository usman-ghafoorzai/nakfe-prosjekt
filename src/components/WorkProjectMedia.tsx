"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { WorkProjectContent } from "@/types/content";

type WorkProjectMediaProps = {
  project: WorkProjectContent;
};

export default function WorkProjectMedia({ project }: WorkProjectMediaProps) {
  const [canAutoplayVideo, setCanAutoplayVideo] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const video = project.video;
  const fallbackImage = video?.poster ?? project.coverImage;
  const shouldRenderVideo = Boolean(video) && canAutoplayVideo && !videoFailed;

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

  if (shouldRenderVideo && video) {
    return (
      <video
        aria-label={`Video fra ${project.title}`}
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        controls
        muted
        onError={() => setVideoFailed(true)}
        playsInline
        poster={fallbackImage.src}
        preload="metadata"
        style={{ objectPosition: fallbackImage.position ?? "center" }}
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
        Nettleseren din støtter ikke videoavspilling.
      </video>
    );
  }

  return (
    <Image
      alt={fallbackImage.alt}
      className="object-cover"
      fill
      preload
      sizes="(min-width: 1280px) 80rem, (min-width: 640px) 92vw, 100vw"
      src={fallbackImage.src}
      style={{ objectPosition: fallbackImage.position ?? "center" }}
    />
  );
}
