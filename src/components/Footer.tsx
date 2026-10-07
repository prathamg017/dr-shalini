import Link from "next/link";
import Image from "next/image";
import { PRIMARY_CONTACT, CLINIC_LOCATIONS, DOCTOR_INFO, CONCERN_CATEGORIES } from "@/lib/clinic-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--text-900)",
        color: "white",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        marginTop: "0",
      }}
    >
      <div className="container-xl">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
          className="footer-grid"
        >
          <style>{`
            @media (min-width: 768px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr !important; gap: 4rem; } }
          `}</style>

          {/* Brand column */}
          <div style={{ maxWidth: "360px" }}>
            <div style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "14px" }}>
              <Image
                src="/images/logo.png"
                alt="Dr. Shalini Jain Homoeopathy Clinic"
                width={52}
                height={52}
                style={{ objectFit: "contain", flexShrink: 0, filter: "brightness(0) invert(1)" }}
              />
              <div>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "white",
                    letterSpacing: "-0.02em",
                    display: "block",
                    lineHeight: 1,
                  }}
                >
                  Dr. Shalini Jain
                </span>
                <span
                  style={{
                    fontSize: "0.625rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--brass-400)",
                    display: "block",
                    marginTop: "4px",
                  }}
                >
                  BHMS · Homoeopathic Physician · Indore
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              Personalised constitutional homoeopathic care for children, women, and adults across two accessible Indore practices.
            </p>

            {/* Contact */}
            <div style={{ marginBottom: "1.25rem" }}>
              <a
                href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "white",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                {PRIMARY_CONTACT.phoneDisplay}
              </a>
              <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
                Call or WhatsApp for appointments
              </span>
            </div>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <a href={PRIMARY_CONTACT.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  padding: "8px 14px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "100px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                WhatsApp
              </a>
              <a href={DOCTOR_INFO.socials.instagram} target="_blank" rel="noopener noreferrer"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  padding: "8px 14px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "100px",
                }}
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Clinics column */}
          <div>
            <h4
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--brass-400)",
                marginBottom: "1.25rem",
              }}
            >
              Clinic Locations
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {CLINIC_LOCATIONS.map((loc) => (
                <div key={loc.id}>
                  <Link
                    href={`/clinic/${loc.id}`}
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.85)",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {loc.area.split("/")[0].trim()}
                  </Link>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", margin: "0 0 2px", lineHeight: 1.5 }}>
                    {loc.addressLines[0]}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--brass-400)", margin: 0, fontWeight: 600 }}>
                    {loc.timings.hours}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation + Concerns column */}
          <div>
            <h4
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--brass-400)",
                marginBottom: "1.25rem",
              }}
            >
              Consultation Areas
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {CONCERN_CATEGORIES.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/concerns/${c.slug}`}
                    style={{
                      fontSize: "0.8125rem",
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                    }}
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", margin: 0 }}>
            © {year} Dr. Shalini Jain Homoeopathy Clinic, Indore. All rights reserved.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
            {[
              { label: "Medical Disclaimer", href: "/medical-disclaimer" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms", href: "/terms" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.6875rem",
                  color: "rgba(255,255,255,0.25)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
