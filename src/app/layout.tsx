import "./globals.css";

import type { Metadata } from "next";

import Analytics from "@/components/analytics";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SkipNav from "@/components/skip-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { pressStart, spaceGrotesk } from "@/lib/fonts";

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
      <body className={`${spaceGrotesk.variable} ${pressStart.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "dark", "eightbit"]}
          disableTransitionOnChange
        >
          <div className="bg-background min-h-screen">
            <SkipNav />

            <Header />

            <main id="main" className="container mx-auto max-w-6xl px-6 pt-8">
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
