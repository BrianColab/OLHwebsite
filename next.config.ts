import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      // Updated hero photos carry a content version to refresh image caches.
      { pathname: "/assets/olh/hero/**" },
      { pathname: "/**", search: "" },
    ],
  },
};

export default nextConfig;
