"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { KeyboardEvent } from "react";
import { useEffect, useId, useState } from "react";
import { headerNavigationItems } from "@/content/navigation";
import NavIcon from "@/components/NavIcon";

const visibleNavigationItems = headerNavigationItems.filter(
    (link) => link.href !== "/",
);

const desktopLinkClasses =
    "inline-flex min-h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold outline-none transition duration-200 ease-out hover:text-gray-950 focus-visible:ring-2 focus-visible:ring-gray-950/15 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100";

const mobileLinkClasses =
    "flex min-h-11 items-center gap-3 rounded-xl px-3 text-base font-semibold outline-none transition duration-200 ease-out hover:bg-gray-50 hover:text-gray-950 focus-visible:ring-2 focus-visible:ring-gray-950/15 motion-reduce:transition-none";

function getLinkClasses(isCurrent: boolean, baseClasses: string) {
    return [
        baseClasses,
        isCurrent ? "text-gray-950" : "text-gray-500 hover:text-gray-800",
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
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
            <nav
                aria-label="Hovednavigasjon"
                onKeyDown={handleKeyDown}
                className={[
                    "mx-auto flex items-center justify-between rounded-full border border-gray-200/80 bg-white/90 backdrop-blur-xl transition-all duration-300 ease-out motion-reduce:transition-none",
                    isScrolled
                        ? "min-h-14 max-w-5xl px-3 shadow-[0_14px_40px_rgba(15,23,42,0.14)]"
                        : "min-h-16 max-w-6xl px-4 shadow-[0_12px_35px_rgba(15,23,42,0.10)]",
                ].join(" ")}
            >
                <Link
                    href="/"
                    aria-label="Kvinner for Endring - gå til forsiden"
                    onClick={() => setIsOpen(false)}
                    className={[
                        "inline-flex min-h-11 items-center rounded-full text-gray-950 outline-none transition-all duration-300 ease-out hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-gray-950/15 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100",
                        isScrolled ? "gap-0 pr-0" : "gap-3 pr-4",
                    ].join(" ")}
                >
          <span
              className={[
                  "inline-flex items-center justify-center rounded-full bg-white transition-all duration-300 ease-out motion-reduce:transition-none",
                  isScrolled ? "h-10 w-10" : "h-11 w-11",
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
                    isScrolled ? "h-8 w-8" : "h-9 w-9",
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
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-xl leading-none text-gray-950 shadow-sm outline-none transition duration-200 ease-out hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-gray-950/15 active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100 md:hidden"
                >
                    <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
                </button>
            </nav>

            <div
                id={menuId}
                aria-hidden={!isOpen}
                className={[
                    "mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border border-gray-200 bg-white/95 shadow-[0_18px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl md:hidden",
                    "transition-[max-height,opacity,transform] duration-200 ease-out motion-reduce:transition-none",
                    isOpen
                        ? "max-h-96 translate-y-0 opacity-100"
                        : "max-h-0 -translate-y-2 border-transparent opacity-0",
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
                                        className={getLinkClasses(isCurrent, mobileLinkClasses)}
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