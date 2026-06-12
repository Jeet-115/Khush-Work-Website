import { cn } from "@/lib/utils";

type SectionFallbackProps = {
  minHeight?: "sm" | "md" | "lg";
  className?: string;
};

const heightClasses = {
  sm: "min-h-[280px]",
  md: "min-h-[420px]",
  lg: "min-h-[560px]",
} as const;

export function SectionFallback({
  minHeight = "md",
  className,
}: SectionFallbackProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("w-full animate-pulse", heightClasses[minHeight], className)}
    >
      <div className="bg-muted/40 mx-auto h-full max-w-7xl rounded-xl" />
    </div>
  );
}

export function FormFallback() {
  return (
    <div
      aria-hidden="true"
      className="border-border bg-card min-h-[520px] animate-pulse rounded-xl border p-6"
    >
      <div className="bg-muted mb-6 h-8 w-48 rounded" />
      <div className="bg-muted/60 mb-8 h-4 w-full max-w-md rounded" />
      <div className="space-y-5">
        <div className="bg-muted/60 h-11 rounded-lg" />
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="bg-muted/60 h-11 rounded-lg" />
          <div className="bg-muted/60 h-11 rounded-lg" />
        </div>
        <div className="bg-muted/60 h-32 rounded-lg" />
        <div className="bg-muted h-12 w-36 rounded-lg" />
      </div>
    </div>
  );
}
