import dynamic from "next/dynamic";

import { FormFallback, SectionFallback } from "@/components/shared/section-fallback";

export const DynamicAboutSection = dynamic(
  () =>
    import("@/components/home/about-section").then((module) => ({
      default: module.AboutSection,
    })),
  { loading: () => <SectionFallback minHeight="md" /> },
);

export const DynamicServicesSection = dynamic(
  () =>
    import("@/components/home/services-section").then((module) => ({
      default: module.ServicesSection,
    })),
  { loading: () => <SectionFallback minHeight="lg" /> },
);

export const DynamicWhyChooseUsSection = dynamic(
  () =>
    import("@/components/home/why-choose-us-section").then((module) => ({
      default: module.WhyChooseUsSection,
    })),
  { loading: () => <SectionFallback minHeight="md" /> },
);

export const DynamicProjectsSection = dynamic(
  () =>
    import("@/components/home/projects-section").then((module) => ({
      default: module.ProjectsSection,
    })),
  { loading: () => <SectionFallback minHeight="lg" /> },
);

export const DynamicTestimonialsSection = dynamic(
  () =>
    import("@/components/home/testimonials-section").then((module) => ({
      default: module.TestimonialsSection,
    })),
  { loading: () => <SectionFallback minHeight="md" /> },
);

export const DynamicFaqSection = dynamic(
  () =>
    import("@/components/home/faq-section").then((module) => ({
      default: module.FaqSection,
    })),
  { loading: () => <SectionFallback minHeight="md" /> },
);

export const DynamicContactCtaSection = dynamic(
  () =>
    import("@/components/home/contact-cta-section").then((module) => ({
      default: module.ContactCtaSection,
    })),
  { loading: () => <SectionFallback minHeight="sm" /> },
);

export const DynamicContactForm = dynamic(
  () =>
    import("@/components/contact/contact-form").then((module) => ({
      default: module.ContactForm,
    })),
  { loading: () => <FormFallback /> },
);
