"use client";

import { m } from "framer-motion";
import Image from "next/image";

import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TEAM, TEAM_CONTENT } from "@/constants/about";
import { luxuryEase } from "@/lib/motion";

export function TeamSection() {
  return (
    <Section spacing="lg" background="muted" aria-label="Our team">
      <Container>
        <SectionHeader
          eyebrow={TEAM_CONTENT.eyebrow}
          title={TEAM_CONTENT.title}
          description={TEAM_CONTENT.description}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, index) => (
            <m.article
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: luxuryEase,
              }}
              className="bg-brand-white shadow-card hover:shadow-luxury group duration-normal overflow-hidden rounded-xl border transition-shadow"
            >
              <div className="bg-brand-light-grey relative aspect-square overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="duration-slow object-cover transition-transform group-hover:scale-105"
                />
                <div className="from-brand-charcoal/50 duration-normal absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-brand-charcoal text-lg font-semibold">
                  {member.name}
                </h3>
                <p className="text-brand-teal mt-1 text-sm font-medium">
                  {member.role}
                </p>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </m.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
