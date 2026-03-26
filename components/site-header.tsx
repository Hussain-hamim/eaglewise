"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";

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
