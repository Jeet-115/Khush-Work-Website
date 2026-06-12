import {
  AboutPageHero,
  CompanyStorySection,
  MissionVisionSection,
  TeamSection,
  TimelineSection,
  ValuesSection,
} from "@/components/about";
import { ContactCtaSection } from "@/components/home/contact-cta-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Shree Chamunda Aluminium — our story, mission, vision, values, and the team behind Gujarat's trusted aluminium experts.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
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
