import type { SectionHeaderContent } from "@/types/content";

type SectionHeaderProps = {
  content: SectionHeaderContent;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeader({
  content,
  align = "left",
  tone = "light",
}: SectionHeaderProps) {
  const isCentered = align === "center";
  const isDark = tone === "dark";

  return (
    <div className={isCentered ? "mx-auto max-w-5xl text-center" : "max-w-5xl"}>
      {content.eyebrow ? (
        <p
          className={[
            "nakfe-eyebrow",
            isCentered ? "justify-center" : "justify-start",
            isDark ? "text-white/72" : "text-red-700",
          ].join(" ")}
        >
          {content.eyebrow}
        </p>
      ) : null}

      <h2
        className={[
          "mt-4 text-balance text-4xl font-black leading-[0.96] tracking-[-0.06em] sm:text-5xl lg:text-6xl",
          isDark ? "text-white" : "text-stone-950",
        ].join(" ")}
      >
        {content.title}
      </h2>

      {content.description ? (
        <p
          className={[
            "mt-6 max-w-4xl text-lg font-semibold leading-8 sm:text-xl",
            isCentered ? "mx-auto" : "",
            isDark ? "text-white/78" : "text-stone-700",
          ].join(" ")}
        >
          {content.description}
        </p>
      ) : null}
    </div>
  );
}
