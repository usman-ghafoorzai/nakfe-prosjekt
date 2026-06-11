import Hero from "@/components/Hero";
import { homeContent } from "@/content/home";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(homeContent.seo);

export default function HomePage() {
  return <Hero content={homeContent.hero} />;
}
