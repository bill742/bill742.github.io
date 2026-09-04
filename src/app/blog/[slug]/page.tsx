import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPost, posts } from "@/lib/posts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const { default: Post } = await post.content();

  return <Post />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
    },
    description: post.summary,
    openGraph: {
      description: post.summary,
      images: "/opengraph-image.png",
      publishedTime: post.date,
      title: post.title,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
    },
    title: post.title,
  };
}

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;
