import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import BookingCTASection from "@/components/BookingCTASection";
import { JsonLdFaq } from "@/components/JsonLd";
import { CLINIC_FAQS } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Dr. Shalini Jain Homoeopathy Clinic",
  description:
    "Common patient queries about homoeopathic treatment, appointments, two clinic locations in Indore, safety alongside allopathic medicine, and consultations with Dr. Shalini Jain (BHMS).",
  alternates: {
    canonical: "https://drshalinijain.in/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="py-8 sm:py-12">
      <JsonLdFaq faqs={CLINIC_FAQS} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

        <div className="my-8 sm:my-12 text-center">
          <span className="text-xs uppercase tracking-widest text-[#B3955A] font-semibold block mb-2">
            Patient Information
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#183C35] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-[#65706B] leading-relaxed max-w-2xl mx-auto">
            Find clear, transparent information regarding consultation processes, clinical safety standards, clinic timings, and scheduling with Dr. Shalini Jain.
          </p>
        </div>

        <section className="my-10">
          <FAQAccordion />
        </section>

        <BookingCTASection
          title="Have a Specific Question About Your Case?"
          subtitle="Feel free to connect directly via WhatsApp or phone. We will be glad to guide you on consultation availability."
        />
      </div>
    </div>
  );
}
