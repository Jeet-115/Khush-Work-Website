import { GalleryJsonLd } from "@/components/gallery/gallery-json-ld";
import { GallerySection } from "@/components/gallery";
import { PageHero } from "@/components/shared/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo";
import { GALLERY_CONTENT } from "@/constants/gallery";
import { BREADCRUMB_HOME, PAGE_SEO } from "@/constants/seo";
import { getGalleryHeroImage } from "@/lib/gallery";
import { createPageMetadata } from "@/lib/metadata";
import { DynamicContactCtaSection } from "@/lib/performance";

const galleryHero = getGalleryHeroImage();

export const metadata = createPageMetadata({
  title: PAGE_SEO.gallery.title,
  description: PAGE_SEO.gallery.description,
  path: PAGE_SEO.gallery.path,
  keywords: PAGE_SEO.gallery.keywords,
});

export default function GalleryPage() {
  return (
    <>
      <GalleryJsonLd />
      <BreadcrumbJsonLd
        items={[
          BREADCRUMB_HOME,
          { name: "Gallery", path: PAGE_SEO.gallery.path },
        ]}
      />
      <PageHero
        eyebrow={GALLERY_CONTENT.eyebrow}
        title="Visual Portfolio"
        description="A curated collection of our finest aluminium and glass installations."
        image={galleryHero.src}
        imageAlt={galleryHero.alt}
        ariaLabel="Gallery page hero"
      />
      <GallerySection />
      <DynamicContactCtaSection />
    </>
  );
}
