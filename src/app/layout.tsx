import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Header from "@/components/Header/Header";
import SkipNav from "@/components/SkipNav";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://billdean.me"),
  openGraph: {
    description:
      "I'm a front-end web developer based in Toronto, Canada. I specialize in building websites and applications using modern JavaScript with React, NextJS and TypeScript.",
    images: "/opengraph-image.png",
    title: "Bill Dean - Front-End Web Developer",
  },
  title: {
    default: "Bill Dean - Front-End Web Developer",
    template: "%s | Bill Dean - Front-End Web Developer",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="container mx-auto max-w-6xl p-6">
          <SkipNav />
          <Header />
          <div id="main">{children}</div>
        </div>
        {/* 100% privacy-first analytics */}
        <script
          async
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
      </body>
    </html>
  );
}
