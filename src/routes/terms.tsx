import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

const title = "Terms of Service | BrightSmile Dental Studio";
const description = "Terms covering the use of this demonstration website.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TermsPage,
});

const sections = [
  { h: "Demo notice", p: "BrightSmile Dental Studio is a fictional practice. Nothing on this site constitutes a real offer of dental services or medical advice." },
  { h: "Use of this site", p: "Content is provided for demonstration and portfolio purposes and may change without notice." },
  { h: "No medical advice", p: "Information here is general in nature. Always consult a qualified dentist about your own care." },
  { h: "Liability", p: "No warranty is given regarding accuracy of the demonstration content presented on this website." },
];

function TermsPage() {
  return (
    <>
      <PageHero crumb="Terms of Service" eyebrow="Legal" title="Terms of Service" intro="Terms covering the use of this demonstration website." />
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
