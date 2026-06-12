"use client";

import { m } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";

import { OptimizedImage } from "@/components/shared/optimized-image";
import { luxuryEase } from "@/lib/motion";

const GalleryLightbox = dynamic(
  () =>
    import("@/components/gallery/gallery-lightbox").then((module) => ({
      default: module.GalleryLightbox,
    })),
  { ssr: false },
);
import type { GalleryItem } from "@/types/gallery";
import { cn } from "@/lib/utils";

type GalleryMasonryProps = {
  items: GalleryItem[];
};

export function GalleryMasonry({ items }: GalleryMasonryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (items.length === 0) {
    return (
      <p
        className="text-muted-foreground py-16 text-center text-base"
        role="status"
      >
        No images found for this category.
      </p>
    );
  }

  return (
    <>
      <div
        className="columns-1 gap-4 sm:columns-2 sm:gap-6 lg:columns-3 xl:columns-4"
        role="list"
        aria-label="Gallery images"
      >
        {items.map((item, index) => (
          <m.div
            key={item.id}
            role="listitem"
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.45,
              delay: Math.min(index * 0.05, 0.35),
              ease: luxuryEase,
            }}
            className="mb-4 break-inside-avoid sm:mb-6"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(index)}
              className={cn(
                "group relative w-full overflow-hidden rounded-xl",
                "focus-visible:ring-brand-teal focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              )}
              aria-label={`View ${item.title}`}
            >
              <div
                className="relative w-full"
                style={{ aspectRatio: `${item.width} / ${item.height}` }}
              >
                <OptimizedImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizePreset="gallery"
                  priority={index < 2}
                  className="object-cover transition-transform duration-slow group-hover:scale-105"
                />
                <div className="from-brand-charcoal/70 absolute inset-0 flex flex-col justify-end bg-gradient-to-t to-transparent p-4 opacity-0 transition-opacity duration-normal group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="font-heading text-brand-white text-left text-sm font-medium">
                    {item.title}
                  </span>
                </div>
              </div>
            </button>
          </m.div>
        ))}
      </div>

      {lightboxIndex !== null ? (
        <GalleryLightbox
          items={items}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      ) : null}
    </>
  );
}
