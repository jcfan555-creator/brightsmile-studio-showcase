import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ConsultCta, EmergencyCta, FinalCta } from "@/components/site/CtaSections";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Technology } from "@/components/site/Technology";
import { InsuranceSection } from "@/components/site/InsuranceSection";

const title = "Dental Services in Austin | BrightSmile Dental Studio";
const description =
  "General, cosmetic, restorative, orthodontic, family and emergency dentistry — all planned and delivered in one downtown Austin studio.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Our Services"
        title="Comprehensive dentistry for every stage of life."
        intro="Six areas of care, one team, and a written plan before any treatment begins."
      />
      <ServicesSection heading="Explore our treatments" eyebrow="Treatments" />
      <ConsultCta />
      <BeforeAfter />
      <Technology />
      <EmergencyCta />
      <InsuranceSection />
      <FinalCta />
    </>
  );
}
