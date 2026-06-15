import TextSection from "@/components/TextSection";
import ValueShowcaseSection from "@/components/ValueShowcaseSection";
import { aboutContent } from "@/content/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(aboutContent.seo);

export default function AboutPage() {
  return (
    <>
      <TextSection content={aboutContent.intro} />
      <ValueShowcaseSection content={aboutContent.values} />
    </>
  );
}
