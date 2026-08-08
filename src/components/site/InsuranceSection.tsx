import { BadgeCheck, CreditCard, FileSearch, Wallet } from "lucide-react";
import { SectionHeading, DemoNote } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { insurers } from "@/data/clinic";

const points = [
  { icon: FileSearch, title: "Insurance verification", text: "We check your benefits before treatment so you know what's covered." },
  { icon: BadgeCheck, title: "Major providers", text: "The demo practice describes working with most major dental plans." },
  { icon: CreditCard, title: "Flexible payment options", text: "Monthly plans and third-party financing for larger treatment." },
  { icon: Wallet, title: "Cost consultations", text: "A written estimate before you decide — always, no exceptions." },
];

export function InsuranceSection() {
  return (
    <section id="insurance" className="section bg-background">
      <div className="container-page">
        <SectionHeading
          eyebrow="Insurance & Payment"
          title="Flexible Ways to Pay"
          intro="Cost shouldn't be the reason treatment gets delayed. We talk about it early and in plain numbers."
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 60}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid size-11 place-items-center rounded-xl bg-gold-soft text-navy">
                  <p.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
            {insurers.map((name) => (
              <li
                key={name}
                className="flex h-20 items-center justify-center bg-card px-3 text-center text-sm font-semibold text-muted-foreground transition-colors hover:text-navy"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>

        <DemoNote className="mt-6 text-center">
          Insurance names shown are invented placeholders for this demo website. No acceptance of
          any real insurance provider is claimed or implied.
        </DemoNote>
      </div>
    </section>
  );
}