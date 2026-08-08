/**
 * DEMO CONTENT ONLY.
 * BrightSmile Dental Studio is a fictional practice created for a web design
 * agency portfolio. Every doctor, review, statistic, address, phone number,
 * insurance name and milestone below is invented sample content and does not
 * describe a real medical practice or real patient outcomes.
 */

export const clinic = {
  name: "BrightSmile Dental Studio",
  tagline: "Confident Smiles. Exceptional Care.",
  phoneDisplay: "(512) 555-0148",
  phoneHref: "tel:+15125550148",
  smsHref: "sms:+15125550148",
  email: "hello@brightsmiledental.demo",
  address: {
    line1: "125 Oak Avenue",
    line2: "Downtown, Austin, TX 78701",
  },
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=125+Oak+Avenue+Austin+TX+78701",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
} as const;

export const heroStats = [
  { value: "4.9/5", label: "Patient rating", note: "★★★★★ demo rating" },
  { value: "2,500+", label: "Happy patients", note: "Since 2009" },
  { value: "15+", label: "Years of experience", note: "Founded 2009" },
  { value: "Same-week", label: "Appointments available", note: "Most weeks" },
];

export const trustPoints = [
  {
    icon: "scan",
    title: "Modern Dental Technology",
    text: "Digital imaging and 3D scanning for clearer, faster diagnosis.",
  },
  {
    icon: "users",
    title: "Experienced Dental Team",
    text: "General, cosmetic, restorative and orthodontic care under one roof.",
  },
  {
    icon: "heart",
    title: "Patient-Centered Care",
    text: "Unhurried appointments and treatment explained in plain language.",
  },
  {
    icon: "calendar",
    title: "Convenient Scheduling",
    text: "Early, late and Saturday appointment slots for busy schedules.",
  },
];

export const timeline = [
  { year: "2009", title: "BrightSmile founded", text: "A two-chair practice opens on Oak Avenue with a simple promise: no rushed appointments." },
  { year: "2014", title: "Comprehensive family dentistry", text: "The studio expands with pediatric and preventive care so whole families can be seen together." },
  { year: "2019", title: "Advanced digital dentistry", text: "Digital X-rays, intraoral scanning and same-visit digital impressions replace traditional molds." },
  { year: "2024", title: "Cosmetic & restorative growth", text: "A dedicated cosmetic suite opens for veneers, implants and full smile makeovers." },
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  description: string;
  treatments: string[];
  good: string;
};

export const services: Service[] = [
  {
    slug: "general-dentistry",
    icon: "stethoscope",
    title: "General Dentistry",
    short: "Thorough checkups, cleanings and digital imaging that keep small issues small.",
    description:
      "Routine care is the backbone of the practice. A general visit at BrightSmile includes a full oral health review, digital imaging where useful, and a clear written summary of what we found and what (if anything) we recommend next.",
    treatments: ["Routine Dental Exams", "Professional Cleaning", "Digital X-Rays", "Preventive Dentistry"],
    good: "Anyone due for a checkup, new patients, and people returning after a long gap.",
  },
  {
    slug: "cosmetic-dentistry",
    icon: "sparkles",
    title: "Cosmetic Dentistry",
    short: "Whitening, veneers and bonding planned around your face, not a template.",
    description:
      "Cosmetic treatment starts with a conversation and a digital preview so you can see the direction before anything begins. We plan conservatively, keeping as much natural tooth structure as possible.",
    treatments: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers", "Composite Bonding"],
    good: "Patients who feel self-conscious about shade, shape, chips or spacing.",
  },
  {
    slug: "restorative-dentistry",
    icon: "shield",
    title: "Restorative Dentistry",
    short: "Crowns, bridges, implants and dentures that restore comfortable function.",
    description:
      "When a tooth is damaged or missing, the goal is to get you chewing and speaking comfortably again with a result that blends in. We walk through every option, including doing nothing, with costs written down first.",
    treatments: ["Dental Crowns", "Dental Bridges", "Dental Implants", "Dentures"],
    good: "Broken, heavily filled or missing teeth, and older restorations reaching end of life.",
  },
  {
    slug: "orthodontics",
    icon: "aligner",
    title: "Orthodontics",
    short: "Clear aligners and braces for adults and teens, mapped out digitally.",
    description:
      "We scan, simulate and plan movement before you commit. Most adult cases at the studio are treated with clear aligners, with fixed braces available where they are the better mechanical choice.",
    treatments: ["Clear Aligners", "Traditional Braces", "Retainers"],
    good: "Crowding, spacing, bite concerns, or relapse after previous treatment.",
  },
  {
    slug: "family-pediatric",
    icon: "family",
    title: "Family & Pediatric Dentistry",
    short: "Gentle first visits, prevention and appointments that fit around school runs.",
    description:
      "Children get their own pace: a tour, a ride in the chair and a count of their teeth before anything else happens. Families can book back-to-back appointments in a single visit.",
    treatments: ["Children's Dentistry", "Fluoride Treatments", "Sealants", "Preventive Care"],
    good: "First visits, school-age checkups, and parents who want everyone seen at once.",
  },
  {
    slug: "emergency-dentistry",
    icon: "alert",
    title: "Emergency Dentistry",
    short: "Same-day consultations for pain, trauma and broken teeth whenever we can.",
    description:
      "Call the studio and describe what happened. Our team will triage over the phone, give you interim advice, and fit you in the same day where our schedule allows.",
    treatments: ["Emergency Toothache", "Broken Tooth", "Dental Trauma", "Same-Day Emergency Consultation"],
    good: "Sudden pain, swelling, a knocked-out or fractured tooth, or a lost crown or filling.",
  },
];

export const doctors = [
  {
    slug: "sarah-mitchell",
    name: "Dr. Sarah Mitchell",
    role: "Lead Dentist",
    creds: "DDS — Cosmetic & Restorative Dentistry",
    bio: "Sarah founded BrightSmile in 2009 after a decade in group practice, wanting to build somewhere appointments were not run to a stopwatch. She leads the studio's cosmetic and full-mouth restorative cases.",
    expertise: ["Porcelain veneers", "Smile design", "Full-mouth restoration", "Complex treatment planning"],
  },
  {
    slug: "daniel-carter",
    name: "Dr. Daniel Carter",
    role: "General & Family Dentist",
    creds: "DMD — General & Preventive Dentistry",
    bio: "Daniel handles the majority of the studio's routine and family care. He is the dentist patients ask for when they have avoided the chair for years and need someone unhurried and blunt about what matters.",
    expertise: ["Preventive care", "Anxious patients", "Fillings & crowns", "Children's checkups"],
  },
  {
    slug: "emily-watson",
    name: "Dr. Emily Watson",
    role: "Orthodontics & Clear Aligners",
    creds: "DDS, MS — Orthodontics",
    bio: "Emily runs the aligner and braces program, planning every case digitally so patients can see the projected movement before starting. She treats teens and adults, including retreatment after relapse.",
    expertise: ["Clear aligners", "Fixed braces", "Bite correction", "Retention planning"],
  },
  {
    slug: "michael-reed",
    name: "Dr. Michael Reed",
    role: "Implant & Restorative Dentistry",
    creds: "DDS — Implantology & Prosthodontics",
    bio: "Michael places and restores implants at the studio and manages denture and bridge work. He is known for talking patients through the trade-offs of each option before recommending one.",
    expertise: ["Dental implants", "Bridges", "Dentures", "Bone & tissue assessment"],
  },
];

export const testimonials = [
  {
    name: "Rachel M.",
    rating: 5,
    treatment: "New patient exam",
    text: "I hadn't been to the dentist in years and was honestly nervous. Everyone made me feel comfortable from the moment I walked in. No lecture, just a plan.",
  },
  {
    name: "James T.",
    rating: 5,
    treatment: "Clear aligners",
    text: "From booking the appointment to finishing my treatment, everything felt organized and professional. I always knew what the next step was and what it cost.",
  },
  {
    name: "Priya S.",
    rating: 5,
    treatment: "Porcelain veneers",
    text: "I finally got the smile I'd always wanted. The entire team explained every step clearly and never pushed me toward anything I didn't ask about.",
  },
  {
    name: "Marcus D.",
    rating: 5,
    treatment: "Emergency visit",
    text: "Cracked a molar on a Saturday morning. They got me in before lunch, sorted the pain and booked the repair for Tuesday. Genuinely relieved.",
  },
  {
    name: "Alicia W.",
    rating: 4,
    treatment: "Family checkups",
    text: "Both kids were seen back to back which saved me a second trip. Parking downtown is the only tricky part, but the garage validation helps.",
  },
  {
    name: "Tom H.",
    rating: 5,
    treatment: "Dental implant",
    text: "Dr. Reed walked me through three options and told me which one he'd choose and why. Six months on, I forget which tooth it is.",
  },
  {
    name: "Nina K.",
    rating: 5,
    treatment: "Teeth whitening",
    text: "Subtle result, which is exactly what I asked for. They talked me out of going brighter and I'm glad they did.",
  },
  {
    name: "Devon R.",
    rating: 5,
    treatment: "Cleaning & checkup",
    text: "Reminders by text, on time every visit, and the hygienist actually showed me what she was seeing on the screen. Small things, but they add up.",
  },
];

export const whyChoose = [
  { icon: "award", title: "Experienced Dental Professionals", text: "A stable team of clinicians who see the same patients year after year." },
  { icon: "scan", title: "Modern Technology", text: "Digital X-rays, intraoral scanning and digital impressions as standard." },
  { icon: "receipt", title: "Transparent Treatment Plans", text: "Written plans with costs before treatment starts — no surprises at checkout." },
  { icon: "sofa", title: "Comfortable Environment", text: "A calm studio designed to feel closer to a living room than a clinic." },
  { icon: "calendar", title: "Flexible Scheduling", text: "Early mornings, evenings and Saturday slots, plus same-week urgent care." },
  { icon: "heart", title: "Personalized Care", text: "Recommendations built around your goals, budget and timeline." },
];

export const technology = [
  { title: "Digital X-rays", text: "Lower-dose imaging that appears on screen instantly, so we can review findings together." },
  { title: "3D dental scanning", text: "A handheld scanner builds an accurate model of your teeth in a few minutes." },
  { title: "Digital impressions", text: "No trays, no putty — scans replace traditional molds for crowns and aligners." },
  { title: "Modern treatment rooms", text: "Chairside screens, quieter handpieces and rooms with natural light." },
  { title: "Clear aligner planning", text: "Digital simulations show projected tooth movement before treatment begins." },
];

export const beforeAfter = [
  { title: "Teeth Whitening", detail: "In-practice whitening, single session", note: "Illustrative demo case" },
  { title: "Porcelain Veneers", detail: "Six upper veneers over three visits", note: "Illustrative demo case" },
  { title: "Smile Makeover", detail: "Whitening, bonding and reshaping", note: "Illustrative demo case" },
  { title: "Composite Bonding", detail: "Edge repair on two front teeth", note: "Illustrative demo case" },
];

export const faqs = [
  { q: "Do you accept new patients?", a: "Yes. New patients are welcome and we usually have new-patient exam slots within the same or following week. Your first visit includes a full assessment and a written plan." },
  { q: "How do I book an appointment?", a: "Use the appointment request form on this site, or call the studio during opening hours. Requests are confirmed by phone so we can match you with the right clinician and time." },
  { q: "How often should I visit the dentist?", a: "Most adults do well with a checkup every six months, though some patients benefit from more frequent hygiene visits. Your dentist will suggest an interval based on your own risk." },
  { q: "Do you offer emergency appointments?", a: "Yes. Call the studio and describe the problem. We triage by phone and reserve same-day slots for urgent cases wherever the schedule allows." },
  { q: "Do you offer dental implants?", a: "Yes. Implants are placed and restored in-house, starting with a consultation and 3D assessment to check whether you are a suitable candidate." },
  { q: "Do you offer teeth whitening?", a: "We offer both in-practice whitening and custom take-home trays. A checkup comes first to make sure whitening is appropriate for your teeth." },
  { q: "Do you accept insurance?", a: "This is a demo website, so no insurance relationships are real. In a live practice this section would list accepted plans and explain how benefits are verified before treatment." },
  { q: "Do you offer payment plans?", a: "The demo practice describes monthly payment options and third-party financing for larger treatment plans, discussed openly before you commit." },
  { q: "Do you treat children?", a: "Yes. Children are welcome from their first tooth, and families can book consecutive appointments so everyone is seen in one visit." },
  { q: "How long does a typical appointment take?", a: "A checkup and hygiene visit generally runs 45–60 minutes. Cosmetic and restorative appointments are longer and are scheduled individually." },
  { q: "Do you offer clear aligners?", a: "Yes. Clear aligner treatment is planned digitally, and you'll see a simulation of the projected result before starting." },
  { q: "What should I do if I have a dental emergency?", a: "Call the studio first. For a knocked-out adult tooth, keep it moist in milk and get seen immediately. For severe swelling with fever or difficulty breathing, seek urgent medical care." },
];

export const insurers = [
  "Northline Dental",
  "Cedar Health",
  "Lonestar Benefit",
  "Bluebonnet Care",
  "Vantage Dental",
  "Riverbend Plans",
];

export const serviceOptions = [
  "General checkup & cleaning",
  "Cosmetic consultation",
  "Teeth whitening",
  "Restorative treatment",
  "Clear aligners / orthodontics",
  "Children's dentistry",
  "Emergency appointment",
  "Something else",
];