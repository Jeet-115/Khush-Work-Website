export const fontFamily = {
  heading: "var(--font-heading), system-ui, sans-serif",
  body: "var(--font-sans), system-ui, sans-serif",
} as const;

export const fontSize = {
  xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.01em" }],
  sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.01em" }],
  base: ["1rem", { lineHeight: "1.625rem", letterSpacing: "0" }],
  lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "-0.01em" }],
  xl: ["1.25rem", { lineHeight: "1.875rem", letterSpacing: "-0.01em" }],
  "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.02em" }],
  "3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "-0.02em" }],
  "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.03em" }],
  "5xl": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
  "6xl": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
  "7xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
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
