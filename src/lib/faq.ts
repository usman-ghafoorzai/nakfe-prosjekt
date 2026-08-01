import type {
  ContentLink,
} from "@/types/common";
import type {
  FaqPageContent,
  FaqSectionContent,
} from "@/types/faq";
import {
  defaultLocale,
  getIntlLocale,
  type Locale,
} from "@/types/locale";

const DATE_ONLY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function isNonEmptyString(value: string | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidDateOnly(value: string): boolean {
  if (!DATE_ONLY_PATTERN.test(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));

  return (
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day
  );
}

function validateLink(
  errors: string[],
  reference: string,
  link: ContentLink | undefined,
): void {
  if (!link) {
    return;
  }

  if (!isNonEmptyString(link.label)) {
    errors.push(`${reference}.label kan ikke være tom.`);
  }

  if (!isNonEmptyString(link.href)) {
    errors.push(`${reference}.href kan ikke være tom.`);
  }
}

/**
 * Formats a validated date-only value for visible locale-aware copy.
 * The source value remains portable for a later CMS, while presentation
 * stays locale-aware and avoids exposing raw ISO metadata.
 */
export function formatFaqReviewedDate(
  date: string,
  locale: Locale = defaultLocale,
): string {
  if (!isValidDateOnly(date)) {
    return date;
  }

  return new Intl.DateTimeFormat(getIntlLocale(locale), {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function validateFaqContent(content: FaqSectionContent): void {
  const errors: string[] = [];
  const categoryIds = new Set<string>();
  const itemIds = new Set<string>();

  if (!isNonEmptyString(content.header.title)) {
    errors.push("faq.header.title kan ikke være tom.");
  }

  if (!isNonEmptyString(content.emptyState.title)) {
    errors.push("faq.emptyState.title kan ikke være tom.");
  }

  validateLink(errors, "faq.emptyState.action", content.emptyState.action);

  if (content.contactCta) {
    if (!isNonEmptyString(content.contactCta.title)) {
      errors.push("faq.contactCta.title kan ikke være tom.");
    }

    validateLink(errors, "faq.contactCta.action", content.contactCta.action);
  }

  for (const category of content.categories) {
    const categoryReference = category.id || "uten-id";

    if (!isNonEmptyString(category.id)) {
      errors.push("En FAQ-kategori mangler id.");
    } else if (categoryIds.has(category.id)) {
      errors.push(`FAQ-kategori-id "${category.id}" er ikke unik.`);
    }

    categoryIds.add(category.id);

    if (!isNonEmptyString(category.title)) {
      errors.push(`FAQ-kategorien "${categoryReference}" mangler tittel.`);
    }

    if (category.items.length === 0) {
      errors.push(
        `FAQ-kategorien "${categoryReference}" må ha minst ett spørsmål eller fjernes.`,
      );
    }

    for (const item of category.items) {
      const itemReference = item.id || "uten-id";
      const paragraphIds = new Set<string>();
      const keywords = new Set<string>();

      if (!isNonEmptyString(item.id)) {
        errors.push(`Et FAQ-spørsmål i "${categoryReference}" mangler id.`);
      } else if (itemIds.has(item.id)) {
        errors.push(`FAQ-spørsmål-id "${item.id}" er ikke unik.`);
      }

      itemIds.add(item.id);

      if (!isNonEmptyString(item.question)) {
        errors.push(`FAQ-spørsmålet "${itemReference}" mangler spørsmålstekst.`);
      }

      if (item.answer.paragraphs.length === 0) {
        errors.push(`FAQ-spørsmålet "${itemReference}" mangler svartekst.`);
      }

      for (const paragraph of item.answer.paragraphs) {
        if (!isNonEmptyString(paragraph.id)) {
          errors.push(
            `FAQ-spørsmålet "${itemReference}" har et svaravsnitt uten id.`,
          );
        } else if (paragraphIds.has(paragraph.id)) {
          errors.push(
            `FAQ-spørsmålet "${itemReference}" har duplisert svaravsnitt-id "${paragraph.id}".`,
          );
        }

        paragraphIds.add(paragraph.id);

        if (!isNonEmptyString(paragraph.text)) {
          errors.push(
            `FAQ-spørsmålet "${itemReference}" har et tomt svaravsnitt.`,
          );
        }
      }

      validateLink(
        errors,
        `FAQ-spørsmålet "${itemReference}".answer.action`,
        item.answer.action,
      );

      for (const keyword of item.keywords ?? []) {
        if (!isNonEmptyString(keyword)) {
          errors.push(
            `FAQ-spørsmålet "${itemReference}" har et tomt nøkkelord.`,
          );
        } else if (keywords.has(keyword)) {
          errors.push(
            `FAQ-spørsmålet "${itemReference}" har duplisert nøkkelord "${keyword}".`,
          );
        }

        keywords.add(keyword);
      }

      if (
        item.lastReviewedAt &&
        (!isNonEmptyString(item.lastReviewedAt) ||
          !isValidDateOnly(item.lastReviewedAt))
      ) {
        errors.push(
          `FAQ-spørsmålet "${itemReference}" har ugyldig lastReviewedAt. Bruk YYYY-MM-DD.`,
        );
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Ugyldig FAQ-innhold:\n- ${errors.join("\n- ")}`);
  }
}

export function validateFaqPageContent(content: FaqPageContent): void {
  validateFaqContent(content.faq);
}
