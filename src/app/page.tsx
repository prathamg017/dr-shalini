import Image from "next/image";
import Link from "next/link";
import {
  PRIMARY_CONTACT,
  CLINIC_LOCATIONS,
  CONCERN_CATEGORIES,
} from "@/lib/clinic-data";

// ═══════════════════════════════════════════════════════════════
// 1. HERO — Dr. Shalini + Powerful Editorial Positioning
// ═══════════════════════════════════════════════════════════════
function HeroSection() {
  const waUrl = PRIMARY_CONTACT.getWhatsAppUrl(
    "Hello Dr. Shalini Jain clinic, I would like to request a consultation. Please share available timings."
  );

  return (
    <section
      style={{
        background: "var(--ivory-100)",
        paddingTop: "clamp(3.5rem, 6vw, 6rem)",
        paddingBottom: "clamp(3.5rem, 6vw, 6.5rem)",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Subtle organic ambient gradients */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(113,138,125,0.08) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-5%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(179,149,90,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column: Doctor Identity & Clear Next Actions */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.75rem" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--brass-500)",
                }}
              />
              <span className="eyebrow" style={{ letterSpacing: "0.16em" }}>
                Dr. Shalini Jain · BHMS
              </span>
              <span style={{ color: "var(--border-strong)", fontSize: "0.75rem" }}>|</span>
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-400)",
                }}
              >
                Indore, MP
              </span>
            </div>

            <h1
              className="display-xl"
              style={{
                color: "var(--text-900)",
                marginBottom: "1.75rem",
                fontWeight: 400,
                lineHeight: 1.02,
              }}
            >
              Healthcare begins
              <em
                style={{
                  fontStyle: "italic",
                  display: "block",
                  fontWeight: 400,
                  color: "var(--green-800)",
                }}
              >
                with being heard.
              </em>
            </h1>

            <p
              className="body-lg"
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.8,
                color: "var(--text-600)",
                marginBottom: "2.5rem",
                maxWidth: "540px",
              }}
            >
              A thoughtful homoeopathic consultation starts by understanding you — your story, your symptoms, and your individual health context. Consult with Dr. Shalini Jain at two accessible clinics in Indore.
            </p>

            <div className="btn-group-mobile" style={{ marginBottom: "3rem" }}>
              <Link href="/consultation" className="btn-primary btn-full-mobile">
                Request a Consultation
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-full-mobile">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                Continue on WhatsApp
              </a>
              <a
                href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
                className="btn-ghost btn-full-mobile"
                title="Call clinic helpline"
              >
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PRIMARY_CONTACT.phoneDisplay}
              </a>
            </div>

            {/* Quick Indore Neighborhood Context Strip */}
            <div
              className="grid-clinic-mini"
              style={{ paddingTop: "2rem", borderTop: "1px solid var(--border)" }}
            >
              {CLINIC_LOCATIONS.map((loc) => (
                <Link
                  key={loc.id}
                  href={`/clinic/${loc.id}`}
                  style={{
                    padding: "14px 18px",
                    background: "white",
                    border: "1px solid var(--border)",
                    borderRadius: "14px",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                  className="hover-border-green"
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--brass-600)",
                      }}
                    >
                      {loc.id === "palsikar-colony" ? "Morning Clinic" : "Evening Clinic"}
                    </span>
                    <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--text-300)" }}>
                      {loc.timings.hours}
                    </span>
                  </div>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-900)" }}>
                    {loc.shortName}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-400)" }}>
                    {loc.addressLines[0]}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Authentic Doctor Portrait — Editorial Frame */}
          <div style={{ position: "relative" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                transform: "translate(16px, 16px)",
                borderRadius: "28px",
                border: "1px solid var(--brass-300)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "28px",
                overflow: "hidden",
                background: "var(--sage-100)",
                border: "1px solid var(--border)",
                boxShadow: "0 28px 70px rgba(15, 36, 32, 0.12), 0 4px 18px rgba(15,36,32,0.06)",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "3 / 4", overflow: "hidden", background: "#e5ded4" }}>
                <Image
                  src="/images/dr-shalini-clinic-flagship.jpg"
                  alt="Dr. Shalini Jain, BHMS — Homoeopathic Physician consulting patients at her Indore clinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
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
                    background: "linear-gradient(to bottom, transparent 45%, rgba(15, 36, 32, 0.75) 100%)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.75rem",
                    zIndex: 2,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                      fontSize: "1.625rem",
                      fontWeight: 600,
                      color: "white",
                      lineHeight: 1.1,
                      margin: 0,
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
                      margin: "4px 0 0",
                    }}
                  >
                    BHMS · Homoeopathic Physician
                  </p>
                </div>
              </div>

              {/* Doctor Card Bottom Anchor */}
              <div
                style={{
                  padding: "1.25rem 1.75rem",
                  background: "white",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <div>
                  <span className="eyebrow" style={{ display: "block", marginBottom: "3px" }}>
                    Private Practice
                  </span>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-600)", margin: 0, fontWeight: 500 }}>
                    Palsikar Colony &amp; Kalani Nagar
                  </p>
                </div>
                <Link
                  href="/about"
                  style={{
                    flexShrink: 0,
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--green-800)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Meet the doctor
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// 2. HUMAN TRUST SECTION — Consultation Philosophy
// ═══════════════════════════════════════════════════════════════
function HumanTrustSection() {
  const steps = [
    {
      num: "01",
      title: "Listen",
      subtitle: "Understand what brought you here",
      body: "We begin by giving you time to explain your primary complaint, how long it has persisted, and how it impacts your daily routine.",
    },
    {
      num: "02",
      title: "Understand",
      subtitle: "Symptoms, history & context",
      body: "We explore related triggers, past medical history, family health, sleep, appetite, and emotional stress. The full individual context matters.",
    },
    {
      num: "03",
      title: "Discuss",
      subtitle: "Honest, transparent guidance",
      body: "We discuss what homoeopathy can realistically offer, what a reasonable timeline looks like, and what ongoing lifestyle adjustments are helpful.",
    },
    {
      num: "04",
      title: "Individualize",
      subtitle: "Care tailored to one person",
      body: "Remedies and follow-ups are selected specifically for your constitutional picture — never a generic one-size-fits-all prescription.",
    },
  ];

  return (
    <section
      style={{
        background: "var(--green-900)",
        color: "white",
        paddingTop: "clamp(5rem, 8vw, 7.5rem)",
        paddingBottom: "clamp(5rem, 8vw, 7.5rem)",
        position: "relative",
      }}
    >
      <div className="container-xl">
        <div style={{ maxWidth: "760px", marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.25rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--brass-400)" }} />
            <span
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--brass-400)",
              }}
            >
              The Consultation Philosophy
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
              fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
              fontWeight: 400,
              color: "white",
              letterSpacing: "-0.025em",
              lineHeight: 1.08,
              marginBottom: "1.5rem",
            }}
          >
            Before treatment,
            <em style={{ fontStyle: "italic", display: "block", color: "var(--brass-300)" }}>
              there is a conversation.
            </em>
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.72)",
              margin: 0,
            }}
          >
            In homoeopathy, healing begins with an attentive dialogue where your physical sensations, lifestyle patterns, and medical background are heard with care.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid-steps-4">
          {steps.map((st) => (
            <div key={st.num} className="step-card">
              <div
                style={{
                  fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                  fontSize: "2.75rem",
                  fontWeight: 300,
                  color: "var(--brass-400)",
                  lineHeight: 1,
                  marginBottom: "1.25rem",
                }}
              >
                {st.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "white",
                  margin: "0 0 6px",
                  lineHeight: 1.2,
                }}
              >
                {st.title}
              </h3>
              <div
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--brass-300)",
                  marginBottom: "1rem",
                }}
              >
                {st.subtitle}
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.65)",
                  margin: 0,
                }}
              >
                {st.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// 3. MEET DR. SHALINI JAIN — Memorable Doctor Identity
// ═══════════════════════════════════════════════════════════════
function MeetDoctorSection() {
  return (
    <section
      style={{
        paddingTop: "clamp(5rem, 8vw, 7.5rem)",
        paddingBottom: "clamp(5rem, 8vw, 7.5rem)",
        background: "white",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-xl">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="meet-doctor-grid"
        >
          <style>{`
            @media (min-width: 1024px) {
              .meet-doctor-grid {
                grid-template-columns: 460px 1fr !important;
                gap: 5.5rem !important;
              }
            }
          `}</style>

          {/* Left: Authentic Portrait with Warm Botanical Framing */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "var(--sage-100)",
                boxShadow: "0 24px 60px rgba(15,36,32,0.08)",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "3 / 4", overflow: "hidden", background: "#e5ded4" }}>
                <Image
                  src="/images/dr-shalini-clinic-flagship.jpg"
                  alt="Dr. Shalini Jain, BHMS — Homoeopathy Physician, Indore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 20%",
                  }}
                />
              </div>
              <div
                style={{
                  padding: "1.5rem",
                  background: "var(--ivory-50)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "var(--green-900)",
                    }}
                  >
                    Dr. Shalini Jain
                  </span>
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--green-800)",
                      background: "var(--sage-100)",
                      padding: "4px 10px",
                      borderRadius: "100px",
                    }}
                  >
                    BHMS
                  </span>
                </div>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-400)", margin: 0 }}>
                  Practicing Homoeopathic Physician · Indore, MP
                </p>
              </div>
            </div>
          </div>

          {/* Right: Thoughtful Consultation Narrative */}
          <div>
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>
              Meet The Doctor
            </div>
            <h2
              className="display-lg"
              style={{
                color: "var(--text-900)",
                marginBottom: "1.5rem",
                lineHeight: 1.05,
              }}
            >
              A doctor who takes time to know your case.
            </h2>

            <p className="body-lg" style={{ marginBottom: "1.25rem" }}>
              Many patients arrive at our Indore clinics seeking care where their complete health context is examined with care. In classical homoeopathy, we evaluate the complete individual.
            </p>

            <p className="body-md" style={{ marginBottom: "1.5rem", color: "var(--text-600)" }}>
              Dr. Shalini Jain conducts thoughtful, attentive consultations for children, women, and adults. Whether you are dealing with chronic recurrences or a specific acute discomfort, she works to understand how your body reacts, what triggers your distress, and what gentle, individualized remedies may restore balance.
            </p>

            {/* Factual Information & Transparency Notes */}
            <div
              className="grid-facts"
              style={{
                padding: "1.5rem",
                background: "var(--ivory-50)",
                borderRadius: "16px",
                border: "1px solid var(--border)",
                marginBottom: "2rem",
              }}
            >
              <div>
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--brass-600)", display: "block" }}>
                  Qualification
                </span>
                <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-900)" }}>
                  BHMS Degree
                </span>
              </div>
              <div>
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--brass-600)", display: "block" }}>
                  Practice Base
                </span>
                <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-900)" }}>
                  Indore, Madhya Pradesh
                </span>
              </div>
              <div>
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--brass-600)", display: "block" }}>
                  Consultation
                </span>
                <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-900)" }}>
                  Morning &amp; Evening Clinics
                </span>
              </div>
            </div>

            <div className="btn-group-mobile">
              <Link href="/about" className="btn-primary btn-full-mobile">
                Read Dr. Shalini&apos;s Profile
              </Link>
              <Link href="/consultation" className="btn-ghost btn-full-mobile">
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// 4. THE CLINICAL STANDARD — Trust & Practice Architecture
// ═══════════════════════════════════════════════════════════════
function ClinicalExcellenceSection() {
  const standards = [
    {
      num: "01",
      tag: "Attentive Practice",
      title: "Consultation Without Rushing",
      description:
        "Every patient is allocated dedicated time to recount symptoms, medical chronology, and daily triggers. You are heard completely before clinical assessment begins.",
      highlight: "Uninterrupted Case Inquiry",
    },
    {
      num: "02",
      tag: "Dual Presence",
      title: "Two Accessible Indore Clinics",
      description:
        "Morning practice at Palsikar Colony and evening hours at Kalani Nagar ensure consistent, local healthcare access across central and western Indore.",
      highlight: "Morning & Evening Schedule",
    },
    {
      num: "03",
      tag: "Medical Safety",
      title: "Responsible Healthcare Ethics",
      description:
        "We never advocate abandoning prescribed allopathic treatments. Homoeopathy acts as parallel constitutional support with clear boundaries for acute hospital care.",
      highlight: "Integrated Medical Safety",
    },
    {
      num: "04",
      tag: "Dispensary Integrity",
      title: "Pure Pharmacopoeial Remedies",
      description:
        "Medicines dispensed directly to patients adhere to genuine homoeopathic pharmacopoeial standards — prepared with pharmaceutical grade dilutions and globules.",
      highlight: "Pharmacopoeial Standards",
    },
  ];

  return (
    <section
      style={{
        paddingTop: "clamp(5rem, 8vw, 7.5rem)",
        paddingBottom: "clamp(5rem, 8vw, 7.5rem)",
        background: "var(--ivory-50)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-xl">
        <div style={{ maxWidth: "720px", marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--brass-500)" }} />
            <span className="eyebrow">
              Clinical Architecture · Patient Trust
            </span>
          </div>
          <h2
            className="display-lg"
            style={{
              color: "var(--text-900)",
              marginBottom: "1.25rem",
              lineHeight: 1.05,
            }}
          >
            The foundations of a trustworthy consultation.
          </h2>
          <p className="body-lg" style={{ margin: 0 }}>
            Modern private practices build lasting confidence through transparency, professional ethics, and uncompromising standards of care.
          </p>
        </div>

        {/* 4 Architectural Trust Columns */}
        <div className="grid-trust-4">
          {standards.map((st) => (
            <div
              key={st.num}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "2.25rem",
                border: "1px solid var(--border)",
                boxShadow: "0 4px 20px rgba(15, 36, 32, 0.03)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
              className="hover-border-green"
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.25rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                      fontSize: "2rem",
                      fontWeight: 300,
                      color: "var(--brass-500)",
                      lineHeight: 1,
                    }}
                  >
                    {st.num}
                  </span>
                  <span
                    style={{
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--green-800)",
                      background: "var(--sage-100)",
                      padding: "4px 10px",
                      borderRadius: "100px",
                    }}
                  >
                    {st.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                    fontSize: "1.375rem",
                    fontWeight: 600,
                    color: "var(--green-900)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.2,
                  }}
                >
                  {st.title}
                </h3>

                <p style={{ fontSize: "0.875rem", color: "var(--text-600)", lineHeight: 1.7, margin: "0 0 1.5rem" }}>
                  {st.description}
                </p>
              </div>

              <div
                style={{
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--brass-600)",
                }}
              >
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--brass-500)" }} />
                <span>{st.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// 5. REWORKED CONCERNS — “What would you like to discuss?”
// ═══════════════════════════════════════════════════════════════
function ConcernsSection() {
  const concerns = CONCERN_CATEGORIES;

  return (
    <section
      style={{
        paddingTop: "clamp(5rem, 8vw, 7rem)",
        paddingBottom: "clamp(5rem, 8vw, 7rem)",
        background: "var(--ivory-100)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-xl">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            marginBottom: "3.5rem",
          }}
          className="concerns-header"
        >
          <style>{`
            @media (min-width: 768px) {
              .concerns-header {
                flex-direction: row !important;
                align-items: flex-end !important;
                justify-content: space-between !important;
              }
            }
          `}</style>
          <div style={{ maxWidth: "600px" }}>
            <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>
              Areas of Consultation
            </div>
            <h2 className="display-lg" style={{ color: "var(--text-900)", margin: "0 0 1rem" }}>
              What would you like to discuss?
            </h2>
            <p className="body-md" style={{ margin: 0 }}>
              Patients seek homoeopathic consultation for diverse physical and emotional patterns. Here are the nine areas commonly evaluated at our clinics:
            </p>
          </div>
          <Link
            href="/concerns"
            className="btn-ghost"
            style={{ alignSelf: "flex-start", whiteSpace: "nowrap" }}
          >
            Explore all 9 areas →
          </Link>
        </div>

        {/* 9 Consultation Areas */}
        <div className="grid-concerns">
          {concerns.map((c) => (
            <Link
              key={c.id}
              href={`/concerns/${c.slug}`}
              className="concern-card"
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "8px",
                    marginBottom: "0.75rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                      fontSize: "1.375rem",
                      fontWeight: 600,
                      color: "var(--green-900)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                      margin: 0,
                    }}
                  >
                    {c.title}
                  </h3>
                  {c.hindiTitle && (
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        color: "var(--text-400)",
                        background: "var(--ivory-200)",
                        padding: "3px 8px",
                        borderRadius: "100px",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {c.hindiTitle.split(" ")[0]}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-600)", lineHeight: 1.65, margin: 0 }}>
                  {c.summary}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border)",
                  marginTop: "auto",
                }}
              >
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    color: "var(--brass-600)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Individual assessment
                </span>
                <span style={{ color: "var(--green-800)", fontSize: "0.875rem", fontWeight: 700 }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// 6. LOCAL TRUST — Two Established Indore Clinics
// ═══════════════════════════════════════════════════════════════
function LocationsSection() {
  return (
    <section
      style={{
        paddingTop: "clamp(5rem, 8vw, 7.5rem)",
        paddingBottom: "clamp(5rem, 8vw, 7.5rem)",
        background: "white",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-xl">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3.5rem" }}>
          <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>
            Local Accessibility · Indore
          </div>
          <h2 className="display-lg" style={{ color: "var(--text-900)", marginBottom: "1rem" }}>
            Two clinics. One doctor.
          </h2>
          <p className="body-md" style={{ margin: 0 }}>
            Morning consultations in Palsikar Colony and evening hours in Kalani Nagar for convenient access across Indore.
          </p>
        </div>

        <div className="grid-locations">
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
                {/* Header Banner */}
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
                      {i === 0 ? "Morning Practice" : "Evening Practice"}
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

                {/* Content Details */}
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
                      Clinic Address
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

                  {/* Features */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2rem" }}>
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

              {/* Action Strip */}
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
                <a
                  href={loc.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: "0.75rem", padding: "8px 16px" }}
                >
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
                <Link
                  href={`/clinic/${loc.id}`}
                  className="btn-ghost"
                  style={{ fontSize: "0.75rem", padding: "8px 16px" }}
                >
                  Details
                </Link>
                <a
                  href={PRIMARY_CONTACT.getWhatsAppUrl(
                    `Hello Dr. Shalini Jain clinic, I would like to visit the ${loc.shortName} clinic. Please guide me.`
                  )}
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
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// 7. FINAL CONVERSION SECTION — Ready to Talk?
// ═══════════════════════════════════════════════════════════════
function FinalConversionSection() {
  const waUrl = PRIMARY_CONTACT.getWhatsAppUrl(
    "Hello Dr. Shalini Jain clinic, I would like to request a consultation. Please share available timings."
  );

  return (
    <section
      style={{
        paddingTop: "clamp(5rem, 8vw, 7.5rem)",
        paddingBottom: "clamp(5rem, 8vw, 7.5rem)",
        background: "var(--ivory-200)",
      }}
    >
      <div className="container-xl">
        <div
          style={{
            borderRadius: "32px",
            padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 4rem)",
            background: "var(--green-900)",
            color: "white",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
            boxShadow: "0 30px 80px rgba(15, 36, 32, 0.16)",
          }}
        >
          {/* Subtle Ambient Radial */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(179,149,90,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto" }}>
            <span
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--brass-400)",
                display: "inline-block",
                marginBottom: "1.25rem",
              }}
            >
              Dr. Shalini Jain · Homoeopathy Clinic · Indore
            </span>

            <h2
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                fontWeight: 400,
                color: "white",
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
                marginBottom: "1.25rem",
              }}
            >
              Take the first step
              <em style={{ fontStyle: "italic", display: "block", color: "var(--brass-300)" }}>
                towards being heard.
              </em>
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.7)",
                marginBottom: "2.5rem",
              }}
            >
              Contact the clinic by WhatsApp, telephone call, or online booking request. We coordinate your slot at your preferred Indore clinic promptly.
            </p>

            <div className="btn-group-center">
              <Link
                href="/consultation"
                className="btn-brass btn-full-mobile"
                style={{ fontSize: "0.875rem", padding: "1rem 2rem" }}
              >
                Request a Consultation
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-full-mobile"
                style={{ fontSize: "0.875rem", padding: "1rem 2rem" }}
              >
                Continue on WhatsApp
              </a>
              <a
                href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
                className="hover-footer-social btn-full-mobile"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "0.95rem 1.75rem",
                  borderRadius: "100px",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "white",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PRIMARY_CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// EXPORT MAIN HOMEPAGE — Clear Emotional Brand Rhythm
// ═══════════════════════════════════════════════════════════════
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HumanTrustSection />
      <MeetDoctorSection />
      <ClinicalExcellenceSection />
      <ConcernsSection />
      <LocationsSection />
      <FinalConversionSection />
    </>
  );
}
