"use client";

import { useRef } from "react";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Eaglewise helped us streamline reporting and improve financial visibility within a short timeframe.",
    author: "Regional Trading Client",
    date: "2026-03-10",
  },
  {
    quote:
      "The team is practical, responsive, and clear in communication. Their advisory support has been valuable for planning.",
    author: "UAE Consultancy Client",
    date: "2026-03-01",
  },
  {
    quote:
      "From product sourcing to market distribution guidance, Eaglewise provided reliable support at each stage.",
    author: "Consumer Goods Partner",
    date: "2026-02-25",
  },
  {
    quote:
      "Communication has been clear and professional from day one. We saw stronger execution across our regional operations.",
    author: "Business Advisory Client",
    date: "2026-02-19",
  },
];

export default function TestimonialsPage() {
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
      <section id="client-feedback" className="bg-surface-alt py-14 md:py-20">
        <div className="container-shell">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EB8B2E]">
              Client Feedback
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Read our reviews to find out more about us
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Read the feedback from our clients around the world.
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
                  className="min-w-[310px] snap-start rounded-3xl border border-border/60 bg-surface p-6 md:min-w-[360px]"
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
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.date}
                    </span>
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

      <Section id="trusted-metrics" title="Trusted by businesses in the UAE and beyond">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-3xl font-semibold text-primary">2025</h3>
            <p className="mt-2 text-sm text-muted-foreground">Company established in UAE</p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-3xl font-semibold text-primary">34 Provinces</h3>
            <p className="mt-2 text-sm text-muted-foreground">Distribution reach via partner network</p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-3xl font-semibold text-primary">3 Divisions</h3>
            <p className="mt-2 text-sm text-muted-foreground">Trading, e-commerce, and consultancy</p>
          </article>
        </div>
      </Section>

      <CtaStrip
        id="testimonials-cta"
        title="Want your success story featured here?"
        description="Start working with us and we can build measurable outcomes for your business."
        primaryLabel="Contact Eaglewise"
        primaryHref="/contact"
        secondaryLabel="See Our Markets"
        secondaryHref="/markets"
      />
    </SiteShell>
  );
}
