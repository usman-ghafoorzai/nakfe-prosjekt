"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerContent } from "@/content/footer";
import { footerNavigationItems } from "@/content/navigation";

const footerLinkBaseClasses =
    "relative inline-flex min-h-11 items-center rounded-md text-sm outline-none transition duration-200 ease-out after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:bg-gray-950 after:transition-opacity after:duration-200 after:ease-out after:content-[''] hover:text-gray-950 focus-visible:text-gray-950 focus-visible:after:opacity-100 motion-reduce:transition-none motion-reduce:after:transition-none md:min-h-8";

function getFooterLinkClasses(isCurrent: boolean) {
  return [
    footerLinkBaseClasses,
    isCurrent
        ? "text-gray-950 after:opacity-100"
        : "text-gray-600 after:opacity-0",
  ].join(" ");
}

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-6 sm:px-6 md:grid-cols-[1.3fr_0.8fr_1fr] md:py-8">
          <section aria-labelledby="footer-about-heading">
            <Link
                href="/"
                className="inline-flex min-h-11 items-center gap-3 rounded-md pr-4 text-gray-950 outline-none transition duration-200 ease-out hover:text-gray-700 focus-visible:underline focus-visible:underline-offset-4 motion-reduce:transition-none"
                aria-label={`${footerContent.organization.name} - gå til forsiden`}
            >
              <Image
                  src={footerContent.organization.logo.src}
                  alt={footerContent.organization.logo.alt}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-contain"
              />

              <span id="footer-about-heading" className="text-lg font-bold">
              {footerContent.organization.name}
            </span>
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
              {footerContent.organization.description}
            </p>
          </section>

          <nav aria-labelledby="footer-navigation-heading">
            <h2
                id="footer-navigation-heading"
                className="text-sm font-semibold text-gray-950"
            >
              {footerContent.navigationTitle}
            </h2>

            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-0">
              {footerNavigationItems.map((link) => {
                const isCurrent = pathname === link.href;

                return (
                    <li key={link.href}>
                      <Link
                          href={link.href}
                          aria-current={isCurrent ? "page" : undefined}
                          className={getFooterLinkClasses(isCurrent)}
                      >
                        {link.label}
                      </Link>
                    </li>
                );
              })}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact-heading">
            <h2
                id="footer-contact-heading"
                className="text-sm font-semibold text-gray-950"
            >
              {footerContent.contactTitle}
            </h2>

            <div className="mt-3 flex flex-col gap-2">
              <Link
                  href={footerContent.contactLink.href}
                  aria-current={
                    pathname === footerContent.contactLink.href ? "page" : undefined
                  }
                  className={getFooterLinkClasses(
                      pathname === footerContent.contactLink.href,
                  )}
              >
                {footerContent.contactLink.label}
              </Link>

              <p className="max-w-sm text-sm leading-6 text-gray-600">
                {footerContent.contactDescription}
              </p>
            </div>
          </section>
        </div>

        <div className="border-t border-gray-200">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-1 sm:px-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1 text-xs text-gray-500">
              <p>
                © {currentYear} {footerContent.copyright.owner}.{" "}
                {footerContent.copyright.rightsText}
              </p>

              {footerContent.developerCredit ? (
                  <p>
                    Nettside utviklet av{" "}
                    <a
                        href={footerContent.developerCredit.href}
                        className="font-medium text-gray-600 underline underline-offset-4 outline-none transition duration-200 ease-out hover:text-gray-950 focus-visible:text-gray-950 focus-visible:decoration-2 motion-reduce:transition-none"
                        target={
                          footerContent.developerCredit.isExternal
                              ? "_blank"
                              : undefined
                        }
                        rel={
                          footerContent.developerCredit.isExternal
                              ? "noreferrer"
                              : undefined
                        }
                    >
                      {footerContent.developerCredit.label}
                    </a>
                    .
                  </p>
              ) : null}
            </div>

            {footerContent.qualityNote ? (
                <p className="max-w-md text-xs leading-5 text-gray-400 md:text-right">
                  {footerContent.qualityNote}
                </p>
            ) : null}
          </div>
        </div>
      </footer>
  );
}