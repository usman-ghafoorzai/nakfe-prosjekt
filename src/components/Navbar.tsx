"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { KeyboardEvent } from "react";
import { useEffect, useId, useState } from "react";
import NavIcon from "@/components/NavIcon";
import { headerNavigationItems } from "@/content/navigation";

const visibleNavigationItems = headerNavigationItems.filter(
    (link) => link.href !== "/",
);

const desktopLinkClasses =
    "inline-flex min-h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold outline-none transition duration-200 ease-out focus-visible:ring-2 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100";

const mobileLinkClasses =
    "flex min-h-11 items-center gap-3 rounded-xl px-3 text-base font-semibold outline-none transition duration-200 ease-out focus-visible:ring-2 motion-reduce:transition-none";

function getLinkClasses(
    isCurrent: boolean,
    baseClasses: string,
    tone: "light" | "dark",
) {
    return [
        baseClasses,
        tone === "light"
            ? isCurrent
                ? "bg-white/14 text-white focus-visible:ring-white/35"
                : "text-white/78 hover:bg-white/10 hover:text-white focus-visible:ring-white/35"
            : isCurrent
                ? "bg-gray-950/6 text-gray-950 focus-visible:ring-gray-950/15"
                : "text-gray-600 hover:bg-black/5 hover:text-gray-950 focus-visible:ring-gray-950/15",
    ].join(" ");
}

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuId = useId();
    const tone = isScrolled ? "dark" : "light";

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
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
            <nav
                aria-label="Hovednavigasjon"
                onKeyDown={handleKeyDown}
                className={[
                    "relative mx-auto flex items-center justify-between overflow-hidden rounded-full border backdrop-blur-md transition-all duration-300 ease-out motion-reduce:transition-none",
                    isScrolled
                        ? "min-h-12 max-w-[40rem] border-white/35 bg-white/30 px-2.5 shadow-[0_14px_40px_rgba(15,23,42,0.14)] ring-1 ring-black/5 supports-[backdrop-filter]:bg-white/22"
                        : "min-h-16 max-w-6xl border-white/16 bg-white/[0.02] px-4 shadow-[0_12px_35px_rgba(15,23,42,0.24)] ring-1 ring-white/10 supports-[backdrop-filter]:bg-white/[0.015]",
                ].join(" ")}
            >
                <div
                    aria-hidden="true"
                    className={[
                        "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent transition-opacity duration-300 ease-out motion-reduce:transition-none",
                        isScrolled ? "opacity-80" : "opacity-100",
                    ].join(" ")}
                />
                <div
                    aria-hidden="true"
                    className={[
                        "pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.07)_34%,transparent_68%)] transition-opacity duration-300 ease-out motion-reduce:transition-none",
                        isScrolled ? "opacity-70" : "opacity-100",
                    ].join(" ")}
                />

                <Link
                    href="/"
                    aria-label="Kvinner for Endring - gå til forsiden"
                    onClick={() => setIsOpen(false)}
                    className={[
                        "inline-flex min-h-11 items-center rounded-full outline-none transition-all duration-300 ease-out active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100",
                        isScrolled
                            ? "gap-0 pr-0 text-gray-950 hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-gray-950/15"
                            : "gap-3 pr-4 text-white hover:text-white/90 focus-visible:ring-2 focus-visible:ring-white/35",
                    ].join(" ")}
                >
          <span
              className={[
                  "inline-flex items-center justify-center rounded-full shadow-sm transition-all duration-300 ease-out motion-reduce:transition-none",
                  isScrolled ? "h-9 w-9 bg-white/85" : "h-11 w-11 bg-white/18 ring-1 ring-white/12",
              ].join(" ")}
          >
            <Image
                src="/images/nakfe-logo.jpg"
                alt=""
                width={40}
                height={40}
                priority
                className={[
                    "rounded-full object-contain transition-all duration-300 ease-out motion-reduce:transition-none",
                    isScrolled ? "h-7 w-7" : "h-9 w-9",
                ].join(" ")}
            />
          </span>

                    <span
                        className={[
                            "overflow-hidden whitespace-nowrap font-bold tracking-tight transition-[max-width,opacity,transform] duration-300 ease-out motion-reduce:transition-none",
                            isScrolled
                                ? "max-w-0 -translate-x-2 opacity-0"
                                : "max-w-[14rem] translate-x-0 opacity-100",
                        ].join(" ")}
                    >
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
                                    className={getLinkClasses(isCurrent, desktopLinkClasses, tone)}
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
                        "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border text-xl leading-none shadow-sm backdrop-blur-xl outline-none transition duration-200 ease-out active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100 md:hidden",
                        isScrolled
                            ? "border-white/40 bg-white/76 text-gray-950 hover:bg-white/85 focus-visible:ring-2 focus-visible:ring-gray-950/15"
                            : "border-white/18 bg-white/12 text-white hover:bg-white/18 focus-visible:ring-2 focus-visible:ring-white/35",
                    ].join(" ")}
                >
                    <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
                </button>
            </nav>

            <div
                id={menuId}
                aria-hidden={!isOpen}
                className={[
                    "mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border shadow-[0_18px_50px_rgba(15,23,42,0.18)] backdrop-blur-md md:hidden",
                    isScrolled
                        ? "border-white/35 bg-white/34 ring-1 ring-black/5 supports-[backdrop-filter]:bg-white/28"
                        : "border-white/16 bg-white/[0.02] ring-1 ring-white/10 supports-[backdrop-filter]:bg-white/[0.04]",
                    "transition-[max-height,opacity,transform] duration-200 ease-out motion-reduce:transition-none",
                    isOpen
                        ? "max-h-96 translate-y-0 opacity-100"
                        : "max-h-0 -translate-y-2 border-transparent opacity-0",
                ].join(" ")}
            >
                <div
                    aria-hidden="true"
                    className={[
                        "pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.06)_34%,transparent_70%)] transition-opacity duration-300 ease-out motion-reduce:transition-none",
                        isScrolled ? "opacity-70" : "opacity-100",
                    ].join(" ")}
                />
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
                                        className={getLinkClasses(isCurrent, mobileLinkClasses, tone)}
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
