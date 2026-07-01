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
        <section
            className="nakfe-section bg-[#f7f1e8]"
            aria-label={content.header.title}
        >
            <div className="nakfe-container py-16 sm:py-20 lg:py-24">
                <div className="max-w-3xl">
                    <SectionHeader content={content.header} />
                </div>

                <div className="mt-12 border-t-2 border-stone-950">
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

                    {!hasPublishedChannels ? (
                        <ContactEmptyState content={content} />
                    ) : null}
                </div>

                {content.availabilityNote ? (
                    <p className="mt-8 max-w-3xl text-sm font-semibold leading-6 text-stone-600">
                        {content.availabilityNote}
                    </p>
                ) : null}
            </div>
        </section>
    );
}

type ContactMethodProps = {
    method: ContactMethodContent;
};

function ContactMethod({ method }: ContactMethodProps) {
    const isExternal = method.href
        ? isExternalContactHref(method.href)
        : false;

    return (
        <div className="grid gap-3 border-b border-stone-300 py-7 sm:grid-cols-[minmax(10rem,0.6fr)_minmax(0,1.4fr)] sm:gap-8 sm:py-8">
            <dt className="pt-1 text-xs font-black uppercase tracking-[0.18em] text-red-700">
                {method.label}
            </dt>

            <dd>
                {method.href ? (
                    <a
                        href={method.href}
                        aria-label={method.ariaLabel}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="inline-flex min-h-11 items-center gap-2 text-xl font-black leading-tight tracking-[-0.04em] text-stone-950 underline decoration-red-700 decoration-2 underline-offset-4 outline-none transition hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none sm:text-2xl"
                    >
                        {method.value}
                        {isExternal ? <span aria-hidden="true">↗</span> : null}
                    </a>
                ) : (
                    <p className="text-xl font-black leading-tight tracking-[-0.04em] text-stone-950 sm:text-2xl">
                        {method.value}
                    </p>
                )}

                {method.description ? (
                    <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-stone-700">
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
        <section
            className="grid gap-3 border-b border-stone-300 py-7 sm:grid-cols-[minmax(10rem,0.6fr)_minmax(0,1.4fr)] sm:gap-8 sm:py-8"
            aria-labelledby="contact-social-heading"
        >
            <div>
                <h3
                    id="contact-social-heading"
                    className="pt-1 text-xs font-black uppercase tracking-[0.18em] text-red-700"
                >
                    {content.title}
                </h3>
            </div>

            <div>
                {content.description ? (
                    <p className="max-w-2xl text-sm font-semibold leading-6 text-stone-700">
                        {content.description}
                    </p>
                ) : null}

                <nav
                    className="mt-4 flex flex-wrap gap-x-7 gap-y-2"
                    aria-label={content.title}
                >
                    {content.links.map((link) => (
                        <SocialLink key={link.href} link={link} />
                    ))}
                </nav>
            </div>
        </section>
    );
}

type SocialLinkProps = {
    link: ContentLink;
};

function SocialLink({ link }: SocialLinkProps) {
    const isExternal = link.isExternal ?? isExternalContactHref(link.href);

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
    const isExternal = action
        ? (action.isExternal ?? isExternalContactHref(action.href))
        : false;

    return (
        <div className="border-b border-stone-300 py-8">
            <h3 className="text-2xl font-black leading-tight tracking-[-0.045em] text-stone-950">
                {content.emptyState.title}
            </h3>

            <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-stone-700">
                {content.emptyState.description}
            </p>

            {action ? (
                <a
                    href={action.href}
                    aria-label={action.ariaLabel}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-stone-950 underline decoration-red-700 decoration-2 underline-offset-4 outline-none transition hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none"
                >
                    {action.label}
                    <span aria-hidden="true">{isExternal ? "↗" : "→"}</span>
                </a>
            ) : null}
        </div>
    );
}