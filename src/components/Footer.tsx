"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerContent } from "@/content/footer";
import { footerNavigationItems } from "@/content/navigation";
import { isNavigationPathCurrent } from "@/lib/navigation";

function getFooterLinkClasses(isCurrent: boolean) {
  return [
    "group inline-flex min-h-11 items-center gap-3 text-sm font-black uppercase tracking-[0.14em] outline-none transition duration-200 ease-out hover:text-red-700 focus-visible:text-red-700 focus-visible:underline focus-visible:underline-offset-4 motion-reduce:transition-none md:min-h-8",
    isCurrent ? "text-red-700" : "text-stone-700",
  ].join(" ");
}

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-300 bg-[#f7f1e8]">
      <div className="h-5 bg-red-700" aria-hidden="true" />

      <div className="nakfe-container grid gap-12 py-10 md:grid-cols-[1.25fr_0.7fr_0.9fr] md:py-12">
        <section aria-labelledby="footer-about-heading" className="max-w-md">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center gap-3 text-stone-950 outline-none transition duration-200 ease-out hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none"
            aria-label={`${footerContent.organization.name} - gå til forsiden`}
          >
            <span className="grid h-12 w-12 place-items-center bg-white shadow-sm shadow-stone-950/10">
              <Image
                src={footerContent.organization.logo.src}
                alt={footerContent.organization.logo.alt}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-contain"
              />
            </span>

            <span id="footer-about-heading" className="text-2xl font-black tracking-[-0.055em]">
              {footerContent.organization.name}
            </span>
          </Link>

          <p className="mt-5 text-sm font-semibold leading-6 text-stone-700">
            {footerContent.organization.description}
          </p>
        </section>

        <nav aria-labelledby="footer-navigation-heading">
          <h2 id="footer-navigation-heading" className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">
            {footerContent.navigationTitle}
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
          <h2 id="footer-contact-heading" className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">
            {footerContent.contactTitle}
          </h2>

          <p className="mt-5 text-sm font-semibold leading-6 text-stone-700">
            {footerContent.contactDescription}
          </p>

          <Link href={footerContent.contactLink.href} className="nakfe-button-primary mt-6">
            {footerContent.contactLink.label}
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>

      <div className="border-t border-stone-300 bg-white/45">
        <div className="nakfe-container flex flex-col gap-4 py-4 text-xs font-semibold leading-5 text-stone-600 md:flex-row md:items-center md:justify-between">
          <div>
            <p>
              © {currentYear} {footerContent.copyright.owner}. {footerContent.copyright.rightsText}
            </p>

            {footerContent.developerCredit ? (
              <p className="mt-1">
                Nettside utviklet av{" "}
                <a
                  href={footerContent.developerCredit.href}
                  className="font-black text-stone-950 underline decoration-red-700 decoration-2 underline-offset-4 outline-none transition hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
                  target={footerContent.developerCredit.isExternal ? "_blank" : undefined}
                  rel={footerContent.developerCredit.isExternal ? "noreferrer" : undefined}
                >
                  {footerContent.developerCredit.label}
                </a>
                .
              </p>
            ) : null}
          </div>

          {footerContent.qualityNote ? (
            <p className="max-w-md md:text-right">{footerContent.qualityNote}</p>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
