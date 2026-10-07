import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingCTASection from "@/components/BookingCTASection";
import { CLINIC_LOCATIONS, PRIMARY_CONTACT } from "@/lib/clinic-data";

const location = CLINIC_LOCATIONS.find((l) => l.id === "palsikar-colony")!;

export const metadata: Metadata = {
  title: "Palsikar Colony Clinic (Morning 10 AM - 1 PM) | Dr. Shalini Jain",
  description:
    "Dr. Shalini Jain Homoeopathy Clinic at Palsikar Colony, Near SBI 23, beside Juni Indore Bridge. Morning hours: 10:00 AM – 1:00 PM. Contact +91 92442 12557.",
  alternates: {
    canonical: "https://drshalinijain.in/clinic/palsikar-colony",
  },
};

export default function PalsikarColonyClinicPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Clinic Locations", href: "/clinic" },
            { label: "Palsikar Colony (Morning)" },
          ]}
        />

        <div className="my-8 sm:my-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <main className="lg:col-span-8 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF1ED] text-xs font-semibold text-[#183C35] mb-3">
                <span>Morning Consultation Practice</span>
                <span>•</span>
                <span className="text-[#B3955A]">10:00 AM – 1:00 PM</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#183C35] mb-3">
                Dr. Shalini Jain Homoeopathy Clinic — Palsikar Colony
              </h1>
              <p className="text-base text-[#65706B] leading-relaxed">
                Located conveniently near Juni Indore Bridge and the SBI 23 branch in Palsikar Colony, our morning practice provides an accessible, calm clinical setting for consultations across South-Central Indore.
              </p>
            </div>

            {/* Address & Timings Detail Box */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6E2D8] space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B3955A] block mb-2">
                  Complete Address
                </span>
                <p className="text-lg font-semibold text-[#183C35]">
                  Shop No. 4, Laal Sai Apartment
                </p>
                <p className="text-sm text-[#1C2723]">Near SBI 23, Palsikar Colony</p>
                <p className="text-sm text-[#1C2723]">Beside Juni Indore Bridge</p>
                <p className="text-sm text-[#65706B]">Indore, Madhya Pradesh</p>
              </div>

              <div className="pt-4 border-t border-[#E6E2D8] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#718A7D] block mb-1">
                    Morning Timings
                  </span>
                  <p className="text-base font-bold text-[#183C35]">{location.timings.hours}</p>
                  <p className="text-xs text-[#65706B]">{location.timings.days}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#718A7D] block mb-1">
                    Landmark Guidance
                  </span>
                  <p className="text-sm text-[#183C35] font-medium">{location.landmark}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E6E2D8] flex flex-wrap gap-3">
                <a
                  href={location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-btn-primary text-xs py-2.5 px-5 inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Open in Google Maps</span>
                </a>
                <a
                  href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
                  className="editorial-btn-secondary text-xs py-2.5 px-5 inline-flex items-center gap-2"
                >
                  <span>Call {PRIMARY_CONTACT.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Location highlights */}
            <div className="p-6 bg-[#F8F6F1] rounded-2xl border border-[#E6E2D8] space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#183C35]">
                Why Patients Visit the Palsikar Colony Practice
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-[#65706B]">
                {location.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#183C35] font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <span className="text-[#183C35] font-bold">✓</span>
                  <span>Accessible parking and street-level entry for senior citizens and families</span>
                </li>
              </ul>
            </div>
          </main>

          {/* Right Sidebar - Other Clinic switch */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="editorial-card p-6 sticky top-28">
              <span className="text-xs uppercase tracking-wider text-[#B3955A] font-semibold block mb-1">
                Also Looking for Evening Hours?
              </span>
              <h3 className="font-serif text-xl font-bold text-[#183C35] mb-2">
                Kalani Nagar Practice
              </h3>
              <p className="text-xs text-[#65706B] leading-relaxed mb-4">
                If evening hours suit your schedule better, Dr. Shalini Jain also consults at Kalani Nagar (6:00 PM – 9:00 PM).
              </p>
              <div className="p-3 bg-[#F8F6F1] rounded-lg border border-[#E6E2D8] text-xs space-y-1 mb-4">
                <p className="font-semibold text-[#183C35]">221-C, Kalani Nagar</p>
                <p className="text-[#65706B]">Near Kids Kemp School</p>
                <p className="text-[#B3955A] font-medium">6:00 PM – 9:00 PM</p>
              </div>
              <Link
                href="/clinic/kalani-nagar"
                className="w-full editorial-btn-secondary text-xs py-2.5 text-center block mb-2"
              >
                View Kalani Nagar Details &rarr;
              </Link>
              <Link
                href="/consultation"
                className="w-full editorial-btn-primary text-xs py-2.5 text-center block"
              >
                Book Appointment Online
              </Link>
            </div>
          </aside>
        </div>

        <BookingCTASection
          title="Schedule Your Visit to Palsikar Colony"
          subtitle="Convenient morning appointments from 10:00 AM to 1:00 PM with Dr. Shalini Jain."
        />
      </div>
    </div>
  );
}
