"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { KeyboardEvent } from "react";
import { useId, useState } from "react";
import { navLinks } from "@/data/navLinks";

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
                    className="inline-flex min-h-11 items-center gap-3 rounded-full px-2 pr-4 text-lg font-bold tracking-tight text-gray-950 transition duration-200 ease-out hover:bg-gray-50 active:translate-y-0 active:scale-[0.98] focus-ring motion-reduce:transition-none motion-reduce:active:scale-100"                    aria-current={pathname === "/" ? "page" : undefined}
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
                                    className={[
                                        "inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition duration-200 ease-out",
                                        "active:scale-[0.98] focus-ring",
                                        "motion-reduce:transition-none motion-reduce:active:scale-100",
                                        isCurrent
                                            ? "bg-gray-100 text-gray-950 shadow-sm"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-950",
                                    ].join(" ")}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <button
                    type="button"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-2xl leading-none text-gray-950 shadow-sm transition duration-200 ease-out hover:bg-gray-50 active:scale-95 focus-ring motion-reduce:transition-none motion-reduce:active:scale-100 md:hidden"
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
                                        className={[
                                            "flex min-h-11 items-center rounded-md px-3 text-base font-medium transition",
                                            "focus-ring",
                                            isCurrent
                                                ? "bg-gray-100 text-gray-950"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-950",
                                        ].join(" ")}
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
