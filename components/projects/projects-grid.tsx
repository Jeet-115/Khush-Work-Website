"use client";

import { m } from "framer-motion";

import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getProjectCardProps } from "@/lib/projects";
import type { Project } from "@/types/projects";
import { luxuryEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProjectsGridProps = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <Section spacing="lg" aria-label="All projects">
      <Container>
        <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const card = getProjectCardProps(project);

            return (
              <m.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: luxuryEase,
                }}
                className={cn(card.featured && "md:row-span-2")}
              >
                <ProjectCard {...card} />
              </m.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
