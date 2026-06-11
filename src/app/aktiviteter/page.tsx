import ActivityCardSection from "@/components/ActivityCardSection";
import PageHero from "@/components/PageHero";
import { activitiesContent } from "@/content/activities";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(activitiesContent.seo);

export default function ActivitiesPage() {
  return (
    <>
      <PageHero content={activitiesContent.hero} />
      <ActivityCardSection content={activitiesContent.activities} />
    </>
  );
}
