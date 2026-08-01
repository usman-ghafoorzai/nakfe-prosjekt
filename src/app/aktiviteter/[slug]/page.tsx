import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ActivityDetail from "@/components/ActivityDetail";
import { activitiesContentByLocale } from "@/content/activities";
import { workContentByLocale } from "@/content/work";
import {
  getActivityBySlug,
  getActivityEventJsonLd,
  serializeJsonLd,
} from "@/lib/activities";
import { getLocale } from "@/lib/locale";
import { createPageMetadata } from "@/lib/metadata";
import { getWorkProjectBySlug } from "@/lib/work-projects";
import type { ActivityContent } from "@/types/activities";

export const revalidate = 3600;
export const dynamicParams = false;

type ActivityPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getActivityOrNotFound(
  activities: readonly ActivityContent[],
  slug: string,
): ActivityContent {
  const activity = getActivityBySlug(activities, slug);

  if (!activity) {
    notFound();
  }

  return activity;
}

export function generateStaticParams() {
  return activitiesContentByLocale.no.items.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ActivityPageProps): Promise<Metadata> {
  const locale = await getLocale();
  const activitiesContent = activitiesContentByLocale[locale];
  const { slug } = await params;
  const activity = getActivityOrNotFound(activitiesContent.items, slug);

  return createPageMetadata(
    {
      title: activity.title,
      description: activity.summary,
      image: activity.coverImage,
    },
    {
      path: `/aktiviteter/${activity.slug}`,
      type: "article",
    },
  );
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const locale = await getLocale();
  const activitiesContent = activitiesContentByLocale[locale];
  const workContent = workContentByLocale[locale];
  const { slug } = await params;
  const activity = getActivityOrNotFound(activitiesContent.items, slug);
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
          __html: serializeJsonLd(getActivityEventJsonLd(activity, locale)),
        }}
        type="application/ld+json"
      />
      <ActivityDetail
        activity={activity}
        content={activitiesContent.detail}
        locale={locale}
        relatedWorkAction={relatedWorkAction}
      />
    </>
  );
}
