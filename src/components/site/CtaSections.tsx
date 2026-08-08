import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { clinic } from "@/data/clinic";

export function ConsultCta() {
  return (
    <section className="bg-secondary/50 py-14 md:py-20">
      <div className="container-page">
        <Reveal className="grid gap-6 rounded-3xl border border-border bg-card px-6 py-10 shadow-soft md:grid-cols-[1.4fr_auto] md:items-center md:px-12">
          <div>
            <h2 className="text-2xl text-navy sm:text-3xl">Not Sure What Treatment You Need?</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Tell us what's bothering you and our team will help you find the right next step — even
              if that turns out to be no treatment at all.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/appointments">Book a Consultation</Link>
            </Button>
            <Button asChild variant="quiet" size="xl">
              <a href={clinic.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                Call the Clinic
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function EmergencyCta() {
  return (
    <section id="emergency" className="bg-navy py-14 md:py-16">
      <div className="container-page">
        <Reveal className="grid gap-6 md:grid-cols-[auto_1.3fr_auto] md:items-center">
          <span className="grid size-14 place-items-center rounded-2xl bg-destructive/15 text-destructive-foreground">
            <Siren className="size-6 text-gold" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-2xl text-primary-foreground sm:text-3xl">Need Urgent Dental Care?</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
              Don't wait in pain. Contact our team and we'll help you determine the next best step.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Button asChild variant="onNavy" size="xl">
              <a href={clinic.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                Call for Emergency Care
              </a>
            </Button>
            <Button asChild variant="outlineNavy" size="xl">
              <Link to="/appointments">Request an Appointment</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-sand py-16 md:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{clinic.tagline}</p>
          <h2 className="mt-4 text-3xl leading-tight text-navy sm:text-4xl md:text-[2.75rem]">
            Your Best Smile Starts With One Appointment.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Take the first step toward healthier, more confident teeth.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/appointments">
                Book an Appointment
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="quiet" size="xl">
              <a href={clinic.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                Call Us
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}