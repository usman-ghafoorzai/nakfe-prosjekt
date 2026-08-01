import FaqSection from "@/components/FaqSection";
import PageHero from "@/components/PageHero";
import { faqContent } from "@/content/faq";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(faqContent.seo, {
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero content={faqContent.hero} />
      <FaqSection content={faqContent.faq} />
    </>
  );
}
