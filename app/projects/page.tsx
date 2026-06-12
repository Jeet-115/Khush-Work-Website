import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Browse completed residential and commercial aluminium projects by Shree Chamunda Aluminium.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PlaceholderPage
      title="Our Projects"
      description="A curated portfolio of architectural aluminium work across residential towers, villas, and commercial landmarks."
    />
  );
}
