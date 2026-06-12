import { ContactCtaSection } from "@/components/home/contact-cta-section";
import { ProjectsGrid } from "@/components/projects";
import { PageHero } from "@/components/shared/page-hero";
import { PROJECTS_CONTENT } from "@/constants/projects";
import { getAllProjects } from "@/lib/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Browse completed residential and commercial aluminium projects by Shree Chamunda Aluminium across Gujarat.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
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
