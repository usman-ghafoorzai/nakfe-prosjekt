"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { WorkProjectContent } from "@/types/content";

type WorkProjectMediaProps = {
  project: WorkProjectContent;
};

export default function WorkProjectMedia({ project }: WorkProjectMediaProps) {
  const [shouldAutoplayVideo, setShouldAutoplayVideo] = useState(false);
  const hasVideo = Boolean(project.video?.src);

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

  const imageSource = project.video?.poster ?? project.coverImage;

  if (hasVideo && shouldAutoplayVideo) {
    return (
      <video
        aria-label={`Video fra ${project.title}`}
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        poster={imageSource.src}
        preload="metadata"
        style={{ objectPosition: imageSource.position ?? "center" }}
      >
        <source src={project.video!.src} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      alt={imageSource.alt}
      className="object-cover"
      fill
      priority
      sizes="(min-width: 1280px) 80rem, 100vw"
      src={imageSource.src}
      style={{ objectPosition: imageSource.position ?? "center" }}
    />
  );
}
