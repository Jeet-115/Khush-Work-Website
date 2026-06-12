"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

import { NavLink } from "@/components/layout/nav-link";
import { Button } from "@/components/ui/button";
import { CTA_NAV, MAIN_NAV } from "@/constants/navigation";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  useLockBody(open);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-brand-charcoal/40 fixed inset-0 z-50 backdrop-blur-sm"
              aria-label="Close navigation menu"
              onClick={close}
            />

            <motion.nav
              id={menuId}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-brand-white shadow-elevated fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between border-b px-6 py-4">
                <span className="font-heading text-brand-charcoal text-lg font-semibold">
                  Menu
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={close}
                  aria-label="Close navigation menu"
                >
                  <X className="size-5" />
                </Button>
              </div>

              <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                {MAIN_NAV.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                  >
                    <NavLink
                      {...item}
                      onClick={close}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base",
                        "hover:bg-brand-light-grey",
                      )}
                    />
                  </motion.li>
                ))}
              </ul>

              <div className="border-t p-6">
                <Button
                  variant="teal"
                  size="lg"
                  className="w-full"
                  render={<Link href={CTA_NAV.href} onClick={close} />}
                >
                  {CTA_NAV.label}
                </Button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
