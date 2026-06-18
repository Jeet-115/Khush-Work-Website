import { SEO_LOCATION } from "@/constants/location";

export const SITE_NAME = "Shree Chamunda Aluminium";

export const SITE_DESCRIPTION =
  `Premium aluminium windows, sliding doors, glass partitions, and ACP cladding in ${SEO_LOCATION.city}, ${SEO_LOCATION.state}. Expert fabrication and installation for residential and commercial projects.`;

export const SITE_URL = "https://shreechamundaaluminium.com";

export const SITE_LOCALE = "en_IN";

export const BRAND_LOGO = {
  src: "/logo.PNG",
  alt: `${SITE_NAME} logo`,
} as const;

export const SITE_KEYWORDS = [
  "aluminium windows vadodara",
  "sliding doors vadodara",
  "glass partitions vadodara",
  "ACP cladding vadodara",
  "structural glazing vadodara",
  "aluminium fabricator vadodara",
  "aluminium windows Gujarat",
  "Shree Chamunda Aluminium",
] as const;

export const CONTACT = {
  email: "scaluminium24@gmail.com",
  phone: "+91 98240 32823",
  whatsapp: "+91 98240 32823",
} as const;

export const CONTACT_LINKS = {
  phone: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  email: `mailto:${CONTACT.email}`,
  whatsapp: `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`,
} as const;
