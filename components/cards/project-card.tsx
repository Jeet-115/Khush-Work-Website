import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

import { OptimizedImage } from "@/components/shared/optimized-image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  category: string;
  location: string;
  image: string;
  href: string;
  className?: string;
};

export function ProjectCard({
  title,
  category,
  location,
  image,
  href,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl",
        className,
      )}
    >
      <Link
        href={href}
        className="focus-visible:ring-brand-teal block h-full min-h-[280px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:min-h-[320px]"
      >
        <div className="relative h-full min-h-[inherit] w-full">
          <div className="from-brand-charcoal via-brand-charcoal/70 to-brand-teal/30 absolute inset-0 bg-gradient-to-br" />
          <OptimizedImage
            src={image}
            alt={title}
            fill
            sizePreset="card"
            className="duration-normal object-cover transition-transform group-hover:scale-105"
          />
          <div className="from-brand-charcoal/90 via-brand-charcoal/30 absolute inset-0 bg-gradient-to-t to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 md:p-8">
            <Badge
              variant="teal"
              className="bg-brand-teal/20 text-brand-white w-fit"
            >
              {category}
            </Badge>
            <h3 className="font-heading text-brand-white text-2xl font-semibold md:text-3xl">
              {title}
            </h3>
            <p className="text-brand-silver flex items-center gap-2 text-sm">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              {location}
            </p>
            <span className="text-brand-white mt-2 inline-flex items-center gap-2 text-sm font-medium">
              View Project
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
