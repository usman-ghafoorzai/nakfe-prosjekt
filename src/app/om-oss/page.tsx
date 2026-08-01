import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PurposeSection from "@/components/PurposeSection";
import ValueShowcaseSection from "@/components/ValueShowcaseSection";
import { aboutContentByLocale } from "@/content/about";
import { getLocale } from "@/lib/locale";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return createPageMetadata(aboutContentByLocale[locale].seo, {
    path: "/om-oss",
  });
}

export default async function AboutPage() {
  const locale = await getLocale();
  const aboutContent = aboutContentByLocale[locale];

  return (
    <>
      <PageHero content={aboutContent.hero} />
      <PurposeSection content={aboutContent.purpose} />
      <ValueShowcaseSection content={aboutContent.values} />
    </>
  );
}
