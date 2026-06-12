import { ContactCtaSection } from "@/components/home/contact-cta-section";
import { GalleryJsonLd } from "@/components/gallery/gallery-json-ld";
import { GallerySection } from "@/components/gallery";
import { PageHero } from "@/components/shared/page-hero";
import { GALLERY_CONTENT, GALLERY_SEO_KEYWORDS } from "@/constants/gallery";
import { SITE_NAME } from "@/constants/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = {
  ...createPageMetadata({
    title: "Gallery",
    description:
      "Browse our premium gallery of aluminium windows, sliding doors, glass partitions, ACP cladding, structural glazing, false ceiling, and interior work across Gujarat.",
    path: "/gallery",
  }),
  keywords: [...GALLERY_SEO_KEYWORDS, SITE_NAME],
};

export default function GalleryPage() {
  return (
    <>
      <GalleryJsonLd />
      <PageHero
        eyebrow={GALLERY_CONTENT.eyebrow}
        title="Visual Portfolio"
        description="A curated collection of our finest aluminium and glass installations."
        image="/images/gallery/aluminium-windows-01.svg"
        imageAlt="Shree Chamunda Aluminium project gallery"
        ariaLabel="Gallery page hero"
      />
      <GallerySection />
      <ContactCtaSection />
    </>
  );
}
