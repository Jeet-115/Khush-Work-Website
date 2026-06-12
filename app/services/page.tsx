import { ContactCtaSection } from "@/components/home/contact-cta-section";
import { ServicesGrid } from "@/components/services";
import { PageHero } from "@/components/shared/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo";
import { BREADCRUMB_HOME, PAGE_SEO } from "@/constants/seo";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: PAGE_SEO.services.title,
  description: PAGE_SEO.services.description,
  path: PAGE_SEO.services.path,
  keywords: PAGE_SEO.services.keywords,
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          BREADCRUMB_HOME,
          { name: "Services", path: PAGE_SEO.services.path },
        ]}
      />
      <PageHero
        eyebrow="Our Services"
        title="Complete Aluminium & Glass Solutions"
        description="Eight specialised disciplines. One commitment to architectural precision and premium craftsmanship."
        image="/images/services/aluminium-windows/hero.svg"
        imageAlt="Shree Chamunda Aluminium services overview"
        ariaLabel="Services page hero"
      />
      <ServicesGrid />
      <ContactCtaSection />
    </>
  );
}
