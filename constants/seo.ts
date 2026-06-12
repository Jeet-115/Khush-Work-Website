import { SEO_LOCATION } from "@/constants/location";
import { SITE_NAME } from "@/constants/site";

export { SEO_LOCATION };

export const PRIMARY_KEYWORDS = [
  "aluminium windows vadodara",
  "sliding doors vadodara",
  "glass partitions vadodara",
  "ACP cladding vadodara",
  "structural glazing vadodara",
  "aluminium fabricator vadodara",
  "aluminium windows Gujarat",
  "sliding doors Gujarat",
  SITE_NAME,
] as const;

export const DEFAULT_OG_IMAGE = {
  url: "/images/og-image.svg",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — Premium Aluminium Solutions in Vadodara, Gujarat`,
} as const;

export const PAGE_SEO = {
  home: {
    title: "Aluminium Windows & Sliding Doors in Vadodara",
    description:
      "Shree Chamunda Aluminium — premium aluminium windows, sliding doors, glass partitions, and ACP cladding in Vadodara, Gujarat. Free site visit and expert installation.",
    keywords: [...PRIMARY_KEYWORDS],
    path: "/",
  },
  about: {
    title: "About Us",
    description:
      "Learn about Shree Chamunda Aluminium — Vadodara's trusted experts in aluminium windows, sliding doors, glass partitions, and facade solutions across Gujarat.",
    keywords: [
      "aluminium company vadodara",
      "aluminium fabricator Gujarat",
      ...PRIMARY_KEYWORDS,
    ],
    path: "/about",
  },
  services: {
    title: "Aluminium & Glass Services in Vadodara",
    description:
      "Explore aluminium windows, sliding doors, glass partitions, ACP cladding, structural glazing, false ceiling, and interior work by Shree Chamunda Aluminium in Vadodara.",
    keywords: [...PRIMARY_KEYWORDS, "aluminium services vadodara"],
    path: "/services",
  },
  projects: {
    title: "Completed Projects in Gujarat",
    description:
      "Browse residential and commercial aluminium window, sliding door, and facade projects completed by Shree Chamunda Aluminium across Vadodara and Gujarat.",
    keywords: [
      "aluminium projects vadodara",
      "commercial glazing Gujarat",
      ...PRIMARY_KEYWORDS,
    ],
    path: "/projects",
  },
  gallery: {
    title: "Project Gallery",
    description:
      "View our gallery of aluminium windows, sliding doors, glass partitions, ACP cladding, and interior work delivered across Vadodara and Gujarat.",
    keywords: [
      "aluminium windows gallery vadodara",
      "sliding doors photos",
      "glass partitions vadodara",
      "ACP cladding vadodara",
      ...PRIMARY_KEYWORDS,
    ],
    path: "/gallery",
  },
  contact: {
    title: "Contact & Free Quote",
    description:
      "Request a free quote for aluminium windows, sliding doors, glass partitions, or ACP cladding in Vadodara. Contact Shree Chamunda Aluminium today.",
    keywords: [
      "aluminium quote vadodara",
      "free site visit vadodara",
      ...PRIMARY_KEYWORDS,
    ],
    path: "/contact",
  },
} as const;

export const BREADCRUMB_HOME = { name: "Home", path: "/" } as const;
