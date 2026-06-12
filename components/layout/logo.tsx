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
      <span className="font-heading text-brand-charcoal text-lg font-semibold tracking-tight sm:text-xl">
        Shree Chamunda
      </span>
      <span className="text-brand-teal mt-0.5 text-[0.65rem] font-medium tracking-[0.2em] uppercase sm:text-xs">
        Aluminium
      </span>
    </Link>
  );
}
