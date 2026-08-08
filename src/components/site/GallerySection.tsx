import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import reception from "@/assets/clinic-reception.jpg";
import treatment from "@/assets/treatment-room.jpg";
import waiting from "@/assets/waiting-area.jpg";
import equipment from "@/assets/equipment.jpg";
import team from "@/assets/team-group.jpg";
import exterior from "@/assets/clinic-exterior.jpg";
import consult from "@/assets/hero-dentist.jpg";
import { cn } from "@/lib/utils";

const images = [
  { src: reception, alt: "Reception desk and entry area of BrightSmile Dental Studio", caption: "Reception", span: "md:col-span-2 md:row-span-2" },
  { src: treatment, alt: "A modern dental treatment room with natural light", caption: "Treatment room", span: "" },
  { src: consult, alt: "A dentist consulting with a patient in the chair", caption: "Consultation", span: "" },
  { src: equipment, alt: "Sterile dental instruments laid out beside a digital X-ray sensor", caption: "Dental equipment", span: "" },
  { src: waiting, alt: "Comfortable armchairs and plants in the clinic waiting area", caption: "Waiting area", span: "md:col-span-2" },
  { src: team, alt: "The BrightSmile dental team standing together in the clinic lobby", caption: "Our team", span: "" },
  { src: exterior, alt: "The exterior storefront of the clinic on a leafy downtown street at dusk", caption: "Exterior", span: "md:col-span-2" },
];

export function GallerySection({ limit }: { limit?: number }) {
  const shown = limit ? images.slice(0, limit) : images;
  return (
    <section id="gallery" className="section bg-sand">
      <div className="container-page">
        <SectionHeading
          eyebrow="Clinic Gallery"
          title="A look inside the studio."
          intro="Calm rooms, natural light and equipment that stays current — designed to make appointments feel less clinical."
        />
        <div className="mt-12 grid auto-rows-[13rem] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[12rem]">
          {shown.map((img, i) => (
            <Reveal key={img.caption} delay={(i % 4) * 60} className={cn("h-full", img.span)}>
              <figure className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="pointer-events-none absolute bottom-4 left-4 translate-y-2 text-sm font-semibold text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}