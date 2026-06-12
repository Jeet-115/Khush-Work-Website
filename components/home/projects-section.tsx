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
    <Section spacing="lg" background="muted" aria-label="Featured projects" defer>
      <Container>
        <SectionHeader
          eyebrow={PROJECTS_CONTENT.eyebrow}
          title={PROJECTS_CONTENT.title}
          description={PROJECTS_CONTENT.description}
        />

        <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.href}
              className={project.featured ? "md:row-span-2" : undefined}
            >
              <ProjectCard {...project} />
            </div>
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
