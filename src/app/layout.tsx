import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import MedicalDisclaimerBanner from "@/components/MedicalDisclaimerBanner";
import { JsonLdOrganization, JsonLdPhysician } from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F2420",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://drshalinijain.in"),
  title: {
    default: "Dr. Shalini Jain • BHMS | Homoeopathy Clinic Indore",
    template: "%s | Dr. Shalini Jain Homoeopathy Clinic",
  },
  description:
    "Dr. Shalini Jain (BHMS) provides personalised homoeopathic consultations in Indore at Palsikar Colony (10 AM – 1 PM) and Kalani Nagar (6 PM – 9 PM). Call +91 92442 12557.",
  keywords: [
    "Dr Shalini Jain Indore",
    "homoeopathy doctor Indore",
    "homeopathy clinic Indore",
    "BHMS doctor Indore",
    "Palsikar Colony homeopathy",
    "Kalani Nagar homeopathy",
    "pediatric homeopathy Indore",
    "women health homeopathy Indore",
  ],
  authors: [{ name: "Dr. Shalini Jain, BHMS" }],
  creator: "Dr. Shalini Jain",
  publisher: "Dr. Shalini Jain Homoeopathy Clinic",
  formatDetection: { telephone: true, address: true, email: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drshalinijain.in",
    siteName: "Dr. Shalini Jain Homoeopathy Clinic",
    title: "Dr. Shalini Jain • BHMS | Homoeopathy Consultation in Indore",
    description:
      "Personalised homoeopathic care at Palsikar Colony & Kalani Nagar, Indore. Morning & evening clinics.",
    images: [
      {
        url: "/images/dr-shalini-clinic-flagship.jpg",
        width: 682,
        height: 1024,
        alt: "Dr. Shalini Jain, BHMS — Homoeopathic Physician, Indore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Shalini Jain • BHMS | Homoeopathy Clinic Indore",
    description: "Personalised homoeopathic consultations at two Indore clinics.",
    images: ["/images/dr-shalini-clinic-flagship.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: "https://drshalinijain.in" },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "0",
        }}
        className="pb-mobile-safe"
      >
        <JsonLdOrganization />
        <JsonLdPhysician />
        <MedicalDisclaimerBanner />
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
