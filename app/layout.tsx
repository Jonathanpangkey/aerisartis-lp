import type {Metadata} from "next";
import {Geist, PT_Serif} from "next/font/google";
import "./globals.css";
import {LanguageProvider} from "@/context/LanguageContext";
import Script from "next/script";

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
  icons: {
    icon: "/assets/img/logo/logo-only.png",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='id'>
      <head>
        {/* Meta Pixel */}
        <Script
          id='facebook-pixel'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1400082784933073');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height='1' width='1' style={{display: "none"}} src='https://www.facebook.com/tr?id=1400082784933073&ev=PageView&noscript=1' />
        </noscript>
      </head>
      <body className={`${geistSans.variable} ${ptSerif.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
