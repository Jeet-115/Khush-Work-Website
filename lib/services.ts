import { SERVICES } from "@/constants/services";
import { SITE_NAME, SITE_URL } from "@/constants/site";
import type { Metadata } from "next";
import type { Service, ServiceSlug } from "@/types/services";

export function getAllServices(): Service[] {
  return SERVICES;
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return SERVICES.map((service) => service.slug);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function createServiceMetadata(service: Service): Metadata {
  const path = `/services/${service.slug}`;
  const url = `${SITE_URL}${path}`;
  const title = service.title;

  return {
    title,
    description: service.metaDescription,
    keywords: [...service.keywords, SITE_NAME],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      title: `${title} | ${SITE_NAME}`,
      description: service.metaDescription,
      url,
      images: [
        {
          url: service.hero.image,
          alt: service.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description: service.metaDescription,
      images: [service.hero.image],
    },
  };
}

export function getServiceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "State",
      name: "Gujarat",
    },
    serviceType: service.title,
  };
}
