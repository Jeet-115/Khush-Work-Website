"use client";

import { m } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  className?: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
}: FeatureCardProps) {
  return (
    <m.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "bg-brand-white shadow-card hover:shadow-luxury duration-normal rounded-xl border p-6 transition-shadow md:p-8",
        className,
      )}
    >
      <div className="bg-brand-charcoal text-brand-white mb-5 flex size-11 items-center justify-center rounded-lg">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-brand-charcoal mb-2 text-lg font-semibold">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </m.article>
  );
}
