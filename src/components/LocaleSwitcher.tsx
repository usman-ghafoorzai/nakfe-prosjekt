"use client";

import { useRouter } from "next/navigation";
import { setLocaleCookie } from "@/app/actions/locale";
import {
  locales,
  type Locale,
} from "@/types/locale";

type LocaleSwitcherProps = {
  locale: Locale;
  label: string;
  optionAriaLabels: Record<Locale, string>;
  tabIndex?: number;
  variant: "desktop" | "mobile";
  isScrolled?: boolean;
};

const baseButtonClasses =
  "relative inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 border-2 px-2 text-xs font-black uppercase tracking-[0.12em] outline-none transition duration-200 ease-out focus-visible:ring-2 focus-visible:ring-offset-4 active:translate-y-0.5 motion-reduce:transition-none motion-reduce:active:translate-y-0";

function LocaleFlag({ locale }: { locale: Locale }) {
  if (locale === "no") {
    return (
      <svg
        aria-hidden="true"
        className="h-3.5 w-5 shrink-0"
        focusable="false"
        viewBox="0 0 22 16"
      >
        <rect fill="#ba0c2f" height="16" width="22" />
        <path d="M0 6h22v4H0zM6 0h4v16H6z" fill="#fff" />
        <path d="M0 7h22v2H0zM7 0h2v16H7z" fill="#00205b" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-5 shrink-0"
      focusable="false"
      viewBox="0 0 22 16"
    >
      <rect fill="#012169" height="16" width="22" />
      <path d="M0 0l22 16M22 0L0 16" stroke="#fff" strokeWidth="5" />
      <path d="M0 0l22 16M22 0L0 16" stroke="#c8102e" strokeWidth="2" />
      <path d="M11 0v16M0 8h22" stroke="#fff" strokeWidth="5" />
      <path d="M11 0v16M0 8h22" stroke="#c8102e" strokeWidth="3" />
    </svg>
  );
}

function getButtonClasses(
  isCurrent: boolean,
  variant: LocaleSwitcherProps["variant"],
  isScrolled: boolean,
) {
  if (variant === "mobile") {
    return [
      baseButtonClasses,
      isCurrent
        ? "border-red-700 bg-red-700 text-white after:absolute after:inset-x-2 after:bottom-1 after:h-0.5 after:bg-current after:content-[''] focus-visible:ring-red-700"
        : "border-stone-300 bg-white text-stone-800 hover:border-red-700 hover:text-red-700 focus-visible:ring-red-700",
    ].join(" ");
  }

  if (!isScrolled) {
    return [
      baseButtonClasses,
      isCurrent
        ? "border-white bg-white text-stone-950 after:absolute after:inset-x-2 after:bottom-1 after:h-0.5 after:bg-current after:content-[''] focus-visible:ring-white focus-visible:ring-offset-stone-950"
        : "border-white/55 text-white hover:border-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-stone-950",
    ].join(" ");
  }

  return [
    baseButtonClasses,
    isCurrent
      ? "border-red-700 bg-red-700 text-white after:absolute after:inset-x-2 after:bottom-1 after:h-0.5 after:bg-current after:content-[''] focus-visible:ring-red-700"
      : "border-stone-300 bg-white text-stone-800 hover:border-red-700 hover:text-red-700 focus-visible:ring-red-700",
  ].join(" ");
}

export default function LocaleSwitcher({
  locale,
  label,
  optionAriaLabels,
  tabIndex,
  variant,
  isScrolled = false,
}: LocaleSwitcherProps) {
  const router = useRouter();

  async function selectLocale(nextLocale: Locale) {
    if (nextLocale === locale) {
      return;
    }

    await setLocaleCookie(nextLocale);
    router.refresh();
  }

  return (
    <div aria-label={label} className="inline-flex gap-1" role="group">
      {locales.map((option) => (
        <button
          aria-label={optionAriaLabels[option]}
          aria-pressed={option === locale}
          className={getButtonClasses(option === locale, variant, isScrolled)}
          key={option}
          lang={option}
          onClick={() => void selectLocale(option)}
          tabIndex={tabIndex}
          type="button"
        >
          <LocaleFlag locale={option} />
          <span>{option.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
