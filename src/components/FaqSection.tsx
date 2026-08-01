import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { formatFaqReviewedDate } from "@/lib/faq";
import type {
  ContentLink,
} from "@/types/common";
import type {
  FaqContactCtaContent,
  FaqItemContent,
  FaqSectionContent,
} from "@/types/faq";
import type { Locale } from "@/types/locale";

type FaqSectionProps = {
  content: FaqSectionContent;
  locale: Locale;
};

type FaqActionLinkProps = {
  link: ContentLink;
  className: string;
};

function FaqActionLink({ link, className }: FaqActionLinkProps) {
  const label = (
    <>
      {link.label}
      <span aria-hidden="true">{link.isExternal ? "↗" : "→"}</span>
    </>
  );

  if (link.isExternal) {
    return (
      <a
        aria-label={link.ariaLabel}
        className={className}
        href={link.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {label}
      </a>
    );
  }

  return (
    <Link aria-label={link.ariaLabel} className={className} href={link.href}>
      {label}
    </Link>
  );
}

function FaqItem({
  item,
  locale,
  reviewedAtLabel,
}: {
  item: FaqItemContent;
  locale: Locale;
  reviewedAtLabel?: string;
}) {
  return (
    <li>
      <details className="group border-l-4 border-transparent border-t border-stone-300 open:border-l-red-700 open:bg-white/50">
        <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 px-4 py-5 text-left outline-none transition-colors duration-200 ease-out hover:bg-white/50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-700 motion-reduce:transition-none sm:min-h-20 sm:px-6 [&::-webkit-details-marker]:hidden">
          <span className="text-xl font-black leading-tight tracking-[-0.035em] text-stone-950 sm:text-2xl">
            {item.question}
          </span>
          <span
            aria-hidden="true"
            className="grid h-10 w-10 shrink-0 place-items-center border-2 border-stone-950 text-2xl font-black leading-none text-stone-950 transition duration-200 ease-out group-open:rotate-45 group-open:border-red-700 group-open:bg-red-700 group-open:text-white motion-reduce:transition-none"
          >
            +
          </span>
        </summary>

        <div className="px-4 pb-6 pr-16 sm:px-6 sm:pb-8 sm:pr-20">
          <div className="max-w-3xl space-y-4 text-base font-semibold leading-7 text-stone-700 sm:text-lg sm:leading-8">
            {item.answer.paragraphs.map((paragraph) => (
              <p key={`${item.id}-${paragraph.id}`}>{paragraph.text}</p>
            ))}
          </div>

          {item.answer.action ? (
            <FaqActionLink
              className="group mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-black uppercase tracking-[0.14em] text-stone-950 outline-none transition duration-200 ease-out hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none"
              link={item.answer.action}
            />
          ) : null}

          {item.lastReviewedAt && reviewedAtLabel ? (
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-stone-500">
              {reviewedAtLabel}:{" "}
              <time dateTime={item.lastReviewedAt}>
                {formatFaqReviewedDate(item.lastReviewedAt, locale)}
              </time>
            </p>
          ) : null}
        </div>
      </details>
    </li>
  );
}

function FaqContactCta({ content }: { content: FaqContactCtaContent }) {
  return (
    <section
      aria-labelledby="faq-contact-heading"
      className="mt-16 border-t border-stone-300 bg-stone-950 text-white sm:mt-20"
    >
      <div className="px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        {content.eyebrow ? (
          <p className="nakfe-eyebrow text-white/70">{content.eyebrow}</p>
        ) : null}
        <h2
          id="faq-contact-heading"
          className="mt-4 max-w-3xl text-balance text-4xl font-black leading-[0.98] tracking-[-0.06em] sm:text-5xl"
        >
          {content.title}
        </h2>
        {content.description ? (
          <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/80">
            {content.description}
          </p>
        ) : null}
        <FaqActionLink
          className="group mt-8 inline-flex min-h-11 items-center gap-3 text-sm font-black uppercase tracking-[0.14em] text-white underline decoration-2 underline-offset-8 outline-none transition duration-200 ease-out hover:text-red-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-stone-950 motion-reduce:transition-none"
          link={content.action}
        />
      </div>
    </section>
  );
}

function EmptyFaqState({ content }: { content: FaqSectionContent }) {
  return (
    <section
      aria-labelledby="faq-empty-heading"
      className="mt-12 max-w-3xl border-y border-stone-300 py-10 sm:mt-14 sm:py-12"
    >
      <h2
        id="faq-empty-heading"
        className="text-balance text-3xl font-black leading-[0.98] tracking-[-0.055em] text-stone-950 sm:text-4xl"
      >
        {content.emptyState.title}
      </h2>
      {content.emptyState.description ? (
        <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-stone-700">
          {content.emptyState.description}
        </p>
      ) : null}
      {content.emptyState.action ? (
        <FaqActionLink
          className="group mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-black uppercase tracking-[0.14em] text-stone-950 outline-none transition duration-200 ease-out hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none"
          link={content.emptyState.action}
        />
      ) : null}
    </section>
  );
}

export default function FaqSection({ content, locale }: FaqSectionProps) {
  const hasCategories = content.categories.length > 0;

  return (
    <section
      aria-labelledby="faq-heading"
      className="border-b border-stone-300/70 bg-[#f7f1e8]"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHeader content={content.header} titleId="faq-heading" />

        {hasCategories ? (
          <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
            {content.categories.map((category) => {
              const headingId = `faq-category-${category.id}`;

              return (
                <section aria-labelledby={headingId} key={category.id}>
                  <div className="max-w-3xl">
                    <h2
                      id={headingId}
                      className="text-balance text-3xl font-black leading-[0.98] tracking-[-0.055em] text-stone-950 sm:text-4xl"
                    >
                      {category.title}
                    </h2>
                    {category.description ? (
                      <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-stone-700">
                        {category.description}
                      </p>
                    ) : null}
                  </div>

                  <ul className="mt-8 border-b border-stone-300" role="list">
                    {category.items.map((item) => (
                      <FaqItem
                        item={item}
                        key={item.id}
                        locale={locale}
                        reviewedAtLabel={content.reviewedAtLabel}
                      />
                    ))}
                  </ul>
                </section>
              );
            })}

            {content.contactCta ? (
              <FaqContactCta content={content.contactCta} />
            ) : null}
          </div>
        ) : (
          <EmptyFaqState content={content} />
        )}
      </div>
    </section>
  );
}
