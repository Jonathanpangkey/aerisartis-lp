import type {Metadata} from "next";
import {Geist, PT_Serif} from "next/font/google";
import "./globals.css";
import {LanguageProvider} from "@/context/LanguageContext";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-serif",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Toko Tembaga | Kerajinan Tembaga & Kuningan",
  description: "Pusat kerajinan tembaga dan kuningan kualitas premium.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='id'>
      <body className={`${geistSans.variable} ${ptSerif.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
