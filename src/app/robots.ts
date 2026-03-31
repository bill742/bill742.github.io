import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      disallow: ["/resume", "/blog"],
      userAgent: "*",
    },
    sitemap: "https://billdean.me/sitemap.xml",
  };
}
