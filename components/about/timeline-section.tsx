"use client";

import { m } from "framer-motion";

import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TIMELINE, TIMELINE_CONTENT } from "@/constants/about";
import { luxuryEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function TimelineSection() {
  return (
    <Section spacing="lg" aria-label="Company timeline">
      <Container>
        <SectionHeader
          eyebrow={TIMELINE_CONTENT.eyebrow}
          title={TIMELINE_CONTENT.title}
          description={TIMELINE_CONTENT.description}
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="bg-brand-light-grey absolute top-0 left-4 h-full w-px md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="space-y-12">
            {TIMELINE.map((item, index) => (
              <m.li
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: luxuryEase,
                }}
                className={cn(
                  "relative grid gap-6 md:grid-cols-2 md:gap-12",
                  index % 2 === 0
                    ? "md:[&>div:first-child]:pr-12 md:[&>div:first-child]:text-right"
                    : "md:[&>div:last-child]:pl-12",
                )}
              >
                <div
                  className={cn(
                    "hidden md:block",
                    index % 2 === 0 ? "order-1" : "order-2",
                  )}
                >
                  <span className="font-heading text-brand-teal text-3xl font-semibold">
                    {item.year}
                  </span>
                </div>

                <div
                  className={cn(
                    "relative pl-12 md:pl-0",
                    index % 2 === 0 ? "md:order-2" : "md:order-1",
                  )}
                >
                  <div
                    className="bg-brand-teal ring-brand-white absolute top-1.5 left-0 z-10 size-3 rounded-full ring-4 md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                  />

                  <article className="bg-brand-white shadow-card rounded-xl border p-6 md:p-8">
                    <span className="font-heading text-brand-teal mb-2 block text-2xl font-semibold md:hidden">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-brand-charcoal mb-2 text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                </div>
              </m.li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
