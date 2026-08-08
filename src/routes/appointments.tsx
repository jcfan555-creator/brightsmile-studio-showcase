import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { InsuranceSection } from "@/components/site/InsuranceSection";
import { LocationSection } from "@/components/site/LocationSection";
import { EmergencyCta } from "@/components/site/CtaSections";

const title = "Book a Dental Appointment | BrightSmile Dental Studio";
const description =
  "Request a dental appointment at BrightSmile Dental Studio in Austin. Same-week availability for checkups, cosmetic consultations and urgent care.";

export const Route = createFileRoute("/appointments")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AppointmentsPage,
});

function AppointmentsPage() {
  return (
    <>
      <PageHero
        crumb="Book an Appointment"
        eyebrow="Appointments"
        title="Ready to Take the Next Step?"
        intro="Send a request and our team will call you back to confirm a time that fits your schedule."
      />
      <AppointmentForm standalone />
      <EmergencyCta />
      <InsuranceSection />
      <LocationSection />
    </>
  );
}
