import Link from "next/link";
import { CLINIC_LOCATIONS, PRIMARY_CONTACT } from "@/lib/clinic-data";

export default function ClinicLocationsSection({
  headline = "Two Established Practice Locations in Indore",
  subheadline = "Consultation timings structured for morning availability in Palsikar Colony and evening accessibility in Kalani Nagar.",
}: {
  headline?: string;
  subheadline?: string;
}) {
  return (
    <section>
      <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
        <span className="eyebrow" style={{ marginBottom: "0.75rem", display: "block" }}>
          Locally Rooted Practice · Indore
        </span>
        <h2
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
            fontWeight: 600,
            color: "var(--green-900)",
            marginBottom: "0.75rem",
            lineHeight: 1.15,
          }}
        >
          {headline}
        </h2>
        <p className="body-md" style={{ margin: 0 }}>
          {subheadline}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
        }}
      >
        {CLINIC_LOCATIONS.map((loc, i) => (
          <div
            key={loc.id}
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "white",
              boxShadow: "0 12px 36px rgba(15, 36, 32, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  padding: "1.75rem 2rem",
                  background: i === 0 ? "var(--green-900)" : "var(--green-800)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--brass-300)",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {loc.id === "palsikar-colony" ? "Morning Clinic" : "Evening Clinic"}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                      fontSize: "1.75rem",
                      fontWeight: 600,
                      color: "white",
                      margin: 0,
                      lineHeight: 1.1,
                    }}
                  >
                    {loc.shortName}
                  </h3>
                </div>

                <div
                  style={{
                    textAlign: "right",
                    padding: "8px 14px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "white",
                      display: "block",
                      lineHeight: 1,
                    }}
                  >
                    {loc.timings.hours}
                  </span>
                  <span
                    style={{
                      fontSize: "0.625rem",
                      color: "rgba(255,255,255,0.6)",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {loc.timings.days}
                  </span>
                </div>
              </div>

              <div style={{ padding: "2rem" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-400)",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Full Address &amp; Landmarks
                  </span>
                  {loc.addressLines.map((line, idx) => (
                    <p
                      key={idx}
                      style={{
                        fontSize: idx === 0 ? "1rem" : "0.875rem",
                        fontWeight: idx === 0 ? 600 : 400,
                        color: idx === 0 ? "var(--text-900)" : "var(--text-600)",
                        margin: "0 0 4px",
                        lineHeight: 1.5,
                      }}
                    >
                      {line}
                    </p>
                  ))}
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--brass-600)",
                      fontWeight: 600,
                      margin: "10px 0 0",
                    }}
                  >
                    Landmark: {loc.landmark}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1.5rem" }}>
                  {loc.features.map((feat, fidx) => (
                    <span
                      key={fidx}
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        padding: "4px 10px",
                        background: "var(--ivory-100)",
                        borderRadius: "100px",
                        color: "var(--text-600)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "1.25rem 2rem",
                background: "var(--ivory-50)",
                borderTop: "1px solid var(--border)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Link
                href={`/clinic/${loc.id}`}
                className="btn-primary"
                style={{ fontSize: "0.75rem", padding: "8px 16px" }}
              >
                View Details &rarr;
              </Link>
              <a
                href={loc.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ fontSize: "0.75rem", padding: "8px 16px" }}
              >
                Google Maps
              </a>
              <a
                href={PRIMARY_CONTACT.getWhatsAppUrl(`Hello Dr. Shalini Jain clinic, I would like to visit the ${loc.shortName} clinic. Please guide me.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ fontSize: "0.75rem", padding: "8px 16px" }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
