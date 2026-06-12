"use client";

import { m } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTA_NAV } from "@/constants/navigation";
import { HERO_CONTENT } from "@/constants/home";
import { CONTACT, CONTACT_LINKS } from "@/constants/site";

const luxuryEase = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <div className="from-brand-charcoal via-brand-charcoal/80 to-brand-teal/40 absolute inset-0 z-10 bg-gradient-to-br" />
        <Image
          src={HERO_CONTENT.image}
          alt={HERO_CONTENT.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_50%,rgba(10,123,123,0.15),transparent_50%)]" />

      <Container className="relative z-20 py-28 md:py-36 lg:py-40">
        <div className="max-w-3xl">
          <m.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0, ease: luxuryEase }}
            className="text-brand-teal mb-6 text-sm font-medium tracking-[0.25em] uppercase"
          >
            Shree Chamunda Aluminium
          </m.p>

          <m.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: luxuryEase }}
            className="font-heading text-brand-white mb-6 text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
          >
            {HERO_CONTENT.headline}
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
            className="text-brand-silver mb-10 max-w-2xl text-base leading-relaxed md:text-lg lg:text-xl"
          >
            {HERO_CONTENT.subheading}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: luxuryEase }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button
              variant="teal"
              size="lg"
              className="w-full sm:w-auto"
              render={<Link href={CTA_NAV.href} />}
            >
              Get Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-brand-white/30 text-brand-white hover:bg-brand-white/10 w-full bg-white/5 backdrop-blur-sm sm:w-auto"
              render={
                <a
                  href={CONTACT_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-brand-white hover:bg-brand-white/10 w-full sm:w-auto"
              render={<a href={CONTACT_LINKS.phone} />}
            >
              <Phone className="size-4" aria-hidden="true" />
              Call {CONTACT.phone}
            </Button>
          </m.div>
        </div>
      </Container>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        aria-hidden="true"
      >
        <div className="bg-brand-white/30 h-12 w-px animate-pulse" />
      </m.div>
    </section>
  );
}
