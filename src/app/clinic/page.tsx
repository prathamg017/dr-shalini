import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClinicLocationsSection from "@/components/ClinicLocationsSection";
import { CLINIC_LOCATIONS, PRIMARY_CONTACT } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Clinic Locations in Indore | Dr. Shalini Jain Homoeopathy",
  description:
    "Visit Dr. Shalini Jain Homoeopathy Clinic at Palsikar Colony (Morning: 10 AM - 1 PM) and Kalani Nagar (Evening: 6 PM - 9 PM) in Indore. Address, timings, and map directions.",
  alternates: {
    canonical: "https://drshalinijain.in/clinic",
  },
};

export default function ClinicHubPage() {
  return (
    <div style={{ background: "var(--ivory-100)", minHeight: "100vh" }}>
      <div className="container-xl" style={{ paddingTop: "2rem", paddingBottom: "5rem" }}>
        <Breadcrumbs items={[{ label: "Clinic Locations" }]} />

        {/* Editorial Header Section */}
        <section style={{ maxWidth: "780px", margin: "2.5rem 0 3.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--brass-500)" }} />
            <span className="eyebrow">
              Indore Practice · In-Person Care
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
            Two Established Practice Locations in Indore
          </h1>
          <p className="body-lg" style={{ marginBottom: "2rem" }}>
            Dr. Shalini Jain schedules consultations deliberately across central and western Indore neighbourhoods, offering morning hours at Palsikar Colony and evening hours at Kalani Nagar.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
            <a
              href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
              className="btn-primary"
              style={{ fontSize: "0.8125rem", padding: "10px 20px" }}
            >
              Direct Helpline: {PRIMARY_CONTACT.phoneDisplay}
            </a>
            <a
              href={PRIMARY_CONTACT.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ fontSize: "0.8125rem", padding: "10px 20px" }}
            >
              WhatsApp Directions &amp; Enquiries
            </a>
          </div>
        </section>

        {/* Detailed Clinic Cards */}
        <section style={{ marginBottom: "4rem" }}>
          <ClinicLocationsSection
            headline="Choose Your Preferred Indore Clinic"
            subheadline="Both clinics maintain complete patient case histories and provide comfortable consultation suites."
          />
        </section>

        {/* Practical Visit Guidance */}
        <section
          style={{
            padding: "2.5rem",
            background: "white",
            borderRadius: "24px",
            border: "1px solid var(--border)",
            marginBottom: "4rem",
            boxShadow: "0 4px 20px rgba(15,36,32,0.03)",
          }}
        >
          <div style={{ marginBottom: "1.75rem" }}>
            <span className="eyebrow" style={{ marginBottom: "4px" }}>Visit Preparation</span>
            <h2
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                fontSize: "1.75rem",
                fontWeight: 600,
                color: "var(--green-900)",
                margin: 0,
              }}
            >
              Practical Information for Your Clinic Visit
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            <div>
              <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--green-900)", display: "block", marginBottom: "8px" }}>
                Prior Appointment Recommended
              </span>
              <p style={{ fontSize: "0.875rem", color: "var(--text-600)", lineHeight: 1.7, margin: 0 }}>
                To avoid extended waiting times and allow dedicated time to discuss your concerns, we advise reaching out by phone or WhatsApp before coming in. Walk-in patients are accommodated subject to slot availability.
              </p>
            </div>

            <div>
              <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--green-900)", display: "block", marginBottom: "8px" }}>
                Carry Previous Medical Records
              </span>
              <p style={{ fontSize: "0.875rem", color: "var(--text-600)", lineHeight: 1.7, margin: 0 }}>
                Please bring past diagnostic reports, blood test results, prescriptions, and a list of currently prescribed allopathic medications for an accurate, complete assessment.
              </p>
            </div>

            <div>
              <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--green-900)", display: "block", marginBottom: "8px" }}>
                Dedicated Dispensary Support
              </span>
              <p style={{ fontSize: "0.875rem", color: "var(--text-600)", lineHeight: 1.7, margin: 0 }}>
                Remedies dispensed during consultation are prepared using authentic, high-quality homoeopathic pharmacopoeial standard globules and dilutions.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Booking Block */}
        <section
          style={{
            borderRadius: "28px",
            padding: "clamp(2.5rem, 5vw, 4rem)",
            background: "var(--green-900)",
            color: "white",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <span className="tag tag-white" style={{ marginBottom: "1rem" }}>
              Indore Practice
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "white",
                marginBottom: "1rem",
                lineHeight: 1.1,
              }}
            >
              Reserve your consultation slot.
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Coordinate timing for Palsikar Colony or Kalani Nagar with our clinic assistant.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <Link href="/consultation" className="btn-brass">
                Request Consultation
              </Link>
              <a
                href={PRIMARY_CONTACT.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp Message
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
