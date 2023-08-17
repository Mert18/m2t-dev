"use client";
import Header from "@/components/layout/Header";
import "./globals.css";
import { Libre_Baskerville } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <html lang="en">
      <body className={libreBaskerville.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
