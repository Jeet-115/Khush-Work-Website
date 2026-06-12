"use client";

import { cn } from "@/lib/utils";

type BorderBeamProps = {
  className?: string;
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
};

export function BorderBeam({
  className,
  size = 120,
  duration = 8,
  colorFrom = "#0a7b7b",
  colorTo = "#33adad",
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className="animate-border-beam-spin absolute aspect-square opacity-60"
        style={
          {
            width: size,
            background: `linear-gradient(90deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
            animationDuration: `${duration}s`,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
