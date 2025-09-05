import { Doto, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const doto = Doto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-doto",
});
