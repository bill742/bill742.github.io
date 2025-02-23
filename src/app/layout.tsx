import "./globals.css";

import { Roboto } from "next/font/google";

import Header from "@/components/Header/Header";
import SkipNav from "@/components/SkipNav";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

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
      </body>
    </html>
  );
}
