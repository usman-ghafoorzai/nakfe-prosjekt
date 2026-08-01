import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import {
  formatActivityDateDetails,
  getActivityHref,
} from "@/lib/activities";
import type {
  ContentLink,
} from "@/types/common";
import type {
  ActivityContent,
  ActivityListContent,
} from "@/types/activities";
import type { Locale } from "@/types/locale";

type ActivityIndexSectionProps = {
  content: ActivityListContent;
  featuredActivity?: ActivityContent;
  locale: Locale;
  remainingActivities: ActivityContent[];
};

function getLinkAttributes(link: ContentLink) {
  return link.isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : undefined;
}

function ActivityDateMark({
  activity,
  locale,
}: {
  activity: ActivityContent;
  locale: Locale;
}) {
  const date = formatActivityDateDetails(activity, locale);

  return (
    <time
      className="flex min-w-20 flex-col border-l-4 border-red-700 pl-4 text-stone-950"
      dateTime={activity.startsAt}
    >
      <span className="text-4xl font-black leading-none tracking-[-0.08em]">
        {date.day}
      </span>
      <span className="mt-1 text-xs font-black uppercase tracking-[0.16em]">
        {date.month}
      </span>
    </time>
  );
}

function ActivityDetailsLink({
  activity,
  content,
}: {
  activity: ActivityContent;
  content: ActivityListContent;
}) {
  return (
    <Link
      aria-label={`${content.detailsActionAriaLabelPrefix} ${activity.title}`}
      className="group inline-flex min-h-11 items-center gap-3 text-sm font-black uppercase tracking-[0.14em] text-stone-950 outline-none transition duration-200 ease-out hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none"
      href={getActivityHref(activity.slug)}
    >
      {content.detailsActionLabel}
      <span
        aria-hidden="true"
        className="text-lg leading-none transition duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
      >
        →
      </span>
    </Link>
  );
}

function FeaturedActivity({
  activity,
  content,
  locale,
}: {
  activity: ActivityContent;
  content: ActivityListContent;
  locale: Locale;
}) {
  const date = formatActivityDateDetails(activity, locale);

  return (
    <article className="mt-8 grid border-y border-stone-300 py-8 sm:mt-10 sm:py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-14 lg:py-14">
      {activity.coverImage ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-stone-200 lg:order-2">
          <Image
            alt={activity.coverImage.alt}
            className="object-cover"
            fill
            preload
            sizes="(min-width: 1024px) 44vw, (min-width: 640px) 92vw, 100vw"
            src={activity.coverImage.src}
            style={{ objectPosition: activity.coverImage.position ?? "center" }}
          />
        </div>
      ) : null}

      <div className={activity.coverImage ? "mt-8 lg:order-1 lg:mt-0" : ""}>
        <ActivityDateMark activity={activity} locale={locale} />
        <p className="mt-6 text-sm font-bold leading-6 text-stone-600">
          {date.dateAndTime}
          {activity.location ? ` · ${activity.location.name}` : ""}
        </p>
        <h3 className="mt-4 text-balance text-4xl font-black leading-[0.98] tracking-[-0.06em] text-stone-950 sm:text-5xl">
          {activity.title}
        </h3>
        <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-stone-700 sm:text-xl">
          {activity.summary}
        </p>
        <ActivityDetailsLink activity={activity} content={content} />
      </div>
    </article>
  );
}

function ActivityAgendaRow({
  activity,
  content,
  locale,
}: {
  activity: ActivityContent;
  content: ActivityListContent;
  locale: Locale;
}) {
  const date = formatActivityDateDetails(activity, locale);

  return (
    <article className="grid gap-6 py-7 sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:items-start sm:gap-8 sm:py-9">
      <ActivityDateMark activity={activity} locale={locale} />
      <div>
        <p className="text-sm font-bold leading-6 text-stone-600">
          {date.dateAndTime}
          {activity.location ? ` · ${activity.location.name}` : ""}
        </p>
        <h3 className="mt-3 text-2xl font-black leading-[1.03] tracking-[-0.045em] text-stone-950 sm:text-3xl">
          {activity.title}
        </h3>
        <p className="mt-3 max-w-3xl text-base font-semibold leading-7 text-stone-700">
          {activity.summary}
        </p>
      </div>
      <div className="sm:pt-1">
        <ActivityDetailsLink activity={activity} content={content} />
      </div>
    </article>
  );
}

function EmptyActivities({ content }: { content: ActivityListContent }) {
  const { emptyState } = content;

  return (
    <section
      aria-labelledby="activities-empty-heading"
      className="mt-10 max-w-3xl border-y border-stone-300 py-9 sm:mt-12 sm:py-12"
    >
      <h2
        id="activities-empty-heading"
        className="text-3xl font-black leading-[0.98] tracking-[-0.055em] text-stone-950 sm:text-4xl"
      >
        {emptyState.title}
      </h2>
      {emptyState.description ? (
        <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-stone-700">
          {emptyState.description}
        </p>
      ) : null}
      {emptyState.action ? (
        <Link
          aria-label={emptyState.action.ariaLabel}
          className="group mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-black uppercase tracking-[0.14em] text-stone-950 outline-none transition duration-200 ease-out hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none"
          href={emptyState.action.href}
          {...getLinkAttributes(emptyState.action)}
        >
          {emptyState.action.label}
          <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </section>
  );
}

export default function ActivityIndexSection({
  content,
  featuredActivity,
  locale,
  remainingActivities,
}: ActivityIndexSectionProps) {
  const hasActivities = Boolean(featuredActivity);

  return (
    <section className="bg-[#f7f1e8]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <SectionHeader content={content.header} titleId="activities-heading" />

        {hasActivities && featuredActivity ? (
          <>
            <section aria-labelledby="activities-featured-heading" className="mt-16 lg:mt-20">
              <h2
                id="activities-featured-heading"
                className="nakfe-eyebrow text-red-700"
              >
                {content.featuredHeading}
              </h2>
              <FeaturedActivity
                activity={featuredActivity}
                content={content}
                locale={locale}
              />
            </section>

            {remainingActivities.length > 0 ? (
              <section aria-labelledby="activities-upcoming-heading" className="mt-16 lg:mt-20">
                <h2
                  id="activities-upcoming-heading"
                  className="text-balance text-3xl font-black leading-[0.98] tracking-[-0.055em] text-stone-950 sm:text-4xl"
                >
                  {content.upcomingHeading}
                </h2>
                <ol className="mt-8 divide-y divide-stone-300 border-y border-stone-300">
                  {remainingActivities.map((activity) => (
                    <li key={activity.slug}>
                      <ActivityAgendaRow
                        activity={activity}
                        content={content}
                        locale={locale}
                      />
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}
          </>
        ) : (
          <EmptyActivities content={content} />
        )}
      </div>
    </section>
  );
}
