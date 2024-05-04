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
        <div className="grid grid-cols-12">
          <div className="bg-accent1 row-auto lg:col-start-1 lg:col-end-2"></div>
          <div className="bg-light row-auto col-start-1 col-end-13 lg:col-start-2 lg:col-end-12 min-h-screen shadow-lg">{children}</div>
          <div className="bg-accent2 row-auto lg:col-start-12 lg:col-end-13"></div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
