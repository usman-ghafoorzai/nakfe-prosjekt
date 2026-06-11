import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import type { TextSectionContent } from "@/types/content";

type TextSectionProps = {
    content: TextSectionContent;
};

export default function TextSection({ content }: TextSectionProps) {
    const hasImage = Boolean(content.image?.src);

    return (
        <section className="border-b border-gray-200 bg-white">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div>
                    <SectionHeader content={content.header} />

                    {content.body.length > 0 ? (
                        <div className="mt-6 space-y-4 text-base leading-7 text-gray-600">
                            {content.body.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    ) : null}

                    {content.action ? (
                        <div className="mt-8">
                            <Link
                                href={content.action.href}
                                aria-label={content.action.ariaLabel}
                                className="inline-flex min-h-11 items-center justify-center rounded-full border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-950 transition duration-200 ease-out hover:border-gray-950 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
                            >
                                {content.action.label}
                            </Link>
                        </div>
                    ) : null}
                </div>

                {hasImage ? (
                    <div className="relative min-h-[18rem] overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm sm:min-h-[24rem]">
                        <Image
                            src={content.image!.src}
                            alt={content.image!.isDecorative ? "" : content.image!.alt}
                            fill
                            sizes="(min-width: 1024px) 34rem, 100vw"
                            className="object-cover"
                            style={{ objectPosition: content.image!.position ?? "center" }}
                        />
                    </div>
                ) : null}
            </div>
        </section>
    );
}