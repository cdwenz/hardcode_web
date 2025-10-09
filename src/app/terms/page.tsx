// app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | HardCode Technologies",
  description:
    "Terms of Service for HardCode Technologies — SaaS, APIs and WhatsApp Business integrations.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "October 9, 2025";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-invert prose-headings:mt-8 prose-a:underline-offset-4  gap-6 flex flex-col">
      <h1 className="text-5xl m-6">Terms of Service</h1>
      <p><strong>Last updated:</strong> {LAST_UPDATED}</p>

      <p>
        These Terms of Service (“Terms”) govern your access to and use of the
        products, websites, applications, dashboards, and APIs provided by
        HardCode Technologies (“we”, “us”, “our”). By using our Services, you
        agree to these Terms.
      </p>

      <h2>1) Services</h2>
      <p>
        We provide software development services and SaaS products, including
        WhatsApp Business API integrations, automation dashboards, and related
        tools. Specific features may vary by plan, tenant, or client account.
      </p>

      <h2>2) Eligibility & Accounts</h2>
      <ul>
        <li>You must provide accurate registration and billing information.</li>
        <li>You are responsible for maintaining the confidentiality of your credentials.</li>
        <li>
          You must comply with applicable laws and third-party platform policies
          (e.g., Meta’s WhatsApp Commerce & Business Policies).
        </li>
      </ul>

      <h2>3) Acceptable Use</h2>
      <ul>
        <li>No spam, bulk unsolicited messaging, or abusive behavior.</li>
        <li>No attempts to circumvent rate limits, security, or approvals.</li>
        <li>
          Use of WhatsApp templates and messaging must comply with Meta’s approval
          processes and content rules.
        </li>
      </ul>

      <h2>4) Data & Privacy</h2>
      <p>
        Our processing of personal data is described in our{" "}
        <a href="/privacy">Privacy Policy</a>. You are responsible for obtaining
        any necessary consents from your end users and for configuring your
        tenant settings in compliance with applicable laws.
      </p>

      <h2>5) Third-Party Services</h2>
      <p>
        Our Services may integrate with third-party platforms (e.g., Meta/WhatsApp,
        payment providers). Those services are governed by their own terms and
        policies. We are not responsible for third-party outages or changes.
      </p>

      <h2>6) Fees & Billing</h2>
      <p>
        Paid features may require a subscription or usage-based fees. Unless
        otherwise stated, fees are non-refundable. You authorize us (or our
        payment processors) to charge you for due amounts under your selected
        plan.
      </p>

      <h2>7) Intellectual Property</h2>
      <p>
        We retain all rights to our software, documentation, and branding. You
        receive a limited, non-exclusive, non-transferable license to use the
        Services during your subscription and in accordance with these Terms.
      </p>

      <h2>8) Service Changes & Availability</h2>
      <p>
        We may modify, suspend, or discontinue features with reasonable notice
        where practical. We aim for high availability but do not guarantee
        uninterrupted service.
      </p>

      <h2>9) Disclaimers</h2>
      <p>
        The Services are provided “as is” and “as available”. To the maximum
        extent permitted by law, we disclaim all warranties, express or implied.
      </p>

      <h2>10) Limitation of Liability</h2>
      <p>
        To the extent permitted by law, we are not liable for indirect, incidental,
        special, consequential, or punitive damages, nor for loss of profits,
        revenues, data, or business opportunities.
      </p>

      <h2>11) Term & Termination</h2>
      <p>
        Either party may terminate for convenience as permitted by the plan, or
        for cause if the other party materially breaches these Terms and fails to
        cure within a reasonable period. Upon termination, your access ends and
        you must cease all use of the Services.
      </p>

      <h2>12) Governing Law</h2>
      <p>
        These Terms are governed by the laws of Argentina, without regard to its
        conflict-of-laws principles. Venue and jurisdiction will be in Neuquén,
        Argentina, unless otherwise agreed in writing.
      </p>

      <h2>13) Updates to These Terms</h2>
      <p>
        We may update these Terms from time to time. We will post the updated
        version here and revise the “Last updated” date above. Continued use of
        the Services after changes constitutes acceptance of the updated Terms.
      </p>

      <h2>14) Contact</h2>
      <p>
        Questions about these Terms? Contact us:
        <br />
        <strong>Email:</strong>{" "}
        <a href="mailto:contacto@hardcodetech.site">contacto@hardcodetech.site</a>
        <br />
        <strong>Address:</strong> Cacique Ceferino Namuncurá 449, Neuquén, Argentina
      </p>
    </main>
  );
}
