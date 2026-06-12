import { cn } from "@/lib/utils";

type GridPatternProps = {
  className?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
};

export function GridPattern({
  className,
  width = 40,
  height = 40,
  strokeWidth = 1,
}: GridPatternProps) {
  const id = "grid-pattern";

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full stroke-brand-white/10",
        className,
      )}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${width} 0 L 0 0 0 ${height}`}
            fill="none"
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
