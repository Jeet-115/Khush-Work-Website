export const IMAGE_QUALITY = {
  hero: 90,
  default: 80,
  thumbnail: 75,
} as const;

export const IMAGE_SIZES = {
  hero: "100vw",
  full: "100vw",
  card: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  gallery: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  content: "(max-width: 1024px) 100vw, 50vw",
  thumbnail: "160px",
} as const;

export type ImageSizePreset = keyof typeof IMAGE_SIZES;
