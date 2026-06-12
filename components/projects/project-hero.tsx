"use client";

import { m } from "framer-motion";
import { MapPin } from "lucide-react";
import { OptimizedImage } from "@/components/shared/optimized-image";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import type { Project } from "@/types/projects";
import { luxuryEase } from "@/lib/motion";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section
      className="relative flex min-h-[50vh] items-end overflow-hidden md:min-h-[60vh]"
      aria-label={`${project.name} hero`}
    >
      <div className="absolute inset-0">
        <div className="from-brand-charcoal via-brand-charcoal/70 to-brand-teal/20 absolute inset-0 z-10 bg-gradient-to-t" />
        <OptimizedImage
          src={project.coverImage}
          alt={project.name}
          fill
          priority
          sizePreset="hero"
          className="object-cover"
        />
      </div>

      <Container className="relative z-20 py-16 md:py-24">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: luxuryEase }}
          className="max-w-3xl"
        >
          <Badge
            variant="teal"
            className="bg-brand-teal/20 text-brand-white mb-4 backdrop-blur-sm"
          >
            {project.category}
          </Badge>
          <h1 className="font-heading text-brand-white mb-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            {project.name}
          </h1>
          <p className="text-brand-silver flex items-center gap-2 text-base md:text-lg">
            <MapPin className="size-5 shrink-0" aria-hidden="true" />
            {project.location}
          </p>
        </m.div>
      </Container>
    </section>
  );
}
