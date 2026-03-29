import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { Package, ShoppingBag, Truck, ClipboardList } from "lucide-react";

const suppliers = ["Beauty Vision", "My Perfume", "Efolia"];
const channels = ["Amazon", "Noon", "Shopify"];

export default function TradingMarketsPage() {
  return (
    <SiteShell>
      <div className="bg-white text-foreground">
        <SubpageHero
          variant="trading"
          imageSrc="/trading/split-logistics.jpg"
          imageAlt="Logistics and distribution operations"
          imagePositionClassName="object-[center_40%] sm:object-[center_35%]"
          eyebrow="Markets & distribution"
          title="Channels & coverage"
          subtitle="Wholesale, e-commerce, and regional distribution—aligned from UAE supply to partner-led fulfilment."
        />
        <Section
          id="markets-overview"
          className="bg-white"
          eyebrow="Overview"
          title="Connecting suppliers, channels, and regional demand"
          description="Eaglewise operates across international sourcing, wholesale distribution, and digital marketplace sales."
        >
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <article className="eagle-card p-6 md:p-7">
              <div className="mb-3 flex items-center gap-3">
                <Package className="h-5 w-5 text-[#EB8B2E]" />
                <h3 className="text-2xl font-bold tracking-tight">General trading & wholesale</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                We source products from reputable UAE suppliers and export to regional markets through a trusted
                partner network.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground md:text-base">
                {suppliers.map((supplier) => (
                  <li key={supplier}>- {supplier}</li>
                ))}
              </ul>
            </article>
            <article className="eagle-card p-6 md:p-7">
              <div className="mb-3 flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-[#EB8B2E]" />
                <h3 className="text-2xl font-bold tracking-tight">E-commerce & digital trading</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Our digital growth model expands product reach through major online channels, serving both wholesale
                and retail demand.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground md:text-base">
                {channels.map((channel) => (
                  <li key={channel}>- {channel}</li>
                ))}
              </ul>
            </article>
          </div>
        </Section>

        <Section
          id="regional-network"
          className="bg-neutral-50/80"
          eyebrow="Network"
          title="Regional network"
          description="Our business network supports reliable logistics, market coverage, and operational continuity."
        >
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <article className="eagle-card p-6 md:p-7">
              <div className="mb-3 flex items-center gap-3">
                <Truck className="h-5 w-5 text-[#EB8B2E]" />
                <h3 className="text-xl font-bold tracking-tight">Khan Naseri Trading Company</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Handles wholesale distribution across all 34 provinces of Afghanistan for consistent market coverage
                and logistics execution.
              </p>
            </article>
            <article className="eagle-card p-6 md:p-7">
              <div className="mb-3 flex items-center gap-3">
                <ClipboardList className="h-5 w-5 text-[#EB8B2E]" />
                <h3 className="text-xl font-bold tracking-tight">UAE corridor</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Eaglewise bridges UAE suppliers with regional demand, with emphasis on transparent coordination and
                dependable fulfilment partners.
              </p>
            </article>
          </div>
        </Section>

        <CtaStrip
          id="markets-cta"
          title="Expand your distribution footprint"
          description="Work with Eaglewise to strengthen sourcing, market access, and channel execution."
          primaryLabel="Start partnership discussion"
          primaryHref="/trading/contact"
          secondaryLabel="View products"
          secondaryHref="/trading/products"
          imageSrc="/trading/cta-partners.jpg"
          imageAlt="Business partnership meeting"
          fullWidth
          bottomRoundedOnly
        />
      </div>
    </SiteShell>
  );
}
