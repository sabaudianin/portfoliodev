/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

export default {
  poweredByHeader: false,
  experimental: {
    // Szybsze bundlowanie importów z popularnych paczek
    optimizePackageImports: [
      "react",
      "react-dom",
      "framer-motion",
      "react-icons",
    ],
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};
