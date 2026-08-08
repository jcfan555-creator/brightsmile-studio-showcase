import { useState } from "react";
import { SectionHeading, DemoNote } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { beforeAfter } from "@/data/clinic";
import before from "@/assets/smile-before.jpg";
import after from "@/assets/smile-after.jpg";
import { cn } from "@/lib/utils";

export function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const active = beforeAfter[index] ?? beforeAfter[0]!;

  return (
    <section className="section bg-background">
      <div className="container-page">
        <SectionHeading
          eyebrow="Before & After"
          title="Cosmetic results, shown honestly."
          intro="Select a treatment type to view an illustrative before and after pair."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {beforeAfter.map((c, i) => (
            <button
              key={c.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-pressed={i === index}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-all",
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
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Before", src: before, alt: `Illustrative before image for a ${active.title.toLowerCase()} demo case` },
              { label: "After", src: after, alt: `Illustrative after image for a ${active.title.toLowerCase()} demo case` },
            ].map((img) => (
              <figure
                key={img.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={816}
                  height={816}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute left-4 top-4 rounded-full bg-navy/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                  {img.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-secondary/60 px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-navy">{active.title}</p>
              <p className="text-sm text-muted-foreground">{active.detail}</p>
            </div>
            <span className="rounded-full bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              {active.note}
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