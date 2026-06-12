import { AccordionList } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Service } from "@/types/services";

type ServiceFaqProps = {
  service: Service;
};

export function ServiceFaq({ service }: ServiceFaqProps) {
  const items = service.faq.map((item, index) => ({
    id: `${service.slug}-faq-${index}`,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <Section spacing="lg" aria-label="Service FAQ">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-brand-teal mb-3 text-sm font-medium tracking-[0.2em] uppercase">
              FAQ
            </p>
            <h2 className="font-heading text-brand-charcoal mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Common Questions
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Everything you need to know about our{" "}
              {service.title.toLowerCase()} service.
            </p>
          </div>

          <AccordionList items={items} defaultOpenId={items[0]?.id} />
        </div>
      </Container>
    </Section>
  );
}
