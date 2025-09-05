import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_NAME = "Rafal Bobko-Frontend (React/JS)";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const SITE_DESC =
  "Portfolio React/JS developera - projekty, umiejętności, kontakt.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESC,
  applicationName: "Portfolio",
  keywords: [
    "Frontend Developer",
    "React",
    "JavaScript",
    "Next.js",
    "Portfolio",
    "Polska",
  ],
  authors: [{ name: "Rafal Bobko", url: SITE_URL }],
  creator: "Rafal Bobko",
  publisher: "Rafal Bobko",
  alternates: {
    canonical: "/",

    languages: { "pl-PL": "/", "en-US": "/en" },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESC,
    images: ["/og.png"], //fallback
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const PersonJsonLd = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rafal Bobko",
    url: SITE_URL,
    image: "/avatar.jpg",
    jobTitle: "Frontend Developer",
    sameAs: [
      "https://github.com/sabaudianin",
      "https://www.linkedin.com/in/rafal-bobko-569388234",
    ],
  };
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

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
      <body className={inter.className}>
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}
