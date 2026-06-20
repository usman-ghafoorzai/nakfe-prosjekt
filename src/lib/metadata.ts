import type { Metadata } from "next";
import type { SeoContent } from "@/types/content";

const siteTitleSuffix = "Kvinner for Endring";

export function createPageMetadata(seo: SeoContent): Metadata {
  const title = `${seo.title} - ${siteTitleSuffix}`;

  return {
    title,
    description: seo.description,
    openGraph: {
      title,
      description: seo.description,
      type: "website",
    },
  };
}
