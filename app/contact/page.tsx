import { ContactSection } from "@/components/contact";
import { PageHero } from "@/components/shared/page-hero";
import { CONTACT_PAGE_CONTENT } from "@/constants/contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Request a free quote from Shree Chamunda Aluminium. Send an enquiry for aluminium windows, doors, glazing, and interior solutions across Gujarat.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={CONTACT_PAGE_CONTENT.eyebrow}
        title={CONTACT_PAGE_CONTENT.title}
        description={CONTACT_PAGE_CONTENT.description}
        image="/images/hero.svg"
        imageAlt="Contact Shree Chamunda Aluminium"
        ariaLabel="Contact page hero"
      />
      <ContactSection />
    </>
  );
}
