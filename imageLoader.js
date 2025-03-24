export default function imageLoader({ src, width, quality }) {
  return `https://billdean.me/${src}?w=${width}&q=${quality || 75}`;
}
