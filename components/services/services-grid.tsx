"use client";

import { m } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getServiceIcon } from "@/components/services/service-icons";
import { SERVICES } from "@/constants/services";
import { luxuryEase } from "@/lib/motion";

export function ServicesGrid() {
  return (
    <Section spacing="lg" aria-label="All services">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = getServiceIcon(service.slug);

            return (
              <m.article
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: luxuryEase,
                }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="bg-brand-white shadow-card hover:shadow-luxury group duration-normal focus-visible:ring-brand-teal flex h-full flex-col rounded-xl border p-6 transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:p-8"
                >
                  <div className="bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-white duration-normal mb-5 flex size-12 items-center justify-center rounded-xl transition-colors">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h2 className="font-heading text-brand-charcoal group-hover:text-brand-teal mb-2 text-lg font-semibold transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground flex-1 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <span className="text-brand-teal mt-4 text-sm font-medium">
                    View Details →
                  </span>
                </Link>
              </m.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
