"use client";

import { m } from "framer-motion";

import { GALLERY_CATEGORIES } from "@/constants/gallery";
import { luxuryEase } from "@/lib/motion";
import type { GalleryCategory } from "@/types/gallery";
import { cn } from "@/lib/utils";

type GalleryFiltersProps = {
  activeCategory: GalleryCategory;
  onCategoryChange: (category: GalleryCategory) => void;
  className?: string;
};

export function GalleryFilters({
  activeCategory,
  onCategoryChange,
  className,
}: GalleryFiltersProps) {
  return (
    <div
      className={cn("flex flex-wrap justify-center gap-2", className)}
      role="toolbar"
      aria-label="Filter gallery by category"
    >
      {GALLERY_CATEGORIES.map((cat, index) => {
        const isActive = activeCategory === cat.value;

        return (
          <m.button
            key={cat.value}
            type="button"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.04, ease: luxuryEase }}
            onClick={() => onCategoryChange(cat.value)}
            aria-pressed={isActive}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-normal",
              "focus-visible:ring-brand-teal focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              isActive
                ? "bg-brand-teal text-brand-white shadow-sm"
                : "bg-brand-light-grey text-brand-charcoal hover:bg-brand-silver/30",
            )}
          >
            {cat.label}
          </m.button>
        );
      })}
    </div>
  );
}
