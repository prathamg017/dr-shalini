import Link from "next/link";
import { CONCERN_CATEGORIES } from "@/lib/clinic-data";

export default function ConcernsGrid({ limit }: { limit?: number }) {
  const concerns = limit ? CONCERN_CATEGORIES.slice(0, limit) : CONCERN_CATEGORIES;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "1.25rem",
      }}
    >
      {concerns.map((concern) => (
        <article
          key={concern.id}
          className="concern-card"
          style={{
            background: "white",
            border: "1px solid var(--border)",
            borderRadius: "18px",
            padding: "1.75rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "8px", marginBottom: "0.75rem" }}>
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--brass-600)",
                }}
              >
                Consultation Focus
              </span>
              {concern.hindiTitle && (
                <span
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--text-400)",
                    background: "var(--ivory-200)",
                    padding: "2px 8px",
                    borderRadius: "100px",
                    fontWeight: 500,
                  }}
                >
                  {concern.hindiTitle}
                </span>
              )}
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                fontSize: "1.375rem",
                fontWeight: 600,
                color: "var(--green-900)",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              <Link href={`/concerns/${concern.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                {concern.title}
              </Link>
            </h3>

            <p style={{ fontSize: "0.875rem", color: "var(--text-600)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
              {concern.summary}
            </p>

            <div style={{ paddingTop: "1rem", borderTop: "1px solid var(--border)", marginBottom: "1.25rem" }}>
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-400)", display: "block", marginBottom: "6px" }}>
                Commonly discussed:
              </span>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                {concern.commonSymptoms.slice(0, 3).map((sym, idx) => (
                  <li key={idx} style={{ fontSize: "0.8125rem", color: "var(--text-600)", display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ color: "var(--brass-500)", fontWeight: "bold" }}>•</span>
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{
              paddingTop: "1rem",
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              href={`/concerns/${concern.slug}`}
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--green-800)",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                textDecoration: "none",
              }}
            >
              Read approach guidance &rarr;
            </Link>
            <span
              style={{
                fontSize: "0.6875rem",
                color: "var(--text-300)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Constitutional Care
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
