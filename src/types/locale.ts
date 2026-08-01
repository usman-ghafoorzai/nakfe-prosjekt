export const locales = ["no", "en"] as const;

export type Locale = (typeof locales)[number];

export type LocalizedContent<T> = Record<Locale, T>;

export const defaultLocale: Locale = "no";
export const localeCookieName = "nakfe-locale";

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" &&
    (locales as readonly string[]).includes(value)
  );
}

export function resolveLocale(value: unknown): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function getIntlLocale(locale: Locale): "nb-NO" | "en-GB" {
  return locale === "en" ? "en-GB" : "nb-NO";
}
