import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Hollis Jamaica Friends and Family Inc. | Nonprofit Organization in New York",
  description: "Hollis Jamaica Friends and Family Inc. is a charitable nonprofit organization raising awareness about safety, social, and constitutional rights while supporting programs that improve quality of life in New York.",
  keywords: "nonprofit, New York, Jamaica, community, safety, social rights, constitutional rights, education, job training, multicultural events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning={true}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
