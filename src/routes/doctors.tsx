import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { DoctorsSection } from "@/components/site/DoctorsSection";
import { WhyChoose } from "@/components/site/WhyChoose";
import { FinalCta } from "@/components/site/CtaSections";

const title = "Meet Our Dentists | BrightSmile Dental Studio";
const description =
  "Meet the fictional demo dental team behind BrightSmile Dental Studio: lead, family, orthodontic and implant dentists with their areas of expertise.";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  return (
    <>
      <PageHero
        crumb="Doctors"
        eyebrow="Our Team"
        title="Meet Our Dental Team"
        intro="Four clinicians covering general, cosmetic, orthodontic and implant care — so your treatment stays under one roof."
      />
      <DoctorsSection showCta={false} />
      <WhyChoose />
      <FinalCta />
    </>
  );
}
