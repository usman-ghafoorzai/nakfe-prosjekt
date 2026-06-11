import Image from "next/image";
import Link from "next/link";
import type { ContentLink, CtaSectionContent } from "@/types/content";

type CtaSectionProps = {
  content: CtaSectionContent;
};

export default function CtaSection({ content }: CtaSectionProps) {
  const hasImage = Boolean(content.image?.src);

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gray-950 px-6 py-10 shadow-sm sm:px-10 lg:px-12">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-red-500/20" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-center">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {content.title}
              </h2>

              {content.description ? (
                <p className="mt-4 text-base leading-7 text-gray-200 sm:text-lg">
                  {content.description}
                </p>
              ) : null}

              {content.primaryAction || content.secondaryAction ? (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {content.primaryAction ? (
                    <ActionLink link={content.primaryAction} variant="primary" />
                  ) : null}

                  {content.secondaryAction ? (
                    <ActionLink
                      link={content.secondaryAction}
                      variant="secondary"
                    />
                  ) : null}
                </div>
              ) : null}
            </div>

            {hasImage ? (
              <div className="relative min-h-[14rem] overflow-hidden rounded-2xl border border-white/20 bg-white/10">
                <Image
                  src={content.image!.src}
                  alt={content.image!.isDecorative ? "" : content.image!.alt}
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover"
                  style={{
                    objectPosition: content.image!.position ?? "center",
                  }}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

type ActionLinkProps = {
  link: ContentLink;
  variant: "primary" | "secondary";
};

function ActionLink({ link, variant }: ActionLinkProps) {
  const isExternal = link.isExternal ?? link.href.startsWith("http");

  const className =
    variant === "primary"
      ? "inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-gray-950 transition duration-200 ease-out hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
      : "inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition duration-200 ease-out hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100";

  if (isExternal) {
    return (
      <a
        href={link.href}
        aria-label={link.ariaLabel}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} aria-label={link.ariaLabel} className={className}>
      {link.label}
    </Link>
  );
}
