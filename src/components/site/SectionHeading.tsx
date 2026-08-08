import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  inverted = false,
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", inverted && "text-teal-soft")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl leading-[1.12] sm:text-4xl md:text-[2.6rem]",
          inverted ? "text-primary-foreground" : "text-navy",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            inverted ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
      {children}
    </Reveal>
  );
}

export function DemoNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs leading-relaxed text-muted-foreground/80", className)}>{children}</p>
  );
}

export function Stars({ rating = 5, className }: { rating?: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={cn("size-4", i < rating ? "fill-gold" : "fill-border")}
          aria-hidden="true"
        >
          <path d="M10 1.6l2.47 5.1 5.53.78-4.02 3.9.96 5.54L10 14.3l-4.94 2.62.96-5.53L2 7.48l5.53-.78L10 1.6Z" />
        </svg>
      ))}
    </span>
  );
}