import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import type { CardGridSectionContent } from "@/types/content";

type CardGridSectionProps = {
  content: CardGridSectionContent;
};

export default function CardGridSection({ content }: CardGridSectionProps) {
  return (
    <section className="border-b border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeader content={content.header} />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item) => (
            <li key={item.title}>
              {item.action ? (
                <Link
                  href={item.action.href}
                  aria-label={item.action.ariaLabel}
                  className="group block h-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm outline-none transition duration-200 ease-out hover:-translate-y-1 hover:border-gray-300 hover:shadow-md focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
                >
                  <CardContent
                    title={item.title}
                    description={item.description}
                    actionLabel={item.action.label}
                  />
                </Link>
              ) : (
                <article className="h-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <CardContent
                    title={item.title}
                    description={item.description}
                  />
                </article>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type CardContentProps = {
  title: string;
  description: string;
  actionLabel?: string;
};

function CardContent({ title, description, actionLabel }: CardContentProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-950">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>

      {actionLabel ? (
        <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-950">
          {actionLabel}
          <span
            aria-hidden="true"
            className="transition duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          >
            →
          </span>
        </p>
      ) : null}
    </div>
  );
}
