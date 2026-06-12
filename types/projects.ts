import type { ServiceSlug } from "@/types/services";

export type ProjectSlug =
  | "skyline-residence"
  | "meridian-tower"
  | "villa-serene"
  | "horizon-mall"
  | "azure-office"
  | "riverside-penthouse"
  | "techpark-atrium";

export type ProjectGalleryImage = {
  src: string;
  alt: string;
};

export type ProjectServiceUsed = {
  slug: ServiceSlug;
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
