import type { SectionHeaderContent } from "@/types/content";

type SectionHeaderProps = {
    content: SectionHeaderContent;
};

export default function SectionHeader({ content }: SectionHeaderProps) {
    return (
        <div className="max-w-3xl">
            {content.eyebrow ? (
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                    {content.eyebrow}
                </p>
            ) : null}

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                {content.title}
            </h2>

            {content.description ? (
                <p className="mt-4 text-lg leading-8 text-gray-600">
                    {content.description}
                </p>
            ) : null}
        </div>
    );
}