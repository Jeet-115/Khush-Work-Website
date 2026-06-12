"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ScrollToTop() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [pathname, reducedMotion]);

  return null;
}
