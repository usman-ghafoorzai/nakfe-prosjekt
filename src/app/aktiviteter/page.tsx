import ActivityCardSection from "@/components/ActivityCardSection";
import PageHero from "@/components/PageHero";
import { activitiesContent } from "@/content/activities";

export default function ActivitiesPage() {
  return (
      <>
        <PageHero content={activitiesContent.hero} />
        <ActivityCardSection content={activitiesContent.activities} />
      </>
  );
}