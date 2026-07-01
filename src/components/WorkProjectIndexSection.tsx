import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import {
  getWorkCountryFilter,
  getWorkCountryHref,
  getWorkProjectsByCountry,
} from "@/lib/work-projects";
import type { WorkCountry, WorkProjectListContent } from "@/types/work";

type WorkProjectIndexSectionProps = {
  content: WorkProjectListContent;
  activeCountry: WorkCountry;
};

export default function WorkProjectIndexSection({
  content,
  activeCountry,
}: WorkProjectIndexSectionProps) {
  const activeFilter = getWorkCountryFilter(content, activeCountry);
  const visibleProjects = getWorkProjectsByCountry(
    content.items,
    activeCountry,
  );

  if (!activeFilter) {
    return null;
  }

  return (
    <section
      aria-labelledby="work-projects-heading"
      className="border-b border-stone-300/70 bg-[#f7f1e8]"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHeader
          content={content.header}
          titleId="work-projects-heading"
        />

        <nav
          aria-label={content.countryNavigationLabel}
          className="mt-12 border-b border-stone-300 sm:mt-14"
        >
          <ul className="flex flex-wrap gap-x-7 gap-y-2" role="list">
            {content.filters.map((filter) => {
              const isCurrent = filter.id === activeCountry;

              return (
                <li key={filter.id}>
                  <Link
                    aria-current={isCurrent ? "page" : undefined}
                    className={[
                      "group relative inline-flex min-h-11 items-center gap-3 border-b-[3px] px-1 text-sm font-black uppercase tracking-[0.14em] outline-none transition-colors duration-200 ease-out focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none",
                      isCurrent
                        ? "border-red-700 text-stone-950"
                        : "border-transparent text-stone-500 hover:border-stone-500 hover:text-stone-950",
                    ].join(" ")}
                    href={getWorkCountryHref(
                      filter.id,
                      content.defaultCountry,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={[
                        "h-2.5 w-2.5 shrink-0 transition-colors duration-200 ease-out motion-reduce:transition-none",
                        isCurrent ? "bg-red-700" : "bg-stone-400 group-hover:bg-stone-700",
                      ].join(" ")}
                    />
                    {filter.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {visibleProjects.length > 0 ? (
          <div className="mt-10 divide-y divide-stone-300 border-y border-stone-300 sm:mt-12">
            {visibleProjects.map((project, index) => {
              const imageFirst = index % 2 === 0;

              return (
                <article
                  className="grid gap-8 py-10 sm:gap-10 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-20"
                  key={project.slug}
                >
                  <figure
                    className={imageFirst ? "lg:order-1" : "lg:order-2"}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                      <Image
                        alt={project.coverImage.alt}
                        className="object-cover grayscale-[10%]"
                        fill
                        sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 42vw, (min-width: 640px) 92vw, 100vw"
                        src={project.coverImage.src}
                        style={{
                          objectPosition:
                            project.coverImage.position ?? "center",
                        }}
                      />
                    </div>
                  </figure>

                  <div
                    className={[
                      "max-w-xl",
                      imageFirst ? "lg:order-2" : "lg:order-1",
                    ].join(" ")}
                  >
                    <h3 className="text-balance text-4xl font-black leading-[0.98] tracking-[-0.06em] text-stone-950 sm:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-6 text-lg font-semibold leading-8 text-stone-700 sm:text-xl">
                      {project.summary}
                    </p>

                    <Link
                      aria-label={`Les mer om ${project.title}`}
                      className="group mt-8 inline-flex min-h-11 items-center gap-3 text-sm font-black uppercase tracking-[0.14em] text-stone-950 outline-none transition duration-200 ease-out hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none"
                      href={`/vart-arbeid/${project.slug}`}
                    >
                      Les mer
                      <span
                        aria-hidden="true"
                        className="text-lg leading-none transition duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <section
            aria-labelledby="work-projects-empty-heading"
            className="mt-10 max-w-2xl border-y border-stone-300 py-8 sm:mt-12"
          >
            <h3
              id="work-projects-empty-heading"
              className="text-2xl font-black tracking-[-0.045em] text-stone-950"
            >
              {activeFilter.emptyState.title}
            </h3>
            {activeFilter.emptyState.description ? (
              <p className="mt-3 text-base font-semibold leading-7 text-stone-700">
                {activeFilter.emptyState.description}
              </p>
            ) : null}
          </section>
        )}
      </div>
    </section>
  );
}
