import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

const title = "Accessibility | BrightSmile Dental Studio";
const description = "Our approach to building an accessible, usable dental website.";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AccessibilityPage,
});

const sections = [
  { h: "Our commitment", p: "This demo site aims to meet WCAG 2.1 AA principles: sufficient colour contrast, keyboard-operable navigation and clear focus states." },
  { h: "What we"ve done", p: "Semantic headings, descriptive alt text, labelled form fields, visible focus rings, large touch targets and reduced-motion support." },
  { h: "In the clinic", p: "A live practice page would describe step-free access, accessible restrooms and support for patients with additional needs." },
  { h: "Feedback", p: "Accessibility issues would be reported to the practice by phone or email so they can be addressed promptly." },
];

function AccessibilityPage() {
  return (
    <>
      <PageHero crumb="Accessibility" eyebrow="Legal" title="Accessibility" intro="Our approach to building an accessible, usable dental website." />
      <section className="section bg-background">
        <div className="container-page max-w-3xl space-y-8">
          {sections.map((s) => (
            <article key={s.h}>
              <h2 className="text-xl text-navy">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
