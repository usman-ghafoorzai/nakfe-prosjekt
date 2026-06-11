import type { Metadata } from "next";
import type { SeoContent } from "@/types/content";

export function createPageMetadata(seo: SeoContent): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
    },
  };
}
