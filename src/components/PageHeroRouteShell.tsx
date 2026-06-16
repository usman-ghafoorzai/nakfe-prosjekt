"use client";

import { usePathname } from "next/navigation";
import PageHero from "@/components/PageHero";
import { pageHeroRegistry } from "@/content/pageHeroRegistry";

function normalizePathname(pathname: string) {
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export default function PageHeroRouteShell() {
  const pathname = usePathname();
  const content = pageHeroRegistry[normalizePathname(pathname)];

  if (!content) {
    return null;
  }

  return <PageHero content={content} />;
}

