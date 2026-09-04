import IconList from "@/components/icon-list";
import { contactIcons } from "@/data/nav-links";

import FooterNav from "./footer-nav";
import UpArrow from "./up-arrow";

const Footer = () => {
  return (
    <footer className="border-border/50 mt-20 border-t" aria-label="Footer">
      <div className="border-border/50 container mx-auto max-w-6xl border-b px-6 py-6">
        <FooterNav />
      </div>

      <div className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span
          className="text-muted-foreground text-xs font-semibold tracking-widest uppercase"
          suppressHydrationWarning
        >
          © {new Date().getFullYear()} Bill Dean
        </span>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <IconList
            hasText={false}
            iconInfos={contactIcons}
            className="hidden flex-row gap-x-2 lg:flex"
          />

          <UpArrow />
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
