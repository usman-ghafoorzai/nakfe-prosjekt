import type { Metadata } from "next";
import ActivityIndexSection from "@/components/ActivityIndexSection";
import PageHero from "@/components/PageHero";
import { activitiesContentByLocale } from "@/content/activities";
import { getPublicActivities } from "@/lib/activities";
import { getLocale } from "@/lib/locale";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return createPageMetadata(activitiesContentByLocale[locale].seo, {
    path: "/aktiviteter",
  });
}

export const revalidate = 3600;

export default async function ActivitiesPage() {
  const locale = await getLocale();
  const activitiesContent = activitiesContentByLocale[locale];
  const publicActivities = getPublicActivities(activitiesContent.items);
  const [featuredActivity, ...remainingActivities] = publicActivities;

  return (
    <>
      <PageHero content={activitiesContent.hero} />
      <ActivityIndexSection
        content={activitiesContent.overview}
        featuredActivity={featuredActivity}
        locale={locale}
        remainingActivities={remainingActivities}
      />
    </>
  );
}
