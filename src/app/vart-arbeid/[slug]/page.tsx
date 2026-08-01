import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkProjectDetail from "@/components/WorkProjectDetail";
import { workContentByLocale } from "@/content/work";
import { getLocale } from "@/lib/locale";
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

function getProjectOrNotFound(
  projects: readonly WorkProjectContent[],
  slug: string,
): WorkProjectContent {
  const project = getWorkProjectBySlug(projects, slug);

  if (!project) {
    notFound();
  }

  return project;
}

export function generateStaticParams() {
  return workContentByLocale.no.overview.items.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkProjectPageProps): Promise<Metadata> {
  const locale = await getLocale();
  const workContent = workContentByLocale[locale];
  const { slug } = await params;
  const project = getProjectOrNotFound(workContent.overview.items, slug);

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
  const locale = await getLocale();
  const workContent = workContentByLocale[locale];
  const { slug } = await params;
  const project = getProjectOrNotFound(workContent.overview.items, slug);
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
