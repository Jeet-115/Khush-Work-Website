import {
  AboutPageHero,
  CompanyStorySection,
  MissionVisionSection,
  TeamSection,
  TimelineSection,
  ValuesSection,
} from "@/components/about";
import { ContactCtaSection } from "@/components/home/contact-cta-section";
import { BreadcrumbJsonLd } from "@/components/seo";
import { BREADCRUMB_HOME, PAGE_SEO } from "@/constants/seo";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
  path: PAGE_SEO.about.path,
  keywords: PAGE_SEO.about.keywords,
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          BREADCRUMB_HOME,
          { name: "About", path: PAGE_SEO.about.path },
        ]}
      />
      <AboutPageHero />
      <CompanyStorySection />
      <MissionVisionSection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <ContactCtaSection />
    </>
  );
}
