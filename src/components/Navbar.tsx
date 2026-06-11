"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { KeyboardEvent } from "react";
import { useId, useState } from "react";
import { navLinks } from "@/data/navLinks";

const desktopNavLinkBaseClasses =
    "relative inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium outline-none transition duration-200 ease-out after:absolute after:inset-x-3 after:bottom-1.5 after:h-0.5 after:rounded-full after:bg-gray-950 after:transition-opacity after:duration-200 after:ease-out after:content-[''] hover:text-gray-950 focus-visible:text-gray-950 focus-visible:after:opacity-100 active:scale-[0.98] motion-reduce:transition-none motion-reduce:after:transition-none motion-reduce:active:scale-100";

const mobileNavLinkBaseClasses =
    "relative flex min-h-11 items-center rounded-md px-3 pb-2 text-base font-medium outline-none transition duration-200 ease-out after:absolute after:bottom-1 after:left-3 after:h-0.5 after:w-10 after:rounded-full after:bg-gray-950 after:transition-opacity after:duration-200 after:ease-out after:content-[''] hover:text-gray-950 focus-visible:text-gray-950 focus-visible:after:opacity-100 motion-reduce:transition-none motion-reduce:after:transition-none";

function getNavLinkClasses(isCurrent: boolean, baseClasses: string) {
    return [
        baseClasses,
        isCurrent ? "text-gray-950 after:opacity-100" : "text-gray-600 after:opacity-0",
    ].join(" ");
}

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const menuId = useId();

    function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    }

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
            <nav
                aria-label="Hovednavigasjon"
                className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
                onKeyDown={handleKeyDown}
            >
                <Link
                    href="/"
                    className="inline-flex min-h-11 items-center gap-3 rounded-md px-2 pr-4 text-lg font-bold tracking-tight text-gray-950 outline-none transition duration-200 ease-out hover:text-gray-700 active:scale-[0.98] focus-visible:underline focus-visible:underline-offset-4 motion-reduce:transition-none motion-reduce:active:scale-100"
                    aria-label="NAKFE - gå til forsiden"
                    onClick={() => setIsOpen(false)}
                >
                    <Image
                        src="/images/nakfe-logo.jpg"
                        alt=""
                        width={40}
                        height={40}
                        priority
                        className="h-10 w-10 rounded-full object-contain"
                    />

                    <span>NAKFE</span>
                </Link>

                <ul className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => {
                        const isCurrent = pathname === link.href;

                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    aria-current={isCurrent ? "page" : undefined}
                                    onClick={() => setIsOpen(false)}
                                    className={getNavLinkClasses(isCurrent, desktopNavLinkBaseClasses)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <button
                    type="button"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-2xl leading-none text-gray-950 shadow-sm outline-none transition duration-200 ease-out hover:bg-gray-50 active:scale-95 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:active:scale-100 md:hidden"
                    aria-label={isOpen ? "Lukk hovedmeny" : "Åpne hovedmeny"}
                    aria-controls={menuId}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((current) => !current)}
                >
          <span aria-hidden="true" className="text-2xl leading-none">
            {isOpen ? "×" : "☰"}
          </span>
                </button>
            </nav>

            <div
                id={menuId}
                aria-hidden={!isOpen}
                className={[
                    "overflow-hidden bg-white md:hidden",
                    "transition-[max-height,opacity] duration-200 ease-out motion-reduce:transition-none",
                    isOpen
                        ? "max-h-96 border-t border-gray-200 opacity-100"
                        : "max-h-0 border-t-0 opacity-0",
                ].join(" ")}
            >
                <nav aria-label="Mobil hovednavigasjon" className="mx-auto max-w-6xl px-4 py-3">
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => {
                            const isCurrent = pathname === link.href;

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        aria-current={isCurrent ? "page" : undefined}
                                        tabIndex={isOpen ? undefined : -1}
                                        onClick={() => setIsOpen(false)}
                                        className={getNavLinkClasses(isCurrent, mobileNavLinkBaseClasses)}
                                    >
                                        {link.label}
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