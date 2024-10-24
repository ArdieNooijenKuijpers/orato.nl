import type { Metadata } from "next";
import { Inter, Noto_Serif_Display, Montserrat } from "next/font/google";
import { CustomCursor } from "./components/Navigation/customCursor";


import "./globals.css";
import Navbar from "./components/Navigation/navbar";


const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orato",
  description: "Website for Orato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>

        {children}
        <Navbar />

        <CustomCursor />
      </body>
    </html>
  );
}
