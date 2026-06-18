export const fontFamily = {
  heading: "var(--font-heading), system-ui, sans-serif",
  body: "var(--font-sans), system-ui, sans-serif",
} as const;

export const fontSize = {
  xs: ["0.8125rem", { lineHeight: "1.25rem", letterSpacing: "0.01em" }],
  sm: ["0.9375rem", { lineHeight: "1.375rem", letterSpacing: "0.01em" }],
  base: ["1.0625rem", { lineHeight: "1.625rem", letterSpacing: "0" }],
  lg: ["1.1875rem", { lineHeight: "1.75rem", letterSpacing: "-0.01em" }],
  xl: ["1.3125rem", { lineHeight: "1.875rem", letterSpacing: "-0.01em" }],
  "2xl": ["1.625rem", { lineHeight: "2.125rem", letterSpacing: "-0.02em" }],
  "3xl": ["2rem", { lineHeight: "2.375rem", letterSpacing: "-0.02em" }],
  "4xl": ["2.5rem", { lineHeight: "2.75rem", letterSpacing: "-0.03em" }],
  "5xl": ["3.25rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
  "6xl": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
  "7xl": ["4.75rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
} as const;

export const fontWeight = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

export const typography = {
  fontFamily,
  fontSize,
  fontWeight,
} as const;
