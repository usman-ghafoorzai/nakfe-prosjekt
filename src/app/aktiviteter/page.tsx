import ActivityCardSection from "@/components/ActivityCardSection";
import { activitiesContent } from "@/content/activities";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(activitiesContent.seo);

export default function ActivitiesPage() {
  return (
    <>
      <ActivityCardSection content={activitiesContent.activities} />
    </>
  );
}
