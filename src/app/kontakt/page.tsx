import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { contactContent } from "@/content/contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(contactContent.seo, {
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <PageHero content={contactContent.hero} />
      <ContactSection content={contactContent.contact} />
    </>
  );
}
