import { ContactCtaSection } from "@/components/home/contact-cta-section";
import { ServicesGrid } from "@/components/services";
import { PageHero } from "@/components/shared/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore premium aluminium windows, sliding doors, glass partitions, ACP cladding, structural glazing, office partitions, false ceiling, and interior work by Shree Chamunda Aluminium.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
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
