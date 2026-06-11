import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/navLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-6 sm:px-6 md:grid-cols-[1.3fr_0.8fr_1fr] md:py-8">
          <section aria-labelledby="footer-about-heading">
            <Link
                href="/"
                className="inline-flex min-h-11 items-center gap-3 rounded-full pr-4 text-gray-950 outline-none transition duration-200 ease-out hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                aria-label="NAKFE - gå til forsiden"
            >
              <Image
                  src="/images/nakfe-logo.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-contain"
              />

              <span id="footer-about-heading" className="text-lg font-bold">
              NAKFE
            </span>
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
              NAKFE er en ideell organisasjon. Nettsiden utvikles for å gjøre
              informasjon om organisasjonen, aktiviteter og kontaktmuligheter mer
              tilgjengelig.
            </p>
          </section>

          <nav aria-labelledby="footer-navigation-heading">
            <h2
                id="footer-navigation-heading"
                className="text-sm font-semibold text-gray-950"
            >
              Navigasjon
            </h2>

            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-0">
              {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                        href={link.href}
                        className="inline-flex min-h-11 items-center rounded-md text-sm text-gray-600 underline-offset-4 outline-none transition duration-200 ease-out hover:text-gray-950 hover:underline focus-visible:text-gray-950 focus-visible:underline focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 motion-reduce:transition-none md:min-h-8"
                    >
                      {link.label}
                    </Link>
                  </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact-heading">
            <h2
                id="footer-contact-heading"
                className="text-sm font-semibold text-gray-950"
            >
              Kontakt
            </h2>

            <div className="mt-3 flex flex-col gap-2">
              <Link
                  href="/kontakt"
                  className="inline-flex min-h-11 items-center rounded-md text-sm text-gray-600 underline-offset-4 outline-none transition duration-200 ease-out hover:text-gray-950 hover:underline focus-visible:text-gray-950 focus-visible:underline focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 motion-reduce:transition-none md:min-h-8"
              >
                Kontakt NAKFE
              </Link>

              <p className="max-w-sm text-sm leading-6 text-gray-600">
                Mer kontaktinformasjon og sosiale medier legges til når innholdet
                er avklart.
              </p>
            </div>
          </section>
        </div>

        <div className="border-t border-gray-200">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-1 sm:px-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1 text-xs text-gray-500">
              <p>© {currentYear} NAKFE. Alle rettigheter reservert.</p>

              <p>
                Nettside utviklet av{" "}
                <a
                    href="https://www.linkedin.com/in/usman-ghafoorzai/"
                    className="font-medium text-gray-600  outline-none transition hover:text-gray-950 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
                >
                  Usman Ghafoorzai
                </a>
                .
              </p>
            </div>

            <p className="max-w-md text-xs leading-5 text-gray-400 md:text-right">
              Bygget med fokus på tilgjengelighet, responsivt design og moderne
              webutvikling.
            </p>
          </div>
        </div>
      </footer>
  );
}