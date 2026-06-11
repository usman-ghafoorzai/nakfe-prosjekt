import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import type {
    ContactMethodContent,
    ContactSectionContent,
    SocialLinkContent,
} from "@/types/content";

type ContactSectionProps = {
    content: ContactSectionContent;
};

export default function ContactSection({ content }: ContactSectionProps) {
    return (
        <section className="border-b border-gray-200 bg-gray-50">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.85fr]">
                <div>
                    <SectionHeader content={content.header} />

                    {content.finalNote ? (
                        <p className="mt-6 max-w-2xl text-sm leading-6 text-gray-600">
                            {content.finalNote}
                        </p>
                    ) : null}
                </div>

                <div className="space-y-6">
                    {content.methods.length > 0 ? (
                        <ul className="grid gap-4">
                            {content.methods.map((method) => (
                                <li key={method.label}>
                                    <ContactMethodCard method={method} />
                                </li>
                            ))}
                        </ul>
                    ) : null}

                    {content.socialLinks.length > 0 ? (
                        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-950">
                                Sosiale medier
                            </h3>

                            <ul className="mt-4 flex flex-wrap gap-3">
                                {content.socialLinks.map((link) => (
                                    <li key={link.href}>
                                        <SocialLink link={link} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}

type ContactMethodCardProps = {
    method: ContactMethodContent;
};

function ContactMethodCard({ method }: ContactMethodCardProps) {
    const content = (
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                {method.label}
            </p>

            <p className="mt-3 text-lg font-semibold text-gray-950">
                {method.value}
            </p>

            {method.description ? (
                <p className="mt-3 text-sm leading-6 text-gray-600">
                    {method.description}
                </p>
            ) : null}
        </div>
    );

    if (!method.href) {
        return content;
    }

    return (
        <Link
            href={method.href}
            className="block rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
        >
            {content}
        </Link>
    );
}

type SocialLinkProps = {
    link: SocialLinkContent;
};

function SocialLink({ link }: SocialLinkProps) {
    const isExternal = link.href.startsWith("http");

    return (
        <a
            href={link.href}
            aria-label={link.ariaLabel}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-gray-300 bg-white px-5 text-sm font-semibold text-gray-950 transition duration-200 ease-out hover:border-gray-950 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
        >
            {link.label}
        </a>
    );
}