import { DotPattern } from "@/components/magic/dot-pattern";
import { OptimizedImage } from "@/components/shared/optimized-image";
import { Container } from "@/components/ui/container";

export type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ariaLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  ariaLabel = "Page hero",
}: PageHeroProps) {
  return (
    <section
      className="relative flex min-h-[50vh] items-center overflow-hidden md:min-h-[60vh]"
      aria-label={ariaLabel}
    >
      <div className="absolute inset-0">
        <div className="from-brand-charcoal via-brand-charcoal/80 to-brand-teal/40 absolute inset-0 z-10 bg-gradient-to-br" />
        <OptimizedImage
          src={image}
          alt={imageAlt}
          fill
          priority
          sizePreset="hero"
          className="object-cover"
        />
        <DotPattern className="z-10 opacity-20" />
      </div>

      <Container className="relative z-20 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-brand-teal-ink motion-safe-fade-up mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
            {eyebrow}
          </p>
          <h1 className="font-heading text-brand-white motion-safe-fade-up motion-delay-100 mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-brand-mist motion-safe-fade-up motion-delay-200 max-w-2xl text-lg leading-relaxed md:text-xl">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
