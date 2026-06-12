"use client";

import { m } from "framer-motion";

import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { VALUES, VALUES_CONTENT } from "@/constants/about";
import { luxuryEase } from "@/lib/motion";

export function ValuesSection() {
  return (
    <Section spacing="lg" background="muted" aria-label="Our values">
      <Container>
        <SectionHeader
          eyebrow={VALUES_CONTENT.eyebrow}
          title={VALUES_CONTENT.title}
          description={VALUES_CONTENT.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, index) => {
            const Icon = value.icon;

            return (
              <m.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: luxuryEase,
                }}
                className="bg-brand-white shadow-card hover:shadow-luxury group duration-normal rounded-xl border p-8 transition-shadow"
              >
                <div className="bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-white duration-normal mb-5 flex size-12 items-center justify-center rounded-xl transition-colors">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-brand-charcoal mb-2 text-lg font-semibold">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </m.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
