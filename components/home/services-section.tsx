import Link from "next/link";

import { ServiceCard } from "@/components/cards/service-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SERVICES } from "@/constants/home";

export function ServicesSection() {
  return (
    <Section spacing="lg" aria-label="Our services" defer>
      <Container>
        <SectionHeader
          eyebrow="Our Services"
          title="Comprehensive Aluminium & Interior Solutions"
          description="From bespoke window systems to full-scale facade engineering — precision delivered across every discipline."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            render={<Link href="/services" />}
          >
            View All Services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
