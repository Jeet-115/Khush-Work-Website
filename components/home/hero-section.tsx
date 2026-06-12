import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { DotPattern } from "@/components/magic/dot-pattern";
import { GradientText } from "@/components/magic/gradient-text";
import { HeroStats } from "@/components/home/hero-stats";
import { OptimizedImage } from "@/components/shared/optimized-image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTA_NAV } from "@/constants/navigation";
import { ABOUT_STATS, HERO_CONTENT } from "@/constants/home";
import { CONTACT, CONTACT_LINKS } from "@/constants/site";

const heroStats = ABOUT_STATS.slice(0, 3);

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <div className="from-brand-charcoal via-brand-charcoal/75 to-brand-teal/50 absolute inset-0 z-10 bg-gradient-to-br" />
        <OptimizedImage
          src={HERO_CONTENT.image}
          alt={HERO_CONTENT.imageAlt}
          fill
          priority
          sizePreset="hero"
          className="object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="via-brand-teal/8 absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,123,123,0.22),transparent_55%)]" />
        <DotPattern className="opacity-25" />
      </div>

      <Container className="relative z-20 py-28 md:py-36 lg:py-40">
        <div className="max-w-4xl">
          <p className="text-brand-teal motion-safe-fade-up mb-6 text-sm font-medium tracking-[0.25em] uppercase">
            Shree Chamunda Aluminium
          </p>

          <h1 className="font-heading motion-safe-fade-up motion-delay-100 mb-6 text-4xl leading-[1.08] font-semibold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            <GradientText
              from="from-brand-white"
              via="via-brand-silver"
              to="to-brand-teal"
              className="block"
            >
              {HERO_CONTENT.headline}
            </GradientText>
          </h1>

          <p className="text-brand-silver motion-safe-fade-up motion-delay-200 mb-10 max-w-2xl text-base leading-relaxed md:text-lg lg:text-xl">
            {HERO_CONTENT.subheading}
          </p>

          <div className="motion-safe-fade-up motion-delay-300 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
              className="border-brand-white/25 text-brand-white hover:bg-brand-white/10 w-full bg-white/5 sm:w-auto"
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
          </div>

          <HeroStats stats={heroStats} />
        </div>
      </Container>

      <div
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-brand-silver text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="bg-brand-teal/60 h-10 w-px" />
        </div>
      </div>
    </section>
  );
}
