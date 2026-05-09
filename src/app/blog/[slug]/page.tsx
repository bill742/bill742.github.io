import type { Metadata } from "next";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

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
  return [{ slug: "welcome" }, { slug: "second-post" }];
}

export const dynamicParams = false;
