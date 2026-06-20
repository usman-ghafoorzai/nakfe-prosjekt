import EditorialMedia from "@/components/EditorialMedia";
import type { WorkProjectContent } from "@/types/content";

type WorkProjectMediaProps = {
  label: string;
  project: WorkProjectContent;
};

export default function WorkProjectMedia({
  label,
  project,
}: WorkProjectMediaProps) {
  return (
    <EditorialMedia
      image={project.coverImage}
      label={label}
      preload
      video={project.video}
    />
  );
}
