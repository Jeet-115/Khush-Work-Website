"use client";

import { m } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Project } from "@/types/projects";
import { luxuryEase } from "@/lib/motion";

type ProjectDescriptionProps = {
  project: Project;
};

export function ProjectDescription({ project }: ProjectDescriptionProps) {
  return (
    <Section spacing="lg" aria-label="Project description">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: luxuryEase }}
          className="mx-auto max-w-3xl"
        >
          <p className="text-brand-teal mb-3 text-sm font-medium tracking-[0.2em] uppercase">
            Project Overview
          </p>
          <h2 className="font-heading text-brand-charcoal mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
            {project.shortDescription}
          </h2>
          <div className="space-y-5">
            {project.description.map((paragraph, index) => (
              <m.p
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                  ease: luxuryEase,
                }}
                className="text-muted-foreground text-base leading-relaxed md:text-lg"
              >
                {paragraph}
              </m.p>
            ))}
          </div>
        </m.div>
      </Container>
    </Section>
  );
}
