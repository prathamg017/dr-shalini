import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ConsultationRequestForm from "@/components/ConsultationRequestForm";
import { CLINIC_LOCATIONS, PRIMARY_CONTACT, CONSULTATION_STEPS } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Book a Consultation | Dr. Shalini Jain Homoeopathy Clinic Indore",
  description:
    "Request your homoeopathy consultation with Dr. Shalini Jain (BHMS) at Palsikar Colony (10 AM - 1 PM) or Kalani Nagar (6 PM - 9 PM) in Indore. Call +91 92442 12557.",
  alternates: {
    canonical: "https://drshalinijain.in/consultation",
  },
};

export default function ConsultationPage() {
  return (
    <div style={{ background: "var(--ivory-100)", minHeight: "100vh" }}>
      <div className="container-xl" style={{ paddingTop: "2rem", paddingBottom: "5rem" }}>
        <Breadcrumbs items={[{ label: "Consultation" }]} />

        {/* Page Intro Header */}
        <div style={{ maxWidth: "760px", margin: "2.5rem auto 3.5rem", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--brass-500)" }} />
            <span className="eyebrow">
              Direct Practice Coordination · Indore
            </span>
          </div>
          <h1
            className="display-lg"
            style={{
              color: "var(--text-900)",
              marginBottom: "1.25rem",
              lineHeight: 1.05,
            }}
          >
            Schedule Your Consultation
          </h1>
          <p className="body-lg" style={{ margin: "0 auto", maxWidth: "600px" }}>
            Choose your preferred clinic in Indore. Complete the booking request below to open a direct WhatsApp coordination window, or contact our clinic helpline directly.
          </p>
        </div>

        {/* Quick Contact Options */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            maxWidth: "760px",
            margin: "0 auto 3rem",
          }}
        >
          <div
            style={{
              padding: "1.5rem",
              background: "white",
              borderRadius: "18px",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <div>
              <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, color: "var(--brass-600)", display: "block" }}>
                Direct Helpline
              </span>
              <p
                style={{
                  fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                  fontSize: "1.375rem",
                  fontWeight: 600,
                  color: "var(--green-900)",
                  margin: "2px 0 0",
                }}
              >
                {PRIMARY_CONTACT.phoneDisplay}
              </p>
              <p style={{ fontSize: "0.75rem", color: "var(--text-400)", margin: "2px 0 0" }}>Voice call for slot availability</p>
            </div>
            <a
              href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
              className="btn-ghost"
              style={{ fontSize: "0.75rem", padding: "8px 16px" }}
            >
              Call
            </a>
          </div>

          <div
            style={{
              padding: "1.5rem",
              background: "white",
              borderRadius: "18px",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <div>
              <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, color: "var(--brass-600)", display: "block" }}>
                Quick Message
              </span>
              <p
                style={{
                  fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                  fontSize: "1.375rem",
                  fontWeight: 600,
                  color: "var(--green-900)",
                  margin: "2px 0 0",
                }}
              >
                WhatsApp Chat
              </p>
              <p style={{ fontSize: "0.75rem", color: "var(--text-400)", margin: "2px 0 0" }}>Coordinate timing effortlessly</p>
            </div>
            <a
              href={PRIMARY_CONTACT.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ fontSize: "0.75rem", padding: "8px 16px" }}
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Consultation Request Form */}
        <ConsultationRequestForm />

        {/* Consultation Process Steps */}
        <section style={{ maxWidth: "980px", margin: "5rem auto 0" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="eyebrow" style={{ marginBottom: "6px", display: "block" }}>Consultation Structure</span>
            <h2
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                fontSize: "2rem",
                fontWeight: 600,
                color: "var(--green-900)",
                margin: 0,
              }}
            >
              How the Consultation Unfolds
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {CONSULTATION_STEPS.map((step) => (
              <div
                key={step.step}
                style={{
                  padding: "1.75rem",
                  background: "white",
                  borderRadius: "18px",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                    fontSize: "2rem",
                    fontWeight: 300,
                    color: "var(--brass-500)",
                    display: "block",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.step}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--green-900)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-600)", lineHeight: 1.65, margin: 0 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
