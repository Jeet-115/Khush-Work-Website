"use client";

import { m } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Service } from "@/types/services";
import { luxuryEase } from "@/lib/motion";

type ServiceBenefitsProps = {
  service: Service;
};

export function ServiceBenefits({ service }: ServiceBenefitsProps) {
  return (
    <Section spacing="lg" background="muted" aria-label="Service benefits">
      <Container>
        <div className="mb-12 text-center md:mb-16">
          <p className="text-brand-teal mb-3 text-sm font-medium tracking-[0.2em] uppercase">
            Benefits
          </p>
          <h2 className="font-heading text-brand-charcoal text-3xl font-semibold tracking-tight md:text-4xl">
            Why Choose Our {service.title}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((benefit, index) => (
            <m.article
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: luxuryEase,
              }}
              className="bg-brand-white rounded-xl border p-6"
            >
              <CheckCircle2
                className="text-brand-teal mb-4 size-6"
                aria-hidden="true"
              />
              <h3 className="font-heading text-brand-charcoal mb-2 font-semibold">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </m.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
