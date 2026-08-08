import { Link } from "@tanstack/react-router";
import { CalendarCheck, MessageSquare, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="grid grid-cols-[auto_auto_minmax(0,1fr)] items-center gap-2 px-3 py-2.5">
        <a
          href={clinic.phoneHref}
          aria-label={`Call ${clinic.name} at ${clinic.phoneDisplay}`}
          className="grid size-12 place-items-center rounded-full border border-border text-navy transition-colors active:bg-secondary"
        >
          <Phone className="size-5" aria-hidden="true" />
        </a>
        <a
          href={clinic.smsHref}
          aria-label="Send us a message"
          className="grid size-12 place-items-center rounded-full border border-border text-navy transition-colors active:bg-secondary"
        >
          <MessageSquare className="size-5" aria-hidden="true" />
        </a>
        <Link
          to="/appointments"
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-4 text-sm font-semibold text-primary-foreground shadow-soft"
        >
          <CalendarCheck className="size-4" aria-hidden="true" />
          Book Appointment
        </Link>
      </div>
    </div>
  );
}