"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRIMARY_CONTACT } from "@/lib/clinic-data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Concerns", href: "/concerns" },
    { label: "Clinics", href: "/clinic" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: scrolled ? "rgba(248, 246, 241, 0.97)" : "#F8F6F1",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: "1px solid #E2DDD4",
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
          boxShadow: scrolled ? "0 1px 20px rgba(15,36,32,0.06)" : "none",
        }}
      >
        <div className="container-xl">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

            {/* Logo */}
            <Link
              href="/"
              style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
              aria-label="Dr. Shalini Jain Homoeopathy Clinic — Home"
            >
              <Image
                src="/images/logo.png"
                alt="Dr. Shalini Jain Homoeopathy Clinic"
                width={44}
                height={44}
                style={{ objectFit: "contain", flexShrink: 0 }}
                priority
              />
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--green-800)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  Dr. Shalini Jain
                </div>
                <div
                  style={{
                    fontSize: "0.625rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-300)",
                    lineHeight: 1,
                    marginTop: "2px",
                  }}
                >
                  BHMS · Homoeopathy · Indore
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav aria-label="Primary Navigation" style={{ display: "none" }} className="lg-nav">
              <style>{`
                @media (min-width: 1024px) { .lg-nav { display: flex !important; align-items: center; gap: 36px; } .mobile-only { display: none !important; } }
              `}</style>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--text-600)",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                  }}
                  className="hover-nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="lg-nav">
              <a
                href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--green-800)",
                  textDecoration: "none",
                  padding: "8px 14px",
                  borderRadius: "100px",
                  border: "1.5px solid var(--border-strong)",
                  transition: "all 0.15s ease",
                }}
                className="hover-btn-ghost"
              >
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PRIMARY_CONTACT.phoneDisplay}
              </a>
              <Link href="/consultation" className="btn-primary" style={{ fontSize: "0.75rem", padding: "9px 18px" }}>
                Book Consultation
              </Link>
            </div>

            {/* Mobile Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="mobile-only">
              <style>{`
                @media (min-width: 1024px) { .mobile-only { display: none !important; } }
                @media (max-width: 1023px) { .mobile-only { display: flex !important; } }
              `}</style>
              <Link href="/consultation" className="btn-primary" style={{ fontSize: "0.7rem", padding: "8px 14px" }}>
                Book
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  border: "1.5px solid var(--border-strong)",
                  borderRadius: "10px",
                  cursor: "pointer",
                  color: "var(--green-800)",
                }}
              >
                {mobileOpen ? (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "73px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 49,
            background: "var(--ivory-100)",
            borderTop: "1px solid var(--border)",
            padding: "1.5rem",
            overflowY: "auto",
          }}
          className="mobile-only"
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "1.5rem" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 16px",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--text-800)",
                  textDecoration: "none",
                  borderRadius: "10px",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div style={{ padding: "1.25rem", background: "var(--sage-50)", borderRadius: "14px", border: "1px solid var(--sage-200)" }}>
            <div style={{ marginBottom: "0.75rem" }}>
              <div className="eyebrow" style={{ marginBottom: "4px" }}>Two Indore Clinics</div>
              <p className="body-sm" style={{ margin: 0 }}>Palsikar Colony: 10 AM – 1 PM</p>
              <p className="body-sm" style={{ margin: "2px 0 0" }}>Kalani Nagar: 6 PM – 9 PM</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <a href={`tel:${PRIMARY_CONTACT.phoneRaw}`} className="btn-ghost" style={{ justifyContent: "center", padding: "10px", fontSize: "0.75rem" }}>
                Call
              </a>
              <a href={PRIMARY_CONTACT.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ justifyContent: "center", padding: "10px", fontSize: "0.75rem" }}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
