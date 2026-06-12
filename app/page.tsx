import {
  AboutSection,
  ContactCtaSection,
  FaqSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
  WhyChooseUsSection,
} from "@/components/home";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Home",
  description:
    "Premium aluminium windows, sliding doors, glass partitions, ACP cladding, and complete interior solutions for modern living.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}
