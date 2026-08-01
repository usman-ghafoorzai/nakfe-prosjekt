import type { Metadata } from "next";
import CardGridSection from "@/components/CardGridSection";
import CtaSection from "@/components/CtaSection";
import Hero from "@/components/Hero";
import ImpactBriefSection from "@/components/ImpactBriefSection";
import TextSection from "@/components/TextSection";
import { homeContentByLocale } from "@/content/home";
import { getLocale } from "@/lib/locale";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return createPageMetadata(homeContentByLocale[locale].seo, {
    path: "/",
  });
}

export default async function HomePage() {
    const locale = await getLocale();
    const homeContent = homeContentByLocale[locale];

    return (
        <>
            <Hero content={homeContent.hero} />
            <ImpactBriefSection content={homeContent.impactBrief} />
            <TextSection content={homeContent.intro} />
            <CardGridSection content={homeContent.featuredAreas} />
            <CtaSection content={homeContent.finalCta} />
        </>
    );
}
