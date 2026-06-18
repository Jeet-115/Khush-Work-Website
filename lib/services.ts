import { SERVICES } from "@/constants/services";
import { WORK_SERVICE_IMAGES } from "@/constants/work-services-images.generated";
import { SEO_LOCATION } from "@/constants/location";
import { DEFAULT_OG_IMAGE } from "@/constants/seo";
import { SITE_NAME, SITE_URL } from "@/constants/site";
import type { Metadata } from "next";
import type { Service, ServiceSlug } from "@/types/services";

function withWorkImages(service: Service): Service {
  const images = WORK_SERVICE_IMAGES[service.slug as ServiceSlug];

  if (!images) {
    return service;
  }

  return {
    ...service,
    hero: {
      ...service.hero,
      image: images.hero,
      imageAlt: images.heroAlt,
    },
    gallery: images.gallery,
  };
}

export function getAllServices(): Service[] {
  return SERVICES.map(withWorkImages);
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return SERVICES.map((service) => service.slug);
}

export function getServiceBySlug(slug: string): Service | undefined {
  const service = SERVICES.find((item) => item.slug === slug);

  if (!service) {
    return undefined;
  }

  return withWorkImages(service);
}

export function createServiceMetadata(service: Service): Metadata {
  const enriched = withWorkImages(service);
  const path = `/services/${enriched.slug}`;
  const url = `${SITE_URL}${path}`;
  const title = enriched.title;
  const pageTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description: enriched.metaDescription,
    keywords: [...enriched.keywords, SITE_NAME, SEO_LOCATION.city],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE_NAME,
      title: pageTitle,
      description: enriched.metaDescription,
      images: [
        {
          url: enriched.hero.image,
          alt: enriched.hero.imageAlt,
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
      description: enriched.metaDescription,
      images: [enriched.hero.image],
    },
  };
}

export function getServiceJsonLd(service: Service) {
  const enriched = withWorkImages(service);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: enriched.title,
    description: enriched.metaDescription,
    url: `${SITE_URL}/services/${enriched.slug}`,
    image: enriched.gallery.map((img) => `${SITE_URL}${img.src}`),
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
    serviceType: enriched.title,
  };
}
