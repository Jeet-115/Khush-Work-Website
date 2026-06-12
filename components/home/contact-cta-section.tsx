"use client";

import { m } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CONTACT_CTA_CONTENT } from "@/constants/home";
import { CTA_NAV } from "@/constants/navigation";
import { CONTACT, CONTACT_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: CONTACT.phone,
    href: CONTACT_LINKS.phone,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: CONTACT_LINKS.whatsapp,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: CONTACT_LINKS.email,
    external: false,
  },
] as const;

export function ContactCtaSection() {
  return (
    <Section spacing="lg" background="teal" aria-label="Contact us">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <SectionHeader
            eyebrow={CONTACT_CTA_CONTENT.eyebrow}
            title={CONTACT_CTA_CONTENT.title}
            description={CONTACT_CTA_CONTENT.description}
            light
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <m.a
                  key={method.label}
                  href={method.href}
                  {...(method.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={cn(
                    "bg-brand-white/10 hover:bg-brand-white/15 group duration-normal flex flex-col items-center gap-3 rounded-xl border border-white/10 p-6 backdrop-blur-sm transition-colors",
                    "focus-visible:ring-brand-white focus-visible:ring-offset-brand-teal focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                  )}
                >
                  <div className="bg-brand-white/15 flex size-12 items-center justify-center rounded-xl">
                    <Icon
                      className="text-brand-white size-5"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-brand-white/70 text-xs font-medium tracking-wider uppercase">
                      {method.label}
                    </p>
                    <p className="text-brand-white mt-1 text-sm font-medium">
                      {method.value}
                    </p>
                  </div>
                </m.a>
              );
            })}
          </div>

          <div className="mt-10">
            <Button
              variant="charcoal"
              size="xl"
              render={<Link href={CTA_NAV.href} />}
            >
              {CTA_NAV.label}
            </Button>
          </div>
        </m.div>
      </Container>
    </Section>
  );
}
