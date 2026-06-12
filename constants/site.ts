export const SITE_NAME = "Shree Chamunda Aluminium";

export const SITE_DESCRIPTION =
  "Premium aluminium solutions for residential, commercial, and industrial projects.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shreechamundaaluminium.com";

export const SITE_LOCALE = "en_IN";

export const SITE_KEYWORDS = [
  "aluminium",
  "aluminium windows",
  "aluminium doors",
  "sliding systems",
  "facade solutions",
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
