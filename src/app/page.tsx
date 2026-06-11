import Hero from "@/components/Hero";
import { homeContent } from "@/content/home";

export default function HomePage() {
  return <Hero content={homeContent.hero} />;
}
