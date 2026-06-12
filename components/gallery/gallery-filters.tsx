"use client";

import { GALLERY_CATEGORIES } from "@/constants/gallery";
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
      role="group"
      aria-label="Filter gallery by category"
    >
      {GALLERY_CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.value;

        return (
          <button
            key={cat.value}
            type="button"
            onClick={() => onCategoryChange(cat.value)}
            aria-pressed={isActive}
            className={cn(
              "duration-normal rounded-full px-4 py-2 text-sm font-medium transition-all",
              "focus-visible:ring-brand-teal focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              isActive
                ? "bg-brand-teal text-brand-white shadow-sm"
                : "bg-brand-light-grey text-brand-charcoal hover:bg-brand-silver/30",
            )}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
