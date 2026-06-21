import {
  contactMethodKinds,
  type ContactMethodContent,
  type ContactPageContent,
} from "@/types/content";

function isNonEmptyString(value: string | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isContactMethodKind(value: string): boolean {
  return contactMethodKinds.includes(
    value as (typeof contactMethodKinds)[number],
  );
}

function isExternalHttpUrl(href: string): boolean {
  return href.startsWith("https://") || href.startsWith("http://");
}

function validateContactMethod(
  errors: string[],
  method: ContactMethodContent,
  methodIds: Set<string>,
): void {
  const reference = method.id || "uten-id";

  if (!isNonEmptyString(method.id)) {
    errors.push("En kontaktmetode mangler id.");
  } else if (methodIds.has(method.id)) {
    errors.push(`Kontaktmetode-id "${method.id}" er ikke unik.`);
  }

  methodIds.add(method.id);

  if (!isContactMethodKind(method.kind)) {
    errors.push(`Kontaktmetoden "${reference}" har en ugyldig type.`);
  }

  if (!isNonEmptyString(method.label)) {
    errors.push(`Kontaktmetoden "${reference}" mangler etikett.`);
  }

  if (!isNonEmptyString(method.value)) {
    errors.push(`Kontaktmetoden "${reference}" mangler verdi.`);
  }

  if (method.href && !isNonEmptyString(method.href)) {
    errors.push(`Kontaktmetoden "${reference}" har en tom lenke.`);
  }

  if (method.kind === "email") {
    if (!method.href?.startsWith("mailto:")) {
      errors.push(
        `E-postkontakt "${reference}" må bruke en mailto:-lenke.`,
      );
    }
  }

  if (method.kind === "phone") {
    if (!method.href?.startsWith("tel:")) {
      errors.push(
        `Telefonkontakt "${reference}" må bruke en tel:-lenke.`,
      );
    }
  }
}

/**
 * Determines whether a contact link should open in a separate browsing context.
 * E-mail and telephone links stay in the current context.
 */
export function isExternalContactHref(href: string): boolean {
  return isExternalHttpUrl(href);
}

/**
 * Fails early when static contact content is incomplete or internally inconsistent.
 * The same contract can later validate content returned by a CMS or Supabase.
 */
export function validateContactPageContent(content: ContactPageContent): void {
  const errors: string[] = [];
  const methodIds = new Set<string>();

  if (!isNonEmptyString(content.contact.header.title)) {
    errors.push("contact.header.title kan ikke være tom.");
  }

  if (!isNonEmptyString(content.contact.emptyState.title)) {
    errors.push("contact.emptyState.title kan ikke være tom.");
  }

  if (!isNonEmptyString(content.contact.emptyState.description)) {
    errors.push("contact.emptyState.description kan ikke være tom.");
  }

  if (content.contact.emptyState.action) {
    if (!isNonEmptyString(content.contact.emptyState.action.label)) {
      errors.push("contact.emptyState.action.label kan ikke være tom.");
    }

    if (!isNonEmptyString(content.contact.emptyState.action.href)) {
      errors.push("contact.emptyState.action.href kan ikke være tom.");
    }
  }

  if (
    content.contact.availabilityNote !== undefined &&
    !isNonEmptyString(content.contact.availabilityNote)
  ) {
    errors.push("contact.availabilityNote kan ikke være tom når den brukes.");
  }

  for (const method of content.contact.methods) {
    validateContactMethod(errors, method, methodIds);
  }

  if (content.contact.social) {
    const socialHrefs = new Set<string>();

    if (!isNonEmptyString(content.contact.social.title)) {
      errors.push("contact.social.title kan ikke være tom.");
    }

    if (content.contact.social.links.length === 0) {
      errors.push("contact.social.links må ha minst én lenke når seksjonen brukes.");
    }

    for (const link of content.contact.social.links) {
      const reference = link.label || link.href || "uten-etikett";

      if (!isNonEmptyString(link.label)) {
        errors.push("En sosial lenke mangler etikett.");
      }

      if (!isNonEmptyString(link.href)) {
        errors.push(`Sosial lenke "${reference}" mangler href.`);
      } else if (!isExternalHttpUrl(link.href)) {
        errors.push(`Sosial lenke "${reference}" må bruke en offentlig http- eller https-lenke.`);
      } else if (socialHrefs.has(link.href)) {
        errors.push(`Sosial lenke "${reference}" har duplisert href.`);
      }

      socialHrefs.add(link.href);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Ugyldig kontaktinnhold:\n- ${errors.join("\n- ")}`);
  }
}
