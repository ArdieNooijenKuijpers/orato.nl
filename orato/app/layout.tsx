import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { CustomCursor } from "./components/Navigation/customCursor";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScroll from "./components/SmoothScroll";


import "./globals.css";
import Navbar from "./components/Navigation/navbar";
import UnderConstructionPage from "./components/UnderConstructionPage";
import { ONDER_CONSTRUCTIE } from "./config";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://orato.nl"),
  title: {
    default: "ORATO",
    template: "%s | ORATO",
  },
  description:
    "ORATO van Ardie Nooijen-Kuijpers voor coaching, supervisie en presenteren. Betekenisvolle gesprekken met impact, met ziel en zakelijkheid.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://orato.nl",
    siteName: "ORATO",
    title: "ORATO",
    description:
      "ORATO van Ardie Nooijen-Kuijpers voor coaching, supervisie en presenteren. Betekenisvolle gesprekken met impact, met ziel en zakelijkheid.",
    images: [
      {
        url: "/Ardie/orato_2024_21 september 2024-41_WEB 03634 schommel hand links.jpg",
        width: 1200,
        height: 630,
        alt: "Ardie Nooijen-Kuijpers van ORATO in een groene omgeving.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ORATO",
    description:
      "Coaching, supervisie en presenteren door Ardie Nooijen-Kuijpers.",
    images: ["/Ardie/orato_2024_21 september 2024-41_WEB 03634 schommel hand links.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: ONDER_CONSTRUCTIE
    ? {
        index: false,
        follow: false,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={montserrat.className}>
        {ONDER_CONSTRUCTIE ? (
          <UnderConstructionPage />
        ) : (
          <>
            <SmoothScroll />
            {children}
            <Navbar />
            <CustomCursor />
            {process.env.NODE_ENV === "production" ? <SpeedInsights /> : null}
          </>
        )}
      </body>
    </html>
  );
}
