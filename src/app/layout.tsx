import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'GreenScape Pros | Premium Landscaping & Design',
  description: 'Transform your outdoor space with GreenScape Pros. Expert landscaping, custom design, and meticulous maintenance for residential and commercial properties. Get a free quote today!',
  keywords: ["landscaping, landscape design, garden services, lawn care, hardscaping, outdoor living, residential landscaping, commercial landscaping, garden maintenance, GreenScape Pros"],
  openGraph: {
    "title": "GreenScape Pros | Premium Landscaping & Design",
    "description": "Transform your outdoor space with GreenScape Pros. Expert landscaping, custom design, and meticulous maintenance for residential and commercial properties. Get a free quote today!",
    "url": "https://www.greenscapepros.com",
    "siteName": "GreenScape Pros",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/wide-shot-bike-road-playground-near-tall-trees_181624-12674.jpg",
        "alt": "Lush residential garden designed by GreenScape Pros"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "GreenScape Pros | Premium Landscaping & Design",
    "description": "Transform your outdoor space with GreenScape Pros. Expert landscaping, custom design, and meticulous maintenance for residential and commercial properties. Get a free quote today!",
    "images": [
      "http://img.b2bpic.net/free-photo/wide-shot-bike-road-playground-near-tall-trees_181624-12674.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const raleway = Raleway({
  variable: "--font-raleway",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
