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
    streetAddress: "Makarpura Industrial Estate",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390010",
    addressCountry: "IN",
  },
  geo: {
    latitude: 22.2587,
    longitude: 73.1964,
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
