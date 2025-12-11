import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hollis Jamaica Friends & Family Inc. | One Team, One Dream",
  description: "Serving our community in faith, care & unity. Join HJFF for membership, welfare support, life insurance, and community events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        <main className="min-h-screen w-full">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
