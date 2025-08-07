import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: {
    default: 'HFWG Support Care Services | Compassionate Care & Staffing in Calgary',
    template: '%s | HFWG Support Care Services'
  },
  description: 'HFWG Support Care Services connects compassionate healthcare support with top-tier staffing solutions in Calgary. Tailored, reliable, and dedicated service.',
  keywords: [
    'HFWG Support Care', 'Calgary care services', 'healthcare staffing', 'general labour',
    'home care aide', 'registered nurse Calgary', 'LPN Calgary', 'CNA Calgary', 'PSW Calgary'
  ],
  authors: [{ name: 'HFWG Support Care Services', url: 'https://hfwg-support-care.example.com' }],
  openGraph: {
    title: 'HFWG Support Care Services | Calgary’s #1 Care & Staffing',
    description: 'Connecting compassionate care & top-tier talent in Calgary. Customized healthcare support and staffing with integrity and dedication.',
    url: 'https://hfwg-support-care.example.com',
    siteName: 'HFWG Support Care Services',
    images: [
      {
        url: '/images/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'HFWG Support Care Services'
      }
    ],
    locale: 'en_CA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HFWG Support Care Services | Calgary’s #1 Care & Staffing',
    description: 'Connecting compassionate care & top-tier talent in Calgary. Customized healthcare support and staffing with integrity and dedication.',
    creator: '@HFWGSupportCare',
    images: ['/images/social-preview.png']
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": 'large',
      "max-snippet": -1
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-x-hidden`}
      >
        <Navbar/>
        {children}
        <WhatsAppButton />
        <Footer/>
      </body>
    </html>
  );
}
