import { cn } from "@/lib/utils";

type AuroraBackgroundProps = {
  className?: string;
  children?: React.ReactNode;
};

export function AuroraBackground({
  className,
  children,
}: AuroraBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="bg-brand-teal/15 absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full" />
        <div className="bg-brand-teal/10 absolute top-1/3 -right-1/4 h-2/5 w-2/5 rounded-full" />
      </div>
      {children}
    </div>
  );
}
