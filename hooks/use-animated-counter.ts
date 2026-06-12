"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type UseAnimatedCounterOptions = {
  duration?: number;
  start?: number;
};

export function useAnimatedCounter(
  target: number,
  options: UseAnimatedCounterOptions = {},
) {
  const { duration = 2000, start = 0 } = options;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!isInView) return;

    let frameId = 0;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + (target - start) * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration, start]);

  return { ref, value };
}
