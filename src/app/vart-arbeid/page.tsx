import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WorkProjectIndexSection from "@/components/WorkProjectIndexSection";
import { workContentByLocale } from "@/content/work";
import { getLocale } from "@/lib/locale";
import { createPageMetadata } from "@/lib/metadata";
import {
  getSelectedWorkCountry,
  type WorkSearchParams,
} from "@/lib/work-projects";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return createPageMetadata(workContentByLocale[locale].seo, {
    path: "/vart-arbeid",
  });
}

type WorkPageProps = {
  searchParams: Promise<WorkSearchParams>;
};

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const locale = await getLocale();
  const workContent = workContentByLocale[locale];
  const selectedCountry = getSelectedWorkCountry(
    await searchParams,
    workContent.overview.defaultCountry,
  );

  return (
    <>
      <PageHero content={workContent.hero} />
      <WorkProjectIndexSection
        activeCountry={selectedCountry}
        content={workContent.overview}
      />
    </>
  );
}
