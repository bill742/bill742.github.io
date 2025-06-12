export const blogSlugs = [
  {
    slug: "welcome",
    summary: "Some quick summary",
    title: "Welcome to the Blog",
  },
];

export default function Blog() {
  return (
    <div>
      <h1 className="text-3xl">Blog</h1>
      <ul>
        {blogSlugs.map(({ slug, summary, title }) => (
          <li key={slug}>
            <a href={`/blog/${slug}`} className="text-blue-500 hover:underline">
              {title}
            </a>
            {summary}
          </li>
        ))}
      </ul>
    </div>
  );
}
