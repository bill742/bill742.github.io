import styles from '../../styles/Header.module.css';
import HeaderNav from './HeaderNav';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Bill Dean</h1>
        <h2 className={styles.subtitle}>Front-End Web Developer</h2>
      </div>

      <HeaderNav />
    </header>
  );
}
