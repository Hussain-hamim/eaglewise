import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What trading activities does Eaglewise focus on?",
    answer:
      "We focus on general trading and wholesale distribution, plus e-commerce operations across Amazon, Noon, and Shopify for selected consumer categories.",
  },
  {
    question: "Which suppliers and product lines do you work with?",
    answer:
      "We have sourced and traded products from suppliers including Beauty Vision (Kera Look cosmetics), My Perfume, and Efolia, exporting to Afghanistan through our distribution partner.",
  },
  {
    question: "How does distribution work in Afghanistan?",
    answer:
      "Khan Naseri Trading Company manages wholesale distribution across all 34 provinces, supporting logistics and market coverage.",
  },
  {
    question: "Can Eaglewise support marketplace growth?",
    answer:
      "Yes. We focus on expanding product availability online, developing private brands, and strengthening digital presence alongside wholesale routes.",
  },
  {
    question: "How do we start a partnership discussion?",
    answer:
      "Use the trading contact page with your company profile, categories, and target markets. Our team will respond with practical next steps.",
  },
];

export default function TradingFaqPage() {
  return (
    <SiteShell>
      <div className="bg-white text-foreground">
        <SubpageHero
          variant="trading"
          imageSrc="/trading/hero-handshake-style.jpg"
          imageAlt="Business partnership discussion"
          imagePositionClassName="object-[center_30%] sm:object-[center_25%]"
          eyebrow="FAQ · Trading & Partners"
          title="Trading questions, answered"
          subtitle="Suppliers, distribution, and marketplaces—quick context before you get in touch."
        />
        <Section
          id="faq-list"
          className="bg-white"
          eyebrow="Topics"
          title="Common questions from suppliers and distributors"
          description="Need something specific? Contact us and we will tailor the answer to your scenario."
        >
          <div className="space-y-4 md:space-y-5">
            {faqs.map((item) => (
              <article key={item.question} className="eagle-card p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 shrink-0 text-[#EB8B2E]" />
                  <h3 className="text-lg font-bold tracking-tight">{item.question}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{item.answer}</p>
              </article>
            ))}
          </div>
        </Section>

        <CtaStrip
          id="faq-cta"
          title="Still exploring fit?"
          description="Tell us about your supply chain, volumes, or marketplace goals and we will guide you to the right conversation."
          primaryLabel="Contact us"
          primaryHref="/trading/contact"
          secondaryLabel="Product catalogue"
          secondaryHref="/trading/products"
          imageSrc="/trading/cta-partners.jpg"
          imageAlt="Business discussion"
          fullWidth
          bottomRoundedOnly
        />
      </div>
    </SiteShell>
  );
}
