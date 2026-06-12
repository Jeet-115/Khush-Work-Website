"use client";

import { m } from "framer-motion";
import { OptimizedImage } from "@/components/shared/optimized-image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { COMPANY_STORY } from "@/constants/about";
import { luxuryEase, slideInLeft, slideInRight } from "@/lib/motion";

export function CompanyStorySection() {
  return (
    <Section spacing="lg" aria-label="Company story" defer>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <m.div
            {...slideInLeft}
            transition={{ duration: 0.6, ease: luxuryEase }}
          >
            <p className="text-brand-teal mb-3 text-sm font-medium tracking-[0.2em] uppercase">
              {COMPANY_STORY.eyebrow}
            </p>
            <h2 className="font-heading text-brand-charcoal mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
              {COMPANY_STORY.title}
            </h2>
            <div className="space-y-5">
              {COMPANY_STORY.paragraphs.map((paragraph, index) => (
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

          <m.div
            {...slideInRight}
            transition={{ duration: 0.6, ease: luxuryEase }}
            className="relative"
          >
            <div className="shadow-luxury relative aspect-[4/5] overflow-hidden rounded-2xl">
              <OptimizedImage
                src={COMPANY_STORY.image}
                alt="Shree Chamunda Aluminium company story"
                fill
                sizePreset="content"
                className="object-cover"
              />
              <div className="from-brand-charcoal/60 absolute inset-0 bg-gradient-to-t to-transparent" />
            </div>
            <div className="border-brand-teal absolute -right-4 -bottom-4 -z-10 hidden h-full w-full rounded-2xl border-2 md:block" />
          </m.div>
        </div>
      </Container>
    </Section>
  );
}
