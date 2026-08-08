import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading, DemoNote } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { timeline } from "@/data/clinic";
import reception from "@/assets/clinic-reception.jpg";
import familyCare from "@/assets/family-care.jpg";

export function AboutSection() {
  return (
    <section id="about" className="section bg-background">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3 overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={reception}
                  alt="The warm oak reception desk and seating area at BrightSmile Dental Studio"
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={familyCare}
                  alt="A hygienist showing a young child how to brush while a parent watches"
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About the Studio"
              title="Dental Care Built Around You."
              intro="BrightSmile was built on a simple idea: people look after their teeth when they understand what's happening and trust who's doing it."
            />
            <Reveal delay={80} className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                The studio opened on Oak Avenue in 2009 with two chairs and longer-than-usual
                appointment slots. That approach hasn't changed — every plan is written down, every
                cost is quoted up front, and nobody is talked into treatment they didn't come in for.
              </p>
              <p>
                <strong className="font-semibold text-navy">Our mission:</strong> to make excellent
                dentistry feel calm, transparent and genuinely personal for every patient who walks
                through the door.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {["Clarity before treatment", "Comfort at every visit", "Prevention first", "Honest recommendations"].map(
                  (v) => (
                    <li key={v} className="rounded-xl bg-secondary/60 px-4 py-3 text-sm font-medium text-navy">
                      {v}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
            <Reveal delay={120} className="mt-7">
              <Button asChild variant="hero" size="pill">
                <Link to="/doctors">Meet Our Team</Link>
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <Reveal>
            <h3 className="text-2xl text-navy sm:text-3xl">A short history of the practice</h3>
          </Reveal>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} as="li" delay={i * 70}>
                <div className="h-full border-t-2 border-teal/40 pt-5">
                  <span className="font-display text-2xl text-teal">{t.year}</span>
                  <h4 className="mt-1.5 text-base font-semibold text-navy">{t.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <DemoNote className="mt-8">
            Milestones, founding dates and figures shown here are fictional example content created
            for this demo website.
          </DemoNote>
        </div>
      </div>
    </section>
  );
}