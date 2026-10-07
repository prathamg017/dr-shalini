import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ConcernsGrid from "@/components/ConcernsGrid";
import { PRIMARY_CONTACT } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Areas of Homoeopathy Consultation | Dr. Shalini Jain Indore",
  description:
    "Explore the 9 key areas of homoeopathic consultation offered by Dr. Shalini Jain (BHMS) in Indore, including respiratory, skin, migraine, digestive, pediatric, and women's health.",
  alternates: {
    canonical: "https://drshalinijain.in/concerns",
  },
};

export default function ConcernsHubPage() {
  return (
    <div style={{ background: "var(--ivory-100)", minHeight: "100vh" }}>
      <div className="container-xl" style={{ paddingTop: "2rem", paddingBottom: "5rem" }}>
        <Breadcrumbs items={[{ label: "Areas of Consultation" }]} />

        {/* Editorial Header Section */}
        <section style={{ maxWidth: "780px", margin: "2.5rem 0 3.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--brass-500)" }} />
            <span className="eyebrow">
              Clinical Areas · Dr. Shalini Jain
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
            What would you like to discuss?
          </h1>
          <p className="body-lg" style={{ marginBottom: "1.5rem" }}>
            In classical homoeopathy, we do not treat diagnostic labels in isolation. Each person experiences discomfort uniquely. The nine areas below represent common presentations discussed during initial and follow-up consultations at our Indore clinic.
          </p>

          <div
            style={{
              padding: "1.25rem 1.5rem",
              background: "white",
              borderRadius: "14px",
              border: "1px solid var(--border)",
              borderLeft: "4px solid var(--green-800)",
            }}
          >
            <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--green-900)", display: "block", marginBottom: "4px" }}>
              Consultation Guidance:
            </span>
            <p style={{ fontSize: "0.8125rem", color: "var(--text-600)", lineHeight: 1.6, margin: 0 }}>
              Every evaluation is constitutional and tailored to you. We encourage bringing relevant laboratory investigations, previous doctor prescriptions, and blood tests to your appointment.
            </p>
          </div>
        </section>

        {/* Concerns Grid */}
        <section style={{ marginBottom: "5rem" }}>
          <ConcernsGrid />
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
              Private Practice · Indore
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
              Discuss your case in an attentive consultation.
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Reach out to reserve a time with Dr. Shalini Jain at Palsikar Colony or Kalani Nagar.
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
                WhatsApp Helpline
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
