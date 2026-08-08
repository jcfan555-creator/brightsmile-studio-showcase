import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { clinic } from "@/data/clinic";
import { cn } from "@/lib/utils";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Patient Stories", to: "/patient-stories" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border/80 bg-background/92 backdrop-blur-md shadow-soft"
          : "border-transparent bg-background",
      )}
    >
      <div
        className={cn(
          "container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 transition-all duration-300",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={clinic.phoneHref}
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-navy transition-colors hover:text-teal md:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {clinic.phoneDisplay}
          </a>
          <Button asChild variant="hero" size="pill" className="hidden sm:inline-flex">
            <Link to="/appointments">Book an Appointment</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-border text-navy transition-colors hover:border-teal hover:text-teal lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[var(--header-h,64px)] z-40 overflow-y-auto border-t border-border bg-background px-5 pb-28 pt-4 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="border-b border-border/70 py-4 text-lg font-medium text-foreground transition-colors hover:text-teal"
                activeProps={{ className: "text-teal" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 grid gap-3">
            <Button asChild variant="hero" size="xl" className="w-full">
              <Link to="/appointments">Book an Appointment</Link>
            </Button>
            <Button asChild variant="quiet" size="xl" className="w-full">
              <a href={clinic.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                Call {clinic.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}