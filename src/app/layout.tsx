import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollUp from "@/components/Common/ScrollUp";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import Providers from "./providers";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://1sapien.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "1Sapien - We Build Systems That Drive Results",
  description:
    "1Sapien is a web design and development company that builds beautiful, high-performing marketing systems to help businesses grow and succeed online.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "1Sapien",
    title: "1Sapien - We Build Systems That Drive Results",
    description:
      "1Sapien is a web design and development company that builds beautiful, high-performing marketing systems to help businesses grow and succeed online.",
  },
  twitter: {
    card: "summary_large_image",
    title: "1Sapien - We Build Systems That Drive Results",
    description:
      "1Sapien is a web design and development company that builds beautiful, high-performing marketing systems to help businesses grow and succeed online.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="!scroll-smooth" lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <div className="isolate">
            <Header />

            {children}

            <Footer />
            <ScrollToTop />
            <ScrollUp />
          </div>
        </Providers>
      </body>
    </html>
  );
}
