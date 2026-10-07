import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MEDICAL_DISCLAIMER_TEXT } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Medical Disclaimer & Patient Safety | Dr. Shalini Jain Homoeopathy Clinic",
  description:
    "Official healthcare safety policy, emergency directives, prescription continuity advisories, and medical disclaimers for Dr. Shalini Jain Homoeopathy Clinic, Indore.",
  alternates: {
    canonical: "https://drshalinijain.in/medical-disclaimer",
  },
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Medical Disclaimer & Safety" }]} />

        <div className="my-8 sm:my-12">
          <span className="text-xs uppercase tracking-widest text-[#B3955A] font-semibold block mb-2">
            Healthcare Responsibility Standards
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#183C35] mb-6">
            Medical Disclaimer &amp; Patient Safety Policies
          </h1>

          {/* Emergency Alert Box */}
          <div className="p-6 bg-[#FEF2F2] rounded-2xl border border-[#FCA5A5] text-[#991B1B] mb-8 space-y-3">
            <h2 className="font-serif text-lg font-bold">
              Immediate Medical Emergencies Notice
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[#7F1D1D]">
              Dr. Shalini Jain Homoeopathy Clinic provides outpatient, elective, and constitutional homoeopathic healthcare consultations. The clinic and this website do not provide acute hospital emergency or critical life-support services. If you or a family member suffer sudden breathlessness, severe chest pain, head trauma, uncontrollable bleeding, high infant convulsions, or loss of consciousness, seek immediate treatment at the nearest hospital emergency room.
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#1C2723] leading-relaxed">
            <section className="bg-white p-6 rounded-2xl border border-[#E6E2D8] space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#183C35]">
                1. No Direct Diagnosis or Treatment via Website
              </h2>
              <p className="text-xs sm:text-sm text-[#65706B]">
                The medical content, symptom descriptions, and therapeutic notes provided on this website are designed strictly for educational transparency and clinical consultation orientation. They do not constitute formal diagnostic findings and do not replace personalized clinical examination.
              </p>
            </section>

            <section className="bg-white p-6 rounded-2xl border border-[#E6E2D8] space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#183C35]">
                2. Mandatory Conventional Medication Continuity
              </h2>
              <p className="text-xs sm:text-sm text-[#65706B]">
                Under no circumstances should any patient discontinue, reduce, or alter their ongoing prescribed allopathic, psychiatric, antihypertensive, diabetic, cardiac, or antibiotic treatments without the express direction of their treating specialist doctor. Homoeopathy is provided as a supportive or constitutional modality.
              </p>
            </section>

            <section className="bg-white p-6 rounded-2xl border border-[#E6E2D8] space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#183C35]">
                3. Prohibition of False or Guaranteed Claims
              </h2>
              <p className="text-xs sm:text-sm text-[#65706B]">
                In accordance with Indian medical ethics and responsible advertising standards, Dr. Shalini Jain Homoeopathy Clinic does not promote or guarantee 100% cure rates, instantaneous results, or unsupported panaceas. Clinical response varies according to individual chronicity, pathology, vitality, and adherence.
              </p>
            </section>

            <section className="bg-white p-6 rounded-2xl border border-[#E6E2D8] space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#183C35]">
                4. Clarification Regarding Promotional Terminology
              </h2>
              <p className="text-xs sm:text-sm text-[#65706B]">
                In earlier print or social announcements, colloquial terms such as &quot;osteopathy&quot; were informally referenced in the context of bone &amp; joint pain. To maintain the highest standard of medical precision, our practice explicitly delivers homoeopathic consultations (BHMS) for bone and joint complaints and does not present osteopathy as a separate accredited specialty.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
