"use client";

import { m } from "framer-motion";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { ABOUT_PAGE_HERO } from "@/constants/about";
import { luxuryEase } from "@/lib/motion";

export function AboutPageHero() {
  return (
    <section
      className="relative flex min-h-[50vh] items-center overflow-hidden md:min-h-[60vh]"
      aria-label="About page hero"
    >
      <div className="absolute inset-0">
        <div className="from-brand-charcoal via-brand-charcoal/85 to-brand-teal/30 absolute inset-0 z-10 bg-gradient-to-br" />
        <Image
          src={ABOUT_PAGE_HERO.image}
          alt={ABOUT_PAGE_HERO.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container className="relative z-20 py-24 md:py-32">
        <div className="max-w-3xl">
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: luxuryEase }}
            className="text-brand-teal mb-4 text-sm font-medium tracking-[0.25em] uppercase"
          >
            {ABOUT_PAGE_HERO.eyebrow}
          </m.p>
          <m.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="font-heading text-brand-white mb-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
          >
            {ABOUT_PAGE_HERO.title}
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: luxuryEase }}
            className="text-brand-silver max-w-2xl text-base leading-relaxed md:text-lg"
          >
            {ABOUT_PAGE_HERO.description}
          </m.p>
        </div>
      </Container>
    </section>
  );
}
