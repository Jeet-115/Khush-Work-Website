import {
  CONTACT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/constants/site";

export const BUSINESS = {
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  priceRange: "$$",
  address: {
    streetAddress:
      "SB-10, Ventage Point, 69, Sampatrao Colony BPC Road, Alkapuri, Near Jetalpur Circle",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390007",
    addressCountry: "IN",
    formatted:
      "SB-10, Ventage Point, 69, Sampatrao Colony BPC Road, Alkapuri, Near Jetalpur Circle, Vadodara, Gujarat 390007",
  },
  geo: {
    latitude: 22.308645,
    longitude: 73.17165,
  },
  maps: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4541.894189906147!2d73.17164961155518!3d22.30864544250692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b16aaaaaab%3A0xf4120a7dda7bb833!2sShree%20Chamunda%20Aluminium!5e1!3m2!1sen!2sin!4v1781797776326!5m2!1sen!2sin",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=22.308645,73.17165",
  },
  openingHours: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [] as string[],
} as const;
