"use client";

import { m } from "framer-motion";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Service } from "@/types/services";
import { luxuryEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ServiceGalleryProps = {
  service: Service;
};

export function ServiceGallery({ service }: ServiceGalleryProps) {
  return (
    <Section spacing="lg" background="muted" aria-label="Service gallery">
      <Container>
        <div className="mb-12 text-center md:mb-16">
          <p className="text-brand-teal mb-3 text-sm font-medium tracking-[0.2em] uppercase">
            Gallery
          </p>
          <h2 className="font-heading text-brand-charcoal text-3xl font-semibold tracking-tight md:text-4xl">
            {service.title} in Action
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {service.gallery.map((image, index) => (
            <m.figure
              key={image.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: luxuryEase,
              }}
              className={cn(
                "relative overflow-hidden rounded-xl",
                index === 0 && "col-span-2 row-span-2 aspect-square",
                index !== 0 && "aspect-[4/3]",
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="duration-slow object-cover transition-transform hover:scale-105"
              />
            </m.figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
