import { GALLERY_ITEMS } from "@/constants/gallery";
import { SITE_NAME, SITE_URL } from "@/constants/site";
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

export function getGalleryJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${SITE_NAME} Project Gallery`,
    description:
      "Premium aluminium windows, sliding doors, glass partitions, ACP cladding, structural glazing, false ceiling, and interior work.",
    url: `${SITE_URL}/gallery`,
    image: GALLERY_ITEMS.map((item) => `${SITE_URL}${item.src}`),
    numberOfItems: GALLERY_ITEMS.length,
  };
}
