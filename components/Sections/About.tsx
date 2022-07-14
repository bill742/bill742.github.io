import styles from '../../styles/About.module.css';

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.content}>
          Hello World! My name is Bill Dean and I&#39;m a web developer based in
          Toronto, Canada. I&#39;ve been working in web design and development
          for a number of years. I specialize in coding responsive websites
          using HTML5, CSS3, JavaScript, jQuery, and WordPress. I am also
          comfortable with Sass, PHP, MySQL, and interacting with the Linux
          command line. Recently I&#39;ve been focused on adding new languages
          and tools into my daily workflow including React, Python, and Django.
        </p>

        <p className={styles.content}>
          I strive for clean, semantic code that makes sense.
        </p>
      </div>
    </section>
  );
}
