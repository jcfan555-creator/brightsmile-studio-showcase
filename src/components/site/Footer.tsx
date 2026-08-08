import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Music2, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { clinic } from "@/data/clinic";

const columns = [
  {
    heading: "Clinic",
    links: [
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Doctors", to: "/doctors" },
      { label: "Patient Stories", to: "/patient-stories" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
  {
    heading: "Patients",
    links: [
      { label: "Book Appointment", to: "/appointments" },
      { label: "FAQs", to: "/faqs" },
      { label: "Insurance & Payment", to: "/appointments" },
      { label: "Emergency Care", to: "/services" },
    ],
  },
] as const;

const socialIcons = { Instagram, Facebook, TikTok: Music2 } as const;

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="space-y-4">
          <Logo inverted />
          <p className="max-w-xs text-sm text-primary-foreground/70">
            {clinic.tagline} Modern general, cosmetic, restorative and emergency dentistry in
            downtown Austin.
          </p>
          <div className="flex gap-2">
            {clinic.social.map((s) => {
              const Icon = socialIcons[s.label as keyof typeof socialIcons];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-teal hover:text-teal-soft"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-teal-soft">
              {col.heading}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-teal-soft">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>
                {clinic.address.line1}
                <br />
                {clinic.address.line2}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a className="hover:text-primary-foreground" href={clinic.phoneHref}>
                {clinic.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a className="break-all hover:text-primary-foreground" href={`mailto:${clinic.email}`}>
                {clinic.email}
              </a>
            </li>
          </ul>
          <dl className="mt-4 space-y-1 text-sm text-primary-foreground/75">
            {clinic.hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-4">
                <dt>{h.day}</dt>
                <dd className="text-primary-foreground/60">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-primary-foreground/12">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BrightSmile Dental Studio — Demo Website</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy" className="hover:text-primary-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="hover:text-primary-foreground">
              Accessibility
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}