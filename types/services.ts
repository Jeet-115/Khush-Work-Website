export type ServiceSlug =
  | "aluminium-windows"
  | "sliding-doors"
  | "glass-partitions"
  | "acp-cladding"
  | "structural-glazing"
  | "office-partitions"
  | "interior-work";

export type ServiceBenefit = {
  title: string;
  description: string;
};

export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceGalleryImage = {
  src: string;
  alt: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  overview: {
    title: string;
    paragraphs: string[];
  };
  benefits: ServiceBenefit[];
  features: ServiceFeature[];
  gallery: ServiceGalleryImage[];
  faq: ServiceFaq[];
};
