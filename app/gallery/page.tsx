import { ContactCtaSection } from "@/components/home/contact-cta-section";
import { GallerySection } from "@/components/gallery";
import { PageHero } from "@/components/shared/page-hero";
import { GALLERY_CONTENT } from "@/constants/gallery";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Gallery",
  description:
    "Browse our premium gallery of aluminium windows, sliding doors, glass partitions, facades, and interior installations across Gujarat.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow={GALLERY_CONTENT.eyebrow}
        title="Visual Portfolio"
        description="A curated collection of our finest aluminium and glass installations."
        image="/images/gallery/gw-01.svg"
        imageAlt="Shree Chamunda Aluminium project gallery"
        ariaLabel="Gallery page hero"
      />
      <GallerySection />
      <ContactCtaSection />
    </>
  );
}
