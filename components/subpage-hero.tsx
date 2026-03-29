import Image from "next/image";

export type SubpageHeroProps = {
  variant: "professional" | "trading";
  imageSrc: string;
  imageAlt: string;
  /** Tailwind object-position helpers, e.g. `object-[center_25%]` */
  imagePositionClassName?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
};

/**
 * Inner-page hero aligned with Professional / Trading home heroes: tall image band,
 * secondary scrim, optional mobile bottom gradient (trading), readable overlay title.
 */
export function SubpageHero({
  variant,
  imageSrc,
  imageAlt,
  imagePositionClassName = "object-[center_35%] sm:object-[center_30%]",
  eyebrow,
  title,
  subtitle,
}: SubpageHeroProps) {
  return (
    <section className="bg-white pb-0 pt-0 text-white">
      <div className="relative min-h-[min(52vh,460px)] w-full min-w-0 overflow-hidden rounded-b-[2rem] md:min-h-[min(48vh,520px)] md:rounded-b-[3rem]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className={`object-cover ${imagePositionClassName}`}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
        {variant === "trading" ? (
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/20 to-transparent md:hidden" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/55 via-transparent to-transparent md:hidden" />
        )}
        <div
          className={
            variant === "professional"
              ? "absolute inset-0 flex items-start"
              : "absolute inset-0 flex items-end md:items-center"
          }
        >
          <div
            className={
              variant === "professional"
                ? "container-shell w-full pb-10 pt-28 md:pb-16 md:pt-20"
                : "container-shell w-full pb-12 pt-28 md:pb-16 md:pt-24"
            }
          >
            <div className="mx-auto max-w-2xl text-center md:mx-0 md:text-left">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#EB8B2E]">{eyebrow}</p>
              <h1 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
                {title}
              </h1>
              {subtitle ? (
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">{subtitle}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
