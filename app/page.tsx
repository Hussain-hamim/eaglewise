import Image from "next/image";
import Link from "next/link";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";

const divisions = [
  "General Trading & Wholesale",
  "E-Commerce & Digital Trading",
  "Professional Consultancy Services",
];

const highlights = [
  "UAE-based company established in March 2025",
  "Regional network connecting UAE suppliers to Afghan markets",
  "Operations across wholesale, digital commerce, and advisory services",
];

export default function Home() {
  return (
    <SiteShell>
      <section className="pb-8 pt-0">
        <div className="relative overflow-hidden">
            <Image
              src="/hero-dubai.jpg"
              alt="Business hero background"
              width={1600}
              height={900}
              className="h-[520px] w-full object-cover md:h-[620px]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/86 to-transparent" />
            <div className="absolute inset-0">
              <div className="container-shell p-6 md:p-10">
                <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Eaglewise Business Consultancy LLC-FZ
                </p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                  Strategic business growth support, here in the UAE.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/80 md:text-lg">
                  Trade confidently with a partner focused on general trading, e-commerce,
                  and professional consultancy execution for regional expansion.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-95"
                  >
                    Sign up
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-full bg-white/14 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/24"
                  >
                    Try demo
                  </Link>
                </div>
                <p className="mt-7 text-sm text-white/80">
                  Built with integrity, transparency, and market expertise.
                </p>
                </div>
              </div>
            </div>
          </div>

        <div className="container-shell">
          <div className="relative z-10 -mt-8 grid gap-3 rounded-3xl border border-border bg-surface p-4 shadow-[0_16px_35px_rgba(7,13,26,0.08)] md:grid-cols-3 md:gap-4 md:p-5">
              <article className="rounded-2xl bg-surface-alt p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Established
                </p>
                <p className="mt-2 text-2xl font-semibold">March 2025</p>
              </article>
              <article className="rounded-2xl bg-surface-alt p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Core Divisions
                </p>
                <p className="mt-2 text-2xl font-semibold">3 Business Units</p>
              </article>
              <article className="rounded-2xl bg-surface-alt p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Regional Reach
                </p>
                <p className="mt-2 text-2xl font-semibold">34 Provinces Network</p>
              </article>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Overview"
        title="Built for long-term partnerships"
        description="Eaglewise bridges opportunities between international suppliers and regional markets, with a focus on quality, transparency, and reliable delivery."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item} className="soft-card p-6">
              <p className="text-base leading-7">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Core Divisions"
        title="How we create business value"
        description="Our business model combines distribution capabilities, online marketplace expansion, and expert consultancy support."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {divisions.map((item) => (
            <article key={item} className="soft-card p-6">
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Practical, execution-focused support tailored for companies operating in
                the UAE and international markets.
              </p>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-t border-border/30 bg-transparent py-6 md:py-8">
        <div className="container-shell">
          <div className="flex flex-wrap items-center justify-between gap-6 overflow-hidden">
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Company mark
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Registered UAE business identity
              </p>
            </div>
            <span className="shrink-0 leading-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ebc-mark.png"
                alt="EBC monogram logo"
                className="block h-[44px] w-auto object-contain md:h-[52px]"
              />
            </span>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Ready to build your next business move?"
        description="Let us support your expansion goals with reliable trading networks and professional consultancy services."
        primaryLabel="Contact Our Team"
        primaryHref="/contact"
        secondaryLabel="Read Company Profile"
        secondaryHref="/about"
      />
    </SiteShell>
  );
}
