import FaqSection from "@/components/FaqSection";
import { faqContent } from "@/content/faq";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(faqContent.seo);

export default function FaqPage() {
  return <FaqSection content={faqContent.faq} />;
}
