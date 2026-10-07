import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { DOCTOR_INFO, CLINIC_LOCATIONS, PRIMARY_CONTACT } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "About Dr. Shalini Jain • BHMS | Homoeopathic Physician Indore",
  description:
    "Learn about Dr. Shalini Jain (BHMS), her consultation philosophy, verified qualifications, and outpatient practice in Palsikar Colony & Kalani Nagar, Indore.",
  alternates: { canonical: "https://drshalinijain.in/about" },
};

export default function AboutPage() {
  return (
    <div style={{ background: "var(--ivory-100)" }}>
      <div className="container-xl" style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
        <Breadcrumbs items={[{ label: "About Dr. Shalini Jain" }]} />
      </div>

      <section style={{ padding: "2rem 0 5rem", background: "var(--ivory-100)" }}>
        <div className="container-xl">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "4rem",
              alignItems: "start",
            }}
            className="about-grid"
          >
            <style>{`
              @media (min-width: 1024px) {
                .about-grid {
                  grid-template-columns: 420px 1fr !important;
                  gap: 5.5rem !important;
                }
              }
            `}</style>

            {/* Left Column: Authentic Portrait and Verified Fact Sheet */}
            <div style={{ position: "sticky", top: "6rem" }}>
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  background: "white",
                  boxShadow: "0 24px 60px rgba(15,36,32,0.08), 0 4px 16px rgba(15,36,32,0.04)",
                }}
              >
                <div style={{ position: "relative", aspectRatio: "3 / 4", overflow: "hidden", background: "#e5ded4" }}>
                  <Image
                    src="/images/dr-shalini-clinic-flagship.jpg"
                    alt="Dr. Shalini Jain, BHMS — Homoeopathic Physician at her Indore clinic"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    priority
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 20%",
                    }}
                  />
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom, transparent 45%, rgba(15,36,32,0.72) 100%)",
                    }}
                  />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", zIndex: 2 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                        fontSize: "1.625rem",
                        fontWeight: 600,
                        color: "white",
                        margin: "0 0 4px",
                        lineHeight: 1.1,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Dr. Shalini Jain
                    </p>
                    <p
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.78)",
                        margin: 0,
                      }}
                    >
                      BHMS · Homoeopathic Physician
                    </p>
                  </div>
                </div>

                {/* Quick Profile Summary */}
                <div style={{ padding: "1.5rem", background: "white" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 14px",
                        background: "var(--ivory-50)",
                        borderRadius: "10px",
                        border: "1px solid var(--border)",
                        fontSize: "0.8125rem",
                      }}
                    >
                      <span style={{ color: "var(--text-400)", fontWeight: 500 }}>Qualification</span>
                      <span style={{ color: "var(--green-900)", fontWeight: 700 }}>BHMS Degree</span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 14px",
                        background: "var(--ivory-50)",
                        borderRadius: "10px",
                        border: "1px solid var(--border)",
                        fontSize: "0.8125rem",
                      }}
                    >
                      <span style={{ color: "var(--text-400)", fontWeight: 500 }}>Practice Base</span>
                      <span style={{ color: "var(--text-900)", fontWeight: 600 }}>Indore, MP</span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 14px",
                        background: "var(--ivory-50)",
                        borderRadius: "10px",
                        border: "1px solid var(--border)",
                        fontSize: "0.8125rem",
                      }}
                    >
                      <span style={{ color: "var(--text-400)", fontWeight: 500 }}>Direct Line</span>
                      <a
                        href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
                        style={{ color: "var(--green-800)", fontWeight: 700, textDecoration: "none" }}
                      >
                        {PRIMARY_CONTACT.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Link href="/consultation" className="btn-primary" style={{ justifyContent: "center" }}>
                      Book Consultation
                    </Link>
                    <a
                      href={DOCTOR_INFO.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ justifyContent: "center", fontSize: "0.75rem", padding: "10px" }}
                    >
                      Instagram: {DOCTOR_INFO.socials.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Narrative & Factual Discipline */}
            <div>
              <div className="eyebrow" style={{ marginBottom: "1rem" }}>
                Dr. Shalini Jain · Homoeopathy Practice
              </div>
              <h1 className="display-lg" style={{ marginBottom: "1.5rem", color: "var(--text-900)" }}>
                “Healthcare begins with being heard.”
              </h1>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
                <p className="body-lg" style={{ margin: 0 }}>
                  A homoeopathic consultation is fundamentally different from a hurried prescription review. It is a thoughtful consultation and structured dialogue where the patient’s complete physical and emotional background is heard and understood.
                </p>
                <p className="body-md" style={{ margin: 0, color: "var(--text-600)" }}>
                  Dr. Shalini Jain (BHMS) practices in Indore with a steady commitment to individualized care. In her practice, constitutional case taking looks beyond isolated labels to investigate what makes each patient’s complaints unique — their sensitivities, bodily triggers, reaction to weather, sleep patterns, and stress responses.
                </p>
                <p className="body-md" style={{ margin: 0, color: "var(--text-600)" }}>
                  Her consultation rooms at Palsikar Colony and Kalani Nagar provide an attentive, reassuring setting where families, working adults, and children receive respectful, transparent medical attention.
                </p>
              </div>

              {/* Factual Transparency Section — No Invented Credentials */}
              <div
                style={{
                  margin: "2.5rem 0",
                  padding: "2rem",
                  background: "white",
                  borderRadius: "20px",
                  border: "1px solid var(--border)",
                  boxShadow: "0 4px 20px rgba(15,36,32,0.03)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                        fontSize: "1.375rem",
                        fontWeight: 600,
                        color: "var(--green-900)",
                        margin: 0,
                      }}
                    >
                      Verified Practice Record
                    </h2>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-400)", margin: "4px 0 0" }}>
                      Only directly confirmed clinic information is presented.
                    </p>
                  </div>
                  <span className="tag tag-green" style={{ fontSize: "0.625rem" }}>
                    Verified Standard
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {DOCTOR_INFO.confirmedCredentials.map((cred, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 16px",
                        borderRadius: "12px",
                        background: cred.status === "CONFIRMED" ? "var(--ivory-50)" : "#FFFBFB",
                        border: `1px solid ${cred.status === "CONFIRMED" ? "var(--border)" : "#FECACA"}`,
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span style={{ fontSize: "0.8125rem", color: "var(--text-400)", fontWeight: 500 }}>
                        {cred.label}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "0.875rem", color: "var(--text-900)", fontWeight: 600 }}>
                          {cred.value}
                        </span>
                        <span
                          className="tag"
                          style={{
                            fontSize: "0.5625rem",
                            padding: "3px 8px",
                            background: cred.status === "CONFIRMED" ? "var(--sage-100)" : "#FEF2F2",
                            color: cred.status === "CONFIRMED" ? "var(--green-800)" : "#991B1B",
                            border: `1px solid ${cred.status === "CONFIRMED" ? "var(--sage-200)" : "#FECACA"}`,
                          }}
                        >
                          {cred.status === "CONFIRMED" ? "Confirmed" : "Pending Confirmation"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Approach Pillars */}
              <h2 className="display-sm" style={{ marginBottom: "1.5rem", color: "var(--text-900)" }}>
                Core Consultation Pillars
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1rem",
                  marginBottom: "3rem",
                }}
              >
                {DOCTOR_INFO.approachPoints.map((pt, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "1.75rem",
                      background: "white",
                      borderRadius: "16px",
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
                        marginBottom: "0.75rem",
                        lineHeight: 1,
                      }}
                    >
                      0{i + 1}
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
                      {pt.title}
                    </h3>
                    <p className="body-sm" style={{ margin: 0, color: "var(--text-600)" }}>
                      {pt.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Two Practice Locations Summary Card */}
              <div
                style={{
                  padding: "2.5rem",
                  background: "var(--green-900)",
                  borderRadius: "24px",
                  color: "white",
                }}
              >
                <div className="eyebrow" style={{ color: "var(--brass-300)", marginBottom: "8px" }}>
                  Consultation In Indore
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                    fontSize: "1.75rem",
                    fontWeight: 600,
                    color: "white",
                    marginBottom: "1.5rem",
                  }}
                >
                  Two Accessible Practice Locations
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1.25rem",
                    marginBottom: "2rem",
                  }}
                >
                  {CLINIC_LOCATIONS.map((loc) => (
                    <div
                      key={loc.id}
                      style={{
                        padding: "1.25rem",
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: "16px",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--brass-300)", display: "block", marginBottom: "4px" }}>
                        {loc.id === "palsikar-colony" ? "Morning Clinic" : "Evening Clinic"}
                      </span>
                      <span style={{ fontSize: "1.125rem", fontWeight: 700, color: "white", display: "block", marginBottom: "4px" }}>
                        {loc.shortName}
                      </span>
                      <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.65)", display: "block" }}>
                        {loc.landmark}
                      </span>
                      <span
                        style={{
                          fontSize: "0.8125rem",
                          color: "white",
                          fontWeight: 600,
                          display: "block",
                          marginTop: "8px",
                        }}
                      >
                        {loc.timings.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <Link href="/consultation" className="btn-brass" style={{ fontSize: "0.8125rem", padding: "10px 20px" }}>
                    Request Appointment
                  </Link>
                  <a
                    href={PRIMARY_CONTACT.getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ fontSize: "0.8125rem", padding: "10px 20px" }}
                  >
                    WhatsApp Helpline
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
