import CardGridSection from "@/components/CardGridSection";
import { projectsContent } from "@/content/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(projectsContent.seo);

export default function ProjectsPage() {
  return (
    <>
      <CardGridSection content={projectsContent.projects} />
    </>
  );
}
