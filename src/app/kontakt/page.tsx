import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { contactContentByLocale } from "@/content/contact";
import { getLocale } from "@/lib/locale";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return createPageMetadata(contactContentByLocale[locale].seo, {
    path: "/kontakt",
  });
}

export default async function ContactPage() {
  const locale = await getLocale();
  const contactContent = contactContentByLocale[locale];

  return (
    <>
      <PageHero content={contactContent.hero} />
      <ContactSection content={contactContent.contact} />
    </>
  );
}
