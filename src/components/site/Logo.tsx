import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      aria-label="BrightSmile Dental Studio — home"
      className={cn("flex min-w-0 items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-full",
          inverted ? "bg-primary-foreground/12 text-teal-soft" : "bg-teal-soft text-navy",
        )}
      >
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none">
          <path
            d="M12 6.6C10.8 5.3 9.4 4.7 8 4.7 5.5 4.7 3.6 6.7 3.6 9.6c0 2.6 1 5.3 2.2 7.4.7 1.2 1.5 2.3 2.5 2.3.9 0 1.4-.6 2.4-.6h2.6c1 0 1.5.6 2.4.6 1 0 1.8-1.1 2.5-2.3 1.2-2.1 2.2-4.8 2.2-7.4 0-2.9-1.9-4.9-4.4-4.9-1.4 0-2.8.6-4 1.9Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M12 6.6v4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      <span className="min-w-0 leading-tight">
        <span
          className={cn(
            "block truncate font-display text-[15px] font-semibold tracking-tight sm:text-base",
            inverted ? "text-primary-foreground" : "text-navy",
          )}
        >
          BrightSmile
        </span>
        <span
          className={cn(
            "block text-[10px] font-semibold uppercase tracking-[0.18em]",
            inverted ? "text-primary-foreground/60" : "text-muted-foreground",
          )}
        >
          Dental Studio
        </span>
      </span>
    </Link>
  );
}