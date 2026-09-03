import type { postType } from "@/types/types";

// Metadata and content loader for every blog post, newest first. This list is
// the single source of truth for the blog index, the per-post page and its
// metadata, and the routes generated at build time.
export const posts: postType[] = [
  {
    content: () => import("@/content/second-post.mdx"),
    date: "2024-07-01",
    slug: "second-post",
    summary: "Summary for the second post",
    title: "Second Post",
  },
  {
    content: () => import("@/content/welcome.mdx"),
    date: "2024-06-01",
    slug: "welcome",
    summary: "Welcome post summary",
    title: "Welcome to the Blog",
  },
];

export function getPost(slug: string): postType | undefined {
  return posts.find((post) => post.slug === slug);
}
