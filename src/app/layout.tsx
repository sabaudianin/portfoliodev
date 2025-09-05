import "@/styles/globals.css";

import { inter, doto } from "@/ui/fonts";
import PersonJsonLd from "@/components/seo/PersonJsonLd";
import { SITE } from "@/config/site";

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
      suppressHydrationWarning
    >
      <body className={`${inter.variable} ${doto.variable} font-sans`}>
        <PersonJsonLd
          name={SITE.AUTHOR}
          url={SITE.URL}
          image="/avatar.png"
          jobTitle="Frontend Developer"
          sameAs={[SITE.SOCIAL.github, SITE.SOCIAL.linkedin]}
        />
        {children}
      </body>
    </html>
  );
}
