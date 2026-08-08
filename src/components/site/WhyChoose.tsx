import { Award, CalendarClock, HeartHandshake, Receipt, ScanLine, Sofa } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { whyChoose } from "@/data/clinic";

const icons = {
  award: Award,
  scan: ScanLine,
  receipt: Receipt,
  sofa: Sofa,
  calendar: CalendarClock,
  heart: HeartHandshake,
} as const;

export function WhyChoose() {
  return (
    <section className="section bg-sand">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Patients Choose BrightSmile"
          intro="The details that make a dental visit feel predictable instead of stressful."
          align="center"
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, i) => {
            const Icon = icons[w.icon as keyof typeof icons];
            return (
              <Reveal key={w.title} delay={(i % 3) * 60} className="bg-card">
                <div className="h-full p-7 transition-colors duration-300 hover:bg-secondary/40">
                  <span className="grid size-11 place-items-center rounded-xl bg-navy text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg text-navy">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}