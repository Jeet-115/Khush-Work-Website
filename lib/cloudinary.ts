type CloudinaryTransformOptions = {
  width?: number;
  height?: number;
  quality?: "auto" | number;
  format?: "auto" | "webp" | "jpg" | "png";
  crop?: "fill" | "fit" | "scale";
};

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function isCloudinaryEnabled(): boolean {
  return Boolean(CLOUDINARY_CLOUD_NAME);
}

export function getCloudinaryUrl(
  publicId: string,
  options: CloudinaryTransformOptions = {},
): string | null {
  if (!CLOUDINARY_CLOUD_NAME) return null;

  const {
    width,
    height,
    quality = "auto",
    format = "auto",
    crop = "fill",
  } = options;

  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    width ? `w_${width}` : null,
    height ? `h_${height}` : null,
    width && height ? `c_${crop}` : null,
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}

export function getGalleryImageSrc(
  item: {
    src: string;
    cloudinaryPublicId?: string;
  },
  options: CloudinaryTransformOptions = {},
): string {
  if (item.cloudinaryPublicId) {
    const cloudinaryUrl = getCloudinaryUrl(item.cloudinaryPublicId, options);
    if (cloudinaryUrl) return cloudinaryUrl;
  }

  return item.src;
}
