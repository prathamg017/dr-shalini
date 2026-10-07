import Link from "next/link";
import { PRIMARY_CONTACT } from "@/lib/clinic-data";

export default function MobileActionBar() {
  return (
    <div
      role="region"
      aria-label="Quick contact"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "0.625rem 1rem calc(0.625rem + env(safe-area-inset-bottom))",
        background: "rgba(15, 30, 26, 0.97)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
      className="md-hidden"
    >
      <style>{`
        @media (min-width: 768px) { .md-hidden { display: none !important; } }
      `}</style>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr 1fr",
          gap: "8px",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        {/* Call */}
        <a
          href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "9px 6px",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "white",
            textDecoration: "none",
            transition: "background 0.15s ease",
            gap: "3px",
          }}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Call
          </span>
        </a>

        {/* Book - prominent center */}
        <Link
          href="/consultation"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            padding: "9px",
            borderRadius: "10px",
            background: "var(--brass-500)",
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.75rem",
            letterSpacing: "0.03em",
            boxShadow: "0 4px 14px rgba(179,149,90,0.35)",
          }}
        >
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book Visit
        </Link>

        {/* WhatsApp */}
        <a
          href={PRIMARY_CONTACT.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "9px 6px",
            borderRadius: "10px",
            background: "#1a5e30",
            border: "1px solid rgba(255,255,255,0.06)",
            color: "white",
            textDecoration: "none",
            gap: "3px",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.006.55 1.776.819 2.806.82 3.182 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.772zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.199.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.174.45.742.966 1.202.663.591 1.221.774 1.394.86s.275.072.376-.043c.102-.116.433-.505.549-.679.116-.173.232-.144.39-.087.159.058 1.012.477 1.185.564.173.086.289.13.332.202.043.072.043.419-.101.824z" />
          </svg>
          <span style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
