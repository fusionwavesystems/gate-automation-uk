import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.gateautomation.uk'),
  title: {
    default: "Gate Automation UK | Professional Electric Gate Repairs & Installation",
    template: "%s | Gate Automation UK",
  },
  description: "UK's leading specialists in automated gate repairs, fixing, and installation. We provide 24/7 emergency gate services, smart entry systems, and secure gate automation for homes and businesses.",
  keywords: [
    "gate automation UK",
    "electric gate repairs UK",
    "automated gate fixing",
    "emergency gate service UK",
    "smart gate installation London",
    "gate maintenance services",
    "automatic driveway gates",
    "security gate repairs",
    "commercial gate automation",
    "residential gate systems",
    "electric gate motor repair",
    "gate automation experts"
  ],
  authors: [{ name: "Gate Automation UK" }],
  creator: "Gate Automation UK",
  publisher: "Gate Automation UK",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Gate Automation UK | Professional Electric Gate Repairs & Installation",
    description: "Expert automation gate fixing and repair services across the UK. Specialising in smart, secure, and modern gate systems for all property types.",
    url: "https://www.gateautomation.uk",
    siteName: "Gate Automation UK",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Gate Automation UK Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gate Automation UK | Electric Gate Repairs & Services",
    description: "Specialist automation gate repairs and fixing services in the UK. Rapid emergency response and smart security solutions.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Gate Automation UK",
  "image": "https://www.gateautomation.uk/images/logo.png",
  "@id": "https://www.gateautomation.uk",
  "url": "https://www.gateautomation.uk",
  "telephone": "+447300960920",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Harington road",
    "addressLocality": "Feltham, London",
    "postalCode": "TW14 9AB",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.4421,
    "longitude": -0.4287
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://wa.me/447449891198"
  ],
  "priceRange": "££",
  "description": "Professional automation gate fixing and repair services in the UK. 24/7 emergency repairs, smart installations, and maintenance."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <FloatingWhatsApp />
        {children}
      </body>
    </html>
  );
}
