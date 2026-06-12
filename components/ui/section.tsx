import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      none: "py-0",
      sm: "py-12 md:py-16",
      md: "py-16 md:py-24",
      lg: "py-24 md:py-32",
      xl: "py-32 md:py-40",
    },
    background: {
      default: "bg-background",
      muted: "bg-muted",
      charcoal: "bg-brand-charcoal text-brand-white",
      teal: "bg-brand-teal text-brand-white",
    },
  },
  defaultVariants: {
    spacing: "md",
    background: "default",
  },
});

type SectionProps = ComponentProps<"section"> &
  VariantProps<typeof sectionVariants> & {
    labelledBy?: string;
  };

function Section({
  className,
  spacing,
  background,
  labelledBy,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ spacing, background, className }))}
      aria-labelledby={labelledBy}
      {...props}
    >
      {children}
    </section>
  );
}

export { Section, sectionVariants, type SectionProps };
