import {
  workCountries,
  type WorkCountry,
  type WorkCountryFilterContent,
  type WorkPageContent,
  type WorkProjectContent,
  type WorkProjectListContent,
} from "@/types/content";

export type WorkSearchParams = {
  land?: string | string[] | undefined;
};

function isNonEmptyString(value: string | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function isWorkCountry(value: unknown): value is WorkCountry {
  return (
    typeof value === "string" &&
    (workCountries as readonly string[]).includes(value)
  );
}

export function getSelectedWorkCountry(
  searchParams: WorkSearchParams,
  fallback: WorkCountry,
): WorkCountry {
  const requestedCountry = searchParams.land;

  if (typeof requestedCountry !== "string") {
    return fallback;
  }

  return isWorkCountry(requestedCountry) ? requestedCountry : fallback;
}

export function getWorkCountryHref(
  country: WorkCountry,
  defaultCountry: WorkCountry,
): string {
  return country === defaultCountry
    ? "/vart-arbeid"
    : `/vart-arbeid?land=${encodeURIComponent(country)}`;
}

export function getWorkCountryFilter(
  content: WorkProjectListContent,
  country: WorkCountry,
): WorkCountryFilterContent | undefined {
  return content.filters.find((filter) => filter.id === country);
}

export function getWorkCountryLabel(
  content: WorkProjectListContent,
  country: WorkCountry,
): string | undefined {
  return getWorkCountryFilter(content, country)?.label;
}

export function getWorkProjectsByCountry(
  projects: readonly WorkProjectContent[],
  country: WorkCountry,
): WorkProjectContent[] {
  return projects.filter((project) => project.country === country);
}

export function getWorkProjectBySlug(
  projects: readonly WorkProjectContent[],
  slug: string,
): WorkProjectContent | undefined {
  return projects.find((project) => project.slug === slug);
}

export function validateWorkPageContent(content: WorkPageContent): void {
  const errors: string[] = [];
  const filterIds = new Set<string>();
  const slugs = new Set<string>();

  if (!isWorkCountry(content.overview.defaultCountry)) {
    errors.push("overview.defaultCountry må være et gyldig land.");
  }

  if (!isNonEmptyString(content.overview.countryNavigationLabel)) {
    errors.push("overview.countryNavigationLabel kan ikke være tom.");
  }

  for (const filter of content.overview.filters) {
    if (!isWorkCountry(filter.id)) {
      errors.push(`Filteret "${filter.id}" har et ugyldig land.`);
    }

    if (filterIds.has(filter.id)) {
      errors.push(`Landfilteret "${filter.id}" er definert flere ganger.`);
    }

    filterIds.add(filter.id);

    if (!isNonEmptyString(filter.label)) {
      errors.push(`Landfilteret "${filter.id}" mangler label.`);
    }

    if (!isNonEmptyString(filter.emptyState.title)) {
      errors.push(`Landfilteret "${filter.id}" mangler tomtilstandstittel.`);
    }
  }

  for (const country of workCountries) {
    if (!filterIds.has(country)) {
      errors.push(`Landfilter for "${country}" mangler.`);
    }
  }

  if (!filterIds.has(content.overview.defaultCountry)) {
    errors.push("overview.defaultCountry mangler et tilsvarende landfilter.");
  }

  for (const project of content.overview.items) {
    const projectReference = project.slug || "uten-slug";

    if (!isNonEmptyString(project.slug)) {
      errors.push("Et prosjekt mangler slug.");
    } else if (slugs.has(project.slug)) {
      errors.push(`Prosjektsluggen "${project.slug}" er ikke unik.`);
    }

    slugs.add(project.slug);

    if (!isWorkCountry(project.country)) {
      errors.push(`Prosjektet "${projectReference}" har et ugyldig land.`);
    }

    if (!isNonEmptyString(project.title)) {
      errors.push(`Prosjektet "${projectReference}" mangler tittel.`);
    }

    if (!isNonEmptyString(project.summary)) {
      errors.push(`Prosjektet "${projectReference}" mangler introduksjon.`);
    }

    if (!isNonEmptyString(project.coverImage.src)) {
      errors.push(`Prosjektet "${projectReference}" mangler cover-bilde.`);
    }

    if (!isNonEmptyString(project.coverImage.alt)) {
      errors.push(
        `Prosjektet "${projectReference}" mangler alternativ tekst for cover-bildet.`,
      );
    }

    if (project.body.length === 0) {
      errors.push(`Prosjektet "${projectReference}" mangler brødtekst.`);
    }

    const bodyBlockIds = new Set<string>();

    for (const block of project.body) {
      if (!isNonEmptyString(block.id)) {
        errors.push(`Prosjektet "${projectReference}" har en tekstblokk uten id.`);
      } else if (bodyBlockIds.has(block.id)) {
        errors.push(
          `Prosjektet "${projectReference}" har duplisert tekstblokk-id "${block.id}".`,
        );
      }

      bodyBlockIds.add(block.id);

      if (!isNonEmptyString(block.text)) {
        errors.push(
          `Prosjektet "${projectReference}" har en tom tekstblokk${block.id ? ` "${block.id}"` : ""}.`,
        );
      }
    }

    if (project.video) {
      if (!isNonEmptyString(project.video.src)) {
        errors.push(`Prosjektet "${projectReference}" har video uten src.`);
      }

      if (!isNonEmptyString(project.video.poster.src)) {
        errors.push(`Prosjektet "${projectReference}" har video uten poster.`);
      }

      if (!isNonEmptyString(project.video.poster.alt)) {
        errors.push(`Prosjektet "${projectReference}" har video-poster uten alt-tekst.`);
      }

      if (
        project.video.captionsSrc &&
        !isNonEmptyString(project.video.captionsLabel)
      ) {
        errors.push(
          `Prosjektet "${projectReference}" har teksting uten captionsLabel.`,
        );
      }
    }
  }

  if (!isNonEmptyString(content.detail.backLinkLabel)) {
    errors.push("detail.backLinkLabel kan ikke være tom.");
  }

  if (!isNonEmptyString(content.detail.backLinkAriaLabel)) {
    errors.push("detail.backLinkAriaLabel kan ikke være tom.");
  }

  if (errors.length > 0) {
    throw new Error(`Ugyldig innhold for Vårt arbeid:\n- ${errors.join("\n- ")}`);
  }
}
