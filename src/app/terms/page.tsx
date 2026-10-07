import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Consultation | Dr. Shalini Jain Homoeopathy Clinic",
  description:
    "Terms of outpatient consultation, clinic appointments, and patient guidance for Dr. Shalini Jain Homoeopathy Clinic, Indore.",
  alternates: {
    canonical: "https://drshalinijain.in/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms of Consultation" }]} />

        <div className="my-8 sm:my-12">
          <span className="text-xs uppercase tracking-widest text-[#B3955A] font-semibold block mb-2">
            Practice Terms
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#183C35] mb-6">
            Terms of Outpatient Clinical Consultation
          </h1>

          <div className="space-y-6 text-sm text-[#1C2723] leading-relaxed">
            <section className="bg-white p-6 rounded-2xl border border-[#E6E2D8] space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#183C35]">
                1. Outpatient Appointment Coordination
              </h2>
              <p className="text-xs sm:text-sm text-[#65706B]">
                Appointments requested through online channels are finalized upon mutual confirmation via WhatsApp or phone call. While we strive to adhere strictly to appointment hours, unexpected patient emergencies or detailed case reviews may occasionally adjust timing.
              </p>
            </section>

            <section className="bg-white p-6 rounded-2xl border border-[#E6E2D8] space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#183C35]">
                2. Patient Responsibility &amp; Full Disclosure
              </h2>
              <p className="text-xs sm:text-sm text-[#65706B]">
                Effective constitutional homoeopathic prescription relies heavily on honest, accurate, and complete disclosure of past medical conditions, ongoing medications, surgeries, known drug allergies, and lifestyle factors.
              </p>
            </section>

            <section className="bg-white p-6 rounded-2xl border border-[#E6E2D8] space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#183C35]">
                3. Follow-up and Case Reviews
              </h2>
              <p className="text-xs sm:text-sm text-[#65706B]">
                Chronic ailments require scheduled periodic evaluations. Modifying remedy doses independently or continuing unmonitored medication without regular follow-ups is strongly discouraged.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
