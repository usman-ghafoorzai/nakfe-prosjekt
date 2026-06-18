"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { KeyboardEvent } from "react";
import { useEffect, useId, useState } from "react";
import NavIcon from "@/components/NavIcon";
import { headerNavigationItems } from "@/content/navigation";

const visibleNavigationItems = headerNavigationItems.filter((link) => link.href !== "/");

const desktopLinkClasses =
  "relative inline-flex min-h-11 items-center gap-2 px-2 text-sm font-black uppercase tracking-[0.08em] outline-none transition duration-200 ease-out after:absolute after:bottom-1 after:left-2 after:h-[3px] after:w-[calc(100%-1rem)] after:bg-red-700 after:transition-opacity after:duration-200 after:content-[''] focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:after:transition-none";

const mobileLinkClasses =
  "flex min-h-12 items-center gap-3 border-l-[10px] px-4 py-3 text-base font-black uppercase tracking-[0.08em] outline-none transition duration-200 ease-out focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-700 motion-reduce:transition-none";

function getLinkClasses(isCurrent: boolean, baseClasses: string, isMobile = false) {
  if (isMobile) {
    return [
      baseClasses,
      isCurrent
        ? "border-red-700 bg-[#f7f1e8] text-red-700"
        : "border-transparent text-stone-800 hover:border-red-700 hover:bg-[#f7f1e8] hover:text-red-700",
    ].join(" ");
  }

  return [
    baseClasses,
    isCurrent
      ? "text-red-700 after:opacity-100"
      : "text-stone-800 after:opacity-0 hover:text-red-700 hover:after:opacity-100",
  ].join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-2 bg-red-700" aria-hidden="true" />

      <nav
        aria-label="Hovednavigasjon"
        onKeyDown={handleKeyDown}
        className={[
          "border-b border-stone-950/10 bg-[#f7f1e8]/92 shadow-sm shadow-stone-950/5 backdrop-blur-xl transition duration-300 ease-out motion-reduce:transition-none",
          isScrolled ? "" : "bg-white/10 text-white supports-[backdrop-filter]:bg-stone-950/8",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
          <Link
            href="/"
            aria-label="Kvinner for Endring - gå til forsiden"
            onClick={() => setIsOpen(false)}
            className={[
              "inline-flex min-h-12 items-center gap-3 outline-none transition duration-200 ease-out focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none",
              isScrolled ? "text-stone-950 hover:text-red-700" : "text-white hover:text-white/82",
            ].join(" ")}
          >
            <span className="grid h-12 w-12 place-items-center bg-white shadow-sm shadow-stone-950/10">
              <Image
                src="/images/nakfe-logo.jpg"
                alt=""
                width={40}
                height={40}
                priority
                className="h-10 w-10 rounded-full object-contain"
              />
            </span>

            <span className="hidden text-lg font-black tracking-[-0.045em] sm:block">
              Kvinner for Endring
            </span>
          </Link>

          <ul className="hidden items-center gap-3 md:flex">
            {visibleNavigationItems.map((link) => {
              const isCurrent = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isCurrent ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={getLinkClasses(isCurrent, desktopLinkClasses)}
                  >
                    <NavIcon href={link.href} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            aria-label={isOpen ? "Lukk hovedmeny" : "Åpne hovedmeny"}
            aria-controls={menuId}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className={[
              "inline-flex min-h-12 min-w-12 items-center justify-center border-2 text-2xl font-black leading-none outline-none transition duration-200 ease-out active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0 md:hidden",
              isScrolled
                ? "border-stone-950 bg-white text-stone-950 hover:bg-stone-950 hover:text-white focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4"
                : "border-white bg-white/10 text-white hover:bg-white hover:text-stone-950 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-stone-950",
            ].join(" ")}
          >
            <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </nav>

      <div
        id={menuId}
        aria-hidden={!isOpen}
        className={[
          "mx-4 mt-3 overflow-hidden bg-white shadow-2xl shadow-stone-950/20 md:hidden",
          "transition-[max-height,opacity,transform] duration-200 ease-out motion-reduce:transition-none",
          isOpen ? "max-h-96 translate-y-0 opacity-100" : "max-h-0 -translate-y-2 opacity-0",
        ].join(" ")}
      >
        <nav aria-label="Mobil hovednavigasjon" className="p-3">
          <ul className="flex flex-col gap-1">
            {visibleNavigationItems.map((link) => {
              const isCurrent = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isCurrent ? "page" : undefined}
                    tabIndex={isOpen ? undefined : -1}
                    onClick={() => setIsOpen(false)}
                    className={getLinkClasses(isCurrent, mobileLinkClasses, true)}
                  >
                    <NavIcon href={link.href} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
