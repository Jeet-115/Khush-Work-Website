"use client";

import { AnimatePresence, m } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useState } from "react";

import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TESTIMONIALS, TESTIMONIALS_CONTENT } from "@/constants/home";
import { cn } from "@/lib/utils";

function Rating({ value }: { value: number }) {
  return (
    <div
      className="flex gap-1"
      role="img"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < value
              ? "fill-brand-teal text-brand-teal"
              : "text-brand-silver/40",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const active = TESTIMONIALS[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  return (
    <Section spacing="lg" aria-label="Testimonials" defer>
      <Container>
        <SectionHeader
          eyebrow={TESTIMONIALS_CONTENT.eyebrow}
          title={TESTIMONIALS_CONTENT.title}
          description={TESTIMONIALS_CONTENT.description}
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="bg-brand-white shadow-luxury overflow-hidden rounded-2xl border p-8 md:p-12">
            <Quote
              className="text-brand-teal/20 mb-6 size-10"
              aria-hidden="true"
            />

            <div
              className="min-h-[200px]"
              aria-live="polite"
              aria-atomic="true"
            >
              <AnimatePresence mode="wait">
                <m.blockquote
                  key={activeIndex}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Rating value={active.rating} />
                  <p className="text-brand-charcoal mt-6 text-lg leading-relaxed md:text-xl">
                    &ldquo;{active.review}&rdquo;
                  </p>
                  <footer className="mt-8">
                    <cite className="font-heading text-brand-charcoal not-italic">
                      {active.name}
                    </cite>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {active.role}
                    </p>
                  </footer>
                </m.blockquote>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Testimonial slides"
            >
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => goTo(index)}
                  className={cn(
                    "duration-normal h-2 rounded-full transition-all",
                    index === activeIndex
                      ? "bg-brand-teal w-8"
                      : "bg-brand-silver/40 hover:bg-brand-silver w-2",
                  )}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={goPrev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="size-5" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={goNext}
                aria-label="Next testimonial"
              >
                <ChevronRight className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
