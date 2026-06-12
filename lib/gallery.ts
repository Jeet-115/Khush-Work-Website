import { GALLERY_ITEMS } from "@/constants/gallery";
import type { GalleryCategory, GalleryItem } from "@/types/gallery";

export function getAllGalleryItems(): GalleryItem[] {
  return GALLERY_ITEMS;
}

export function filterGalleryItems(
  items: GalleryItem[],
  category: GalleryCategory,
): GalleryItem[] {
  if (category === "all") return items;
  return items.filter((item) => item.category === category);
}

export function getGalleryItemIndex(items: GalleryItem[], id: string): number {
  return items.findIndex((item) => item.id === id);
}
