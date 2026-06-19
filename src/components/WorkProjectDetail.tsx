import Link from "next/link";
import WorkProjectMedia from "@/components/WorkProjectMedia";
import type { WorkProjectContent } from "@/types/content";

type WorkProjectDetailProps = {
  project: WorkProjectContent;
  countryLabel: string;
};

export default function WorkProjectDetail({
  project,
  countryLabel,
}: WorkProjectDetailProps) {
  return (
    <article className="bg-[#f7f1e8] pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Link
          className="inline-flex min-h-11 items-center gap-3 text-sm font-black uppercase tracking-[0.14em] text-stone-700 outline-none transition duration-200 ease-out hover:text-red-700 focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-4 motion-reduce:transition-none"
          href="/vart-arbeid"
        >
          <span aria-hidden="true">←</span>
          Vårt arbeid
        </Link>

        <header className="mt-10 max-w-5xl sm:mt-12">
          <p className="nakfe-eyebrow text-red-700">{countryLabel}</p>
          <h1 className="mt-5 text-balance text-5xl font-black leading-[0.92] tracking-[-0.075em] text-stone-950 sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mt-7 max-w-3xl text-xl font-semibold leading-8 text-stone-700 sm:text-2xl sm:leading-9">
            {project.summary}
          </p>
        </header>

        <div className="mt-12 sm:mt-16">
          <div className="relative aspect-[16/9] overflow-hidden bg-stone-200">
            <WorkProjectMedia project={project} />
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl sm:mt-20">
          <div aria-hidden="true" className="mb-8 h-1 w-14 bg-red-700" />
          <div className="space-y-6 text-lg font-medium leading-8 text-stone-800 sm:text-xl sm:leading-9">
            {project.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
