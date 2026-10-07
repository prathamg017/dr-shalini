import Link from "next/link";
import { MEDICAL_DISCLAIMER_TEXT } from "@/lib/clinic-data";

export default function MedicalDisclaimerBanner() {
  return (
    <aside
      aria-label="Medical Notice"
      style={{
        background: "var(--green-900)",
        padding: "8px 0",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        zIndex: 60,
      }}
    >
      <div
        className="container-xl"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            fontSize: "0.6875rem",
            color: "rgba(255,255,255,0.45)",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          <span
            style={{
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--brass-400)",
              marginRight: "8px",
              fontSize: "0.625rem",
            }}
          >
            Medical Notice
          </span>
          Outpatient homoeopathic consultations only. In medical emergencies, contact hospital emergency services immediately.
        </p>
        <Link
          href="/medical-disclaimer"
          style={{
            fontSize: "0.625rem",
            fontWeight: 600,
            color: "var(--brass-400)",
            textDecoration: "none",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Safety Policy →
        </Link>
      </div>
    </aside>
  );
}
