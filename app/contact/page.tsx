import { ContactSection } from "@/components/contact";
import { PageHero } from "@/components/shared/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo";
import { CONTACT_PAGE_CONTENT } from "@/constants/contact";
import { BREADCRUMB_HOME, PAGE_SEO } from "@/constants/seo";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  path: PAGE_SEO.contact.path,
  keywords: PAGE_SEO.contact.keywords,
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          BREADCRUMB_HOME,
          { name: "Contact", path: PAGE_SEO.contact.path },
        ]}
      />
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
