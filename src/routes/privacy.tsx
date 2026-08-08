import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

const title = "Privacy Policy | BrightSmile Dental Studio";
const description = "How this demo website handles information submitted through its forms.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  { h: "Demo notice", p: "This website is a fictional portfolio demo. Forms are simulated in the browser and no personal information is transmitted, processed or stored." },
  { h: "Information we would collect", p: "In a live practice, a booking form would collect your name, contact details, preferred appointment time and any notes you choose to share." },
  { h: "How it would be used", p: "Solely to contact you about your appointment enquiry and to keep an accurate clinical record. It would never be sold." },
  { h: "Contact", p: "Questions about privacy would be directed to the practice manager at the studio's published contact details." },
];

function PrivacyPage() {
  return (
    <>
      <PageHero crumb="Privacy Policy" eyebrow="Legal" title="Privacy Policy" intro="How this demo website handles information submitted through its forms." />
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
