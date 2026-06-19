import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkProjectDetail from "@/components/WorkProjectDetail";
import { workContent } from "@/content/work";
import type { WorkProjectContent } from "@/types/content";

const countryLabels = {
  afghanistan: "Afghanistan",
  norway: "Norge",
} as const;

type WorkProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProject(slug: string) {
  return workContent.overview.items.find((project) => project.slug === slug);
}

function getProjectOrNotFound(slug: string): WorkProjectContent {
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return project;
}

export function generateStaticParams() {
  return workContent.overview.items.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | NAKFE`,
    description: project.summary,
  };
}

export default async function WorkProjectPage({
  params,
}: WorkProjectPageProps) {
  const { slug } = await params;
  const project = getProjectOrNotFound(slug);

  return (
    <WorkProjectDetail
      countryLabel={countryLabels[project.country]}
      project={project}
    />
  );
}
