import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "blue" | "orange" | "gray";
  className?: string;
}

export function Badge({ children, variant = "blue", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide px-3 py-1 rounded-full",
        variant === "blue" && "bg-brand-blue/10 text-brand-blue",
        variant === "orange" && "bg-accent/10 text-accent-dark",
        variant === "gray" && "bg-gray-100 text-gray-600",
        className
      )}
    >
      {children}
    </span>
  );
}

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase",
        "text-accent-dark bg-accent/10 px-4 py-2 rounded-full",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </div>
  );
}
