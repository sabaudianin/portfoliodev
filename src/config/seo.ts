// nie mieszać Nextowi wymaga eksportu metadata/viewport z app

import type { Metadata, Viewport } from "next";
import { SITE } from "./site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE.URL),
  title: { default: SITE.NAME, template: `%s | ${SITE.NAME}` },
  description: SITE.DESC,
  applicationName: "Portfolio",
  keywords: [
    "Frontend Developer",
    "React",
    "JavaScript",
    "Next.js",
    "Portfolio",
    "Polska",
  ],
  authors: [{ name: SITE.AUTHOR, url: SITE.URL }],
  creator: SITE.AUTHOR,
  publisher: SITE.AUTHOR,
  alternates: { canonical: "/", languages: { "pl-PL": "/" } },
  // dodac EN
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE.URL,
    siteName: SITE.NAME,
    title: SITE.NAME,
    description: SITE.DESC,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
    shortcut: "/favicon.ico",
  },
};

export const defaultViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};
