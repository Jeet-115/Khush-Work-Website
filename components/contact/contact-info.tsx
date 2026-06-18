"use client";

import { m } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BUSINESS } from "@/constants/business";
import { CONTACT_PAGE_CONTENT } from "@/constants/contact";
import { CONTACT, CONTACT_LINKS } from "@/constants/site";
import { luxuryEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
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

export function ContactInfo() {
  const address = BUSINESS.address.formatted;

  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle>{CONTACT_PAGE_CONTENT.info.title}</CardTitle>
          <CardDescription>
            {CONTACT_PAGE_CONTENT.info.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <a
                key={method.label}
                href={method.href}
                {...(method.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={cn(
                  "hover:bg-muted/60 flex items-start gap-4 rounded-lg border p-4 transition-colors",
                  "focus-visible:ring-brand-teal focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                )}
              >
                <div className="bg-brand-teal/10 text-brand-teal flex size-10 shrink-0 items-center justify-center rounded-lg">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                    {method.label}
                  </p>
                  <p className="text-foreground mt-1 text-sm font-medium">
                    {method.value}
                  </p>
                </div>
              </a>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 pt-6">
          <div className="flex items-start gap-4">
            <div className="bg-brand-teal/10 text-brand-teal flex size-10 shrink-0 items-center justify-center rounded-lg">
              <Clock className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-medium">{CONTACT_PAGE_CONTENT.info.hoursTitle}</p>
              <p className="text-muted-foreground mt-1 text-sm">
                {CONTACT_PAGE_CONTENT.info.hours}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-brand-teal/10 text-brand-teal flex size-10 shrink-0 items-center justify-center rounded-lg">
              <MapPin className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-medium">{CONTACT_PAGE_CONTENT.info.addressTitle}</p>
              <address className="text-muted-foreground mt-1 text-sm not-italic">
                {address}
              </address>
            </div>
          </div>
        </CardContent>
      </Card>
    </m.div>
  );
}
