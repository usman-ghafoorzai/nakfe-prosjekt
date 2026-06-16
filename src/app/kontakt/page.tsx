import ContactSection from "@/components/ContactSection";
import { contactContent } from "@/content/contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(contactContent.seo);

export default function ContactPage() {
  return (
    <>
      <ContactSection content={contactContent.contact} />
    </>
  );
}
