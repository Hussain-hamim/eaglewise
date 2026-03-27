"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/site";

const navMenus: Record<string, { href: string; label: string; description: string }[]> = {
  "/about": [
    {
      href: "/about#about-overview",
      label: "Company Overview",
      description: "Who Eaglewise is and what we do.",
    },
    {
      href: "/about#vision-mission",
      label: "Vision & Mission",
      description: "See our direction and core objectives.",
    },
    {
      href: "/about#company-values",
      label: "Company Values",
      description: "Integrity, quality, partnership and innovation.",
    },
  ],
  "/services": [
    {
      href: "/services#professional-services",
      label: "Professional Services",
      description: "Explore financial, tax, and advisory services.",
    },
    {
      href: "/services#how-we-work",
      label: "How We Work",
      description: "Discovery, planning, and ongoing support model.",
    },
    {
      href: "/services#request-consultation",
      label: "Request Consultation",
      description: "Jump directly to consultation CTA section.",
    },
  ],
  "/markets": [
    {
      href: "/markets#markets-overview",
      label: "Markets Overview",
      description: "Trading, distribution and channel focus.",
    },
    {
      href: "/markets#regional-network",
      label: "Regional Network",
      description: "Partner network and market coverage details.",
    },
    {
      href: "/markets#markets-cta",
      label: "Partnership CTA",
      description: "Start a distribution partnership discussion.",
    },
  ],
  "/testimonials": [
    {
      href: "/testimonials#client-feedback",
      label: "Client Feedback",
      description: "Read trusted testimonial highlights.",
    },
    {
      href: "/testimonials#trusted-metrics",
      label: "Trust Metrics",
      description: "Core credibility and business reach stats.",
    },
    {
      href: "/testimonials#testimonials-cta",
      label: "Share Your Story",
      description: "CTA section for new client engagement.",
    },
  ],
  "/faq": [
    {
      href: "/faq#faq-list",
      label: "FAQ List",
      description: "Most common business and service questions.",
    },
    {
      href: "/faq#faq-cta",
      label: "Contact for More",
      description: "Direct link to the CTA support section.",
    },
  ],
  "/contact": [
    {
      href: "/contact#contact-main",
      label: "Send Inquiry",
      description: "Go directly to the inquiry form section.",
    },
    {
      href: "/contact#contact-main",
      label: "Company Details",
      description: "View location, phone, email, and address.",
    },
  ],
};

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white">
      <div className="container-shell flex min-h-[72px] items-center justify-between gap-6 py-2">
        <Link href="/" className="shrink-0 leading-none">
          <Image
            src="/ebc-logo.png"
            alt="Eaglewise Business Consultancy"
            width={1587}
            height={414}
            className="h-[44px] w-auto max-w-[190px] object-contain md:h-[52px]"
            priority
          />
        </Link>

        <nav className="hidden min-w-0 items-center gap-1 lg:flex">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            const menuItems = navMenus[item.href] ?? [];

            if (menuItems.length > 0) {
              return (
                <div key={item.href} className="group relative py-2">
                  <Link
                    href={item.href}
                    className={`whitespace-nowrap leading-none rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "!bg-[#EB8B2E]/10 !text-[#EB8B2E] font-semibold backdrop-blur border border-[#EB8B2E]/25"
                        : "text-foreground/85 hover:bg-surface-alt hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Hover bridge prevents dropdown from disappearing between trigger and card */}
                  <div className="absolute inset-x-0 top-full h-5" />

                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 translate-y-2 rounded-[1.6rem] border border-border/60 bg-surface/95 p-6 opacity-0 shadow-[0_16px_40px_rgba(7,13,26,0.12)] backdrop-blur-sm transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-xl font-semibold text-foreground">{item.label}</p>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#EB8B2E]"
                      >
                        View all
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="grid gap-2">
                      {menuItems.map((menuItem) => (
                        <Link
                          key={`${item.href}-${menuItem.href}-${menuItem.label}`}
                          href={menuItem.href}
                          className="rounded-xl px-3 py-3 transition hover:bg-surface-alt"
                        >
                          <p className="text-sm font-semibold text-foreground">{menuItem.label}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {menuItem.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap leading-none rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "!bg-[#EB8B2E]/10 !text-[#EB8B2E] font-semibold backdrop-blur border border-[#EB8B2E]/25"
                    : "text-foreground/85 hover:bg-surface-alt hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-surface-alt md:inline-flex"
          >
            Log In
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-95"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
