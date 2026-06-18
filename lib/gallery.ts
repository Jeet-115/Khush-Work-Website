import { SERVICES } from "@/constants/services";
import { WORK_SERVICE_IMAGES } from "@/constants/work-services-images.generated";
import { SITE_NAME, SITE_URL } from "@/constants/site";
import type { GalleryCategory, GalleryItem } from "@/types/gallery";
import type { ServiceSlug } from "@/types/services";

const GALLERY_ASPECTS = [
  { width: 800, height: 1000 },
  { width: 800, height: 600 },
  { width: 800, height: 600 },
  { width: 800, height: 1000 },
] as const;

function buildGalleryItemsFromServices(): GalleryItem[] {
  const items: GalleryItem[] = [];

  for (const service of SERVICES) {
    const images = WORK_SERVICE_IMAGES[service.slug as ServiceSlug];

    if (!images) {
      continue;
    }

    images.gallery.forEach((image, index) => {
      const aspect = GALLERY_ASPECTS[index % GALLERY_ASPECTS.length];

      items.push({
        id: `${service.slug}-${String(index + 1).padStart(2, "0")}`,
        title: `${service.title} — Photo ${index + 1}`,
        category: service.slug as Exclude<GalleryCategory, "all">,
        alt: image.alt,
        src: image.src,
        width: aspect.width,
        height: aspect.height,
      });
    });
  }

  return items;
}

const GALLERY_ITEMS = buildGalleryItemsFromServices();

export function getAllGalleryItems(): GalleryItem[] {
  return GALLERY_ITEMS;
}

export function getGalleryHeroImage(): { src: string; alt: string } {
  const first = GALLERY_ITEMS[0];

  return {
    src: first?.src ?? WORK_SERVICE_IMAGES["aluminium-windows"].hero,
    alt: first?.alt ?? "Shree Chamunda Aluminium project gallery",
  };
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
      "Premium aluminium windows, sliding doors, glass partitions, ACP cladding, structural glazing, and interior work.",
    url: `${SITE_URL}/gallery`,
    image: GALLERY_ITEMS.map((item) => `${SITE_URL}${item.src}`),
    numberOfItems: GALLERY_ITEMS.length,
  };
}
