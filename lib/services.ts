import { SERVICES } from "@/constants/services";
import { SEO_LOCATION } from "@/constants/location";
import { DEFAULT_OG_IMAGE } from "@/constants/seo";
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
  const pageTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description: service.metaDescription,
    keywords: [...service.keywords, SITE_NAME, SEO_LOCATION.city],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE_NAME,
      title: pageTitle,
      description: service.metaDescription,
      images: [
        {
          url: service.hero.image,
          alt: service.hero.imageAlt,
        },
        {
          url: DEFAULT_OG_IMAGE.url,
          width: DEFAULT_OG_IMAGE.width,
          height: DEFAULT_OG_IMAGE.height,
          alt: DEFAULT_OG_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
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
    areaServed: [
      {
        "@type": "City",
        name: SEO_LOCATION.city,
      },
      {
        "@type": "State",
        name: SEO_LOCATION.state,
      },
    ],
    serviceType: service.title,
  };
}
