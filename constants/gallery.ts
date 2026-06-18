import type { GalleryCategoryOption } from "@/types/gallery";

export const GALLERY_CONTENT = {
  eyebrow: "Gallery",
  title: "Craftsmanship in Every Detail",
  description:
    "Explore our portfolio of aluminium windows, sliding doors, glass partitions, facades, and interior executions across Vadodara and Gujarat.",
} as const;

export const GALLERY_SEO_KEYWORDS = [
  "aluminium windows vadodara",
  "sliding doors vadodara",
  "glass partitions vadodara",
  "ACP cladding vadodara",
  "aluminium windows gallery",
  "structural glazing portfolio",
  "Shree Chamunda Aluminium gallery",
] as const;

export const GALLERY_CATEGORIES: GalleryCategoryOption[] = [
  { value: "all", label: "All" },
  { value: "aluminium-windows", label: "Aluminium Windows" },
  { value: "sliding-doors", label: "Sliding Doors" },
  { value: "glass-partitions", label: "Glass Partitions" },
  { value: "acp-cladding", label: "ACP Cladding" },
  { value: "structural-glazing", label: "Structural Glazing" },
  { value: "office-partitions", label: "Office Partitions" },
  { value: "interior-work", label: "Interior Work" },
];
