"use client";

import { useRef } from "react";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { SubpageHero } from "@/components/subpage-hero";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The team is practical, responsive, and clear in communication. Their advisory support has been valuable for planning.",
    author: "UAE Consultancy Client",
    date: "2026-03-01",
  },
  {
    quote:
      "Communication has been clear and professional from day one. We saw stronger execution across our regional operations.",
    author: "Business Advisory Client",
    date: "2026-02-19",
  },
  {
    quote:
      "Eaglewise helped us streamline reporting and improve financial visibility within a short timeframe.",
    author: "Finance Leadership Team",
    date: "2026-03-10",
  },
];

export default function ProfessionalTestimonialsPage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const amount = 360;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <SiteShell>
      <SubpageHero
        variant="professional"
        imageSrc="/cta-executive-meeting.jpg"
        imageAlt="Executive advisory discussion"
        eyebrow="Testimonials"
        title="Client voices"
        subtitle="What partners and leadership teams say about working with Eaglewise on finance and advisory."
      />
      <section id="client-feedback" className="bg-gradient-to-b from-white to-neutral-50/90 py-14 md:py-20">
        <div className="container-shell">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EB8B2E] md:text-xs">
              Client feedback
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Advisory clients on working with Eaglewise
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Highlights from companies we have supported on finance and business advisory.
            </p>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => scrollTestimonials("left")}
              className="absolute -left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition hover:bg-[#EB8B2E] hover:text-white md:inline-flex"
              aria-label="Scroll testimonials left"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTestimonials("right")}
              className="absolute -right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition hover:bg-[#EB8B2E] hover:text-white md:inline-flex"
              aria-label="Scroll testimonials right"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            <div
              ref={sliderRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((item) => (
                <article
                  key={item.author}
                  className="eagle-card min-w-[310px] snap-start rounded-2xl p-6 md:min-w-[360px] md:p-7"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={`${item.author}-star-${idx}`}
                          className="h-4 w-4 fill-[#EB8B2E] text-[#EB8B2E]"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{item.author}</p>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{item.quote}</p>
                  <p className="mt-6 text-sm font-semibold text-foreground">Trustpilot</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        id="trusted-metrics"
        className="bg-white"
        eyebrow="At a glance"
        title="Trusted by businesses in the UAE and beyond"
      >
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          <article className="eagle-card p-6 md:p-7">
            <h3 className="text-3xl font-bold text-[#EB8B2E]">Skylink &amp; Shanzer</h3>
            <p className="mt-2 text-sm text-muted-foreground">UAE companies supported with consultancy services</p>
          </article>
          <article className="eagle-card p-6 md:p-7">
            <h3 className="text-3xl font-bold text-[#EB8B2E]">10+ Lines</h3>
            <p className="mt-2 text-sm text-muted-foreground">Professional advisory and compliance capabilities</p>
          </article>
          <article className="eagle-card p-6 md:p-7">
            <h3 className="text-3xl font-bold text-[#EB8B2E]">2025</h3>
            <p className="mt-2 text-sm text-muted-foreground">UAE establishment with a consultancy-first model</p>
          </article>
        </div>
      </Section>

      <CtaStrip
        id="testimonials-cta"
        title="Want your success story featured here?"
        description="Start a consultancy engagement and we can build measurable outcomes together."
        primaryLabel="Contact Eaglewise"
        primaryHref="/professional/contact"
        secondaryLabel="View Services"
        secondaryHref="/professional/services"
      />
    </SiteShell>
  );
}
