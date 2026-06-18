"use client";

import { m } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Service } from "@/types/services";
import { luxuryEase } from "@/lib/motion";

type ServiceFeaturesProps = {
  service: Service;
};

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <Section spacing="lg" aria-label="Service features">
      <Container>
        <div className="mb-12 text-center md:mb-16">
          <p className="text-brand-teal-ink mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
            Features
          </p>
          <h2 className="font-heading text-brand-charcoal text-3xl font-semibold tracking-tight md:text-4xl">
            What&apos;s Included
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((feature, index) => (
            <m.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: luxuryEase,
              }}
              className="border-brand-light-grey hover:border-brand-teal/30 duration-normal rounded-xl border p-6 transition-colors"
            >
              <h3 className="font-heading text-brand-charcoal mb-2 font-medium">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {feature.description}
              </p>
            </m.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
