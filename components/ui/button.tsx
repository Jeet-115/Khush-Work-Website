import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2",
    "rounded-lg border border-transparent font-medium whitespace-nowrap",
    "transition-[color,background-color,border-color,box-shadow,transform]",
    "duration-(--duration-normal) ease-(--ease-luxury)",
    "outline-none select-none",
    "focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-disabled:pointer-events-none aria-disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:scale-[0.98]",
        charcoal:
          "bg-brand-charcoal text-brand-white shadow-sm hover:bg-brand-charcoal/90 active:scale-[0.98]",
        teal: "bg-brand-teal text-brand-white shadow-sm hover:bg-brand-teal/90 active:scale-[0.98]",
        outline:
          "border-border bg-background text-foreground shadow-xs hover:bg-muted hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-foreground hover:bg-muted hover:text-foreground",
        silver:
          "bg-brand-silver/20 text-brand-charcoal hover:bg-brand-silver/30",
        link: "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/30",
      },
      size: {
        default: "h-10 px-5 text-sm",
        sm: "h-8 rounded-md px-3.5 text-xs",
        lg: "h-12 rounded-xl px-7 text-base",
        xl: "h-14 rounded-xl px-8 text-base tracking-wide",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ComponentProps<typeof ButtonPrimitive> &
  VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants, type ButtonProps };
