import "./globals.css";

import type { Metadata } from "next";
import { Press_Start_2P, Roboto, VT323 } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import SkipNav from "@/components/skip-nav";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-press-start-2p",
  weight: ["400"],
});

const vt323 = VT323({
  subsets: ["latin"],
  variable: "--font-vt323",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://billdean.me"
  ),
  openGraph: {
    description:
      "I'm a front-end web developer based in Toronto, Canada. I specialize in building websites and applications using modern JavaScript with React, NextJS and TypeScript.",
    images: "/opengraph-image.png",
    title: `${process.env.NEXT_PUBLIC_SITE_TITLE}`,
  },
  title: {
    default: `${process.env.NEXT_PUBLIC_SITE_TITLE}`,
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_TITLE}`,
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
    <html lang="en" suppressHydrationWarning>
      <body className={(roboto.className, pressStart.variable, vt323.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "dark", "eightbit"]}
          disableTransitionOnChange
        >
          <div className="bg-background min-h-screen">
            <SkipNav />
            <div className="border-border/50 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
              <div className="container mx-auto max-w-6xl px-6 py-4">
                <Header />
              </div>
            </div>

            <div id="main" className="container mx-auto max-w-6xl px-6 pt-8">
              {children}
            </div>
            <div className="container mx-auto max-w-6xl px-6 py-4">
              <Footer />
            </div>
          </div>
        </ThemeProvider>

        {/* 100% privacy-first analytics */}
        <script
          data-collect-dnt="true"
          async
          data-hostname="billdean.me"
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </html>
  );
}
