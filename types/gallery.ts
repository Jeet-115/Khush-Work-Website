export type GalleryCategory =
  | "all"
  | "residential"
  | "commercial"
  | "windows-doors"
  | "glass"
  | "facades"
  | "interiors";

export type GalleryItem = {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "all">;
  alt: string;
  src: string;
  cloudinaryPublicId?: string;
  width: number;
  height: number;
};

export type GalleryCategoryOption = {
  value: GalleryCategory;
  label: string;
};
