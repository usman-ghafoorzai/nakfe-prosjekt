import CardGridSection from "@/components/CardGridSection";
import PageHero from "@/components/PageHero";
import { projectsContent } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <>
      <PageHero content={projectsContent.hero} />
      <CardGridSection content={projectsContent.projects} />
    </>
  );
}
