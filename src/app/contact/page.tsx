import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PRIMARY_CONTACT, CLINIC_LOCATIONS, DOCTOR_INFO } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Contact & Directions | Dr. Shalini Jain Homoeopathy Clinic Indore",
  description:
    "Contact Dr. Shalini Jain Homoeopathy Clinic in Indore. Phone: +91 92442 12557. Locations in Palsikar Colony & Kalani Nagar.",
  alternates: {
    canonical: "https://drshalinijain.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact & Directions" }]} />

        <div className="my-8 sm:my-12 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#B3955A] font-semibold block mb-2">
            Reach Out Directly
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#183C35] mb-4">
            Contact Dr. Shalini Jain’s Clinic
          </h1>
          <p className="text-base text-[#65706B] leading-relaxed">
            We are accessible by phone, WhatsApp, and in-person across our two clinical facilities in Indore.
          </p>
        </div>

        {/* Contact Method Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-xl border border-[#E6E2D8] text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#EBF1ED] text-[#183C35] flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-xs text-[#718A7D] uppercase font-bold tracking-wider block">
              Direct Phone Call
            </span>
            <p className="font-serif text-xl font-bold text-[#183C35]">
              {PRIMARY_CONTACT.phoneDisplay}
            </p>
            <p className="text-xs text-[#65706B]">Voice helpline for appointment bookings</p>
            <div className="pt-2">
              <a
                href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
                className="editorial-btn-primary text-xs py-2 px-4 inline-block"
              >
                Call Clinic
              </a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#E6E2D8] text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#E8F8EE] text-[#25D366] flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.006.55 1.776.819 2.806.82 3.182 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.772zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.199.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.174.45 0.742.966 1.202.663.591 1.221.774 1.394.86.174.086.275.072.376-.043.102-.116.433-.505.549-.679.116-.173.232-.144.39-.087.159.058 1.012.477 1.185.564.173.086.289.13.332.202.043.072.043.419-.101.824z" />
              </svg>
            </div>
            <span className="text-xs text-[#718A7D] uppercase font-bold tracking-wider block">
              WhatsApp Chat
            </span>
            <p className="font-serif text-xl font-bold text-[#183C35]">
              Quick Message
            </p>
            <p className="text-xs text-[#65706B]">Coordinate timing &amp; location seamlessly</p>
            <div className="pt-2">
              <a
                href={PRIMARY_CONTACT.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold py-2 px-4 rounded-full inline-block transition-colors"
              >
                Open WhatsApp
              </a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#E6E2D8] text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#F8F6F1] text-[#B3955A] flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xs text-[#718A7D] uppercase font-bold tracking-wider block">
              Instagram Updates
            </span>
            <p className="font-serif text-xl font-bold text-[#183C35]">
              {DOCTOR_INFO.socials.instagramHandle}
            </p>
            <p className="text-xs text-[#65706B]">Follow clinical educational posts</p>
            <div className="pt-2">
              <a
                href={DOCTOR_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-btn-secondary text-xs py-2 px-4 inline-block"
              >
                Visit Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Location Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
          {CLINIC_LOCATIONS.map((loc) => (
            <div key={loc.id} className="editorial-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B3955A]">
                  {loc.id === "palsikar-colony" ? "Morning Clinic" : "Evening Clinic"}
                </span>
                <span className="text-xs font-semibold text-[#183C35] bg-[#EBF1ED] px-2.5 py-0.5 rounded">
                  {loc.timings.hours}
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-[#183C35]">
                {loc.name}
              </h2>

              <div className="text-xs sm:text-sm text-[#1C2723] space-y-1">
                {loc.addressLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
                <p className="text-[#65706B] font-medium pt-1">
                  Landmark: {loc.landmark}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E2D8] flex flex-wrap gap-3">
                <a
                  href={loc.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-btn-primary text-xs py-2.5 px-4 inline-flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>Google Maps Directions</span>
                </a>
                <Link
                  href={`/clinic/${loc.id}`}
                  className="editorial-btn-secondary text-xs py-2.5 px-4"
                >
                  Clinic Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
