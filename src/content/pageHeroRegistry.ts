import { aboutContent } from "@/content/about";
import { activitiesContent } from "@/content/activities";
import { contactContent } from "@/content/contact";
import { faqContent } from "@/content/faq";
import { projectsContent } from "@/content/projects";
import type { PageHeroContent } from "@/types/content";

export const pageHeroRegistry: Record<string, PageHeroContent> = {
  "/om-oss": aboutContent.hero,
  "/aktiviteter": activitiesContent.hero,
  "/prosjekter": projectsContent.hero,
  "/faq": faqContent.hero,
  "/kontakt": contactContent.hero,
};
