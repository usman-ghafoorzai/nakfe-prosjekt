import Image from "next/image";
import Link from "next/link";
import type { ContentLink, CtaSectionContent } from "@/types/common";

type CtaSectionProps = {
  content: CtaSectionContent;
};

export default function CtaSection({ content }: CtaSectionProps) {
  const hasImage = Boolean(content.image?.src);

  return (
    <section className="nakfe-section bg-stone-950 text-white">
      <div className="absolute bottom-[-5rem] right-[12%] h-44 w-44 rotate-45 border-[2rem] border-white/10" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.52fr)] lg:items-end lg:gap-16">
          <div className="max-w-5xl">
            <p className="nakfe-eyebrow text-white/70">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 text-balance text-5xl font-black leading-[0.92] tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">
              {content.title}
            </h2>

            {content.description ? (
              <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white/78 sm:text-xl">
                {content.description}
              </p>
            ) : null}

            {content.primaryAction || content.secondaryAction ? (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                {content.primaryAction ? (
                  <ActionLink link={content.primaryAction} variant="primary" />
                ) : null}

                {content.secondaryAction ? (
                  <ActionLink link={content.secondaryAction} variant="secondary" />
                ) : null}
              </div>
            ) : null}
          </div>

          {hasImage ? (
            <figure className="nakfe-card-surface-dark relative min-h-[16rem] overflow-hidden bg-white/10 lg:min-h-[24rem]">
              <Image
                src={content.image!.src}
                alt={content.image!.isDecorative ? "" : content.image!.alt}
                fill
                sizes="(min-width: 1024px) 26rem, 100vw"
                className="object-cover grayscale-[20%]"
                style={{ objectPosition: content.image!.position ?? "center" }}
              />
            </figure>
          ) : (
            <div className="nakfe-card-surface-dark hidden border-l-[12px] border-l-red-700 bg-white p-7 text-stone-950 lg:block">
              <p className="text-4xl font-black leading-none tracking-[-0.06em]">
                {content.fallbackText}
              </p>
            </div>
          )}
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
  const className = variant === "primary" ? "nakfe-button-primary" : "nakfe-button-secondary";
  const label = (
    <>
      {link.label}
      <span aria-hidden="true">{isExternal ? "↗" : "→"}</span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={link.href}
        aria-label={link.ariaLabel}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={link.href} aria-label={link.ariaLabel} className={className}>
      {label}
    </Link>
  );
}
