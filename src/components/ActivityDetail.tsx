import Link from "next/link";
import EditorialMedia from "@/components/EditorialMedia";
import { formatActivityDateDetails } from "@/lib/activities";
import type {
  ContentLink,
} from "@/types/common";
import type {
  ActivityContent,
  ActivityDetailContent,
} from "@/types/activities";
import type { Locale } from "@/types/locale";

type ActivityDetailProps = {
  activity: ActivityContent;
  content: ActivityDetailContent;
  locale: Locale;
  relatedWorkAction?: ContentLink;
};

function getLinkAttributes(link: ContentLink) {
  return link.isExternal
    ? { target: "_blank", rel: "noreferrer" }
    : undefined;
}

export default function ActivityDetail({
  activity,
  content,
  locale,
  relatedWorkAction,
}: ActivityDetailProps) {
  const date = formatActivityDateDetails(activity, locale);
  const isCancelled = activity.publicationState === "cancelled";

  return (
    <article className="bg-[#f7f1e8] pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Link
          aria-label={content.backLinkAriaLabel}
          className="inline-flex min-h-11 items-center gap-3 text-sm font-black uppercase tracking-[0.14em] text-stone-700 outline-none transition duration-200 ease-out hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none"
          href="/aktiviteter"
        >
          <span aria-hidden="true">←</span>
          {content.backLinkLabel}
        </Link>

        <header className="mt-10 max-w-5xl sm:mt-12">
          <p className="nakfe-eyebrow text-red-700">{date.dateAndTime}</p>
          <h1 className="mt-5 text-balance text-5xl font-black leading-[0.92] tracking-[-0.075em] text-stone-950 sm:text-6xl lg:text-7xl">
            {activity.title}
          </h1>
          <p className="mt-7 max-w-3xl text-xl font-semibold leading-8 text-stone-700 sm:text-2xl sm:leading-9">
            {activity.summary}
          </p>
        </header>

        {isCancelled ? (
          <aside className="mt-10 max-w-3xl border-l-8 border-red-700 bg-white px-6 py-5 sm:mt-12" aria-labelledby="activity-cancelled-heading">
            <h2
              id="activity-cancelled-heading"
              className="text-xl font-black tracking-[-0.035em] text-stone-950"
            >
              {content.cancellationHeading}
            </h2>
            <p className="mt-2 text-base font-semibold leading-7 text-stone-700">
              {activity.cancellationMessage}
            </p>
          </aside>
        ) : null}

        {activity.coverImage || activity.video ? (
          <div className="mt-12 sm:mt-16">
            <div className="relative aspect-[16/9] overflow-hidden bg-stone-200">
              <EditorialMedia
                fallbackText={content.videoFallbackText}
                image={activity.coverImage ?? activity.video!.poster}
                label={`${content.videoAriaLabelPrefix} ${activity.title}`}
                preload
                video={activity.video}
              />
            </div>
          </div>
        ) : null}

        <div className="mx-auto mt-14 grid max-w-5xl gap-14 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.55fr)] lg:gap-20">
          <div>
            <div aria-hidden="true" className="mb-8 h-1 w-14 bg-red-700" />
            <div className="space-y-6 text-lg font-medium leading-8 text-stone-800 sm:text-xl sm:leading-9">
              {activity.body.map((block) => (
                <p key={`${activity.slug}-${block.id}`}>{block.text}</p>
              ))}
            </div>

            {relatedWorkAction ? (
              <Link
                aria-label={relatedWorkAction.ariaLabel}
                className="group mt-10 inline-flex min-h-11 items-center gap-3 text-sm font-black uppercase tracking-[0.14em] text-stone-950 outline-none transition duration-200 ease-out hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none"
                href={relatedWorkAction.href}
                {...getLinkAttributes(relatedWorkAction)}
              >
                {relatedWorkAction.label}
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>

          <aside aria-labelledby="activity-practical-information-heading" className="border-t border-stone-300 pt-7 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <h2
              id="activity-practical-information-heading"
              className="text-xl font-black tracking-[-0.04em] text-stone-950"
            >
              {content.practicalInformationHeading}
            </h2>
            <dl className="mt-6 space-y-6 text-base font-semibold leading-7 text-stone-700">
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">
                  {content.dateAndTimeLabel}
                </dt>
                <dd className="mt-1 text-stone-950">{date.dateAndTime}</dd>
              </div>
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">
                  {content.formatLabel}
                </dt>
                <dd className="mt-1 text-stone-950">
                  {content.formatLabels[activity.format]}
                </dd>
              </div>
              {activity.location ? (
                <div>
                  <dt className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">
                    {content.locationLabel}
                  </dt>
                  <dd className="mt-1 text-stone-950">
                    <p>{activity.location.name}</p>
                    {activity.location.address ? (
                      <p className="text-stone-700">{activity.location.address}</p>
                    ) : null}
                    {activity.location.directionsLink ? (
                      <Link
                        aria-label={activity.location.directionsLink.ariaLabel}
                        className="mt-2 inline-flex min-h-11 items-center font-black text-red-700 underline decoration-2 underline-offset-4 outline-none transition hover:text-red-900 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
                        href={activity.location.directionsLink.href}
                        {...getLinkAttributes(activity.location.directionsLink)}
                      >
                        {activity.location.directionsLink.label}
                      </Link>
                    ) : null}
                  </dd>
                </div>
              ) : null}
              {activity.audience ? (
                <div>
                  <dt className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">
                    {content.audienceLabel}
                  </dt>
                  <dd className="mt-1 text-stone-950">{activity.audience}</dd>
                </div>
              ) : null}
              {activity.accessibilityNote ? (
                <div>
                  <dt className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">
                    {content.accessibilityLabel}
                  </dt>
                  <dd className="mt-1 text-stone-950">{activity.accessibilityNote}</dd>
                </div>
              ) : null}
            </dl>

            {activity.registration && !isCancelled ? (
              <section aria-labelledby="activity-registration-heading" className="mt-9 border-t border-stone-300 pt-7">
                <h2
                  id="activity-registration-heading"
                  className="text-xs font-black uppercase tracking-[0.16em] text-stone-500"
                >
                  {content.registrationHeading}
                </h2>
                <Link
                  aria-label={activity.registration.ariaLabel}
                  className="nakfe-button-primary mt-4"
                  href={activity.registration.href}
                  {...getLinkAttributes(activity.registration)}
                >
                  {activity.registration.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </section>
            ) : null}
          </aside>
        </div>
      </div>
    </article>
  );
}
