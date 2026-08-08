import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading, DemoNote } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { clinic } from "@/data/clinic";

const reasons = [
  "General question",
  "Appointment enquiry",
  "Treatment costs",
  "Insurance & payment",
  "Emergency care",
  "Feedback",
];

const fieldClass = "h-11 rounded-xl border-input bg-card focus-visible:ring-2 focus-visible:ring-teal";

export function ContactSection() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", reason: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (k: string, v: string) => {
    setValues((p) => ({ ...p, [k]: v }));
    setErrors((e) => {
      const { [k]: _drop, ...rest } = e;
      return rest;
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "Enter a valid email address.";
    if (!values.reason) next.reason = "Choose a reason for contacting us.";
    if (values.message.trim().length < 10) next.message = "Please add a little more detail.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section id="contact" className="section bg-sand">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Talk to the studio."
            intro="Questions about treatment, costs or your next visit? Send a message and we'll reply within one working day."
          />
          <Reveal delay={70} className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Phone</p>
              <a href={clinic.phoneHref} className="text-base font-semibold text-navy hover:text-teal">
                {clinic.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Email</p>
              <a href={`mailto:${clinic.email}`} className="break-all text-base font-semibold text-navy hover:text-teal">
                {clinic.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Address</p>
              <p className="text-sm text-muted-foreground">
                {clinic.address.line1}, {clinic.address.line2}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Opening hours</p>
              <dl className="mt-1 space-y-1 text-sm">
                {clinic.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4">
                    <dt className="text-foreground">{h.day}</dt>
                    <dd className="text-muted-foreground">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8">
            {sent ? (
              <div className="flex min-h-[20rem] flex-col items-center justify-center text-center">
                <span className="grid size-14 place-items-center rounded-full bg-teal-soft text-teal">
                  <CheckCircle2 className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-2xl text-navy">Message sent</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks for getting in touch — our team will reply within one working day.
                </p>
                <p className="mt-4 rounded-full bg-secondary px-4 py-1.5 text-xs text-muted-foreground">
                  Demo website — nothing was actually sent.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="c-name">Name</Label>
                    <Input id="c-name" className={`mt-1.5 ${fieldClass}`} value={values.name} onChange={(e) => set("name", e.target.value)} />
                    {errors.name && <p role="alert" className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="c-phone">Phone (optional)</Label>
                    <Input id="c-phone" type="tel" className={`mt-1.5 ${fieldClass}`} value={values.phone} onChange={(e) => set("phone", e.target.value)} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="c-email">Email</Label>
                  <Input id="c-email" type="email" className={`mt-1.5 ${fieldClass}`} value={values.email} onChange={(e) => set("email", e.target.value)} />
                  {errors.email && <p role="alert" className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="c-reason">Reason for contact</Label>
                  <select
                    id="c-reason"
                    value={values.reason}
                    onChange={(e) => set("reason", e.target.value)}
                    className="mt-1.5 h-11 w-full cursor-pointer rounded-xl border border-input bg-card px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  >
                    <option value="">Select a reason</option>
                    {reasons.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.reason && <p role="alert" className="mt-1.5 text-xs text-destructive">{errors.reason}</p>}
                </div>
                <div>
                  <Label htmlFor="c-message">Message</Label>
                  <Textarea
                    id="c-message"
                    rows={5}
                    className="mt-1.5 rounded-xl border-input bg-card focus-visible:ring-2 focus-visible:ring-teal"
                    value={values.message}
                    onChange={(e) => set("message", e.target.value)}
                  />
                  {errors.message && <p role="alert" className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
                </div>
                <Button type="submit" variant="hero" size="xl" className="w-full">
                  <Send className="size-4" aria-hidden="true" />
                  Send Message
                </Button>
                <DemoNote>Demo form — submissions are simulated in the browser.</DemoNote>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}