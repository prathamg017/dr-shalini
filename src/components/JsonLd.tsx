import { DOCTOR_INFO, CLINIC_LOCATIONS } from "@/lib/clinic-data";

export function JsonLdOrganization() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Dr. Shalini Jain Homoeopathy Clinic",
    alternateName: "Dr. Shalini Jain Homoeopathic Clinic Indore",
    url: "https://drshalinijain.in",
    logo: "https://drshalinijain.in/images/dr-shalini-jain.png",
    image: "https://drshalinijain.in/images/dr-shalini-jain.png",
    telephone: "+919244212557",
    priceRange: "₹₹",
    medicalSpecialty: "Homeopathic",
    isAcceptingNewPatients: true,
    address: CLINIC_LOCATIONS.map((loc) => ({
      "@type": "PostalAddress",
      streetAddress: loc.addressLines.slice(0, 3).join(", "),
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    })),
    department: CLINIC_LOCATIONS.map((loc) => ({
      "@type": "MedicalClinic",
      name: loc.name,
      telephone: "+919244212557",
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.addressLines.join(", "),
        addressLocality: loc.city,
        addressRegion: loc.state,
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: loc.id === "palsikar-colony" ? "10:00" : "18:00",
          closes: loc.id === "palsikar-colony" ? "13:00" : "21:00",
        },
      ],
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdPhysician() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: DOCTOR_INFO.name,
    honorificPrefix: "Dr.",
    honorificSuffix: "BHMS",
    jobTitle: DOCTOR_INFO.title,
    medicalSpecialty: "Homeopathic",
    description: DOCTOR_INFO.summary,
    image: "https://drshalinijain.in/images/dr-shalini-jain.png",
    telephone: "+919244212557",
    url: "https://drshalinijain.in/about",
    sameAs: [DOCTOR_INFO.socials.instagram],
    worksFor: {
      "@type": "MedicalOrganization",
      name: "Dr. Shalini Jain Homoeopathy Clinic",
      url: "https://drshalinijain.in",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdFaq({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/\n/g, " "),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
