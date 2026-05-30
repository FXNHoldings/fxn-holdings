import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Toaster } from "@/components/ui/sonner";

const SITE_URL = "https://www.fxnholdings.com";
const TITLE = "FXN Holdings Limited — UK Digital Holdings Company";
const DESCRIPTION =
  "FXN Holdings Limited is a UK-registered digital holdings company that builds, acquires, and operates a diversified portfolio of online businesses across e-commerce, travel, content, price comparison, and affiliate marketing.";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&q=80&auto=format&fit=crop";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "FXN Holdings",
    "UK digital company",
    "ecommerce websites",
    "travel websites",
    "affiliate marketing",
    "price comparison",
    "blog network",
    "digital portfolio",
    "UK startup",
  ],
  authors: [{ name: "FXN Holdings Limited" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description:
      "A UK-registered digital holdings company building, acquiring, and operating a diversified portfolio of digital businesses across commerce, travel, content, and performance marketing.",
    siteName: "FXN Holdings Limited",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "A UK-registered digital holdings company building, acquiring, and operating a diversified portfolio of digital businesses across commerce, travel, content, and performance marketing.",
    images: [OG_IMAGE],
  },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FXN Holdings Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description:
    "UK-registered digital holding company managing a diverse portfolio of websites including ecommerce, travel, blogs, price comparison, content, and affiliate platforms.",
  address: { "@type": "PostalAddress", addressCountry: "GB" },
  foundingDate: "2024",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Self-hosted fonts (see globals.css @font-face). Preload the two
            primary weights to reduce flash-of-unstyled-text. */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/Urbanist-Regular.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/Outfit-Regular.woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <CookieBanner />
      </body>
    </html>
  );
}
