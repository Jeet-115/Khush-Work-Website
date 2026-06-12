"use client";

import { m, type Variants } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { luxuryEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

type BlurFadeProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  inView?: boolean;
};

const variants: Variants = {
  hidden: (y: number) => ({
    opacity: 0,
    y,
  }),
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.5,
  yOffset = 12,
  inView = true,
}: BlurFadeProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <m.div
      custom={yOffset}
      initial="hidden"
      {...(inView
        ? {
            whileInView: "visible",
            viewport: { once: true, margin: "-40px" },
          }
        : { animate: "visible" })}
      variants={variants}
      transition={{ duration, delay, ease: luxuryEase }}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
}
