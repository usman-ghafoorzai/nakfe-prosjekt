import Image from "next/image";
import EditorialVideoPlayer from "@/components/EditorialVideoPlayer";
import type { ContentImage, ContentVideo } from "@/types/common";

type EditorialMediaProps = {
  image: ContentImage;
  label: string;
  preload?: boolean;
  video?: ContentVideo;
};

export default function EditorialMedia({
  image,
  label,
  preload = false,
  video,
}: EditorialMediaProps) {
  if (video) {
    return (
      <EditorialVideoPlayer
        fallbackImage={video.poster}
        label={label}
        video={video}
      />
    );
  }

  return (
    <Image
      alt={image.alt}
      className="object-cover"
      fill
      preload={preload}
      sizes="(min-width: 1280px) 80rem, (min-width: 640px) 92vw, 100vw"
      src={image.src}
      style={{ objectPosition: image.position ?? "center" }}
    />
  );
}
