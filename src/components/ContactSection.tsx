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
  const publishedSocialLinks = content.socialLinks.filter((link) => link.href);

  return (
    <section className="nakfe-section bg-[#f7f1e8]">
      <div className="absolute right-[-5rem] top-10 h-48 w-48 rotate-45 border-[1.8rem] border-red-700/10" aria-hidden="true" />
      <div className="nakfe-container grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.78fr)] lg:items-start lg:py-24">
        <div>
          <SectionHeader content={content.header} />

          {content.finalNote ? (
            <p className="mt-8 max-w-2xl border-l-[10px] border-red-700 bg-white px-5 py-4 text-base font-semibold leading-7 text-stone-700 shadow-sm shadow-stone-950/5">
              {content.finalNote}
            </p>
          ) : null}
        </div>

        <div className="space-y-5">
          {content.methods.length > 0 ? (
            <ul className="grid gap-4">
              {content.methods.map((method) => (
                <li key={method.label}>
                  <ContactMethodCard method={method} />
                </li>
              ))}
            </ul>
          ) : null}

          {publishedSocialLinks.length > 0 ? (
            <div className="border-l-[12px] border-red-700 bg-white p-6 shadow-sm shadow-stone-950/5">
              <h3 className="text-3xl font-black leading-none tracking-[-0.055em] text-stone-950">
                Sosiale medier
              </h3>

              <ul className="mt-5 flex flex-wrap gap-3">
                {publishedSocialLinks.map((link) => (
                  <li key={`${link.label}-${link.href}`}>
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
    <div className="group border-l-[12px] border-red-700 bg-white p-6 shadow-sm shadow-stone-950/5 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-950/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700">
        {method.label}
      </p>

      <p className="mt-4 text-2xl font-black leading-tight tracking-[-0.045em] text-stone-950">
        {method.value}
      </p>

      {method.description ? (
        <p className="mt-3 text-sm font-semibold leading-6 text-stone-700">
          {method.description}
        </p>
      ) : null}
    </div>
  );

  if (!method.href) {
    return content;
  }

  return (
    <Link href={method.href} className="block outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4">
      {content}
    </Link>
  );
}

type SocialLinkProps = {
  link: SocialLinkContent;
};

function SocialLink({ link }: SocialLinkProps) {
  if (!link.href) {
    return null;
  }

  const isExternal = link.href.startsWith("http");

  return (
    <a
      href={link.href}
      aria-label={link.ariaLabel}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="nakfe-button-secondary"
    >
      {link.label}
      <span aria-hidden="true">{isExternal ? "↗" : "→"}</span>
    </a>
  );
}
