import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Metrics from "./metrics";

export const metadata: Metadata = {
  title: {
    default: "WarFiN",
    template: "%s | warfin.vercel.app",
  },
  description: "Small developer from India",
  openGraph: {
    title: "WarFiN",
    description: "Small developer from India",
    url: "https://warfin.vercel.app",
    siteName: "warfin.us.kg",
    images: [
      {
        url: "https://i.postimg.cc/Kvg9CjYK/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "WarFiN",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const BrunoAce = LocalFont({
  src: "../public/fonts/BrunoAce.ttf",
  variable: "--font-brunoAce",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, BrunoAce.variable].join(" ")}>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
        <Metrics />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
