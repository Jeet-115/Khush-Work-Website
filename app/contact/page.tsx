import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Shree Chamunda Aluminium for a free quote on your next project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact Us"
      description="Request a free quote or schedule a consultation with our aluminium specialists."
    />
  );
}
