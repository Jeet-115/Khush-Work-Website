import Image, { type ImageProps } from "next/image";

import {
  IMAGE_QUALITY,
  IMAGE_SIZES,
  type ImageSizePreset,
} from "@/lib/performance/images";
import { cn } from "@/lib/utils";

type OptimizedImageProps = Omit<ImageProps, "quality" | "sizes"> & {
  sizePreset?: ImageSizePreset;
  quality?: number;
  sizes?: string;
};

export function OptimizedImage({
  sizePreset,
  quality = IMAGE_QUALITY.default,
  sizes,
  className,
  loading,
  priority,
  alt,
  ...props
}: OptimizedImageProps) {
  const resolvedSizes = sizes ?? (sizePreset ? IMAGE_SIZES[sizePreset] : undefined);
  const resolvedQuality =
    priority || sizePreset === "hero" ? IMAGE_QUALITY.hero : quality;

  return (
    <Image
      alt={alt}
      quality={resolvedQuality}
      sizes={resolvedSizes}
      loading={priority ? undefined : (loading ?? "lazy")}
      priority={priority}
      className={cn(className)}
      {...props}
    />
  );
}
