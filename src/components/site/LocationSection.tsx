import { Car, Clock, Landmark, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, DemoNote } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { clinic } from "@/data/clinic";

export function LocationSection() {
  return (
    <section id="location" className="section bg-background">
      <div className="container-page">
        <SectionHeading
          eyebrow="Find Us"
          title="Downtown Austin, easy to reach."
          intro="The studio sits on Oak Avenue, a two-minute walk from the corner of 4th Street."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-3xl border border-border bg-secondary/60 shadow-soft">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, color-mix(in oklab, var(--navy) 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--navy) 8%, transparent) 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-1/2 h-9 -translate-y-1/2 -rotate-3 bg-card/80"
              />
              <div aria-hidden="true" className="absolute bottom-0 left-1/3 top-0 w-7 rotate-6 bg-card/70" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="relative mx-auto grid size-12 place-items-center rounded-full bg-navy text-primary-foreground shadow-lift">
                  <MapPin className="size-6" aria-hidden="true" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-navy/25" />
                </span>
                <p className="mt-3 rounded-full bg-card px-4 py-1.5 text-sm font-semibold text-navy shadow-soft">
                  BrightSmile Dental Studio
                </p>
              </div>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-muted-foreground">
                Illustrative map — demo location
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-navy">{clinic.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {clinic.address.line1}
                      <br />
                      {clinic.address.line2}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                  <a href={clinic.phoneHref} className="text-sm font-medium text-navy hover:text-teal">
                    {clinic.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                  <a
                    href={`mailto:${clinic.email}`}
                    className="break-all text-sm font-medium text-navy hover:text-teal"
                  >
                    {clinic.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                  <dl className="w-full space-y-1 text-sm">
                    {clinic.hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-4">
                        <dt className="text-foreground">{h.day}</dt>
                        <dd className="text-muted-foreground">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
                <li className="flex gap-3">
                  <Car className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                  <p className="text-sm text-muted-foreground">
                    Two hours of validated parking in the Oak Avenue garage next door, plus metered
                    street parking along 4th Street.
                  </p>
                </li>
                <li className="flex gap-3">
                  <Landmark className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                  <p className="text-sm text-muted-foreground">
                    Opposite Rosewood Park and one block east of the Downtown Public Library.
                  </p>
                </li>
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="pill" className="w-full sm:w-auto">
                  <a href={clinic.directionsHref} target="_blank" rel="noreferrer noopener">
                    <Navigation className="size-4" aria-hidden="true" />
                    Get Directions
                  </a>
                </Button>
                <Button asChild variant="quiet" size="pill" className="w-full sm:w-auto">
                  <a href={clinic.phoneHref}>
                    <Phone className="size-4" aria-hidden="true" />
                    Call the Studio
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <DemoNote className="mt-6">
          Address, phone number, email and parking details are fictional demo information for this
          portfolio website.
        </DemoNote>
      </div>
    </section>
  );
}