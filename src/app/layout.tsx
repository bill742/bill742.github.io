import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import SkipNav from "@/components/skip-nav";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto max-w-6xl p-6">
            <SkipNav />

            <div id="main">{children}</div>
          </div>
        </ThemeProvider>
        {/* 100% privacy-first analytics */}

        <script
          data-collect-dnt="true"
          async
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
