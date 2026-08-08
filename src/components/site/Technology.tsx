import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { technology } from "@/data/clinic";
import scan from "@/assets/technology-scan.jpg";

export function Technology() {
  return (
    <section className="section bg-navy">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-2xl shadow-lift">
            <img
              src={scan}
              alt="A dentist using a handheld 3D intraoral scanner while a 3D model of the teeth appears on a monitor"
              width={1200}
              height={912}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Technology"
            title="Modern Dentistry, Made More Comfortable."
            intro="Better tools mostly mean shorter appointments and fewer surprises. Scans replace putty impressions, imaging appears instantly on screen, and plans can be reviewed together before anything begins."
            inverted
          />
          <ul className="mt-8 space-y-4">
            {technology.map((t, i) => (
              <Reveal key={t.title} as="li" delay={i * 60} className="flex gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-teal-soft" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold text-primary-foreground">{t.title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-primary-foreground/70">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}