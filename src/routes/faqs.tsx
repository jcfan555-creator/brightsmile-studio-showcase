import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FaqSection } from "@/components/site/FaqSection";
import { InsuranceSection } from "@/components/site/InsuranceSection";
import { EmergencyCta, FinalCta } from "@/components/site/CtaSections";

const title = "Dental FAQs | BrightSmile Dental Studio";
const description =
  "Answers to common questions about booking, checkup frequency, emergencies, implants, whitening, aligners, insurance and payment plans.";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: FaqsPage,
});

function FaqsPage() {
  return (
    <>
      <PageHero
        crumb="FAQs"
        eyebrow="FAQs"
        title="Questions patients ask us most."
        intro="Everything from first visits to emergencies, answered plainly."
      />
      <FaqSection />
      <InsuranceSection />
      <EmergencyCta />
      <FinalCta />
    </>
  );
}
