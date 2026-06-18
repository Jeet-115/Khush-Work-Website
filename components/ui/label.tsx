import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "text-foreground text-base leading-snug font-medium",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
