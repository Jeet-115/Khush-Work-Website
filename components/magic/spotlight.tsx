import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export function Spotlight({
  className,
  fill = "rgba(10,123,123,0.1)",
}: SpotlightProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        background: `radial-gradient(600px circle at 30% 40%, ${fill}, transparent 50%)`,
      }}
      aria-hidden="true"
    />
  );
}
