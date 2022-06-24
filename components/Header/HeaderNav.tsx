import { Fragment, useCallback, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/HeaderNav.module.css';

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
    {
      key: 3,
      link: '/#portfolio',
      text: 'Portfolio',
    },
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
      {!isMenuOpen && (
        <button className={styles.navButton} onClick={toggleMenu}>
          &#9776;
        </button>
      )}
      {isMenuOpen && (
        <button className={styles.navButton} onClick={toggleMenu}>
          X
        </button>
      )}
      {isMenuOpen && (
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            {navItems.map((navItem) => (
              <li key={navItem.key}>
                <Link href={navItem.link}>
                  <a className={styles.navItem}>{navItem.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </Fragment>
  );
}
