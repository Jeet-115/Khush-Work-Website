import { Outfit, Poppins } from "next/font/google";

export const fontSans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

export const fontHeading = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

export const fontVariables = `${fontSans.variable} ${fontHeading.variable}`;
