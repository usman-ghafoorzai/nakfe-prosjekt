import PurposeSection from "@/components/PurposeSection";
import ValueShowcaseSection from "@/components/ValueShowcaseSection";
import { aboutContent } from "@/content/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(aboutContent.seo);

export default function AboutPage() {
  return (
    <>
      <PurposeSection content={aboutContent.purpose} />
      <ValueShowcaseSection content={aboutContent.values} />
    </>
  );
}
