export const duration = {
  instant: "0ms",
  fast: "150ms",
  normal: "250ms",
  slow: "400ms",
  slower: "600ms",
  slowest: "800ms",
} as const;

export const easing = {
  linear: "linear",
  ease: "ease",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
} as const;

export const animation = {
  duration,
  easing,
  transition: {
    fast: `all ${duration.fast} ${easing.easeOut}`,
    normal: `all ${duration.normal} ${easing.easeInOut}`,
    slow: `all ${duration.slow} ${easing.luxury}`,
    colors: `color ${duration.normal} ${easing.easeInOut}, background-color ${duration.normal} ${easing.easeInOut}, border-color ${duration.normal} ${easing.easeInOut}`,
    transform: `transform ${duration.normal} ${easing.luxury}`,
    opacity: `opacity ${duration.fast} ${easing.easeOut}`,
  },
} as const;
