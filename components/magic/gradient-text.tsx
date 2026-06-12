import { cn } from "@/lib/utils";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
};

export function GradientText({
  children,
  className,
  from = "from-brand-white",
  via = "via-brand-silver",
  to = "to-brand-teal",
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        from,
        via,
        to,
        className,
      )}
    >
      {children}
    </span>
  );
}
