"use client";

import { m } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Service } from "@/types/services";
import { luxuryEase, slideInLeft } from "@/lib/motion";

type ServiceOverviewProps = {
  service: Service;
};

export function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <Section spacing="lg" aria-label="Service overview">
      <Container>
        <m.div
          {...slideInLeft}
          transition={{ duration: 0.6, ease: luxuryEase }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-brand-teal-ink mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
            Overview
          </p>
          <h2 className="font-heading text-brand-charcoal mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
            {service.overview.title}
          </h2>
          <div className="space-y-5 text-left md:text-center">
            {service.overview.paragraphs.map((paragraph, index) => (
              <m.p
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: luxuryEase,
                }}
                className="text-muted-foreground text-base leading-relaxed md:text-lg"
              >
                {paragraph}
              </m.p>
            ))}
          </div>
        </m.div>
      </Container>
    </Section>
  );
}
