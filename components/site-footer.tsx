import Link from "next/link";
import { companyInfo, navLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-secondary text-secondary-foreground">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">{companyInfo.name}</h3>
          <p className="mt-3 text-sm leading-6 text-secondary-foreground/80">
            UAE-based company focused on general trading, e-commerce, and professional
            consultancy services.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-foreground/75">
            Navigation
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/90">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-foreground/75">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/90">
            <li>Location: {companyInfo.location}</li>
            <li>Phone: {companyInfo.phone}</li>
            <li>Email: {companyInfo.email}</li>
            <li>Address: {companyInfo.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/15 py-4">
        <p className="container-shell text-xs text-secondary-foreground/70">
          Copyright {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
