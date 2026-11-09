import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { InquiryProvider } from "@/components/ui/InquiryProvider";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#f7f6f2",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "GOH Graphix | Brand Design & Creative Training",
    template: "%s | GOH Graphix",
  },
  description:
    "GOH Graphix is a creative design studio and training academy in Port Harcourt, Nigeria, led by Samuel Hilary.",
  keywords: [
    "graphic design",
    "brand identity",
    "logo design",
    "GOH Graphix",
    "design training",
    "Port Harcourt",
    "Nigeria",
    "Samuel Hilary",
  ],
  authors: [{ name: "GOH Graphix" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "GOH Graphix",
    title: "GOH Graphix | Brand Design & Creative Training",
    description: "Strong visual brands, built with clarity and character.",
    images: [
      {
        url: "/works/20260417_153425.png",
        width: 3264,
        height: 2176,
        alt: "GOH Graphix brand overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GOH Graphix | Brand Design & Creative Training",
    description: "Strong visual brands, built with clarity and character.",
    images: ["/works/20260417_153425.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <InquiryProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
        </InquiryProvider>
      </body>
    </html>
  );
}
