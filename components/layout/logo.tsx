import Link from "next/link";

import { SITE_NAME } from "@/constants/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex flex-col leading-none transition-opacity hover:opacity-90",
        className,
      )}
      aria-label={`${SITE_NAME} — Home`}
    >
      <span className="font-heading text-brand-charcoal text-xl font-bold tracking-tight sm:text-2xl">
        Shree Chamunda
      </span>
      <span className="text-brand-teal-ink mt-0.5 text-xs font-semibold tracking-[0.18em] uppercase sm:text-sm">
        Aluminium
      </span>
    </Link>
  );
}
