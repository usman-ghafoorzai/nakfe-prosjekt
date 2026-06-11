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
        return "Dato kommer";
    }

    return new Intl.DateTimeFormat("nb-NO", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
}

export default function ActivityCardSection({
                                                content,
                                            }: ActivityCardSectionProps) {
    return (
        <section className="border-b border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
                <SectionHeader content={content.header} />

                {content.items.length > 0 ? (
                    <ul className="mt-10 grid gap-5 lg:grid-cols-2">
                        {content.items.map((activity) => (
                            <li key={`${activity.title}-${activity.startDate ?? "no-date"}`}>
                                <ActivityCard activity={activity} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-white p-8">
                        <h3 className="text-lg font-semibold text-gray-950">
                            {content.emptyState.title}
                        </h3>

                        {content.emptyState.description ? (
                            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
                                {content.emptyState.description}
                            </p>
                        ) : null}

                        {content.emptyState.action ? (
                            <Link
                                href={content.emptyState.action.href}
                                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-950 transition duration-200 ease-out hover:border-gray-950 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
                            >
                                {content.emptyState.action.label}
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
    return (
        <article className="h-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
          {statusLabels[activity.status]}
        </span>

                {activity.category ? (
                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
            {activity.category}
          </span>
                ) : null}

                {activity.isFeatured ? (
                    <span className="rounded-full bg-gray-950 px-3 py-1 text-xs font-semibold text-white">
            Fremhevet
          </span>
                ) : null}
            </div>

            <h3 className="mt-5 text-xl font-semibold text-gray-950">
                {activity.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
                {activity.description}
            </p>

            <dl className="mt-6 grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
                <div>
                    <dt className="font-semibold text-gray-950">Dato</dt>
                    <dd className="mt-1">
                        {activity.startDate ? (
                            <time dateTime={activity.startDate}>
                                {formatDate(activity.startDate)}
                            </time>
                        ) : (
                            "Dato kommer"
                        )}
                    </dd>
                </div>

                <div>
                    <dt className="font-semibold text-gray-950">Sted</dt>
                    <dd className="mt-1">{activity.location ?? "Sted kommer"}</dd>
                </div>
            </dl>

            {activity.accessibilityNote ? (
                <p className="mt-5 rounded-2xl bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-600">
                    {activity.accessibilityNote}
                </p>
            ) : null}

            {activity.registrationLink ? (
                <div className="mt-6">
                    <Link
                        href={activity.registrationLink.href}
                        aria-label={activity.registrationLink.ariaLabel}
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-gray-950 px-6 text-sm font-semibold text-white transition duration-200 ease-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
                    >
                        {activity.registrationLink.label}
                    </Link>
                </div>
            ) : null}
        </article>
    );
}