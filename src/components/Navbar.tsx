"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { KeyboardEvent } from "react";
import { useEffect, useId, useRef, useState } from "react";
import DonationDialog, { donationDialogId } from "@/components/DonationDialog";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import NavIcon from "@/components/NavIcon";
import { isNavigationPathCurrent } from "@/lib/navigation";
import type { DonationContent } from "@/types/donation";
import type { Locale } from "@/types/locale";
import type { NavigationContent } from "@/types/navigation";

type NavbarProps = {
  content: NavigationContent;
  donationContent: DonationContent;
  locale: Locale;
};

const desktopLinkClasses =
  "relative inline-flex min-h-11 shrink-0 items-center gap-1.5 whitespace-nowrap px-1.5 text-[0.78rem] font-black uppercase tracking-[0.07em] outline-none transition duration-200 ease-out after:absolute after:bottom-1 after:left-1.5 after:h-[3px] after:w-[calc(100%-0.75rem)] after:bg-red-700 after:transition-opacity after:duration-200 after:content-[''] focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:after:transition-none";

const mobileLinkClasses =
  "flex min-h-12 items-center gap-3 border-l-[10px] px-4 py-3 text-base font-black uppercase tracking-[0.08em] outline-none transition duration-200 ease-out focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-700 motion-reduce:transition-none";

function getLinkClasses(
  isCurrent: boolean,
  baseClasses: string,
  isScrolled: boolean,
  isMobile = false,
) {
  if (isMobile) {
    return [
      baseClasses,
      isCurrent
        ? "border-red-700 bg-[#f7f1e8] text-red-700"
        : "border-transparent text-stone-800 hover:border-red-700 hover:bg-[#f7f1e8] hover:text-red-700",
    ].join(" ");
  }

  if (!isScrolled) {
    return [
      baseClasses,
      isCurrent
        ? "text-white after:bg-white after:opacity-100"
        : "text-white after:bg-white after:opacity-0 hover:text-white hover:after:opacity-100",
    ].join(" ");
  }

  return [
    baseClasses,
    isCurrent
      ? "text-red-700 after:bg-red-700 after:opacity-100"
      : "text-stone-800 after:bg-red-700 after:opacity-0 hover:text-red-700 hover:after:opacity-100",
  ].join(" ");
}

export default function Navbar({ content, donationContent, locale }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const desktopDonationButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const donationTriggerRef = useRef<"desktop" | "mobile">("desktop");
  const menuId = useId();
  const visibleNavigationItems = content.items
    .filter((link) => link.showInHeader && link.href !== "/")
    .sort((a, b) => a.order - b.order);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleOutsidePointerDown(event: PointerEvent) {
      const target = event.target;

      if (target instanceof Node && !headerRef.current?.contains(target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsidePointerDown, true);

    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointerDown, true);
    };
  }, [isOpen]);

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") setIsOpen(false);
  }

  function handleDonationOpen(trigger: "desktop" | "mobile") {
    donationTriggerRef.current = trigger;
    setIsOpen(false);
    window.requestAnimationFrame(() => setIsDonationOpen(true));
  }

  function handleDonationClose() {
    setIsDonationOpen(false);
    window.requestAnimationFrame(() => {
      if (donationTriggerRef.current === "mobile") {
        menuButtonRef.current?.focus();
        return;
      }

      desktopDonationButtonRef.current?.focus();
    });
  }

  return (
    <>
      <header
        ref={headerRef}
        className={[
          "fixed inset-x-0 z-50 px-4 transition-[top,padding] duration-300 ease-out motion-reduce:transition-none",
          isScrolled ? "top-0 px-0" : "top-4 sm:top-5",
        ].join(" ")}
      >
      <nav
        aria-label={content.mainNavigationLabel}
        onKeyDown={handleKeyDown}
        className={[
          "mx-auto border-b border-stone-950/10 shadow-sm shadow-stone-950/5 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ease-out motion-reduce:transition-none",
          isScrolled
            ? "max-w-none bg-[#f7f1e8]/94"
            : "max-w-7xl bg-stone-950/64 text-white shadow-2xl shadow-stone-950/20 supports-[backdrop-filter]:bg-stone-950/56",
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-[padding] duration-300 ease-out sm:px-6 motion-reduce:transition-none",
            isScrolled ? "py-3" : "py-3.5",
          ].join(" ")}
        >
          <Link
            href="/"
            aria-label={content.homeAriaLabel}
            onClick={() => setIsOpen(false)}
            className={[
              "inline-flex min-h-12 shrink-0 items-center gap-3 whitespace-nowrap outline-none transition duration-200 ease-out focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none",
              isScrolled ? "text-stone-950 hover:text-red-700" : "text-white hover:text-white/82",
            ].join(" ")}
          >
            <span className="grid h-12 w-12 place-items-center bg-white shadow-sm shadow-stone-950/10">
              <Image
                src="/images/nakfe-logo.jpg"
                alt=""
                width={40}
                height={40}
                preload
                className="h-10 w-10 rounded-full object-contain"
              />
            </span>

            <span className="hidden whitespace-nowrap text-lg font-black tracking-[-0.045em] sm:block">
              {content.brandName}
            </span>
          </Link>

          <ul className="hidden shrink-0 items-center gap-1.5 xl:flex">
            {visibleNavigationItems.map((link) => {
              const isCurrent = isNavigationPathCurrent(pathname, link.href);

              return (
                <li key={link.href} className="shrink-0">
                  <Link
                    href={link.href}
                    aria-current={isCurrent ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={getLinkClasses(isCurrent, desktopLinkClasses, isScrolled)}
                  >
                    <NavIcon href={link.href} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
            <li className="shrink-0">
              <button
                ref={desktopDonationButtonRef}
                type="button"
                aria-label={content.donationAction.ariaLabel}
                aria-controls={donationDialogId}
                aria-expanded={isDonationOpen}
                aria-haspopup="dialog"
                onClick={() => handleDonationOpen("desktop")}
                className="inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap bg-red-700 px-3.5 text-xs font-black uppercase tracking-[0.09em] text-white outline-none transition duration-200 ease-out hover:bg-red-800 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0"
              >
                {content.donationAction.label}
              </button>
            </li>
            <li className="shrink-0">
              <LocaleSwitcher
                isScrolled={isScrolled}
                label={content.languageSwitcherLabel}
                locale={locale}
                optionAriaLabels={content.languageOptionAriaLabels}
                variant="desktop"
              />
            </li>
          </ul>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isOpen ? content.closeMenuLabel : content.openMenuLabel}
            aria-controls={menuId}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className={[
              "inline-flex min-h-12 min-w-12 items-center justify-center border-2 text-2xl font-black leading-none outline-none transition duration-200 ease-out active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0 xl:hidden",
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
          "mx-4 mt-3 overflow-x-hidden overflow-y-auto bg-white shadow-2xl shadow-stone-950/20 xl:hidden",
          "transition-[max-height,opacity,transform] duration-200 ease-out motion-reduce:transition-none",
          isOpen
            ? "max-h-[calc(100dvh-7rem)] translate-y-0 opacity-100"
            : "max-h-0 -translate-y-2 opacity-0",
        ].join(" ")}
      >
        <nav
          aria-label={content.mobileNavigationLabel}
          className="p-3"
          onKeyDown={handleKeyDown}
        >
          <ul className="flex flex-col gap-1">
            {visibleNavigationItems.map((link) => {
              const isCurrent = isNavigationPathCurrent(pathname, link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isCurrent ? "page" : undefined}
                    tabIndex={isOpen ? undefined : -1}
                    onClick={() => setIsOpen(false)}
                    className={getLinkClasses(isCurrent, mobileLinkClasses, isScrolled, true)}
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
            aria-label={content.donationAction.ariaLabel}
            aria-controls={donationDialogId}
            aria-expanded={isDonationOpen}
            aria-haspopup="dialog"
            tabIndex={isOpen ? undefined : -1}
            onClick={() => handleDonationOpen("mobile")}
            className="mt-3 inline-flex min-h-12 w-full items-center justify-center bg-red-700 px-5 text-sm font-black uppercase tracking-[0.12em] text-white outline-none transition duration-200 ease-out hover:bg-red-800 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0"
          >
            {content.donationAction.label}
          </button>
          <div className="mt-3 border-t border-stone-300 pt-3">
            <LocaleSwitcher
              label={content.languageSwitcherLabel}
              locale={locale}
              optionAriaLabels={content.languageOptionAriaLabels}
              tabIndex={isOpen ? undefined : -1}
              variant="mobile"
            />
          </div>
        </nav>
      </div>
      </header>
      <DonationDialog
        content={donationContent}
        isOpen={isDonationOpen}
        onClose={handleDonationClose}
      />
    </>
  );
}
