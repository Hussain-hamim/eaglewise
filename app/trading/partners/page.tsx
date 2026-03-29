import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { Handshake, MapPinned, Truck } from "lucide-react";

export default function TradingPartnersPage() {
  return (
    <SiteShell>
      <div className="bg-white text-foreground">
        <SubpageHero
          variant="trading"
          imageSrc="/trading/split-team.jpg"
          imageAlt="Partners meeting in a professional setting"
          imagePositionClassName="object-[center_30%]"
          eyebrow="Partnerships"
          title="Build with Eaglewise"
          subtitle="Distribution, suppliers, and channel partners—structured for coverage, transparency, and long-term execution."
        />
        <Section
          id="partner-overview"
          className="bg-white"
          eyebrow="Model"
          title="A partner model built for coverage and reliability"
          description="Eaglewise collaborates with distributors and service partners to connect UAE supply with regional demand."
        >
          <div className="eagle-card rounded-3xl p-7 md:p-10">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Our partnerships emphasize long-term coordination: transparent communication, disciplined logistics
              planning, and shared accountability for market execution. Whether you are a supplier, distributor, or
              marketplace operator, we focus on practical outcomes.
            </p>
          </div>
        </Section>

        <Section
          id="key-partners"
          className="bg-neutral-50/80"
          eyebrow="Ecosystem"
          title="Key partners"
          description="Organizations that extend Eaglewise reach across wholesale and professional continuity."
        >
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <article className="eagle-card p-6 md:p-7">
              <div className="mb-3 flex items-center gap-3">
                <Truck className="h-5 w-5 text-[#EB8B2E]" />
                <h3 className="text-xl font-bold tracking-tight">Khan Naseri Trading Company (Afghanistan)</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Manages wholesale distribution and product supply across all 34 provinces of Afghanistan, supporting
                efficient logistics and strong market reach for exported goods.
              </p>
            </article>
            <article className="eagle-card p-6 md:p-7">
              <div className="mb-3 flex items-center gap-3">
                <MapPinned className="h-5 w-5 text-[#EB8B2E]" />
                <h3 className="text-xl font-bold tracking-tight">Eaglewise Chartered Accountants Company (Afghanistan)</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Supports professional services continuity for businesses that need aligned financial and operational
                support across markets.
              </p>
            </article>
          </div>
        </Section>

        <Section
          className="bg-white"
          eyebrow="Fit"
          title="What we look for in partners"
        >
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            <article className="eagle-card p-6 md:p-7">
              <Handshake className="mb-3 h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-lg font-bold tracking-tight">Operational readiness</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                Clear fulfilment capability, compliance awareness, and realistic volume planning.
              </p>
            </article>
            <article className="eagle-card p-6 md:p-7">
              <Truck className="mb-3 h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-lg font-bold tracking-tight">Market access</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                Distribution strength in target provinces or digital channels that match the product strategy.
              </p>
            </article>
            <article className="eagle-card p-6 md:p-7">
              <MapPinned className="mb-3 h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-lg font-bold tracking-tight">Transparent collaboration</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                Shared reporting rhythms and problem-solving—so issues are resolved quickly on the ground.
              </p>
            </article>
          </div>
        </Section>

        <CtaStrip
          id="partners-cta"
          title="Become a distribution or channel partner"
          description="Introduce your company profile, territories, and categories—we will assess fit and propose next steps."
          primaryLabel="Partner with us"
          primaryHref="/trading/contact"
          secondaryLabel="Explore markets"
          secondaryHref="/trading/markets"
          imageSrc="/trading/cta-partners.jpg"
          imageAlt="Partners discussing strategy"
          fullWidth
          bottomRoundedOnly
        />
      </div>
    </SiteShell>
  );
}
