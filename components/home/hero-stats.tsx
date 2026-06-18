"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import type { StatItem } from "@/constants/home";

type HeroStatsProps = {
  stats: readonly StatItem[];
};

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="motion-safe-fade-up motion-delay-500 mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-10 sm:gap-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="font-heading text-brand-white text-2xl font-semibold sm:text-3xl">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="text-brand-mist mt-1 text-sm sm:text-base">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
