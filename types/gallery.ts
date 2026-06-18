export type GalleryCategory =
  | "all"
  | "aluminium-windows"
  | "sliding-doors"
  | "glass-partitions"
  | "acp-cladding"
  | "structural-glazing"
  | "office-partitions"
  | "interior-work";

export type GalleryItem = {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "all">;
  alt: string;
  src: string;
  width: number;
  height: number;
};

export type GalleryCategoryOption = {
  value: GalleryCategory;
  label: string;
};
