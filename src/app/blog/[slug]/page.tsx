import type { Metadata } from "next";

// Static map of slug → import so the bundler can code-split each post into its
// own chunk (a templated import path can't be statically traced). This map is
// also the single source of truth for generateStaticParams below.
const posts = {
  "second-post": () => import("@/content/second-post.mdx"),
  welcome: () => import("@/content/welcome.mdx"),
} as const;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await posts[slug as keyof typeof posts]();

  return <Post />;
}

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/`,
  },
  description: "Blog posts about tech and my experience as a developer.",
  title: "Blog",
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export const dynamicParams = false;
