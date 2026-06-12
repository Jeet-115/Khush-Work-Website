import { cn } from "@/lib/utils";

type ShineBorderProps = {
  children: React.ReactNode;
  className?: string;
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string;
};

export function ShineBorder({
  children,
  className,
  borderRadius = 12,
  borderWidth = 1,
  duration = 14,
  color = "rgba(10,123,123,0.4)",
}: ShineBorderProps) {
  return (
    <div
      className={cn("relative rounded-[inherit]", className)}
      style={
        {
          "--border-radius": `${borderRadius}px`,
          "--border-width": borderWidth,
          "--duration": duration,
          "--shine-color": color,
        } as React.CSSProperties
      }
    >
      <div
        className="animate-shine-border pointer-events-none absolute inset-0 rounded-[inherit] p-[var(--border-width)]"
        style={{
          background: `conic-gradient(from var(--shine-angle, 0deg), transparent 0%, var(--shine-color) 10%, transparent 20%)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
