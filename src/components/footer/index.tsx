import UpArrow from "./up-arrow";

const Footer = () => {
  return (
    <footer
      className="container mx-auto flex max-w-6xl justify-end px-6 py-4"
      aria-label="Footer"
    >
      <UpArrow />
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
