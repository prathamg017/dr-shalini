import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Shalini Jain Homoeopathy Clinic",
  description:
    "Patient confidentiality and data protection policy for Dr. Shalini Jain Homoeopathy Clinic, Indore.",
  alternates: {
    canonical: "https://drshalinijain.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="my-8 sm:my-12">
          <span className="text-xs uppercase tracking-widest text-[#B3955A] font-semibold block mb-2">
            Confidentiality
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#183C35] mb-6">
            Patient Privacy &amp; Data Protection Policy
          </h1>

          <div className="space-y-6 text-sm text-[#1C2723] leading-relaxed">
            <section className="bg-white p-6 rounded-2xl border border-[#E6E2D8] space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#183C35]">
                1. Doctor-Patient Confidentiality
              </h2>
              <p className="text-xs sm:text-sm text-[#65706B]">
                All personal details, clinical consultation notes, medical test records, and communication shared during your clinical evaluation with Dr. Shalini Jain are strictly confidential and protected by traditional medical ethics standards.
              </p>
            </section>

            <section className="bg-white p-6 rounded-2xl border border-[#E6E2D8] space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#183C35]">
                2. Information Collected via Website &amp; WhatsApp
              </h2>
              <p className="text-xs sm:text-sm text-[#65706B]">
                Information submitted through our appointment booking request form (such as your name, telephone number, preferred clinic, and optional note) is used solely for the practical coordination of your clinical consultation slot. We never sell, lease, or share your contact numbers with commercial third parties or advertisers.
              </p>
            </section>

            <section className="bg-white p-6 rounded-2xl border border-[#E6E2D8] space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#183C35]">
                3. Secure Storage of Clinical Case Records
              </h2>
              <p className="text-xs sm:text-sm text-[#65706B]">
                Physical and digital patient files are maintained with high security at our clinic locations. Only the consulting physician and authorized clinical staff directly involved in dispensary care have access.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
