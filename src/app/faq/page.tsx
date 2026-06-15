import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import { faqContent } from "@/content/faq";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(faqContent.seo);

export default function FaqPage() {
  return (
    <>
      <FaqSection categories={faqContent.categories} />
      {faqContent.contactCta ? (
        <CtaSection content={faqContent.contactCta} />
      ) : null}
    </>
  );
}
