import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import type {
  ActivityItemContent,
  ActivitySectionContent,
  ActivityStatus,
} from "@/types/content";

type ActivityCardSectionProps = {
  content: ActivitySectionContent;
};

const statusLabels: Record<ActivityStatus, string> = {
  upcoming: "Kommende",
  past: "Tidligere",
  cancelled: "Avlyst",
};

function formatDate(date?: string) {
  if (!date) {
    return { day: "–", month: "Dato kommer", full: "Dato kommer" };
  }

  const parsedDate = new Date(date);

  return {
    day: new Intl.DateTimeFormat("nb-NO", { day: "2-digit" }).format(parsedDate),
    month: new Intl.DateTimeFormat("nb-NO", { month: "short" }).format(parsedDate),
    full: new Intl.DateTimeFormat("nb-NO", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(parsedDate),
  };
}

export default function ActivityCardSection({ content }: ActivityCardSectionProps) {
  return (
    <section className="nakfe-section bg-[#f7f1e8]">
      <div className="nakfe-container py-16 sm:py-20 lg:py-24">
        <SectionHeader content={content.header} />

        {content.items.length > 0 ? (
          <ul className="mt-12 grid gap-5">
            {content.items.map((activity) => (
              <li key={`${activity.title}-${activity.startDate ?? "no-date"}`}>
                <ActivityCard activity={activity} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-12 border-l-[12px] border-red-700 bg-white p-7 shadow-sm shadow-stone-950/5">
            <h3 className="text-3xl font-black leading-none tracking-[-0.055em] text-stone-950">
              {content.emptyState.title}
            </h3>

            {content.emptyState.description ? (
              <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-stone-700">
                {content.emptyState.description}
              </p>
            ) : null}

            {content.emptyState.action ? (
              <Link href={content.emptyState.action.href} className="nakfe-button-secondary mt-7">
                {content.emptyState.action.label}
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}

type ActivityCardProps = {
  activity: ActivityItemContent;
};

function ActivityCard({ activity }: ActivityCardProps) {
  const date = formatDate(activity.startDate);

  return (
    <article className="group grid overflow-hidden bg-white shadow-sm shadow-stone-950/5 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-950/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:grid-cols-[10rem_minmax(0,1fr)]">
      <div className="flex min-h-36 flex-col justify-between bg-stone-950 p-5 text-white">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-white/58">
            {statusLabels[activity.status]}
          </p>
          <p className="mt-5 text-5xl font-black leading-none tracking-[-0.08em] text-red-500">
            {date.day}
          </p>
          <p className="mt-1 text-sm font-black uppercase tracking-[0.16em] text-white">
            {date.month}
          </p>
        </div>

        {activity.isFeatured ? (
          <p className="mt-5 inline-flex w-fit bg-red-700 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">
            Fremhevet
          </p>
        ) : null}
      </div>

      <div className="border-l-[12px] border-red-700 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          {activity.category ? (
            <span className="text-xs font-black uppercase tracking-[0.18em] text-red-700">
              {activity.category}
            </span>
          ) : null}
          <time className="text-sm font-semibold text-stone-500" dateTime={activity.startDate}>
            {date.full}
          </time>
        </div>

        <h3 className="mt-4 max-w-3xl text-3xl font-black leading-none tracking-[-0.055em] text-stone-950 sm:text-4xl">
          {activity.title}
        </h3>

        <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-stone-700">
          {activity.description}
        </p>

        <dl className="mt-6 grid gap-4 text-sm font-semibold text-stone-700 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">Sted</dt>
            <dd className="mt-1 text-stone-950">{activity.location ?? "Sted kommer"}</dd>
          </div>
          <div>
            <dt className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">Status</dt>
            <dd className="mt-1 text-stone-950">{statusLabels[activity.status]}</dd>
          </div>
        </dl>

        {activity.accessibilityNote ? (
          <p className="mt-6 max-w-3xl bg-[#f7f1e8] px-5 py-4 text-sm font-semibold leading-6 text-stone-700">
            {activity.accessibilityNote}
          </p>
        ) : null}

        {activity.registrationLink ? (
          <div className="mt-7">
            <Link
              href={activity.registrationLink.href}
              aria-label={activity.registrationLink.ariaLabel}
              className="nakfe-button-primary"
            >
              {activity.registrationLink.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  );
}
