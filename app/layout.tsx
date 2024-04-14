"use client";
import Header from "@/components/layout/Header";
import "./globals.css";
import { Azeret_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const azeretMono = Azeret_Mono({
  weight: "400",
  subsets: ["latin"],
});

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({children}: IRootLayout) {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <html lang="en">
      <GoogleAnalytics
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}
      />
      <body className={azeretMono.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
