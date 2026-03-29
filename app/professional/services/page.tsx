import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import {
  FileText,
  Calculator,
  ShieldCheck,
  Percent,
  BarChart3,
  Megaphone,
  Users,
  Briefcase,
  ClipboardList,
  Rocket,
} from "lucide-react";

const serviceCards = [
  { title: "Preparation and auditing of financial accounts", Icon: FileText },
  { title: "Accounting and bookkeeping services", Icon: Calculator },
  { title: "Internal audit services", Icon: ShieldCheck },
  { title: "Tax consultancy and compliance advisory", Icon: Percent },
  { title: "Investment analysis and financial planning", Icon: BarChart3 },
  { title: "Marketing and public relations consultancy", Icon: Megaphone },
  { title: "Corporate communication consultancy", Icon: Users },
  { title: "Business advisory services", Icon: Briefcase },
  { title: "Project management", Icon: ClipboardList },
  { title: "Business development consultancy", Icon: Rocket },
];

export default function ProfessionalServicesPage() {
  return (
    <SiteShell>
      <SubpageHero
        variant="professional"
        imageSrc="/home-office-team.jpg"
        imageAlt="Advisory and consultancy workspace"
        eyebrow="Professional Services"
        title="What we deliver"
        subtitle="Practical accounting, tax, audit, and advisory scopes—structured for UAE and cross-border operators."
      />
      <Section
        id="professional-services"
        className="bg-white"
        eyebrow="Service catalogue"
        title="Consultancy support built for results"
        description="We provide practical services for companies in the UAE and international markets, focused on efficiency, compliance, and sustainable growth."
      >
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {serviceCards.map(({ title, Icon }) => (
            <article key={title} className="eagle-card p-6 transition hover:border-[#EB8B2E]/25 md:p-7">
              <div className="mb-4 flex items-center gap-3">
                <Icon className="h-5 w-5 text-[#EB8B2E]" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="how-we-work"
        className="bg-neutral-50/80"
        title="How we work"
        description="Our engagements are structured to provide clarity from day one while remaining flexible to your operating context."
      >
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          <article className="eagle-card p-6 md:p-7">
            <h3 className="text-xl font-semibold">1. Discovery</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              We understand your business needs, reporting obligations, and growth targets.
            </p>
          </article>
          <article className="eagle-card p-6 md:p-7">
            <h3 className="text-xl font-semibold">2. Structured plan</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              We define practical, measurable steps and support implementation with your team.
            </p>
          </article>
          <article className="eagle-card p-6 md:p-7">
            <h3 className="text-xl font-semibold">3. Ongoing support</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              We help maintain progress with follow-up advisory and performance reviews.
            </p>
          </article>
        </div>
      </Section>

      <CtaStrip
        id="request-consultation"
        title="Need a tailored consultancy package?"
        description="Share your current challenge and we will recommend the right service scope."
        primaryLabel="Request Consultation"
        primaryHref="/professional/contact"
        secondaryLabel="About Eaglewise"
        secondaryHref="/professional/about"
      />
    </SiteShell>
  );
}
