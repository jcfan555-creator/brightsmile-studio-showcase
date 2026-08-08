import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading, DemoNote } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { doctors } from "@/data/clinic";
import sarah from "@/assets/doctor-sarah.jpg";
import daniel from "@/assets/doctor-daniel.jpg";
import emily from "@/assets/doctor-emily.jpg";
import michael from "@/assets/doctor-michael.jpg";

const portraits: Record<string, string> = {
  "sarah-mitchell": sarah,
  "daniel-carter": daniel,
  "emily-watson": emily,
  "michael-reed": michael,
};

export function DoctorsSection({ showCta = true }: { showCta?: boolean }) {
  return (
    <section id="doctors" className="section bg-sand">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Meet Our Dental Team"
            title="The clinicians who will actually see you."
            intro="A small, consistent team means your history stays with the same people visit after visit."
          />
          {showCta && (
            <Reveal className="lg:pb-2">
              <Button asChild variant="quiet" size="pill">
                <Link to="/doctors">Meet Our Dental Team</Link>
              </Button>
            </Reveal>
          )}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d, i) => (
            <Reveal key={d.slug} as="article" delay={i * 70}>
              <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="overflow-hidden">
                  <img
                    src={portraits[d.slug]}
                    alt={`Portrait of ${d.name}, ${d.role} at BrightSmile Dental Studio`}
                    width={720}
                    height={928}
                    loading="lazy"
                    className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg text-navy">{d.name}</h3>
                  <p className="text-sm font-semibold text-teal">{d.role}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {d.creds}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.bio}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {d.expertise.map((e) => (
                      <li
                        key={e}
                        className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-navy"
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <DemoNote className="mt-8">
          Team profiles are fictional demo content created for this portfolio website.
        </DemoNote>
      </div>
    </section>
  );
}