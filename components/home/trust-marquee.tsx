"use client";

import { Marquee } from "@/components/magic/marquee";
import { TRUST_MARQUEE_ITEMS } from "@/constants/home";
import { cn } from "@/lib/utils";

export function TrustMarquee() {
  return (
    <section
      className="border-brand-light-grey bg-brand-charcoal relative overflow-hidden border-y py-4"
      aria-label="Trust highlights"
    >
      <div
        className="from-brand-charcoal via-transparent to-brand-charcoal pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r"
        aria-hidden="true"
      />
      <div
        className="from-brand-charcoal via-transparent to-brand-charcoal pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l"
        aria-hidden="true"
      />

      <Marquee pauseOnHover className="[--duration:35s]">
        {TRUST_MARQUEE_ITEMS.map((item) => (
          <span
            key={item}
            className={cn(
              "text-brand-silver flex shrink-0 items-center gap-3 px-4 text-sm font-medium tracking-wide uppercase",
            )}
          >
            <span
              className="bg-brand-teal size-1.5 shrink-0 rounded-full"
              aria-hidden="true"
            />
            {item}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
