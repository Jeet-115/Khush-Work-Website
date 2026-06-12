import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore our aluminium windows, doors, sliding systems, facades, and custom fabrication services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PlaceholderPage
      title="Our Services"
      description="From bespoke window systems to large-scale facade installations — precision engineering for every project."
    />
  );
}
