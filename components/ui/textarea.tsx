import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input bg-background text-foreground placeholder:text-muted-foreground",
        "flex min-h-32 w-full resize-y rounded-lg border px-4 py-3 text-base shadow-xs",
        "transition-[color,box-shadow,border-color] duration-(--duration-normal)",
        "focus-visible:border-brand-teal focus-visible:ring-brand-teal/20 focus-visible:ring-3 focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
