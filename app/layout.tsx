import Header from "@/components/layout/Header";
import "./globals.css";
import { Libre_Baskerville } from "next/font/google";
import Footer from "@/components/layout/Footer";

const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "m2t.dev",
  description: "A Software Engineer Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
