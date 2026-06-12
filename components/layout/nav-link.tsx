"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

type NavLinkProps = NavItem & {
  className?: string;
  onClick?: () => void;
};

export function NavLink({
  label,
  href,
  disabled,
  className,
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  if (disabled) {
    return (
      <span
        className={cn(
          "text-muted-foreground cursor-not-allowed text-sm font-medium",
          className,
        )}
        aria-disabled="true"
      >
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "duration-normal relative text-sm font-medium transition-colors",
        "hover:text-brand-teal focus-visible:ring-brand-teal rounded-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        isActive ? "text-brand-teal" : "text-brand-charcoal/80",
        className,
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
      {isActive && (
        <span
          className="bg-brand-teal absolute -bottom-1 left-0 h-px w-full"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
