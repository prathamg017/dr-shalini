"use client";

import { useState } from "react";
import Link from "next/link";
import { CLINIC_LOCATIONS, PRIMARY_CONTACT, CONCERN_CATEGORIES } from "@/lib/clinic-data";

export default function ConsultationRequestForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    clinic: "palsikar-colony",
    concern: "General Consultation",
    note: "",
  });
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const loc = CLINIC_LOCATIONS.find((c) => c.id === form.clinic);
    const msg = `Hello Dr. Shalini Jain Homoeopathy Clinic,\n\nI would like to request a consultation.\n• Name: ${form.name}\n• Phone: ${form.phone}\n• Clinic: ${loc ? loc.shortName : form.clinic}\n• Concern: ${form.concern}\n• Notes: ${form.note || "None"}\n\nPlease confirm the next available slot. Thank you.`;
    window.open(PRIMARY_CONTACT.getWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
    setDone(true);
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.6875rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--text-600)",
    marginBottom: "6px",
  };

  return (
    <div
      style={{
        background: "white",
        borderRadius: "24px",
        border: "1px solid var(--border)",
        overflow: "hidden",
        maxWidth: "680px",
        margin: "0 auto",
        boxShadow: "0 20px 60px rgba(15,36,32,0.06), 0 4px 16px rgba(15,36,32,0.04)",
      }}
    >
      {/* Header band */}
      <div
        style={{
          padding: "1.75rem 2rem",
          background: "var(--green-800)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="eyebrow" style={{ color: "var(--brass-400)", marginBottom: "6px" }}>
          Direct Clinic Coordination
        </div>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.625rem",
            fontWeight: 600,
            color: "white",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Request a Consultation
        </h3>
      </div>

      <div style={{ padding: "2rem" }}>
        {done ? (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "var(--sage-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem",
                border: "1px solid var(--sage-200)",
              }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="var(--green-800)" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.375rem",
                fontWeight: 600,
                color: "var(--green-800)",
                marginBottom: "0.75rem",
              }}
            >
              WhatsApp Opened
            </h4>
            <p className="body-sm" style={{ maxWidth: "340px", margin: "0 auto 1.5rem" }}>
              Your inquiry details have been prepared. If WhatsApp didn't open, use the direct number below.
            </p>
            <a href={`tel:${PRIMARY_CONTACT.phoneRaw}`} className="btn-primary">
              Call {PRIMARY_CONTACT.phoneDisplay}
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
              className="form-two-col"
            >
              <style>{`@media (max-width: 540px) { .form-two-col { grid-template-columns: 1fr !important; } }`}</style>
              <div>
                <label htmlFor="cons-name" style={labelStyle}>Full Name *</label>
                <input
                  id="cons-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Priya Sharma"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="cons-phone" style={labelStyle}>Phone / WhatsApp *</label>
                <input
                  id="cons-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="input-field"
                />
              </div>
            </div>

            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
              className="form-two-col"
            >
              <div>
                <label htmlFor="cons-clinic" style={labelStyle}>Preferred Clinic *</label>
                <select
                  id="cons-clinic"
                  value={form.clinic}
                  onChange={e => setForm({ ...form, clinic: e.target.value })}
                  className="input-field"
                >
                  {CLINIC_LOCATIONS.map(loc => (
                    <option key={loc.id} value={loc.id}>
                      {loc.shortName} ({loc.timings.hours})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cons-concern" style={labelStyle}>Area of Concern</label>
                <select
                  id="cons-concern"
                  value={form.concern}
                  onChange={e => setForm({ ...form, concern: e.target.value })}
                  className="input-field"
                >
                  <option value="General Consultation">General Consultation</option>
                  {CONCERN_CATEGORIES.map(c => (
                    <option key={c.id} value={c.title}>{c.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="cons-note" style={labelStyle}>Brief Note (Optional)</label>
              <textarea
                id="cons-note"
                rows={3}
                value={form.note}
                onChange={e => setForm({ ...form, note: e.target.value })}
                placeholder="Mention symptom duration or preferred appointment day..."
                className="input-field"
                style={{ resize: "none" }}
              />
            </div>

            <div
              style={{
                padding: "0.875rem 1rem",
                background: "var(--ivory-100)",
                borderRadius: "10px",
                border: "1px solid var(--border)",
                fontSize: "0.6875rem",
                color: "var(--text-300)",
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: "var(--text-400)" }}>Safety Note:</strong> For acute medical emergencies — chest pain, severe breathlessness, loss of consciousness — please go directly to a hospital emergency room rather than requesting an appointment online.
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Continue via WhatsApp →
              </button>
              <a
                href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
                className="btn-ghost"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Call Directly: {PRIMARY_CONTACT.phoneDisplay}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
