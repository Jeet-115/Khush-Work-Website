import { SectionHeader } from "@/components/shared/section-header";
import { AccordionList } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FAQ_CONTENT, FAQ_ITEMS } from "@/constants/home";

const accordionItems = FAQ_ITEMS.map((item, index) => ({
  id: `faq-${index}`,
  question: item.question,
  answer: item.answer,
}));

export function FaqSection() {
  return (
    <Section
      spacing="lg"
      background="muted"
      aria-label="Frequently asked questions"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            eyebrow={FAQ_CONTENT.eyebrow}
            title={FAQ_CONTENT.title}
            description={FAQ_CONTENT.description}
            align="left"
            className="mb-0 lg:sticky lg:top-28 lg:self-start"
          />

          <AccordionList items={accordionItems} defaultOpenId="faq-0" />
        </div>
      </Container>
    </Section>
  );
}
