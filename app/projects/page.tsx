import { ContactCtaSection } from "@/components/home/contact-cta-section";
import { ProjectsGrid } from "@/components/projects";
import { PageHero } from "@/components/shared/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo";
import { PROJECTS_CONTENT } from "@/constants/projects";
import { BREADCRUMB_HOME, PAGE_SEO } from "@/constants/seo";
import { getAllProjects } from "@/lib/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: PAGE_SEO.projects.title,
  description: PAGE_SEO.projects.description,
  path: PAGE_SEO.projects.path,
  keywords: PAGE_SEO.projects.keywords,
});

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          BREADCRUMB_HOME,
          { name: "Projects", path: PAGE_SEO.projects.path },
        ]}
      />
      <PageHero
        eyebrow={PROJECTS_CONTENT.eyebrow}
        title={PROJECTS_CONTENT.title}
        description={PROJECTS_CONTENT.description}
        image="/images/projects/project-1.svg"
        imageAlt="Shree Chamunda Aluminium project portfolio"
        ariaLabel="Projects page hero"
      />
      <ProjectsGrid projects={projects} />
      <ContactCtaSection />
    </>
  );
}
