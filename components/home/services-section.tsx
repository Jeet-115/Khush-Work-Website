"use client";

import { m } from "framer-motion";

import { ServiceCard } from "@/components/cards/service-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SERVICES } from "@/constants/home";
import Link from "next/link";

export function ServicesSection() {
  return (
    <Section spacing="lg" aria-label="Our services">
      <Container>
        <SectionHeader
          eyebrow="Our Services"
          title="Comprehensive Aluminium & Interior Solutions"
          description="From bespoke window systems to full-scale facade engineering — precision delivered across every discipline."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service, index) => (
            <m.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ServiceCard {...service} />
            </m.div>
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
