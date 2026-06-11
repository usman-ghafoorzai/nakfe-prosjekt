import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { contactContent } from "@/content/contact";

export default function ContactPage() {
  return (
      <>
        <PageHero content={contactContent.hero} />
        <ContactSection content={contactContent.contact} />
      </>
  );
}