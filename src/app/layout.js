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
    default: "Gate Automation | Smart & Secure Gate Systems",
    template: "%s | Gate Automation",
  },
  description: "Secure, modern and intelligent gate systems for homes and businesses. High-quality automated gate solutions designed for reliability and security.",
  keywords: ["gate automation", "electric gates", "smart gates", "automatic gates", "security gates", "roller shutters", "UK"],
  openGraph: {
    title: "Gate Automation | Smart & Secure Gate Systems",
    description: "Secure, modern and intelligent gate systems for homes and businesses in the UK.",
    url: "https://www.gateautomation.uk",
    siteName: "Gate Automation",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gate Automation | Smart & Secure Gate Systems",
    description: "Secure, modern and intelligent gate systems for homes and businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <FloatingWhatsApp />
        {children}
      </body>
    </html>
  );
}
