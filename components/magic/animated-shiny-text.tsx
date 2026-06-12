import { cn } from "@/lib/utils";

type AnimatedShinyTextProps = {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
};

export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
}: AnimatedShinyTextProps) {
  return (
    <span
      className={cn(
        "animate-shiny-text bg-size-[var(--shiny-width)_100%] bg-clip-text text-transparent",
        "bg-[linear-gradient(110deg,var(--brand-teal),45%,var(--brand-white),55%,var(--brand-teal))]",
        className,
      )}
      style={{ "--shiny-width": `${shimmerWidth}%` } as React.CSSProperties}
    >
      {children}
    </span>
  );
}
