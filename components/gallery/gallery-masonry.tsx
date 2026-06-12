"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import { getGalleryImageSrc } from "@/lib/cloudinary";
import { luxuryEase } from "@/lib/motion";
import type { GalleryItem } from "@/types/gallery";
import { cn } from "@/lib/utils";

type GalleryMasonryProps = {
  items: GalleryItem[];
};

export function GalleryMasonry({ items }: GalleryMasonryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (items.length === 0) {
    return (
      <p className="text-muted-foreground py-16 text-center text-base">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{
              duration: 0.4,
              delay: Math.min(index * 0.04, 0.3),
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
                <Image
                  src={getGalleryImageSrc(item, {
                    width: 800,
                    quality: "auto",
                  })}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading={index < 4 ? "eager" : "lazy"}
                  className="duration-slow object-cover transition-transform group-hover:scale-105"
                />
                <div className="from-brand-charcoal/70 duration-normal absolute inset-0 flex flex-col justify-end bg-gradient-to-t to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="font-heading text-brand-white text-left text-sm font-medium">
                    {item.title}
                  </span>
                </div>
              </div>
            </button>
          </m.div>
        ))}
      </div>

      <GalleryLightbox
        items={items}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
