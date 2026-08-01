import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkProjectDetail from "@/components/WorkProjectDetail";
import { workContent } from "@/content/work";
import { createPageMetadata } from "@/lib/metadata";
import {
  getWorkCountryHref,
  getWorkCountryLabel,
  getWorkProjectBySlug,
} from "@/lib/work-projects";
import type { WorkProjectContent } from "@/types/work";

type WorkProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProjectOrNotFound(slug: string): WorkProjectContent {
  const project = getWorkProjectBySlug(workContent.overview.items, slug);

  if (!project) {
    notFound();
  }

  return project;
}

export function generateStaticParams() {
  return workContent.overview.items.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectOrNotFound(slug);

  return createPageMetadata(
    {
      title: project.title,
      description: project.summary,
      image: project.coverImage,
    },
    {
      path: `/vart-arbeid/${project.slug}`,
      type: "article",
    },
  );
}

export default async function WorkProjectPage({
  params,
}: WorkProjectPageProps) {
  const { slug } = await params;
  const project = getProjectOrNotFound(slug);
  const countryLabel = getWorkCountryLabel(
    workContent.overview,
    project.country,
  );

  if (!countryLabel) {
    notFound();
  }

  return (
    <WorkProjectDetail
      backHref={getWorkCountryHref(
        project.country,
        workContent.overview.defaultCountry,
      )}
      content={workContent.detail}
      countryLabel={countryLabel}
      project={project}
    />
  );
}
