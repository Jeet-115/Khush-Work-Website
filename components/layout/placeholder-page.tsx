import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Section spacing="lg">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-brand-teal mb-3 text-sm font-medium tracking-[0.2em] uppercase">
            Coming Soon
          </p>
          <h1 className="font-heading text-brand-charcoal mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </Container>
    </Section>
  );
}
