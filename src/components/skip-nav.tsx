const SkipNav = () => (
  <a
    className="h-1px w-1px absolute left-[-10000px] top-auto overflow-hidden focus:static focus:h-auto focus:w-auto"
    href="#main"
  >
    Skip to main content
  </a>
);

SkipNav.displayName = "SkipNav";

export default SkipNav;
