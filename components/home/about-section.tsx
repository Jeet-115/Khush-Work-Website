import { Users } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ABOUT_CONTENT, ABOUT_STATS } from "@/constants/home";

export function AboutSection() {
  return (
    <Section spacing="lg" background="muted" aria-label="About us" defer>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            eyebrow={ABOUT_CONTENT.eyebrow}
            title={ABOUT_CONTENT.title}
            description={ABOUT_CONTENT.description}
            align="left"
            className="mb-0"
          />

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {ABOUT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-white shadow-card hover:shadow-luxury rounded-xl border p-5 transition-shadow sm:p-6"
              >
                <p className="font-heading text-brand-teal mb-1 text-3xl font-semibold sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-muted-foreground text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-charcoal text-brand-white mt-12 flex items-center gap-4 rounded-2xl p-6 md:mt-16 md:p-8">
          <div className="bg-brand-teal flex size-12 shrink-0 items-center justify-center rounded-xl">
            <Users className="size-6" aria-hidden="true" />
          </div>
          <p className="text-brand-mist text-base leading-relaxed md:text-lg">
            Our professional team of fabricators, installers, and project
            managers ensures every detail meets the highest standards of
            architectural aluminium craftsmanship.
          </p>
        </div>
      </Container>
    </Section>
  );
}
