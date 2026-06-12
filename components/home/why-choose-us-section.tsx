import { FeatureCard } from "@/components/cards/feature-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { WHY_CHOOSE_CONTENT, WHY_CHOOSE_US } from "@/constants/home";

export function WhyChooseUsSection() {
  return (
    <Section spacing="lg" background="charcoal" aria-label="Why choose us" defer>
      <Container>
        <SectionHeader
          id="why-choose-us-heading"
          eyebrow={WHY_CHOOSE_CONTENT.eyebrow}
          title={WHY_CHOOSE_CONTENT.title}
          description={WHY_CHOOSE_CONTENT.description}
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              variant="glass"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
