import "./globals.css";

// import { Montserrat, Roboto } from "next/font/google";
import { Roboto } from "next/font/google";

// import Header from "@/components/Header/Header";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: "400",
// });

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
          {/* <Header /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
