/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  poweredByHeader: false,
  compiler: {
    removeConsole: isProd ? { exclude: ["error"] } : false,
  },
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

export default nextConfig;
