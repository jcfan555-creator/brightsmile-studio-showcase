import { useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2, Clock, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading, DemoNote } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { clinic, serviceOptions } from "@/data/clinic";
import { cn } from "@/lib/utils";

type Values = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  service: string;
  patientType: string;
  message: string;
};

const empty: Values = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  service: "",
  patientType: "new",
  message: "",
};

const timeSlots = ["Morning (8am – 11am)", "Midday (11am – 2pm)", "Afternoon (2pm – 6pm)"];

const fieldClass =
  "h-11 rounded-xl border-input bg-card focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-0";

export function AppointmentForm({ standalone = false }: { standalone?: boolean }) {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const set = (key: keyof Values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Values, string>> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[\d\s()+-]{7,}$/.test(values.phone.trim())) next.phone = "Enter a phone number we can reach you on.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "Enter a valid email address.";
    if (!values.date) next.date = "Choose a preferred date.";
    if (!values.time) next.time = "Choose a preferred time.";
    if (!values.service) next.service = "Select the treatment you're interested in.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="appointment" className={cn("section", standalone ? "bg-background" : "bg-background")}>
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Book an Appointment"
              title="Ready to Take the Next Step?"
              intro="Send a request and our front desk will call you back to confirm a time that works — usually the same day."
            />
            <Reveal delay={80} className="mt-8 space-y-4">
              {[
                { icon: Clock, title: "Same-week availability", text: "Most new patient exams are offered within 5 working days." },
                { icon: ShieldCheck, title: "No obligation", text: "Requests are confirmed by phone before anything is booked." },
                { icon: Phone, title: "Prefer to talk?", text: `Call the studio on ${clinic.phoneDisplay} during opening hours.` },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <item.icon className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-navy">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
              <Button asChild variant="quiet" size="pill" className="w-full sm:w-auto">
                <a href={clinic.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  Call {clinic.phoneDisplay}
                </a>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={60}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8">
              {submitted ? (
                <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
                  <span className="grid size-16 place-items-center rounded-full bg-teal-soft text-teal">
                    <CheckCircle2 className="size-8" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-2xl text-navy">Thank you!</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Your appointment request has been received. Our team will contact you shortly to
                    confirm your appointment.
                  </p>
                  <p className="mt-4 rounded-full bg-secondary px-4 py-1.5 text-xs text-muted-foreground">
                    Demo website — no request was actually sent.
                  </p>
                  <Button
                    variant="quiet"
                    size="pill"
                    className="mt-6"
                    onClick={() => {
                      setValues(empty);
                      setSubmitted(false);
                    }}
                  >
                    Send another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" error={errors.name} id="ap-name">
                      <Input
                        id="ap-name"
                        className={fieldClass}
                        value={values.name}
                        autoComplete="name"
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="Jordan Avery"
                      />
                    </Field>
                    <Field label="Phone Number" error={errors.phone} id="ap-phone">
                      <Input
                        id="ap-phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        className={fieldClass}
                        value={values.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="(512) 555-0148"
                      />
                    </Field>
                  </div>

                  <Field label="Email" error={errors.email} id="ap-email">
                    <Input
                      id="ap-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      className={fieldClass}
                      value={values.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="you@example.com"
                    />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Preferred Date" error={errors.date} id="ap-date">
                      <Input
                        id="ap-date"
                        type="date"
                        className={fieldClass}
                        value={values.date}
                        onChange={(e) => set("date", e.target.value)}
                      />
                    </Field>
                    <Field label="Preferred Time" error={errors.time} id="ap-time">
                      <select
                        id="ap-time"
                        value={values.time}
                        onChange={(e) => set("time", e.target.value)}
                        className="h-11 w-full cursor-pointer rounded-xl border border-input bg-card px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-teal"
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Service" error={errors.service} id="ap-service">
                    <select
                      id="ap-service"
                      value={values.service}
                      onChange={(e) => set("service", e.target.value)}
                      className="h-11 w-full cursor-pointer rounded-xl border border-input bg-card px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-teal"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <fieldset>
                    <legend className="text-sm font-medium text-foreground">Are you a…</legend>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      {[
                        { value: "new", label: "New patient" },
                        { value: "existing", label: "Existing patient" },
                      ].map((o) => (
                        <label
                          key={o.value}
                          className={cn(
                            "flex h-11 cursor-pointer items-center justify-center rounded-xl border px-3 text-sm font-medium transition-colors",
                            values.patientType === o.value
                              ? "border-teal bg-teal-soft text-navy"
                              : "border-input bg-card text-muted-foreground hover:border-teal/60",
                          )}
                        >
                          <input
                            type="radio"
                            name="patientType"
                            value={o.value}
                            checked={values.patientType === o.value}
                            onChange={(e) => set("patientType", e.target.value)}
                            className="sr-only"
                          />
                          {o.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <Field label="Message (optional)" id="ap-message">
                    <Textarea
                      id="ap-message"
                      rows={4}
                      className="rounded-xl border-input bg-card focus-visible:ring-2 focus-visible:ring-teal"
                      value={values.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="Anything we should know before your visit?"
                    />
                  </Field>

                  <Button type="submit" variant="hero" size="xl" disabled={pending} className="w-full">
                    <CalendarCheck className="size-4" aria-hidden="true" />
                    {pending ? "Sending request…" : "Request Appointment"}
                  </Button>
                  <DemoNote>
                    Demo form — submissions are simulated in the browser and no data is stored or
                    sent anywhere.
                  </DemoNote>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <Label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </Label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}