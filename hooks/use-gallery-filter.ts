"use client";

import { useMemo, useState } from "react";

import { filterGalleryItems, getAllGalleryItems } from "@/lib/gallery";
import type { GalleryCategory, GalleryItem } from "@/types/gallery";

const GALLERY_ITEMS = getAllGalleryItems();

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
