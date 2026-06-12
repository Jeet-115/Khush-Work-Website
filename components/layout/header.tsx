"use client";

import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTA_NAV } from "@/constants/navigation";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Header() {
  const scrolled = useScroll(8);

  return (
    <header
      className={cn(
        "duration-normal sticky top-0 z-40 w-full transition-[background-color,box-shadow,border-color]",
        scrolled
          ? "border-brand-light-grey/80 bg-brand-white/95 shadow-sm"
          : "border-transparent bg-brand-white/90",
        "border-b",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Logo className="shrink-0" />

          <Navbar className="hidden lg:flex" />

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="teal"
              size="default"
              className="hidden sm:inline-flex"
              render={<Link href={CTA_NAV.href} />}
            >
              {CTA_NAV.label}
            </Button>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
