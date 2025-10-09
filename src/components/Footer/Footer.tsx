// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-200 text-center py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/logo.svg"
            alt="HardCode Technologies"
            className="h-10 opacity-90"
          />
        </div>

        {/* Info general */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            HardCode Technologies
          </h2>
          <p className="text-sm text-neutral-400">
            Independent software development studio based in Neuquén, Argentina.{" "}
            We build SaaS platforms, WhatsApp Business API integrations, and
            digital automation tools for small and medium businesses.
          </p>
        </div>

        {/* Contacto */}
        <div className="space-y-1 text-sm">
          <p>
            📍 <strong>Address:</strong> Cacique Ceferino Namuncurá 449, Neuquén,
            Argentina
          </p>
          <p>
            💼 <strong>CUIT:</strong> 20331766381
          </p>
          <p>
            ✉️ <strong>Email:</strong>{" "}
            <a
              href="mailto:contacto@hardcodetech.site"
              className="text-[#FC6502] hover:underline"
            >
              contacto@hardcodetech.site
            </a>
          </p>
          <p>
            🌐 <strong>Website:</strong>{" "}
            <a
              href="https://www.hardcodetech.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FC6502] hover:underline"
            >
              www.hardcodetech.site
            </a>
          </p>
        </div>

        <hr className="border-neutral-800 my-6" />

        {/* Links legales */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href="/privacy"
            className="text-[#FC6502] hover:text-[#ff8242] transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-[#FC6502] hover:text-[#ff8242] transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="https://business.whatsapp.com/policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FC6502] hover:text-[#ff8242] transition-colors"
          >
            WhatsApp Commerce Policy
          </a>
        </nav>

        <p className="text-xs text-neutral-500 pt-4">
          © {new Date().getFullYear()} HardCode Technologies — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
