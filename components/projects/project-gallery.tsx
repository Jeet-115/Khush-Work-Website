"use client";

import { m } from "framer-motion";
import { OptimizedImage } from "@/components/shared/optimized-image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Project } from "@/types/projects";
import { luxuryEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
  project: Project;
};

export function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <Section spacing="lg" background="muted" aria-label="Project gallery" defer>
      <Container>
        <div className="mb-12 text-center md:mb-16">
          <p className="text-brand-teal-ink mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
            Gallery
          </p>
          <h2 className="font-heading text-brand-charcoal text-3xl font-semibold tracking-tight md:text-4xl">
            Project Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {project.gallery.map((image, index) => (
            <m.figure
              key={image.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.02, 0.24),
                ease: luxuryEase,
              }}
              className={cn(
                "relative overflow-hidden rounded-xl",
                index === 0 && "col-span-2 aspect-[16/9] md:col-span-2",
                index !== 0 && "aspect-[4/3]",
              )}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                sizePreset="gallery"
                className="duration-slow object-cover transition-transform hover:scale-105"
              />
            </m.figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
