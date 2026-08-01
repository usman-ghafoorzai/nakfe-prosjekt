import type { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import PageHero from "@/components/PageHero";
import { faqContentByLocale } from "@/content/faq";
import { getLocale } from "@/lib/locale";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return createPageMetadata(faqContentByLocale[locale].seo, {
    path: "/faq",
  });
}

export default async function FaqPage() {
  const locale = await getLocale();
  const faqContent = faqContentByLocale[locale];

  return (
    <>
      <PageHero content={faqContent.hero} />
      <FaqSection content={faqContent.faq} locale={locale} />
    </>
  );
}
