import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  AlignVerticalSpaceAround,
  ArrowRight,
  Check,
  Siren,
  Sparkles,
  Stethoscope,
  ShieldPlus,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { services, type Service } from "@/data/clinic";

const icons = {
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  shield: ShieldPlus,
  aligner: AlignVerticalSpaceAround,
  family: Users,
  alert: Siren,
} as const;

export function ServicesSection({
  heading = "Comprehensive Dentistry, One Studio.",
  eyebrow = "Our Services",
  intro = "From six-month checkups to full smile makeovers, treatment is planned in-house by clinicians who already know your history.",
}: {
  heading?: string;
  eyebrow?: string;
  intro?: string;
}) {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="section bg-background">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} title={heading} intro={intro} />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal key={s.slug} delay={(i % 3) * 70} as="article" className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lift">
                  <span className="grid size-12 place-items-center rounded-xl bg-teal-soft text-teal transition-colors group-hover:bg-teal group-hover:text-accent-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.treatments.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-foreground/85">
                        <Check className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setActive(s)}
                    className="mt-6 inline-flex cursor-pointer items-center gap-1.5 self-start text-sm font-semibold text-navy transition-colors hover:text-teal"
                  >
                    Learn More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto rounded-2xl sm:max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl text-navy">{active.title}</DialogTitle>
                <DialogDescription className="text-left text-sm leading-relaxed text-muted-foreground">
                  {active.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2 space-y-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
                    Treatments included
                  </h4>
                  <ul className="mt-2.5 grid gap-1.5 sm:grid-cols-2">
                    {active.treatments.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-secondary/60 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-navy">
                    Who it suits
                  </h4>
                  <p className="mt-1.5 text-sm text-muted-foreground">{active.good}</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild variant="hero" size="pill" className="w-full sm:w-auto">
                    <Link to="/appointments">Book a Consultation</Link>
                  </Button>
                  <Button asChild variant="quiet" size="pill" className="w-full sm:w-auto">
                    <Link to="/contact">Ask a Question</Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}