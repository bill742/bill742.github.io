// Replaces the Google Fonts @import in globals.css — faster, no layout shift.

import { Press_Start_2P, Space_Grotesk } from "next/font/google";

// primary display + body font
export const spaceGrotesk = Space_Grotesk({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

// 8-bit theme font
export const pressStart = Press_Start_2P({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});
