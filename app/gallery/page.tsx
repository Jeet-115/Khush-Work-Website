import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Gallery",
  description:
    "View our gallery of aluminium installations, finishes, and architectural details.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <PlaceholderPage
      title="Gallery"
      description="Explore finishes, profiles, and installation details that define our craftsmanship."
    />
  );
}
