import CardGridSection from "@/components/CardGridSection";
import CtaSection from "@/components/CtaSection";
import Hero from "@/components/Hero";
import ImpactBriefSection from "@/components/ImpactBriefSection";
import TextSection from "@/components/TextSection";
import { homeContent } from "@/content/home";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(homeContent.seo);

export default function HomePage() {
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