import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import { BUSINESS } from "@/constants/business";
import { MAIN_NAV, CTA_NAV } from "@/constants/navigation";
import { CONTACT, SITE_DESCRIPTION, SITE_NAME } from "@/constants/site";

const currentYear = new Date().getFullYear();

export function Footer() {
  const fullAddress = `${BUSINESS.address.streetAddress}, ${BUSINESS.address.addressLocality}, ${BUSINESS.address.addressRegion} ${BUSINESS.address.postalCode}`;

  return (
    <footer
      className="bg-brand-charcoal text-brand-white"
      aria-label="Site footer"
    >
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-4 lg:col-span-1">
            <Logo className="[&_span:first-child]:text-brand-white [&_span:last-child]:text-brand-teal/90" />
            <p className="text-brand-silver max-w-xs text-sm leading-relaxed">
              {SITE_DESCRIPTION}
            </p>
          </div>

          <div>
            <h2 className="font-heading mb-4 text-sm font-semibold tracking-wide uppercase">
              Navigation
            </h2>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {MAIN_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-brand-silver hover:text-brand-white duration-normal focus-visible:ring-brand-teal focus-visible:ring-offset-brand-charcoal text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="font-heading mb-4 text-sm font-semibold tracking-wide uppercase">
              Contact
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="text-brand-silver hover:text-brand-white duration-normal focus-visible:ring-brand-teal focus-visible:ring-offset-brand-charcoal flex items-start gap-3 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <Phone
                    className="text-brand-teal mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-brand-silver hover:text-brand-white duration-normal focus-visible:ring-brand-teal focus-visible:ring-offset-brand-charcoal flex items-start gap-3 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <Mail
                    className="text-brand-teal mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <address className="text-brand-silver flex items-start gap-3 text-sm not-italic">
                  <MapPin
                    className="text-brand-teal mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  {fullAddress}
                </address>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div>
              <h2 className="font-heading mb-4 text-sm font-semibold tracking-wide uppercase">
                Get Started
              </h2>
              <p className="text-brand-silver mb-4 text-sm leading-relaxed">
                Ready to elevate your space with premium aluminium solutions?
              </p>
              <Link
                href={CTA_NAV.href}
                className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 duration-normal focus-visible:ring-brand-teal focus-visible:ring-offset-brand-charcoal inline-flex h-10 items-center justify-center rounded-lg px-5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                {CTA_NAV.label}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-brand-white/10 mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-brand-silver text-xs">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-brand-silver text-xs">
            Crafted with precision. Built to last.
          </p>
        </div>
      </Container>
    </footer>
  );
}
