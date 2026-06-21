import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ActivityDetail from "@/components/ActivityDetail";
import { activitiesContent } from "@/content/activities";
import { workContent } from "@/content/work";
import {
  getActivityBySlug,
  getActivityEventJsonLd,
  serializeJsonLd,
} from "@/lib/activities";
import { getWorkProjectBySlug } from "@/lib/work-projects";
import type { ActivityContent } from "@/types/content";

export const revalidate = 3600;

type ActivityPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getActivityOrNotFound(slug: string): ActivityContent {
  const activity = getActivityBySlug(activitiesContent.items, slug);

  if (!activity) {
    notFound();
  }

  return activity;
}

export function generateStaticParams() {
  return activitiesContent.items.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ActivityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityOrNotFound(slug);
  const title = `${activity.title} - Kvinner for Endring`;

  return {
    title,
    description: activity.summary,
    openGraph: {
      title,
      description: activity.summary,
      type: "website",
    },
  };
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const { slug } = await params;
  const activity = getActivityOrNotFound(slug);
  const relatedWorkProject = activity.relatedWorkProjectSlug
    ? getWorkProjectBySlug(
        workContent.overview.items,
        activity.relatedWorkProjectSlug,
      )
    : undefined;
  const relatedWorkAction = relatedWorkProject
    ? {
        label: activitiesContent.detail.relatedWorkLabel,
        href: `/vart-arbeid/${relatedWorkProject.slug}`,
        ariaLabel: `${activitiesContent.detail.relatedWorkAriaLabelPrefix} ${relatedWorkProject.title}`,
      }
    : undefined;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(getActivityEventJsonLd(activity)),
        }}
        type="application/ld+json"
      />
      <ActivityDetail
        activity={activity}
        content={activitiesContent.detail}
        relatedWorkAction={relatedWorkAction}
      />
    </>
  );
}
