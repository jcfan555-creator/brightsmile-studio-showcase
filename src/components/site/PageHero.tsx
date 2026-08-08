import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  crumb: string;
}) {
  return (
    <section className="border-b border-border bg-sand">
      <div className="container-page py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-teal">
            Home
          </Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
          <span className="text-navy">{crumb}</span>
        </nav>
        <p className="eyebrow mt-6">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl leading-[1.1] text-navy sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {intro}
        </p>
      </div>
    </section>
  );
}