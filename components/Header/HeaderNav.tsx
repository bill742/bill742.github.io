import { extendTheme } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Show } from '@chakra-ui/react';

import Link from 'next/link';
import { Fragment, useCallback, useState } from 'react';

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      key: 1,
      link: '#about',
      text: 'About Me',
    },
    {
      key: 2,
      link: '#stack',
      text: 'Stack',
    },
    // {
    //   key: 3,
    //   link: '#portfolio',
    //   text: 'Portfolio',
    // },
    {
      key: 4,
      link: '#contact',
      text: 'Contact',
    },
    {
      key: 5,
      link: '/resume',
      text: 'Resume',
    },
  ];

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const mobileNavStyles = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: '250px',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
    px: 4,
    background: '#fff',
  };

  return (
    <Fragment>
      <Show breakpoint="(min-width: 1200px)">
        <nav>
          <ul>
            {navItems.map((navItem) => (
              <li key={navItem.key}>
                <Link href={navItem.link}>{navItem.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Show>

      <Show breakpoint="(max-width: 1200px)">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon aria-label="Close Menu" />
          ) : (
            <HamburgerIcon aria-label="Open Menu" />
          )}
        </button>
      </Show>

      {isMenuOpen && (
        <nav>
          {/* TODO: better way to import specific styles? */}
          <ul sx={mobileNavStyles}>
            {navItems.map((navItem) => (
              <li key={navItem.key}>
                <Link href={navItem.link}>{navItem.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </Fragment>
  );
}
