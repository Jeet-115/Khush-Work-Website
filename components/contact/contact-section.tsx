import { ContactInfo } from "@/components/contact/contact-info";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { DynamicContactForm } from "@/lib/performance";

export function ContactSection() {
  return (
    <Section spacing="lg" background="default" aria-label="Contact form">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12">
          <ContactInfo />
          <DynamicContactForm />
        </div>
      </Container>
    </Section>
  );
}
