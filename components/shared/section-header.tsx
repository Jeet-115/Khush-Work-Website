import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  id,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "mx-auto max-w-2xl text-center",
        align === "left" && "max-w-2xl text-left",
        className,
      )}
    >
      <p
        className={cn(
          "mb-3 text-sm font-semibold tracking-[0.18em] uppercase",
          light ? "text-teal-300" : "text-brand-teal-ink",
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "font-heading mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
          light ? "text-brand-white" : "text-brand-charcoal",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg leading-relaxed md:text-xl",
            light ? "text-brand-mist" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
