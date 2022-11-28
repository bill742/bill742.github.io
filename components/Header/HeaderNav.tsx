import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Show } from '@chakra-ui/react';

import Link from 'next/link';
import { Fragment, useCallback, useState } from 'react';
// import styles from '../../styles/HeaderNav.module.css';

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      key: 1,
      link: '/#about',
      text: 'About Me',
    },
    {
      key: 2,
      link: '/#skills',
      text: 'Skills',
    },
    // {
    //   key: 3,
    //   link: '/#portfolio',
    //   text: 'Portfolio',
    // },
    {
      key: 4,
      link: '/#contact',
      text: 'Get In Touch',
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

  return (
    <Fragment>
      <Show breakpoint="(min-width: 1200px)">
        <nav>
          <ul>
            {navItems.map((navItem) => (
              <li key={navItem.key}>
                <Link href={navItem.link} color="mode('white', 'black')">
                  {navItem.text}
                </Link>
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
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            {navItems.map((navItem) => (
              <li key={navItem.key}>
                <Link href={navItem.link} className={styles.navItem}>
                  {navItem.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </Fragment>
  );
}
