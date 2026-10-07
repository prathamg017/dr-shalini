import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingCTASection from "@/components/BookingCTASection";
import { CONCERN_CATEGORIES, CLINIC_LOCATIONS, PRIMARY_CONTACT } from "@/lib/clinic-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CONCERN_CATEGORIES.map((concern) => ({
    slug: concern.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const concern = CONCERN_CATEGORIES.find((c) => c.slug === slug);

  if (!concern) {
    return {
      title: "Concern Not Found",
    };
  }

  return {
    title: concern.seoTitle,
    description: concern.seoDescription,
    alternates: {
      canonical: `https://drshalinijain.in/concerns/${concern.slug}`,
    },
    openGraph: {
      title: concern.seoTitle,
      description: concern.seoDescription,
      url: `https://drshalinijain.in/concerns/${concern.slug}`,
      type: "article",
    },
  };
}

export default async function ConcernDetailPage({ params }: Props) {
  const { slug } = await params;
  const concern = CONCERN_CATEGORIES.find((c) => c.slug === slug);

  if (!concern) {
    notFound();
  }

  // Get other concerns for internal linking
  const otherConcerns = CONCERN_CATEGORIES.filter((c) => c.slug !== concern.slug).slice(0, 3);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Areas of Consultation", href: "/concerns" },
            { label: concern.title },
          ]}
        />

        <div className="my-8 sm:my-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Area */}
          <main className="lg:col-span-8 space-y-10">
            {/* Header section */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-widest text-[#B3955A] font-semibold">
                  Homoeopathic Consultation
                </span>
                {concern.hindiTitle && (
                  <span className="text-xs text-[#183C35] font-medium bg-[#EBF1ED] px-2.5 py-0.5 rounded">
                    {concern.hindiTitle}
                  </span>
                )}
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#183C35] mb-4">
                {concern.title}
              </h1>
              <p className="text-base sm:text-lg text-[#65706B] leading-relaxed">
                {concern.overview}
              </p>
            </div>

            {/* Common Symptoms / Presentations */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6E2D8]">
              <h2 className="font-serif text-2xl font-bold text-[#183C35] mb-4">
                Common Symptoms &amp; Presentations
              </h2>
              <p className="text-xs sm:text-sm text-[#65706B] mb-4">
                Individuals seeking consultation for {concern.title.toLowerCase()} frequently report experiencing one or more of the following patterns:
              </p>
              <ul className="space-y-2.5">
                {concern.commonSymptoms.map((sym, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1C2723]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#183C35] mt-2 flex-shrink-0" />
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Homoeopathic Consultation Approach */}
            <section className="bg-[#F8F6F1] p-6 sm:p-8 rounded-2xl border border-[#E6E2D8]">
              <h2 className="font-serif text-2xl font-bold text-[#183C35] mb-4">
                Our Constitutional Homoeopathic Approach
              </h2>
              <div className="space-y-4 text-sm text-[#65706B] leading-relaxed">
                {concern.homeopathicApproach.map((appr, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-xs font-bold text-[#B3955A] bg-white border border-[#E6E2D8] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-[#1C2723]">{appr}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* When to Seek Consultation */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6E2D8]">
              <h2 className="font-serif text-2xl font-bold text-[#183C35] mb-4">
                When to Schedule a Consultation
              </h2>
              <ul className="space-y-2.5">
                {concern.whenToConsult.map((when, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1C2723]">
                    <span className="text-[#B3955A] font-bold text-base leading-none">✓</span>
                    <span>{when}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Red Flags & Emergency Guidance - HIGHEST SAFETY STANDARD */}
            <section className="bg-[#FEF2F2] p-6 sm:p-8 rounded-2xl border border-[#FCA5A5]/60">
              <div className="flex items-center gap-2 mb-3 text-[#991B1B]">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <h2 className="font-serif text-xl font-bold">
                  Clinical Red Flags &amp; Urgent Medical Guidance
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#991B1B] mb-4 leading-relaxed font-medium">
                The safety of patients is our highest priority. If you or a family member experience any of the following acute symptoms, seek immediate hospital emergency care or allopathic medical evaluation rather than waiting for an outpatient appointment:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#7F1D1D]">
                {concern.redFlags.map((flag, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">•</span>
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Other Concerns Navigation */}
            <div className="pt-6 border-t border-[#E6E2D8]">
              <h3 className="font-serif text-lg font-bold text-[#183C35] mb-4">
                Other Areas of Consultation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherConcerns.map((oc) => (
                  <Link
                    key={oc.id}
                    href={`/concerns/${oc.slug}`}
                    className="p-4 rounded-xl bg-white border border-[#E6E2D8] hover:border-[#183C35] transition-colors block group"
                  >
                    <span className="text-xs font-bold text-[#183C35] group-hover:text-[#B3955A] block">
                      {oc.title} &rarr;
                    </span>
                    <span className="text-[11px] text-[#65706B] line-clamp-2 mt-1">
                      {oc.summary}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </main>

          {/* Right Sidebar - Booking & Quick Info */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="editorial-card p-6 sticky top-28">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B3955A] block mb-1">
                Consultation Guidance
              </span>
              <h3 className="font-serif text-xl font-bold text-[#183C35] mb-2">
                Consult Dr. Shalini Jain
              </h3>
              <p className="text-xs text-[#65706B] leading-relaxed mb-4">
                Schedule a consultation for {concern.title.toLowerCase()} at either of our two Indore practice clinics.
              </p>

              <div className="space-y-3 mb-6 text-xs">
                <div className="p-3 bg-[#F8F6F1] rounded-lg border border-[#E6E2D8]">
                  <span className="font-bold text-[#183C35] block">Palsikar Colony (Morning)</span>
                  <span className="text-[#65706B]">10:00 AM – 1:00 PM • Shop 4, Laal Sai Appt.</span>
                </div>
                <div className="p-3 bg-[#F8F6F1] rounded-lg border border-[#E6E2D8]">
                  <span className="font-bold text-[#183C35] block">Kalani Nagar (Evening)</span>
                  <span className="text-[#65706B]">6:00 PM – 9:00 PM • 221-C, Near Kids Kemp</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <Link
                  href="/consultation"
                  className="w-full editorial-btn-primary text-xs py-3 text-center block"
                >
                  Book Consultation Online &rarr;
                </Link>
                <a
                  href={PRIMARY_CONTACT.getWhatsAppUrl(`Hello Dr. Shalini Jain Clinic, I want to enquire regarding consultation for ${concern.title}. Please guide me on timings.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium text-xs py-3 rounded-full text-center block transition-colors"
                >
                  WhatsApp About {concern.title}
                </a>
                <a
                  href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
                  className="w-full editorial-btn-secondary text-xs py-2.5 text-center block"
                >
                  Call Clinic: {PRIMARY_CONTACT.phoneDisplay}
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6E2D8] text-[11px] text-[#65706B] leading-relaxed">
                <span className="font-semibold text-[#183C35]">Honest Healthcare Standard: </span>
                We do not guarantee instant cures or advise cessation of prescribed medications. Consultations focus on constitutional health improvement.
              </div>
            </div>
          </aside>
        </div>

        <BookingCTASection
          title={`Enquire About Homoeopathy for ${concern.title}`}
          subtitle={`Schedule an attentive, personalized evaluation with Dr. Shalini Jain at Palsikar Colony or Kalani Nagar.`}
        />
      </div>
    </div>
  );
}
