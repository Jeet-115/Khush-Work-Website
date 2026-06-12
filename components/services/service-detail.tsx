import { ServiceBenefits } from "@/components/services/service-benefits";
import { ServiceFaq } from "@/components/services/service-faq";
import { ServiceFeatures } from "@/components/services/service-features";
import { ServiceGallery } from "@/components/services/service-gallery";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceJsonLd } from "@/components/services/service-json-ld";
import { ServiceOverview } from "@/components/services/service-overview";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo";
import { BREADCRUMB_HOME, PAGE_SEO } from "@/constants/seo";
import { DynamicContactCtaSection } from "@/lib/performance";
import type { Service } from "@/types/services";

type ServiceDetailProps = {
  service: Service;
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <>
      <ServiceJsonLd service={service} />
      <FaqJsonLd items={service.faq} />
      <BreadcrumbJsonLd
        items={[
          BREADCRUMB_HOME,
          { name: "Services", path: PAGE_SEO.services.path },
          {
            name: service.title,
            path: `/services/${service.slug}`,
          },
        ]}
      />
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceBenefits service={service} />
      <ServiceFeatures service={service} />
      <ServiceGallery service={service} />
      <ServiceFaq service={service} />
      <DynamicContactCtaSection />
    </>
  );
}
