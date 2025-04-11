export default function imageLoader({ src, width, quality }) {
  return `${process.env.NEXT_PUBLIC_SITE_URL}${src}?w=${width}&q=${quality || 75}`;
}
