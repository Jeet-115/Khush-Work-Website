"use client";

import { m } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MISSION, VISION } from "@/constants/about";
import { luxuryEase } from "@/lib/motion";

type MissionVisionCardProps = {
  title: string;
  description: string;
  icon: typeof MISSION.icon;
  index: number;
};

function MissionVisionCard({
  title,
  description,
  icon: Icon,
  index,
}: MissionVisionCardProps) {
  return (
    <m.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: luxuryEase }}
      className="bg-brand-white/5 hover:bg-brand-white/8 border-brand-white/10 rounded-2xl border p-8 backdrop-blur-sm md:p-10"
    >
      <div className="bg-brand-teal mb-6 flex size-14 items-center justify-center rounded-xl">
        <Icon className="text-brand-white size-7" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-brand-white mb-4 text-2xl font-semibold">
        {title}
      </h3>
      <p className="text-brand-mist text-base leading-relaxed">
        {description}
      </p>
    </m.article>
  );
}

export function MissionVisionSection() {
  return (
    <Section spacing="lg" background="charcoal" aria-label="Mission and vision">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <MissionVisionCard {...MISSION} index={0} />
          <MissionVisionCard {...VISION} index={1} />
        </div>
      </Container>
    </Section>
  );
}
