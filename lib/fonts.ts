import { Outfit, Poppins } from "next/font/google";

export const fontSans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const fontHeading = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const fontVariables = `${fontSans.variable} ${fontHeading.variable}`;
