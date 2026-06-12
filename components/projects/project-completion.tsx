"use client";

import { m } from "framer-motion";
import { Calendar, Clock, HardHat, Ruler, User } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Project } from "@/types/projects";
import { luxuryEase } from "@/lib/motion";

type ProjectCompletionProps = {
  project: Project;
};

const completionIcons = {
  completedDate: Calendar,
  duration: Clock,
  scope: HardHat,
  area: Ruler,
  client: User,
} as const;

const completionLabels: Record<keyof Project["completion"], string> = {
  completedDate: "Completed",
  duration: "Duration",
  scope: "Scope",
  area: "Area",
  client: "Client",
};

export function ProjectCompletion({ project }: ProjectCompletionProps) {
  const details = Object.entries(project.completion) as [
    keyof Project["completion"],
    string,
  ][];

  return (
    <Section spacing="lg" background="charcoal" aria-label="Completion details">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: luxuryEase }}
        >
          <p className="text-brand-teal/90 mb-3 text-sm font-medium tracking-[0.2em] uppercase">
            Completion Details
          </p>
          <h2 className="font-heading text-brand-white mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
            Project at a Glance
          </h2>

          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {details.map(([key, value], index) => {
              const Icon = completionIcons[key];

              return (
                <m.div
                  key={key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: luxuryEase,
                  }}
                  className="bg-brand-white/5 border-brand-white/10 rounded-xl border p-6"
                >
                  <dt className="text-brand-silver mb-2 flex items-center gap-2 text-xs font-medium tracking-wider uppercase">
                    <Icon
                      className="text-brand-teal size-4"
                      aria-hidden="true"
                    />
                    {completionLabels[key]}
                  </dt>
                  <dd className="text-brand-white text-base font-medium">
                    {value}
                  </dd>
                </m.div>
              );
            })}
          </dl>
        </m.div>
      </Container>
    </Section>
  );
}
