import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-full",
    },
    padding: {
      none: "px-0",
      sm: "px-4 sm:px-6",
      md: "px-4 sm:px-6 lg:px-8",
      lg: "px-6 sm:px-8 lg:px-12",
    },
  },
  defaultVariants: {
    size: "xl",
    padding: "md",
  },
});

type ContainerProps = ComponentProps<"div"> &
  VariantProps<typeof containerVariants>;

function Container({ className, size, padding, ...props }: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn(containerVariants({ size, padding, className }))}
      {...props}
    />
  );
}

export { Container, containerVariants, type ContainerProps };
