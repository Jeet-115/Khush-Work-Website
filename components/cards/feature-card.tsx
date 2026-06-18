import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "glass";
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  variant = "default",
}: FeatureCardProps) {
  const isGlass = variant === "glass";

  return (
    <article
      className={cn(
        "group rounded-xl border p-6 transition-shadow duration-300 md:p-8",
        isGlass
          ? "border-white/10 bg-white/5 hover:bg-white/8"
          : "bg-brand-white shadow-card hover:shadow-luxury",
        className,
      )}
    >
      <div
        className={cn(
          "mb-5 flex size-11 items-center justify-center rounded-lg transition-colors",
          isGlass
            ? "bg-brand-teal/20 text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-white"
            : "bg-brand-charcoal text-brand-white",
        )}
      >
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3
        className={cn(
          "font-heading mb-2 text-xl font-semibold",
          isGlass ? "text-brand-white" : "text-brand-charcoal",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-base leading-relaxed",
          isGlass ? "text-brand-mist" : "text-muted-foreground",
        )}
      >
        {description}
      </p>
    </article>
  );
}
