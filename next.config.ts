import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "mufasajeweler.com" },
      { protocol: "https", hostname: "v3b.fal.media" },
    ],
  },
};

export default nextConfig;
