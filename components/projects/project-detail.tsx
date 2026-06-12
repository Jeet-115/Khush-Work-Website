import { ContactCtaSection } from "@/components/home/contact-cta-section";
import { ProjectCompletion } from "@/components/projects/project-completion";
import { ProjectDescription } from "@/components/projects/project-description";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectJsonLd } from "@/components/projects/project-json-ld";
import { ProjectServices } from "@/components/projects/project-services";
import type { Project } from "@/types/projects";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      <ProjectJsonLd project={project} />
      <ProjectHero project={project} />
      <ProjectDescription project={project} />
      <ProjectGallery project={project} />
      <ProjectServices project={project} />
      <ProjectCompletion project={project} />
      <ContactCtaSection />
    </>
  );
}
