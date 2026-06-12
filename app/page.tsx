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
import { FaqJsonLd } from "@/components/seo";
import { FAQ_ITEMS } from "@/constants/home";
import { PAGE_SEO } from "@/constants/seo";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  path: PAGE_SEO.home.path,
  keywords: PAGE_SEO.home.keywords,
});

export default function HomePage() {
  return (
    <>
      <FaqJsonLd items={FAQ_ITEMS} />
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
