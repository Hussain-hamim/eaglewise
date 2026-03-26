import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { companyInfo } from "@/lib/site";

export default function ContactPage() {
  return (
    <SiteShell>
      <Section
        eyebrow="Contact"
        title="Let’s discuss your business goals"
        description="For inquiries, partnerships, and consultancy services, share your details and our team will get back to you."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h3 className="text-xl font-semibold">Send Inquiry</h3>
            <form className="mt-5 space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your requirement"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
                />
              </div>
              <button
                type="button"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-95"
              >
                Submit Inquiry
              </button>
              <p className="text-xs text-muted-foreground">
                Form submission backend can be connected in the next phase.
              </p>
            </form>
          </article>

          <article className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h3 className="text-xl font-semibold">Company Details</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Company:</span>{" "}
                {companyInfo.name}
              </li>
              <li>
                <span className="font-semibold text-foreground">Location:</span>{" "}
                {companyInfo.location}
              </li>
              <li>
                <span className="font-semibold text-foreground">Phone:</span>{" "}
                {companyInfo.phone}
              </li>
              <li>
                <span className="font-semibold text-foreground">Email:</span>{" "}
                {companyInfo.email}
              </li>
              <li>
                <span className="font-semibold text-foreground">Address:</span>{" "}
                {companyInfo.address}
              </li>
              <li>
                <span className="font-semibold text-foreground">Website:</span>{" "}
                {companyInfo.website}
              </li>
            </ul>
            <p className="mt-4 rounded-xl bg-surface-alt p-4 text-xs text-muted-foreground">
              These details are currently placeholders and can be replaced with official
              contact information from your client.
            </p>
          </article>
        </div>
      </Section>
    </SiteShell>
  );
}
