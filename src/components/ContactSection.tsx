import SectionHeader from "@/components/SectionHeader";
import { isExternalContactHref } from "@/lib/contact";
import type {
  ContactMethodContent,
  ContactSectionContent,
  ContentLink,
} from "@/types/content";

type ContactSectionProps = {
  content: ContactSectionContent;
};

export default function ContactSection({ content }: ContactSectionProps) {
  const hasMethods = content.methods.length > 0;
  const hasSocialLinks = Boolean(content.social?.links.length);
  const hasPublishedChannels = hasMethods || hasSocialLinks;

  return (
    <section className="nakfe-section bg-[#f7f1e8]" aria-labelledby="contact-heading">
      <div className="nakfe-container grid gap-14 py-20 sm:py-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(24rem,1fr)] lg:items-start lg:gap-20 lg:py-28">
        <div>
          <SectionHeader content={content.header} titleId="contact-heading" />

          {content.availabilityNote ? (
            <p className="mt-10 max-w-xl border-t-2 border-stone-950 pt-5 text-sm font-semibold leading-6 text-stone-700">
              {content.availabilityNote}
            </p>
          ) : null}
        </div>

        <div className="border-t-2 border-stone-950">
          {hasMethods ? (
            <address className="not-italic">
              <dl>
                {content.methods.map((method) => (
                  <ContactMethod key={method.id} method={method} />
                ))}
              </dl>
            </address>
          ) : null}

          {hasSocialLinks && content.social ? (
            <SocialLinksSection content={content.social} />
          ) : null}

          {!hasPublishedChannels ? <ContactEmptyState content={content} /> : null}
        </div>
      </div>
    </section>
  );
}

type ContactMethodProps = {
  method: ContactMethodContent;
};

function ContactMethod({ method }: ContactMethodProps) {
  const linkIsExternal = method.href
    ? isExternalContactHref(method.href)
    : false;

  return (
    <div className="border-b border-stone-300 py-6 sm:py-7">
      <dt className="text-xs font-black uppercase tracking-[0.18em] text-red-700">
        {method.label}
      </dt>

      <dd className="mt-3">
        {method.href ? (
          <a
            href={method.href}
            aria-label={method.ariaLabel}
            target={linkIsExternal ? "_blank" : undefined}
            rel={linkIsExternal ? "noreferrer" : undefined}
            className="inline-flex min-h-11 items-center text-xl font-black leading-tight tracking-[-0.04em] text-stone-950 underline decoration-red-700 decoration-2 underline-offset-4 outline-none transition hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none sm:text-2xl"
          >
            {method.value}
            {linkIsExternal ? <span aria-hidden="true">↗</span> : null}
          </a>
        ) : (
          <span className="text-xl font-black leading-tight tracking-[-0.04em] text-stone-950 sm:text-2xl">
            {method.value}
          </span>
        )}

        {method.description ? (
          <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-stone-700">
            {method.description}
          </p>
        ) : null}
      </dd>
    </div>
  );
}

type SocialLinksSectionProps = {
  content: NonNullable<ContactSectionContent["social"]>;
};

function SocialLinksSection({ content }: SocialLinksSectionProps) {
  return (
    <section className="border-b border-stone-300 py-8" aria-labelledby="contact-social-heading">
      <h3
        id="contact-social-heading"
        className="text-xl font-black leading-tight tracking-[-0.04em] text-stone-950"
      >
        {content.title}
      </h3>

      {content.description ? (
        <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-stone-700">
          {content.description}
        </p>
      ) : null}

      <nav className="mt-5 flex flex-wrap gap-x-6 gap-y-3" aria-label={content.title}>
        {content.links.map((link) => (
          <SocialLink key={link.href} link={link} />
        ))}
      </nav>
    </section>
  );
}

type SocialLinkProps = {
  link: ContentLink;
};

function SocialLink({ link }: SocialLinkProps) {
  const isExternal = isExternalContactHref(link.href);

  return (
    <a
      href={link.href}
      aria-label={link.ariaLabel}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="inline-flex min-h-11 items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-stone-950 underline decoration-red-700 decoration-2 underline-offset-4 outline-none transition hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none"
    >
      {link.label}
      <span aria-hidden="true">{isExternal ? "↗" : "→"}</span>
    </a>
  );
}

type ContactEmptyStateProps = {
  content: ContactSectionContent;
};

function ContactEmptyState({ content }: ContactEmptyStateProps) {
  const action = content.emptyState.action;
  const isExternal = action?.isExternal ??
    (action ? isExternalContactHref(action.href) : false);

  return (
    <div className="border-b border-stone-300 border-l-4 border-l-red-700 py-7 pl-6 sm:py-8 sm:pl-7">
      <h3 className="text-2xl font-black leading-tight tracking-[-0.045em] text-stone-950">
        {content.emptyState.title}
      </h3>

      {content.emptyState.description ? (
        <p className="mt-3 max-w-xl text-base font-semibold leading-7 text-stone-700">
          {content.emptyState.description}
        </p>
      ) : null}

      {action ? (
        <a
          href={action.href}
          aria-label={action.ariaLabel}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-stone-950 underline decoration-red-700 decoration-2 underline-offset-4 outline-none transition hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none"
        >
          {action.label}
          <span aria-hidden="true">{isExternal ? "↗" : "→"}</span>
        </a>
      ) : null}
    </div>
  );
}
