import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactSection } from "@/components/site/ContactSection";
import { LocationSection } from "@/components/site/LocationSection";
import { EmergencyCta, FinalCta } from "@/components/site/CtaSections";

const title = "Contact BrightSmile Dental Studio | Downtown Austin";
const description =
  "Contact BrightSmile Dental Studio in downtown Austin by phone, email or message form. Opening hours, address, parking and directions.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact"
        title="Talk to the studio."
        intro="Call, email or send a message — our front desk answers every enquiry within one working day."
      />
      <ContactSection />
      <LocationSection />
      <EmergencyCta />
      <FinalCta />
    </>
  );
}
