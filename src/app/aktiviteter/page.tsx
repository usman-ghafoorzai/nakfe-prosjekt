import ActivityIndexSection from "@/components/ActivityIndexSection";
import PageHero from "@/components/PageHero";
import { activitiesContent } from "@/content/activities";
import { getPublicActivities } from "@/lib/activities";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(activitiesContent.seo, {
  path: "/aktiviteter",
});
export const revalidate = 3600;

export default function ActivitiesPage() {
  const publicActivities = getPublicActivities(activitiesContent.items);
  const [featuredActivity, ...remainingActivities] = publicActivities;

  return (
    <>
      <PageHero content={activitiesContent.hero} />
      <ActivityIndexSection
        content={activitiesContent.overview}
        featuredActivity={featuredActivity}
        remainingActivities={remainingActivities}
      />
    </>
  );
}
