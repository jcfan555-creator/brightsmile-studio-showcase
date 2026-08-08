import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stars } from "./SectionHeading";
import { heroStats } from "@/data/clinic";
import heroImage from "@/assets/hero-dentist.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sand">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 hidden size-[38rem] rounded-full bg-teal-soft/60 blur-3xl lg:block"
      />
      <div className="container-page relative pb-14 pt-12 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-navy shadow-soft">
              <ShieldCheck className="size-4 text-teal" aria-hidden="true" />
              Accepting new patients in downtown Austin
            </p>
            <h1 className="mt-6 text-[2.5rem] leading-[1.05] text-navy sm:text-5xl lg:text-[3.6rem]">
              A Healthier Smile Starts Here.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Personalized dental care for you and your family, combining modern technology with a
              warm, patient-first experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                <Link to="/appointments">
                  Book Your Appointment
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="quiet" size="xl" className="w-full sm:w-auto">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[1.75rem] shadow-lift">
              <img
                src={heroImage}
                alt="A dentist in navy scrubs talking with a smiling patient in a bright treatment room at BrightSmile Dental Studio"
                width={1408}
                height={1056}
                fetchPriority="high"
                className="h-[19rem] w-full object-cover sm:h-[24rem] lg:h-[30rem]"
              />
            </div>
            <div className="absolute -bottom-6 left-4 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lift sm:block">
              <Stars />
              <p className="mt-1.5 text-sm font-semibold text-navy">4.9/5 patient rating</p>
              <p className="text-xs text-muted-foreground">Demo rating · 500+ sample reviews</p>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-soft lg:mt-20 lg:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="bg-card px-5 py-6 text-center sm:px-6">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-2xl text-navy sm:text-[1.75rem]">
                  {s.value}
                </span>
                <span className="mt-1 block text-sm font-medium text-foreground">{s.label}</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">{s.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}