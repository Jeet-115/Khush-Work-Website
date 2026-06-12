"use client";

import { AnimatePresence } from "framer-motion";

import { GalleryFilters } from "@/components/gallery/gallery-filters";
import { GalleryMasonry } from "@/components/gallery/gallery-masonry";
import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { GALLERY_CONTENT } from "@/constants/gallery";
import { useGalleryFilter } from "@/hooks/use-gallery-filter";

export function GallerySection() {
  const { category, setCategory, filteredItems } = useGalleryFilter();

  return (
    <Section spacing="lg" aria-label="Photo gallery">
      <Container>
        <SectionHeader
          eyebrow={GALLERY_CONTENT.eyebrow}
          title={GALLERY_CONTENT.title}
          description={GALLERY_CONTENT.description}
        />

        <GalleryFilters
          activeCategory={category}
          onCategoryChange={setCategory}
          className="mb-12 md:mb-16"
        />

        <AnimatePresence mode="wait">
          <GalleryMasonry key={category} items={filteredItems} />
        </AnimatePresence>
      </Container>
    </Section>
  );
}
