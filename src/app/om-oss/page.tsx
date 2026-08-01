import PageHero from "@/components/PageHero";
import PurposeSection from "@/components/PurposeSection";
import ValueShowcaseSection from "@/components/ValueShowcaseSection";
import { aboutContent } from "@/content/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(aboutContent.seo, {
  path: "/om-oss",
});

export default function AboutPage() {
  return (
    <>
      <PageHero content={aboutContent.hero} />
      <PurposeSection content={aboutContent.purpose} />
      <ValueShowcaseSection content={aboutContent.values} />
    </>
  );
}
