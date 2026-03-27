import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

type CtaStripProps = {
  id?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaStrip({
  id,
  title,
  description,
  primaryLabel = "Get Started",
  primaryHref = "/contact",
  secondaryLabel = "Learn More",
  secondaryHref = "/about",
}: CtaStripProps) {
  return (
    <section id={id} className="scroll-mt-28 py-12 md:py-16">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#EB8B2E]/25 bg-secondary px-6 py-10 text-secondary-foreground md:px-10 md:py-12">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#EB8B2E]/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 -bottom-16 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#EB8B2E]">
              <Sparkles className="h-3.5 w-3.5" />
              Let&apos;s Build Together
            </p>

            <h3 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">{title}</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-secondary-foreground/80 md:text-base">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-95"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={secondaryHref}
              className="rounded-full border border-secondary-foreground/30 px-6 py-3 text-sm font-semibold transition hover:bg-secondary-foreground/10"
            >
              {secondaryLabel}
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
