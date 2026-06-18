import Image from "next/image";
import Link from "next/link";

import { BRAND_LOGO, SITE_NAME } from "@/constants/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "default" | "inverse";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  const isInverse = variant === "inverse";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity hover:opacity-90",
        className,
      )}
      aria-label={`${SITE_NAME} — Home`}
    >
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-lg",
          isInverse ? "size-11" : "size-10 sm:size-11",
        )}
      >
        <Image
          src={BRAND_LOGO.src}
          alt=""
          width={44}
          height={44}
          className="size-full object-contain"
          priority
        />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-lg font-bold tracking-tight sm:text-xl",
            isInverse ? "text-brand-white" : "text-brand-charcoal",
          )}
        >
          Shree Chamunda
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.65rem] font-semibold tracking-[0.18em] uppercase sm:text-xs",
            isInverse ? "text-brand-teal/90" : "text-brand-teal-ink",
          )}
        >
          Aluminium
        </span>
      </span>
    </Link>
  );
}
