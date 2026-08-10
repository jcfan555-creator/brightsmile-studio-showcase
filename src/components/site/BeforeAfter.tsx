import { useEffect, useState } from "react";
import { SectionHeading, DemoNote } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cosmeticResults } from "@/data/cosmeticResults";
import { cn } from "@/lib/utils";

function CaseImage({
  label,
  src,
  alt,
}: {
  label: string;
  src: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      {failed ? (
        <div className="flex aspect-[4/3] w-full items-center justify-center bg-secondary/60 px-6 text-center text-sm text-muted-foreground">
          Demo image unavailable
        </div>
      ) : (
        <img
          key={src}
          src={src}
          alt={alt}
          width={1024}
          height={768}
          loading="lazy"
          onError={() => setFailed(true)}
          className="aspect-[4/3] w-full animate-in fade-in object-cover duration-300 transition-transform group-hover:scale-[1.03]"
        />
      )}
      <figcaption className="absolute left-4 top-4 rounded-full bg-navy/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
        {label}
      </figcaption>
    </figure>
  );
}

export function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const active = cosmeticResults[index] ?? cosmeticResults[0]!;

  return (
    <section className="section bg-background">
      <div className="container-page">
        <SectionHeading
          eyebrow="Before & After"
          title="Cosmetic results, shown honestly."
          intro="Select a treatment type to view an illustrative before and after pair."
        />

        <div role="tablist" aria-label="Cosmetic treatment results" className="mt-8 flex flex-wrap gap-2">
          {cosmeticResults.map((c, i) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              id={`ba-tab-${c.id}`}
              aria-selected={i === index}
              aria-controls="ba-panel"
              aria-label={`Show ${c.title} before and after result`}
              onClick={() => setIndex(i)}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                i === index
                  ? "border-navy bg-navy text-primary-foreground shadow-soft"
                  : "border-border bg-card text-foreground hover:border-teal hover:text-teal",
              )}
            >
              {c.title}
            </button>
          ))}
        </div>

        <Reveal className="mt-8">
          <div
            id="ba-panel"
            role="tabpanel"
            aria-labelledby={`ba-tab-${active.id}`}
            className="grid gap-4 sm:grid-cols-2"
          >
            <CaseImage label="Before" src={active.beforeSrc} alt={active.beforeAlt} />
            <CaseImage label="After" src={active.afterSrc} alt={active.afterAlt} />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-secondary/60 px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-navy">{active.title}</p>
              <p className="text-sm text-muted-foreground">{active.description}</p>
              <p className="mt-1 text-sm text-muted-foreground">{active.caption}</p>
            </div>
            <span className="rounded-full bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              Illustrative demo case — not a real patient
            </span>
          </div>
        </Reveal>

        <DemoNote className="mt-6">
          Images shown are illustrative demo content for this portfolio website. They are not
          photographs of real patients and do not represent guaranteed treatment outcomes.
        </DemoNote>
      </div>
    </section>
  );
}