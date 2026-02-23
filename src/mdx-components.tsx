import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const components = {
  // Allows customizing built-in components, e.g. to add styling.
  h2: ({ children }) => (
    <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{children}</h2>
  ),
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ height: "auto", width: "100%" }}
      {...(props as ImageProps)}
      alt=""
    />
  ),
  p: ({ children }) => (
    <p style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>{children}</p>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
