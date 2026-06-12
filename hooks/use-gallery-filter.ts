"use client";

import { useMemo, useState } from "react";

import { GALLERY_ITEMS } from "@/constants/gallery";
import { filterGalleryItems } from "@/lib/gallery";
import type { GalleryCategory, GalleryItem } from "@/types/gallery";

export function useGalleryFilter(initialCategory: GalleryCategory = "all") {
  const [category, setCategory] = useState<GalleryCategory>(initialCategory);

  const filteredItems = useMemo(
    () => filterGalleryItems(GALLERY_ITEMS, category),
    [category],
  );

  return {
    category,
    setCategory,
    filteredItems,
    totalCount: GALLERY_ITEMS.length,
  };
}

export type { GalleryItem };
