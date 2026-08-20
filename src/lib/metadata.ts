import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { siteConfig } from "@/lib/site";
import type { ContentImage, SeoContent } from "@/types/common";
import type { Locale } from "@/types/locale";

export const metadataBase = new URL(siteConfig.url);

export function getSiteTitle(locale: Locale) {
  return `${siteConfig.name} - ${siteContent[locale].titleSuffix}`;
}

type PageMetadataOptions = {
  locale: Locale;
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
  options: PageMetadataOptions,
): Metadata {
  const titleSuffix = siteContent[options.locale].titleSuffix;
  const title = `${seo.title} - ${titleSuffix}`;
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
      siteName: titleSuffix,
      url: canonicalUrl,
      type: options.type ?? "website",
      ...(images ? { images } : {}),
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title,
      description: seo.description,
      ...(images ? { images: images.map((image) => image.url) } : {}),
    },
  };
}
