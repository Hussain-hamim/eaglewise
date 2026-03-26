import Link from "next/link";

type CtaStripProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaStrip({
  title,
  description,
  primaryLabel = "Get Started",
  primaryHref = "/contact",
  secondaryLabel = "Learn More",
  secondaryHref = "/about",
}: CtaStripProps) {
  return (
    <section className="py-10 md:py-14">
      <div className="container-shell">
        <div className="rounded-3xl bg-secondary px-6 py-10 text-secondary-foreground md:px-10">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-secondary-foreground/80 md:text-base">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-95"
            >
              {primaryLabel}
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
    </section>
  );
}
