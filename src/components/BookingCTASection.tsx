import Link from "next/link";
import { PRIMARY_CONTACT, CLINIC_LOCATIONS } from "@/lib/clinic-data";

export default function BookingCTASection({
  title = "Begin Your Personalized Homoeopathic Consultation",
  subtitle = "Discuss your health concerns in an attentive, thoughtful clinical environment with Dr. Shalini Jain in Indore.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section style={{ margin: "4rem 0" }}>
      <div
        style={{
          borderRadius: "28px",
          padding: "clamp(2.5rem, 5vw, 4rem)",
          background: "var(--green-900)",
          color: "white",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 24px 60px rgba(15, 36, 32, 0.12)",
        }}
      >
        <div style={{ position: "relative", zIndex: 1, maxWidth: "720px" }}>
          <span
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--brass-400)",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Dr. Shalini Jain · BHMS · Indore
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "white",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "580px",
            }}
          >
            {subtitle}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
            <Link href="/consultation" className="btn-brass">
              Request Consultation &rarr;
            </Link>
            <a
              href={PRIMARY_CONTACT.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp Message
            </a>
            <a
              href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "0.875rem 1.5rem",
                borderRadius: "100px",
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "white",
                fontSize: "0.8125rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              className="hover-footer-social"
            >
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{PRIMARY_CONTACT.phoneDisplay}</span>
            </a>
          </div>

          {/* Location quick reminder */}
          <div
            style={{
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.12)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            {CLINIC_LOCATIONS.map((loc) => (
              <div key={loc.id} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--brass-400)", marginTop: "6px", flexShrink: 0 }} />
                <div>
                  <span style={{ color: "white", fontWeight: 600, display: "block" }}>{loc.shortName}</span>
                  <span>{loc.addressLines[0]} · {loc.timings.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
