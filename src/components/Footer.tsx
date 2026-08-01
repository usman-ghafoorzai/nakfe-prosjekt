"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNavigationPathCurrent } from "@/lib/navigation";
import type { NavItem } from "@/types/common";
import type { FooterContent } from "@/types/footer";

type FooterProps = {
  content: FooterContent;
  navigationItems: NavItem[];
};

function getFooterLinkClasses(isCurrent: boolean) {
  return [
    "group inline-flex min-h-11 items-center gap-3 text-sm font-black uppercase tracking-[0.14em] outline-none transition duration-200 ease-out hover:text-red-700 focus-visible:text-red-700 focus-visible:underline focus-visible:underline-offset-4 motion-reduce:transition-none md:min-h-8",
    isCurrent ? "text-red-700" : "text-stone-700",
  ].join(" ");
}

export default function Footer({ content, navigationItems }: FooterProps) {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const footerNavigationItems = navigationItems
    .filter((item) => item.showInFooter)
    .sort((a, b) => a.order - b.order);

  return (
    <footer className="border-t border-stone-300 bg-[#f7f1e8]">
      <div className="h-5 bg-red-700" aria-hidden="true" />

      <div className="nakfe-container grid gap-12 py-10 md:grid-cols-[1.25fr_0.7fr_0.9fr] md:py-12">
        <section aria-labelledby="footer-about-heading" className="max-w-md">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center gap-3 text-stone-950 outline-none transition duration-200 ease-out hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none"
            aria-label={content.homeAriaLabel}
          >
            <span className="grid h-12 w-12 place-items-center bg-white shadow-sm shadow-stone-950/10">
              <Image
                src={content.organization.logo.src}
                alt={content.organization.logo.alt}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-contain"
              />
            </span>

            <span id="footer-about-heading" className="text-2xl font-black tracking-[-0.055em]">
              {content.organization.name}
            </span>
          </Link>

          <p className="mt-5 text-sm font-semibold leading-6 text-stone-700">
            {content.organization.description}
          </p>
        </section>

        <nav aria-labelledby="footer-navigation-heading">
          <h2 id="footer-navigation-heading" className="text-xs font-black uppercase tracking-[0.18em] text-stone-600">
            {content.navigationTitle}
          </h2>

          <ul className="mt-5 grid gap-2">
            {footerNavigationItems.map((link) => {
              const isCurrent = isNavigationPathCurrent(pathname, link.href);

              return (
                <li key={link.href}>
                  <Link href={link.href} aria-current={isCurrent ? "page" : undefined} className={getFooterLinkClasses(isCurrent)}>
                    <span className="h-2 w-2 bg-current" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <section aria-labelledby="footer-contact-heading">
          <h2 id="footer-contact-heading" className="text-xs font-black uppercase tracking-[0.18em] text-stone-600">
            {content.contactTitle}
          </h2>

          <p className="mt-5 text-sm font-semibold leading-6 text-stone-700">
            {content.contactDescription}
          </p>

          <Link href={content.contactLink.href} className="nakfe-button-primary mt-6">
            {content.contactLink.label}
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>

      <div className="border-t border-stone-300 bg-white/45">
        <div className="nakfe-container flex flex-col gap-4 py-4 text-xs font-semibold leading-5 text-stone-600 md:flex-row md:items-center md:justify-between">
          <div>
            <p>
              © {currentYear} {content.copyright.owner}. {content.copyright.rightsText}
            </p>

            {content.developerCredit ? (
              <p className="mt-1">
                {content.developerCreditPrefix}{" "}
                <a
                  href={content.developerCredit.href}
                  className="font-black text-stone-950 underline decoration-red-700 decoration-2 underline-offset-4 outline-none transition hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
                  target={content.developerCredit.isExternal ? "_blank" : undefined}
                  rel={content.developerCredit.isExternal ? "noreferrer" : undefined}
                >
                  {content.developerCredit.label}
                </a>
                .
              </p>
            ) : null}
          </div>

          {content.qualityNote ? (
            <p className="max-w-md md:text-right">{content.qualityNote}</p>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
