import type { MetadataRoute } from "next";
import { workContent } from "@/content/work";
import { siteConfig } from "@/lib/site";

const staticPaths = [
  "/",
  "/om-oss",
  "/vart-arbeid",
  "/aktiviteter",
  "/faq",
  "/kontakt",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPaths = workContent.overview.items.map(
    (project) => `/vart-arbeid/${project.slug}`,
  );

  return [...staticPaths, ...projectPaths].map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
  }));
}
