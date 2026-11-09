import { type ClassValue, clsx } from "clsx";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]): string {
  // Simple implementation without twMerge to avoid extra dep
  return clsx(inputs);
}

/** Format number with optional suffix */
export function formatStat(value: string): string {
  return value;
}

/** Smooth-scroll to element by id */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80; // navbar height
    const top =
      el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

/** Returns a hex color string based on category */
export function categoryColor(category: string): string {
  const map: Record<string, string> = {
    "Brand Identity": "#1E4FC2",
    "Logo Design": "#F28C28",
    "Social Media": "#1E4FC2",
    "Flyer Design": "#F28C28",
    "YouTube Thumbnail": "#1E4FC2",
    "3D Logo": "#F28C28",
    All: "#6B7280",
  };
  return map[category] ?? "#1E4FC2";
}

/** Stagger delay string */
export function staggerDelay(index: number, step = 80): string {
  return `${index * step}ms`;
}

