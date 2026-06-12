"use client";

import { cloneElement, isValidElement, type ReactElement } from "react";

import { cn } from "@/lib/utils";

type ShimmerButtonProps = {
  background?: string;
  children: React.ReactNode;
  className?: string;
  render?: ReactElement<Record<string, unknown>>;
};

const shimmerClasses = cn(
  "relative inline-flex cursor-pointer items-center justify-center overflow-hidden",
  "px-6 py-3 text-sm font-medium text-white transition-transform active:scale-[0.98]",
  "focus-visible:ring-brand-teal focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
  "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
  "hover:before:animate-[shimmer-pass_1.2s_ease-in-out]",
  "motion-reduce:before:animate-none",
);

export function ShimmerButton({
  children,
  className,
  background = "var(--brand-teal)",
  render,
}: ShimmerButtonProps) {
  const style = { background } as React.CSSProperties;

  const content = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  if (render && isValidElement(render)) {
    const renderProps = render.props as {
      className?: string;
      style?: React.CSSProperties;
    };

    return cloneElement(render, {
      className: cn(shimmerClasses, renderProps.className, className),
      style: { ...style, ...renderProps.style },
      children: content,
    } as Record<string, unknown>);
  }

  return (
    <button
      type="button"
      className={cn(shimmerClasses, className)}
      style={style}
    >
      {content}
    </button>
  );
}
