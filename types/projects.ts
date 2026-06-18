export type ProjectSlug =
  | "axis-bank"
  | "factory"
  | "gsfc-uni-acp-work"
  | "house"
  | "indian-oil-pump"
  | "maruti-public-charitable-trust"
  | "residency"
  | "vip-bags"
  | "yusuf-pathan-home";

export type ProjectGalleryImage = {
  src: string;
  alt: string;
};

export type ProjectServiceUsed = {
  slug: import("@/types/services").ServiceSlug;
  title: string;
};

export type ProjectCompletion = {
  completedDate: string;
  duration: string;
  scope: string;
  area: string;
  client: string;
};

export type Project = {
  slug: ProjectSlug;
  name: string;
  category: string;
  location: string;
  shortDescription: string;
  metaDescription: string;
  keywords: string[];
  coverImage: string;
  description: string[];
  gallery: ProjectGalleryImage[];
  servicesUsed: ProjectServiceUsed[];
  completion: ProjectCompletion;
  featured?: boolean;
};
