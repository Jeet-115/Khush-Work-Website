"use client";

import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Project } from "@/types/projects";
import { luxuryEase } from "@/lib/motion";

type ProjectServicesProps = {
  project: Project;
};

export function ProjectServices({ project }: ProjectServicesProps) {
  return (
    <Section spacing="lg" aria-label="Services used">
      <Container>
        <div className="mb-10 md:mb-12">
          <p className="text-brand-teal-ink mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
            Services Used
          </p>
          <h2 className="font-heading text-brand-charcoal text-3xl font-semibold tracking-tight md:text-4xl">
            Solutions Delivered
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.servicesUsed.map((service, index) => (
            <m.div
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: luxuryEase,
              }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="border-brand-light-grey hover:border-brand-teal/40 hover:shadow-card group duration-normal focus-visible:ring-brand-teal flex items-center justify-between rounded-xl border bg-white p-5 transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <span className="font-heading text-brand-charcoal group-hover:text-brand-teal font-medium transition-colors">
                  {service.title}
                </span>
                <ArrowRight
                  className="text-brand-teal size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </m.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
