import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { AboutSection } from "@/components/site/AboutSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ConsultCta, EmergencyCta, FinalCta } from "@/components/site/CtaSections";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { DoctorsSection } from "@/components/site/DoctorsSection";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Technology } from "@/components/site/Technology";
import { GallerySection } from "@/components/site/GallerySection";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { LocationSection } from "@/components/site/LocationSection";
import { FaqSection } from "@/components/site/FaqSection";
import { InsuranceSection } from "@/components/site/InsuranceSection";

const title = "BrightSmile Dental Studio | Modern Dental Care in Austin";
const description =
  "BrightSmile Dental Studio provides modern, personalized dental care including general, cosmetic, restorative, orthodontic, and emergency dentistry.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <ConsultCta />
      <BeforeAfter />
      <DoctorsSection />
      <Testimonials count={4} />
      <WhyChoose />
      <Technology />
      <GallerySection limit={5} />
      <AppointmentForm />
      <EmergencyCta />
      <LocationSection />
      <FaqSection limit={6} />
      <InsuranceSection />
      <FinalCta />
    </>
  );
}
