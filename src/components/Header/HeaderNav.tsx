"use client";
import Link from "next/link";
// import { FC, memo, useCallback, useState } from 'react';
import { FC, memo } from "react";

const HeaderNav: FC = memo(() => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    // {
    //   key: 5,
    //   link: "resume",
    //   text: "Resume",
    // },
  ];

  // const toggleMenu = useCallback(() => {
  //   setIsMenuOpen(!isMenuOpen);
  // }, [isMenuOpen]);

  return (
    <>
      {/* <Show breakpoint="(min-width: 1200px)">
        <nav>
          <ul>
            {navItems.map((navItem) => (
              <li key={navItem.key}>
                <Link href={navItem.link}>{navItem.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Show> */}
      {/* <Show breakpoint="(max-width: 1200px)"> */}
      {/* <button onClick={toggleMenu}> */}
      {/* {isMenuOpen ? (
          <CloseIcon aria-label="Close Menu" />
        ) : (
          <HamburgerIcon aria-label="Open Menu" />
        )} */}
      {/* X
      </button> */}
      {/* </Show> */}
      {/* {isMenuOpen && ( */}
      <nav className="hidden space-x-6 md:flex">
        <ul className="flex space-x-6">
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
      </nav>
      {/* )} */}
    </>
  );
});

HeaderNav.displayName = "HeaderNav";

export default HeaderNav;
