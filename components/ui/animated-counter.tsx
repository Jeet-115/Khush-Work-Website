"use client";

import { useAnimatedCounter } from "@/hooks/use-animated-counter";
import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
};

export function AnimatedCounter({
  value,
  suffix = "",
  className,
  duration,
}: AnimatedCounterProps) {
  const { ref, value: display } = useAnimatedCounter(value, { duration });
  const formattedValue = new Intl.NumberFormat("en-US").format(display);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {formattedValue}
      {suffix}
    </span>
  );
}
