// src/components/JsonLd.tsx
//
// Server component — no "use client". It renders during SSR, so the JSON-LD is
// in the initial HTML payload where crawlers will actually see it. If this ever
// becomes a client component the script still renders, but you lose the
// guarantee that it's present in the raw document, which is the whole point.

type Props = {
  /** A JSON-LD object — pass siteGraph, homeGraph, or blogPostingGraph(post). */
  schema: Record<string, unknown>;
};

/**
 * JSON.stringify will happily emit the literal characters `</script>` if any
 * string in your data contains them, which closes the tag early and turns the
 * rest of your schema into rendered markup — an XSS vector the moment any of
 * this comes from MDX frontmatter rather than a constant.
 *
 * Escaping `<` as < is valid JSON, parses identically, and makes that
 * impossible. Cheap insurance, and it costs nothing today.
 */
function serialize(schema: Record<string, unknown>): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export function JsonLd({ schema }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialize(schema) }}
    />
  );
}
