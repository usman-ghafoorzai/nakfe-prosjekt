import CardGridSection from "@/components/CardGridSection";
import PageHero from "@/components/PageHero";
import { projectsContent } from "@/content/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(projectsContent.seo);

export default function ProjectsPage() {
  return (
    <>
      <PageHero content={projectsContent.hero} />
      <CardGridSection content={projectsContent.projects} />
    </>
  );
}
