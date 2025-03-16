import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dl.dropboxusercontent.com",
        port: "",
        pathname: "/scl/fi/**",
      },
    ],
  },
};

export default nextConfig;
