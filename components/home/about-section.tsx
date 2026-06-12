"use client";

import { m } from "framer-motion";
import { Users } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ABOUT_CONTENT, ABOUT_STATS } from "@/constants/home";

export function AboutSection() {
  return (
    <Section spacing="lg" background="muted" aria-label="About us">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <m.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader
              eyebrow={ABOUT_CONTENT.eyebrow}
              title={ABOUT_CONTENT.title}
              description={ABOUT_CONTENT.description}
              align="left"
              className="mb-0"
            />
          </m.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {ABOUT_STATS.map((stat, index) => (
              <m.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-brand-white shadow-card rounded-xl border p-5 sm:p-6"
              >
                <p className="font-heading text-brand-teal mb-1 text-3xl font-semibold sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </m.div>
            ))}
          </div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-brand-charcoal text-brand-white mt-12 flex items-center gap-4 rounded-2xl p-6 md:mt-16 md:p-8"
        >
          <div className="bg-brand-teal flex size-12 shrink-0 items-center justify-center rounded-xl">
            <Users className="size-6" aria-hidden="true" />
          </div>
          <p className="text-brand-silver text-sm leading-relaxed md:text-base">
            Our professional team of fabricators, installers, and project
            managers ensures every detail meets the highest standards of
            architectural aluminium craftsmanship.
          </p>
        </m.div>
      </Container>
    </Section>
  );
}
