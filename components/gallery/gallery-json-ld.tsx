import { JsonLdScript } from "@/components/seo/json-ld-script";
import { getGalleryJsonLd } from "@/lib/gallery";

export function GalleryJsonLd() {
  return <JsonLdScript data={getGalleryJsonLd()} />;
}
