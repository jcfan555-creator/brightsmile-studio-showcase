import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { GallerySection } from "@/components/site/GallerySection";
import { Technology } from "@/components/site/Technology";
import { FinalCta } from "@/components/site/CtaSections";

const title = "Clinic Gallery | BrightSmile Dental Studio";
const description =
  "Take a look inside BrightSmile Dental Studio: reception, waiting area, treatment rooms, equipment and the team.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="Clinic Gallery"
        title="A look inside the studio."
        intro="Calm, considered spaces designed to make dental visits feel a little less clinical."
      />
      <GallerySection />
      <Technology />
      <FinalCta />
    </>
  );
}
