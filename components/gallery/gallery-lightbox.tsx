"use client";

import { AnimatePresence, m } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { getGalleryImageSrc } from "@/lib/cloudinary";
import { useLockBody } from "@/hooks/use-lock-body";
import type { GalleryItem } from "@/types/gallery";

type GalleryLightboxProps = {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const isOpen = activeIndex !== null;
  const activeItem = activeIndex !== null ? items[activeIndex] : null;
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useLockBody(isOpen);

  const goNext = useCallback(() => {
    if (activeIndex === null || items.length === 0) return;
    onNavigate((activeIndex + 1) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (activeIndex === null || items.length === 0) return;
    onNavigate((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      {isOpen && activeItem && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${activeItem.title}`}
        >
          <button
            type="button"
            className="bg-brand-charcoal/90 absolute inset-0 backdrop-blur-sm"
            aria-label="Close lightbox"
            onClick={onClose}
          />

          <m.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-4 flex w-full max-w-5xl flex-col"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-heading text-brand-white text-lg font-semibold">
                  {activeItem.title}
                </p>
                <p className="text-brand-silver text-sm">
                  {activeIndex! + 1} of {items.length}
                </p>
              </div>
              <Button
                ref={closeButtonRef}
                type="button"
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-brand-white hover:bg-brand-white/10 shrink-0"
                aria-label="Close lightbox"
              >
                <X className="size-5" />
              </Button>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black md:aspect-[16/10]">
              <Image
                src={getGalleryImageSrc(activeItem, {
                  width: 1600,
                  quality: "auto",
                })}
                alt={activeItem.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
                priority
              />
            </div>

            {items.length > 1 && (
              <div className="mt-4 flex items-center justify-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={goPrev}
                  className="border-brand-white/20 text-brand-white hover:bg-brand-white/10 bg-transparent"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-5" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={goNext}
                  className="border-brand-white/20 text-brand-white hover:bg-brand-white/10 bg-transparent"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-5" />
                </Button>
              </div>
            )}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
