import { BUSINESS } from "@/constants/business";
import { SEO_LOCATION } from "@/constants/location";
import { PRIMARY_KEYWORDS } from "@/constants/seo";
import { BRAND_LOGO, SITE_NAME } from "@/constants/site";

const BUSINESS_ID = `${BUSINESS.url}/#localbusiness`;
const WEBSITE_ID = `${BUSINESS.url}/#website`;
const LOGO_URL = `${BUSINESS.url}${BRAND_LOGO.src}`;

export function getLocalBusinessJsonLd() {
  return {
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: BUSINESS.url,
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    priceRange: BUSINESS.priceRange,
    image: LOGO_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
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
    knowsAbout: PRIMARY_KEYWORDS.slice(0, 6),
    openingHoursSpecification: BUSINESS.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    ...(BUSINESS.sameAs.length > 0 ? { sameAs: BUSINESS.sameAs } : {}),
  };
}

export function getWebsiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: BUSINESS.url,
    name: SITE_NAME,
    description: BUSINESS.description,
    inLanguage: "en-IN",
    publisher: {
      "@id": BUSINESS_ID,
    },
  };
}

export function getOrganizationGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [getLocalBusinessJsonLd(), getWebsiteJsonLd()],
  };
}
