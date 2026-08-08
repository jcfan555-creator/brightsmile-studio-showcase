import { CalendarClock, HeartHandshake, ScanLine, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { trustPoints } from "@/data/clinic";

const icons = {
  scan: ScanLine,
  users: Users,
  heart: HeartHandshake,
  calendar: CalendarClock,
} as const;

export function TrustBar() {
  return (
    <section className="border-y border-border bg-background">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
        {trustPoints.map((p, i) => {
          const Icon = icons[p.icon as keyof typeof icons];
          return (
            <Reveal key={p.title} delay={i * 60} className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-navy">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}