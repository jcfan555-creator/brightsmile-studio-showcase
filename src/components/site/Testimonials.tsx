import { Quote } from "lucide-react";
import { SectionHeading, Stars, DemoNote } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { testimonials } from "@/data/clinic";

export function Testimonials({ count = 8 }: { count?: number }) {
  return (
    <section id="patient-stories" className="section bg-background">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Patient Stories"
            title="Loved by Our Patients"
            intro="Sample reviews written for this demo site — the tone reflects what real patient feedback tends to sound like."
          />
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-secondary font-display text-lg font-semibold text-navy">
                  G
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Google-style review card</p>
                  <p className="text-xs text-muted-foreground">Demo placeholder — not a real listing</p>
                </div>
              </div>
              <div className="mt-4 flex items-end gap-3">
                <span className="font-display text-4xl text-navy">4.9</span>
                <div className="pb-1">
                  <Stars />
                  <p className="text-xs text-muted-foreground">Based on 500+ fictional demo reviews</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.slice(0, count).map((t, i) => (
            <Reveal key={t.name} as="article" delay={(i % 4) * 60} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <Quote className="size-5 text-gold" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <Stars rating={t.rating} />
                  <p className="mt-1.5 text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.treatment}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <DemoNote className="mt-8">
          All testimonials, names and ratings on this page are fictional demo content for a
          portfolio website and do not represent real patients or outcomes.
        </DemoNote>
      </div>
    </section>
  );
}