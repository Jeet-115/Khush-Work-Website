"use client";

import { m } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TEAM, TEAM_CONTENT } from "@/constants/about";
import { luxuryEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function TeamSection() {
  return (
    <Section spacing="lg" background="muted" aria-label="Our team" defer>
      <Container>
        <SectionHeader
          eyebrow={TEAM_CONTENT.eyebrow}
          title={TEAM_CONTENT.title}
          description={TEAM_CONTENT.description}
        />

        <div
          className={cn(
            "grid gap-8",
            TEAM.length === 1
              ? "mx-auto max-w-3xl grid-cols-1"
              : "sm:grid-cols-2 lg:grid-cols-4",
          )}
        >
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
