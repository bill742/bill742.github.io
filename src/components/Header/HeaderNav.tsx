"use client";

import Link from "next/link";
import { FC, memo, useCallback, useState } from "react";

const HeaderNav: FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      key: 1,
      link: "#about",
      text: "About Me",
    },
    {
      key: 2,
      link: "#skills",
      text: "Skills",
    },
    // {
    //   key: 3,
    //   link: '#portfolio',
    //   text: 'Portfolio',
    // },
    {
      key: 4,
      link: "#contact",
      text: "Contact",
    },
    {
      key: 5,
      link: "resume",
      text: "Resume",
    },
  ];

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  console.log(isMenuOpen);

  return (
    <nav className="space-x-6">
      <ul className="hidden space-x-6 md:flex">
        {navItems.map((navItem) => (
          <li key={navItem.key}>
            <Link
              href={`/${navItem.link}`}
              className="font-semibold lowercase hover:underline"
            >
              {navItem.text}
            </Link>
          </li>
        ))}
      </ul>

      <button
        id="menu-btn"
        className={`hamburger ${isMenuOpen ? "open" : "closed"} block focus:outline-none md:hidden`}
        onClick={toggleMobileMenu}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>

      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="absolute left-6 right-6 mt-10 flex flex-col items-center space-y-6 self-end bg-black py-8 font-bold drop-shadow-md sm:w-auto sm:self-center">
            {navItems.map((navItem) => (
              <li key={navItem.key}>
                <Link
                  href={`/${navItem.link}`}
                  className="font-semibold lowercase hover:underline"
                >
                  {navItem.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
});

HeaderNav.displayName = "HeaderNav";

export default HeaderNav;
