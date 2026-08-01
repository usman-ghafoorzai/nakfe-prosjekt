import EditorialMedia from "@/components/EditorialMedia";
import type { WorkProjectContent } from "@/types/work";

type WorkProjectMediaProps = {
  fallbackText: string;
  label: string;
  project: WorkProjectContent;
};

export default function WorkProjectMedia({
  fallbackText,
  label,
  project,
}: WorkProjectMediaProps) {
  return (
    <EditorialMedia
      fallbackText={fallbackText}
      image={project.coverImage}
      label={label}
      preload
      video={project.video}
    />
  );
}
