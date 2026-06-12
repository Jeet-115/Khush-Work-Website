import { ContactCtaSection } from "@/components/home/contact-cta-section";
import { ProjectCompletion } from "@/components/projects/project-completion";
import { ProjectDescription } from "@/components/projects/project-description";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectJsonLd } from "@/components/projects/project-json-ld";
import { ProjectServices } from "@/components/projects/project-services";
import { BreadcrumbJsonLd } from "@/components/seo";
import { BREADCRUMB_HOME, PAGE_SEO } from "@/constants/seo";
import type { Project } from "@/types/projects";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      <ProjectJsonLd project={project} />
      <BreadcrumbJsonLd
        items={[
          BREADCRUMB_HOME,
          { name: "Projects", path: PAGE_SEO.projects.path },
          {
            name: project.name,
            path: `/projects/${project.slug}`,
          },
        ]}
      />
      <ProjectHero project={project} />
      <ProjectDescription project={project} />
      <ProjectGallery project={project} />
      <ProjectServices project={project} />
      <ProjectCompletion project={project} />
      <ContactCtaSection />
    </>
  );
}
