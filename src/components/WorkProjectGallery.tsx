import Image from "next/image";
import type { ContentImage } from "@/types/common";

type WorkProjectGalleryProps = {
  heading: string;
  images: ContentImage[];
};

export default function WorkProjectGallery({
  heading,
  images,
}: WorkProjectGalleryProps) {
  return (
    <section
      aria-labelledby="work-project-gallery-heading"
      className="mx-auto mt-16 max-w-5xl sm:mt-20"
    >
      <div aria-hidden="true" className="mb-8 h-1 w-14 bg-red-700" />
      <h2
        id="work-project-gallery-heading"
        className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] text-stone-950 sm:text-4xl"
      >
        {heading}
      </h2>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-10">
        {images.map((image) => (
          <figure key={image.src} className="min-w-0">
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
              <Image
                alt={image.isDecorative ? "" : image.alt}
                className="object-cover"
                fill
                sizes="(min-width: 1280px) 30rem, (min-width: 640px) 46vw, 100vw"
                src={image.src}
                style={{ objectPosition: image.position ?? "center" }}
              />
            </div>

            {image.caption || image.credit ? (
              <figcaption className="border-l-4 border-red-700 bg-white px-4 py-3 text-sm font-semibold leading-6 text-stone-700">
                {image.caption ? <span>{image.caption}</span> : null}
                {image.credit ? (
                  <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-stone-500">
                    {image.credit}
                  </span>
                ) : null}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </section>
  );
}
