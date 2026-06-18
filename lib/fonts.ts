import { Inter, Plus_Jakarta_Sans } from "next/font/google";

export const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

export const fontHeading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

export const fontVariables = `${fontSans.variable} ${fontHeading.variable}`;
