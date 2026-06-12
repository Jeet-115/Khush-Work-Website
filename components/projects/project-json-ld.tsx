import { getProjectJsonLd } from "@/lib/projects";
import type { Project } from "@/types/projects";

type ProjectJsonLdProps = {
  project: Project;
};

export function ProjectJsonLd({ project }: ProjectJsonLdProps) {
  const schema = getProjectJsonLd(project);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
