// app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | HardCode Technologies",
  description:
    "How HardCode Technologies collects, uses, and protects personal data across our apps, APIs, and integrations (including WhatsApp Business).",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "October 7, 2025";

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-invert prose-headings:mt-8 prose-a:underline-offset-4 gap-6 flex flex-col">
      <h1 className="text-5xl m-6">Privacy Policy</h1>
      <p><strong>Last updated:</strong> {LAST_UPDATED}</p>

      <p>
        HardCode Technologies (“we”, “our”, “us”) values your privacy. This
        Privacy Policy explains how we collect, use, and protect personal data
        processed through our websites, applications, dashboards, and APIs,
        including integrations with third-party services such as WhatsApp
        Business (Meta) and payment providers.
      </p>

      <h2>1) Information We Collect</h2>
      <ul>
        <li>
          <strong>Contact data:</strong> name, email address, phone number,
          business name.
        </li>
        <li>
          <strong>Technical data:</strong> IP address, device and browser info,
          log data, and activity within our services.
        </li>
        <li>
          <strong>Integration data:</strong> account IDs, configuration data,
          access tokens/credentials you authorize us to store, WhatsApp Business
          numbers and template metadata.
        </li>
        <li>
          <strong>Billing data:</strong> tax ID, billing address, invoices and
          payment confirmations (when applicable).
        </li>
      </ul>

      <h2>2) How We Use Data</h2>
      <ul>
        <li>To provide and maintain our services and integrations.</li>
        <li>To authenticate users and secure our systems.</li>
        <li>
          To send operational notifications (e.g., service messages, onboarding
          steps, status updates).
        </li>
        <li>
          To comply with legal, accounting, and tax obligations and to enforce
          our terms.
        </li>
        <li>To analyze usage and improve reliability, performance, and UX.</li>
      </ul>

      <h2>3) Legal Bases</h2>
      <p>
        We process data under applicable laws, including Argentina’s Personal
        Data Protection Law No. 25.326 and, where relevant, the EU GDPR. Legal
        bases may include consent, contract performance, legitimate interests,
        and legal obligations.
      </p>

      <h2>4) Data Retention</h2>
      <p>
        We retain personal data only as long as necessary to deliver our
        services and to meet legal or contractual requirements. When data is no
        longer needed, we delete or anonymize it.
      </p>

      <h2>5) Security</h2>
      <p>
        We implement technical and organizational measures to protect data
        against unauthorized access, loss, misuse, or alteration. These include
        access controls, encryption in transit where applicable, and least-
        privilege practices.
      </p>

      <h2>6) Your Rights</h2>
      <p>
        Subject to applicable law, you may request access, correction, update,
        portability, or deletion of your personal data, or object to/limit
        certain processing. Contact us using the details below.
      </p>

      <h2>7) Third-Party Services</h2>
      <p>
        Our services may integrate with third parties (e.g., Meta’s WhatsApp
        Business platform, payment processors). Their processing is governed by
        their own privacy policies. We recommend you review those policies
        before using the integrations.
      </p>

      <h2>8) International Transfers</h2>
      <p>
        If data is transferred outside your country, we take appropriate
        measures to ensure an adequate level of protection consistent with
        applicable law (e.g., contractual safeguards).
      </p>

      <h2>9) Changes to This Policy</h2>
      <p>
        We may update this Policy from time to time. We will post the updated
        version here and revise the “Last updated” date above.
      </p>

      <h2>10) Contact</h2>
      <p>
        Questions or requests about this Policy or your personal data:
        <br />
        <strong>Email:</strong>{" "}
        <a href="mailto:contacto@hardcodetech.site">
          contacto@hardcodetech.site
        </a>
        <br />
        <strong>Address:</strong> Cacique Ceferino Namuncurá 449, Neuquén,
        Argentina
      </p>
    </main>
  );
}
