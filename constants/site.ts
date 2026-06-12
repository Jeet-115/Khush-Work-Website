import { SEO_LOCATION } from "@/constants/location";

export const SITE_NAME = "Shree Chamunda Aluminium";

export const SITE_DESCRIPTION =
  `Premium aluminium windows, sliding doors, glass partitions, and ACP cladding in ${SEO_LOCATION.city}, ${SEO_LOCATION.state}. Expert fabrication and installation for residential and commercial projects.`;

export const SITE_URL = "https://shreechamundaaluminium.com";

export const SITE_LOCALE = "en_IN";

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
  email: "info@shreechamundaaluminium.com",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
} as const;

export const CONTACT_LINKS = {
  phone: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  email: `mailto:${CONTACT.email}`,
  whatsapp: `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`,
} as const;
