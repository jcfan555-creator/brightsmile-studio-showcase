import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Testimonials } from "@/components/site/Testimonials";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { FinalCta } from "@/components/site/CtaSections";

const title = "Patient Stories & Reviews | BrightSmile Dental Studio";
const description =
  "Read sample patient reviews for BrightSmile Dental Studio covering checkups, clear aligners, veneers, implants and emergency visits.";

export const Route = createFileRoute("/patient-stories")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <>
      <PageHero
        crumb="Patient Stories"
        eyebrow="Patient Stories"
        title="Loved by Our Patients"
        intro="Demo reviews written to reflect the kind of feedback a well-run dental practice receives."
      />
      <Testimonials />
      <BeforeAfter />
      <FinalCta />
    </>
  );
}
