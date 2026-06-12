import { getGalleryJsonLd } from "@/lib/gallery";

export function GalleryJsonLd() {
  const schema = getGalleryJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
