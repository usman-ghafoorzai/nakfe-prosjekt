import PageHero from "@/components/PageHero";
import { aboutContent } from "@/content/about";

export default function AboutPage() {
  return <PageHero content={aboutContent.hero} />;
}
