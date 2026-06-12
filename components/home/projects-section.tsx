"use client";

import { m } from "framer-motion";
import Link from "next/link";

import { ProjectCard } from "@/components/cards/project-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PROJECTS_CONTENT } from "@/constants/projects";
import { getFeaturedProjects, getProjectCardProps } from "@/lib/projects";

export function ProjectsSection() {
  const featuredProjects = getFeaturedProjects().map(getProjectCardProps);

  return (
    <Section spacing="lg" background="muted" aria-label="Featured projects">
      <Container>
        <SectionHeader
          eyebrow={PROJECTS_CONTENT.eyebrow}
          title={PROJECTS_CONTENT.title}
          description={PROJECTS_CONTENT.description}
        />

        <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <m.div
              key={project.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={project.featured ? "md:row-span-2" : undefined}
            >
              <ProjectCard {...project} />
            </m.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="charcoal"
            size="lg"
            render={<Link href="/projects" />}
          >
            View All Projects
          </Button>
        </div>
      </Container>
    </Section>
  );
}
