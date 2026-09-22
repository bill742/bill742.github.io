import { MetadataRoute } from "next";

import { caseStudies } from "@/data/case-studies";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      lastModified: new Date(),
      url: "https://billdean.me",
    },
    {
      lastModified: new Date(),
      url: "https://billdean.me/uses",
    },
    {
      lastModified: new Date(),
      url: "https://billdean.me/projects",
    },
    ...caseStudies.map(({ dateModified, datePublished, slug }) => ({
      lastModified: new Date(dateModified ?? datePublished),
      url: `https://billdean.me/projects/${slug}`,
    })),
    // {
    //   lastModified: new Date(),
    //   url: "https://billdean.me/resume",
    // },
    // {
    //   lastModified: new Date(),
    //   url: "https://billdean.me/blog",
    // },
  ];
}
