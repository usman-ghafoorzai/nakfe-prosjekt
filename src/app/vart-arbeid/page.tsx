import WorkProjectIndexSection from "@/components/WorkProjectIndexSection";
import { workContent } from "@/content/work";
import { createPageMetadata } from "@/lib/metadata";
import {
  getSelectedWorkCountry,
  type WorkSearchParams,
} from "@/lib/work-projects";

export const metadata = createPageMetadata(workContent.seo);

type WorkPageProps = {
  searchParams: Promise<WorkSearchParams>;
};

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const selectedCountry = getSelectedWorkCountry(
    await searchParams,
    workContent.overview.defaultCountry,
  );

  return (
    <WorkProjectIndexSection
      activeCountry={selectedCountry}
      content={workContent.overview}
    />
  );
}
