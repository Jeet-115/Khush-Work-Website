import { JsonLdScript } from "@/components/seo/json-ld-script";
import { getProjectJsonLd } from "@/lib/projects";
import type { Project } from "@/types/projects";

type ProjectJsonLdProps = {
  project: Project;
};

export function ProjectJsonLd({ project }: ProjectJsonLdProps) {
  return <JsonLdScript data={getProjectJsonLd(project)} />;
}
