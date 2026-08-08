import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { AboutSection } from "@/components/site/AboutSection";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Technology } from "@/components/site/Technology";
import { FinalCta } from "@/components/site/CtaSections";

const title = "About BrightSmile Dental Studio | Our Story & Values";
const description =
  "Learn how BrightSmile Dental Studio approaches dentistry: unhurried appointments, transparent treatment plans and modern technology in downtown Austin.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About the Studio"
        title="Dental care built around you, since 2009."
        intro="A small downtown practice built on longer appointments, written treatment plans and honest recommendations."
      />
      <AboutSection />
      <WhyChoose />
      <Technology />
      <FinalCta />
    </>
  );
}
