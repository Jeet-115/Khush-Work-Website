import { ExternalLink, MapPin, Navigation } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BUSINESS } from "@/constants/business";
import { CONTACT_PAGE_CONTENT } from "@/constants/contact";
import { CONTACT, CONTACT_LINKS } from "@/constants/site";

export function ContactMap() {
  const { map } = CONTACT_PAGE_CONTENT;

  return (
    <Section
      spacing="lg"
      background="muted"
      aria-label="Office location map"
      className="border-t"
    >
      <Container>
        <SectionHeader
          eyebrow={map.eyebrow}
          title={map.title}
          description={map.description}
        />

        <Card className="border-border/60 overflow-hidden shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)]">
          <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)]">
            <div className="flex flex-col justify-between gap-8 p-8 lg:p-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-teal/10 text-brand-teal flex size-11 shrink-0 items-center justify-center rounded-xl">
                    <MapPin className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading text-foreground text-lg font-semibold">
                      {CONTACT_PAGE_CONTENT.info.addressTitle}
                    </p>
                    <address className="text-muted-foreground mt-2 text-base leading-relaxed not-italic">
                      {BUSINESS.address.formatted}
                    </address>
                  </div>
                </div>

                <div className="bg-brand-light-grey/70 rounded-xl p-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Conveniently located in Alkapuri with easy access from
                    Jetalpur Circle. Call{" "}
                    <a
                      href={CONTACT_LINKS.phone}
                      className="text-brand-teal-ink hover:text-brand-teal font-medium transition-colors"
                    >
                      {CONTACT.phone}
                    </a>{" "}
                    before your visit and we will be ready to assist you.
                  </p>
                </div>
              </div>

              <Button
                render={
                  <a
                    href={BUSINESS.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
                size="lg"
                className="w-full sm:w-auto"
              >
                <Navigation className="size-4" aria-hidden="true" />
                {map.directionsLabel}
                <ExternalLink className="size-4 opacity-70" aria-hidden="true" />
              </Button>
            </div>

            <div className="border-border/60 relative min-h-[320px] border-t lg:min-h-[460px] lg:border-t-0 lg:border-l">
              <iframe
                src={BUSINESS.maps.embedUrl}
                title={map.mapTitle}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
