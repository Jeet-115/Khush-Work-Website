import { animation } from "@/lib/theme/animation";
import { colors } from "@/lib/theme/colors";
import { radius } from "@/lib/theme/radius";
import { shadows } from "@/lib/theme/shadows";
import { containerPadding, sectionSpacing, spacing } from "@/lib/theme/spacing";
import { typography } from "@/lib/theme/typography";
import { zIndex } from "@/lib/theme/z-index";

export const theme = {
  brand: "Shree Chamunda Aluminium",
  colors,
  spacing,
  sectionSpacing,
  containerPadding,
  shadows,
  radius,
  zIndex,
  animation,
  typography,
} as const;

export type Theme = typeof theme;

export {
  animation,
  colors,
  containerPadding,
  radius,
  sectionSpacing,
  shadows,
  spacing,
  typography,
  zIndex,
};
