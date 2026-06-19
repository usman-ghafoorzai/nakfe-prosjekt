import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import type { CardGridSectionContent, CardItemContent } from "@/types/content";

type CardGridSectionProps = {
  content: CardGridSectionContent;
};

export default function CardGridSection({ content }: CardGridSectionProps) {
  const isCompact = content.variant === "compact";

  return (
    <section className="nakfe-section bg-[#f7f1e8]">
      <div className="pointer-events-none absolute right-[-5rem] top-10 h-48 w-48 rotate-45 border-[1.8rem] border-red-700/10" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <SectionHeader content={content.header} />

        <ul
          className={
            isCompact
              ? "mt-20 grid gap-10 sm:grid-cols-2 lg:mt-24 lg:gap-12"
              : "mt-24 grid gap-10 lg:mt-28 lg:grid-cols-3 lg:gap-12"
          }
        >
          {content.items.map((item, index) => (
            <li key={item.title}>
              <EditorialCard item={item} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type EditorialCardProps = {
  item: CardItemContent;
  index: number;
};

function EditorialCard({ item, index }: EditorialCardProps) {
  const body = <CardContent item={item} index={index} />;

  if (!item.action) {
    return <article className="h-full border-[10px] border-[#eadfcf] bg-white shadow-md shadow-stone-950/10">{body}</article>;
  }

  const isExternal = item.action.isExternal ?? item.action.href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={item.action.href}
        aria-label={item.action.ariaLabel}
        target="_blank"
        rel="noreferrer"
        className="nakfe-card-link group block h-full border-[10px] border-[#eadfcf] bg-white shadow-md shadow-stone-950/10"
      >
        {body}
      </a>
    );
  }

  return (
    <Link
      href={item.action.href}
      aria-label={item.action.ariaLabel}
      className="nakfe-card-link group block h-full border-[10px] border-[#eadfcf] bg-white shadow-md shadow-stone-950/10"
    >
      {body}
    </Link>
  );
}

type CardContentProps = {
  item: CardItemContent;
  index: number;
};

function CardContent({ item, index }: CardContentProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-white">
      {item.image ? (
        <div className="relative min-h-[13rem] overflow-hidden bg-stone-200">
          <Image
            src={item.image.src}
            alt={item.image.isDecorative ? "" : item.image.alt}
            fill
            sizes="(min-width: 1024px) 24rem, 100vw"
            className="object-cover grayscale-[18%] transition duration-300 ease-out group-hover:scale-[1.02] group-hover:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            style={{ objectPosition: item.image.position ?? "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 to-transparent" aria-hidden="true" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col border-l-[12px] border-red-700 bg-white p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-black leading-none tracking-[-0.03em] text-red-700">
            {String(index + 1).padStart(2, "0")}
          </p>
          {item.meta ? (
            <p className="text-right text-xs font-black uppercase tracking-[0.14em] text-stone-500">
              {item.meta}
            </p>
          ) : null}
        </div>

        {item.eyebrow ? (
          <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-stone-500">
            {item.eyebrow}
          </p>
        ) : null}

        <h3 className="mt-4 text-3xl font-black leading-none tracking-[-0.055em] text-stone-950">
          {item.title}
        </h3>

        <p className="mt-5 text-base font-semibold leading-7 text-stone-700">
          {item.description}
        </p>

        {item.action ? (
          <p className="mt-auto pt-7 text-sm font-black uppercase tracking-[0.14em] text-stone-950">
            {item.action.label}
            <span className="ml-2 inline-block transition duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">
              →
            </span>
          </p>
        ) : null}
      </div>
    </div>
  );
}
