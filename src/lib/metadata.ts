import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import type { ContentImage, SeoContent } from "@/types/common";

export const metadataBase = new URL(siteConfig.url);
export const siteTitle = `${siteConfig.name} - ${siteConfig.titleSuffix}`;

type PageMetadataOptions = {
  path?: string;
  type?: "article" | "website";
};

function normalizeCanonicalPath(path = "/") {
  const pathWithLeadingSlash = path.startsWith("/") ? path : `/${path}`;

  return pathWithLeadingSlash === "/"
    ? "/"
    : pathWithLeadingSlash.replace(/\/+$/, "");
}

function getCanonicalUrl(path?: string) {
  return new URL(normalizeCanonicalPath(path), metadataBase);
}

function getOpenGraphImage(image: ContentImage | undefined) {
  if (!image) {
    return undefined;
  }

  return [
    {
      url: new URL(image.src, metadataBase).toString(),
      alt: image.isDecorative ? "" : image.alt,
    },
  ];
}

export function createPageMetadata(
  seo: SeoContent,
  options: PageMetadataOptions = {},
): Metadata {
  const title = `${seo.title} - ${siteConfig.titleSuffix}`;
  const canonicalUrl = getCanonicalUrl(options.path);
  const images = getOpenGraphImage(seo.image);

  return {
    metadataBase,
    title,
    description: seo.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: seo.description,
      url: canonicalUrl,
      type: options.type ?? "website",
      ...(images ? { images } : {}),
    },
  };
}
