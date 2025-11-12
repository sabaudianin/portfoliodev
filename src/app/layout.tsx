import "@/styles/globals.css";
import { Inter, Poppins } from "next/font/google";

import PersonJsonLd from "@/components/seo/PersonJsonLd";
import { SITE } from "@/config/site";
import { Navbar } from "@/layouts/Header/Navbar/Navbar";
import { Footer } from "@/layouts/Footer/Footer";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

// re-export z pliku app/metadata.ts Next tego wymaga z appa  wtedy Next poprawnie zbuduje <head>do strony i umożliwi route  do nadpisania.
export { metadata, viewport } from "./metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`bg-background text-foreground min-h-[100dvh] grid grid-rows-[auto_1fr_auto]`}
      >
        <PersonJsonLd
          name={SITE.AUTHOR}
          url={SITE.URL}
          image="/avatar.png"
          jobTitle="Frontend Developer"
          sameAs={[SITE.SOCIAL.github, SITE.SOCIAL.linkedin]}
        />

        <Navbar />

        <main
          id="main"
          role="main"
          tabIndex={-1}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 "
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
