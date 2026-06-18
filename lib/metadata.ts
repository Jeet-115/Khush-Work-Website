import type { Metadata, Viewport } from "next";

import { BUSINESS } from "@/constants/business";
import { SEO_LOCATION } from "@/constants/location";
import { DEFAULT_OG_IMAGE, PRIMARY_KEYWORDS } from "@/constants/seo";
import {
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  BRAND_LOGO,
} from "@/constants/site";

type PageMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  keywords?: readonly string[];
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

function buildCanonicalUrl(path = "") {
  if (!path || path === "/") {
    return SITE_URL;
  }

  return `${SITE_URL}${path}`;
}

function buildOpenGraphImage(image?: string, imageAlt?: string) {
  return [
    {
      url: image ?? DEFAULT_OG_IMAGE.url,
      width: DEFAULT_OG_IMAGE.width,
      height: DEFAULT_OG_IMAGE.height,
      alt: imageAlt ?? DEFAULT_OG_IMAGE.alt,
    },
  ];
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: BRAND_LOGO.src, type: "image/png" }],
    apple: [{ url: BRAND_LOGO.src, type: "image/png" }],
    shortcut: [BRAND_LOGO.src],
  },
  title: {
    default: `${SITE_NAME} | Aluminium Windows & Sliding Doors in ${SEO_LOCATION.city}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [...PRIMARY_KEYWORDS],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "business",
  alternates: {
    canonical: SITE_URL,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Aluminium Experts in ${SEO_LOCATION.city}, ${SEO_LOCATION.state}`,
    description: SITE_DESCRIPTION,
    images: buildOpenGraphImage(),
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Aluminium Windows in ${SEO_LOCATION.city}`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": `IN-${SEO_LOCATION.state}`,
    "geo.placename": SEO_LOCATION.city,
    "business:contact_data:street_address": BUSINESS.address.streetAddress,
    "business:contact_data:locality": BUSINESS.address.addressLocality,
    "business:contact_data:region": BUSINESS.address.addressRegion,
    "business:contact_data:postal_code": BUSINESS.address.postalCode,
    "business:contact_data:country_name": BUSINESS.address.addressCountry,
    "business:contact_data:email": BUSINESS.email,
    "business:contact_data:phone_number": BUSINESS.telephone,
    "business:contact_data:website": BUSINESS.url,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a7b7b" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image,
  imageAlt,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = buildCanonicalUrl(path);
  const pageDescription = description ?? SITE_DESCRIPTION;
  const pageKeywords = keywords.length > 0 ? [...keywords] : [...PRIMARY_KEYWORDS];
  const pageTitle = `${title} | ${SITE_NAME}`;
  const ogImages = buildOpenGraphImage(image, imageAlt);

  return {
    title,
    description: pageDescription,
    keywords: pageKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE,
      url,
      siteName: SITE_NAME,
      title: pageTitle,
      description: pageDescription,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [image ?? DEFAULT_OG_IMAGE.url],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
