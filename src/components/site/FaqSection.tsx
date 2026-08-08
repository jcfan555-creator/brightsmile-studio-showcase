import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { faqs } from "@/data/clinic";

export function FaqSection({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <section id="faqs" className="section bg-sand">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQs"
            title="Questions patients ask us most."
            intro="If your question isn't here, the front desk is happy to answer it by phone."
          />
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {items.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
                  <AccordionTrigger className="cursor-pointer py-5 text-left text-base font-semibold text-navy hover:no-underline hover:text-teal">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}