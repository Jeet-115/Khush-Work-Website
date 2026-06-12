import { HeroSection } from "@/components/home/hero-section";
import { FaqJsonLd } from "@/components/seo";
import { FAQ_ITEMS } from "@/constants/home";
import { PAGE_SEO } from "@/constants/seo";
import { createPageMetadata } from "@/lib/metadata";
import {
  DynamicTrustMarquee,
  DynamicAboutSection,
  DynamicContactCtaSection,
  DynamicFaqSection,
  DynamicProjectsSection,
  DynamicServicesSection,
  DynamicTestimonialsSection,
  DynamicWhyChooseUsSection,
} from "@/lib/performance";

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
      <DynamicTrustMarquee />
      <DynamicAboutSection />
      <DynamicServicesSection />
      <DynamicWhyChooseUsSection />
      <DynamicProjectsSection />
      <DynamicTestimonialsSection />
      <DynamicFaqSection />
      <DynamicContactCtaSection />
    </>
  );
}
