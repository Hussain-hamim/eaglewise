import { CtaStrip } from "@/components/cta-strip";
import { KhanNaseriShowcase } from "@/components/khan-naseri-showcase";
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
          title="Partnerships & distribution"
          subtitle="Eaglewise works with distributors and professional partners to link UAE supply with regional markets—especially the Middle East and Central Asia."
        />
        <Section
          id="partner-overview"
          className="bg-white"
          eyebrow="Model"
          title="How we collaborate"
          description="Through strategic partnerships and a distribution network, we aim to deliver value to businesses and consumers while keeping coordination clear at each step."
        >
          <div className="eagle-card rounded-3xl p-7 md:p-10">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Whether you are a supplier, distributor, or channel operator, we focus on transparent communication,
              realistic planning, and dependable execution. Our goal is long-term relationships built on integrity and
              practical outcomes—not short-term volume alone.
            </p>
          </div>
        </Section>

        <Section
          id="key-partners"
          className="bg-neutral-50/80"
          eyebrow="Business network"
          title="Key partner organisations"
          description="These partners extend Eaglewise reach for wholesale distribution and professional continuity in regional markets."
        >
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <article className="eagle-card p-6 md:p-7">
              <div className="mb-3 flex items-center gap-3">
                <Truck className="h-5 w-5 text-[#EB8B2E]" />
                <h3 className="text-xl font-bold tracking-tight">Khan Naseri Trading Company (Afghanistan)</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Manages wholesale distribution and product supply across all 34 provinces of Afghanistan, supporting
                efficient logistics and market coverage for goods exported from our UAE trading operations. Also active
                in import and export trading and as a distribution agent for brands including Forvil Cosmetics and
                Herbal Bio Amla (see{" "}
                <a href="#khan-naseri-showcase" className="font-semibold text-[#EB8B2E] underline-offset-2 hover:underline">
                  partner showcase
                </a>
                ).
              </p>
            </article>
            <article className="eagle-card p-6 md:p-7">
              <div className="mb-3 flex items-center gap-3">
                <MapPinned className="h-5 w-5 text-[#EB8B2E]" />
                <h3 className="text-xl font-bold tracking-tight">Eaglewise Chartered Accountants Company (Afghanistan)</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Part of our regional network for professional services—supporting wholesale distribution, product supply,
                and aligned financial and operational continuity where clients operate across markets.
              </p>
            </article>
          </div>
        </Section>

        <KhanNaseriShowcase />

        <Section className="bg-white" eyebrow="Fit" title="What we look for in partners">
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            <article className="eagle-card p-6 md:p-7">
              <Handshake className="mb-3 h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-lg font-bold tracking-tight">Operational readiness</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                Clear ability to fulfil orders, respect compliance, and plan volumes realistically.
              </p>
            </article>
            <article className="eagle-card p-6 md:p-7">
              <Truck className="mb-3 h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-lg font-bold tracking-tight">Market fit</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                Distribution or digital channels that match the product categories and regions we serve.
              </p>
            </article>
            <article className="eagle-card p-6 md:p-7">
              <MapPinned className="mb-3 h-5 w-5 text-[#EB8B2E]" />
              <h3 className="text-lg font-bold tracking-tight">Transparent collaboration</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                Shared visibility on timelines, issues, and performance so problems get resolved on the ground.
              </p>
            </article>
          </div>
        </Section>

        <CtaStrip
          id="partners-cta"
          title="Become a distribution or channel partner"
          description="Introduce your company, territories, and product focus. We will assess fit and suggest next steps."
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
