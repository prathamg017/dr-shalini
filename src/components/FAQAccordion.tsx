"use client";

import { useState } from "react";
import { CONCERN_CATEGORIES } from "@/lib/clinic-data";

export default function FAQAccordion({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { CLINIC_FAQS } = require("@/lib/clinic-data");
  const faqs = limit ? CLINIC_FAQS.slice(0, limit) : CLINIC_FAQS;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {faqs.map((faq: { question: string; answer: string }, index: number) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="faq-item"
            data-open={isOpen ? "true" : "false"}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "1rem",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "var(--green-800)",
                  lineHeight: 1.3,
                  textAlign: "left",
                }}
              >
                {faq.question}
              </span>
              <span
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: isOpen ? "var(--green-800)" : "var(--sage-100)",
                  color: isOpen ? "white" : "var(--green-800)",
                  transform: isOpen ? "rotate(180deg)" : "none",
                  transition: "all 0.2s ease",
                }}
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div
                style={{
                  padding: "0 1.5rem 1.25rem",
                  borderTop: "1px solid var(--border)",
                  paddingTop: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-400)",
                    lineHeight: 1.75,
                    margin: 0,
                    whiteSpace: "pre-line",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
