"use client";

import { m } from "framer-motion";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import type { Service } from "@/types/services";
import { luxuryEase } from "@/lib/motion";

type ServiceHeroProps = {
  service: Service;
};

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section
      className="relative flex min-h-[45vh] items-center overflow-hidden md:min-h-[55vh]"
      aria-label={`${service.title} hero`}
    >
      <div className="absolute inset-0">
        <div className="from-brand-charcoal via-brand-charcoal/90 to-brand-teal/25 absolute inset-0 z-10 bg-gradient-to-br" />
        <Image
          src={service.hero.image}
          alt={service.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container className="relative z-20 py-20 md:py-28">
        <div className="max-w-3xl">
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: luxuryEase }}
            className="text-brand-teal mb-3 text-sm font-medium tracking-[0.2em] uppercase"
          >
            Our Services
          </m.p>
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="font-heading text-brand-white mb-5 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
          >
            {service.hero.title}
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: luxuryEase }}
            className="text-brand-silver text-base leading-relaxed md:text-lg"
          >
            {service.hero.subtitle}
          </m.p>
        </div>
      </Container>
    </section>
  );
}
