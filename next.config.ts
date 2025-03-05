import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_GH_USERNAME: process.env.NEXT_PUBLIC_GH_USERNAME,
    NEXT_PUBLIC_SITE_TITLE: process.env.NEXT_PUBLIC_SITE_TITLE,
  },
  async rewrites() {
    return [
      {
        destination: "/api/sitemap",
        source: "/sitemap.xml",
      },
    ];
  },
};

export default nextConfig;
