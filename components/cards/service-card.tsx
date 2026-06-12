import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string;
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group bg-brand-white shadow-card hover:shadow-luxury duration-normal flex h-full flex-col rounded-xl border p-6 transition-shadow md:p-8",
        className,
      )}
    >
      <div className="bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-white mb-6 flex size-12 items-center justify-center rounded-xl transition-colors duration-300">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-brand-charcoal mb-3 text-xl font-semibold">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
        {description}
      </p>
      <Link
        href={href}
        className="text-brand-teal hover:text-brand-teal/80 focus-visible:ring-brand-teal inline-flex items-center gap-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        Learn More
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
