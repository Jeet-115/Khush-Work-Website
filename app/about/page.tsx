import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Shree Chamunda Aluminium — our heritage, craftsmanship, and commitment to architectural excellence.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About Us"
      description="Discover our story, values, and the team behind Gujarat's trusted aluminium fabrication experts."
    />
  );
}
