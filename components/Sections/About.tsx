import { Heading, Text } from '@chakra-ui/react';

export default function About() {
  return (
    <section>
      <Heading as="h3" variant="about">
        About Me
      </Heading>
      <Text>
        Hello World! My name is Bill Dean and I&#39;m a web developer based in
        Toronto, Canada. I&#39;ve been working in web design and development for
        a number of years. I specialize in coding responsive websites using
        HTML5, CSS3, JavaScript, jQuery, and WordPress. I am also comfortable
        with Sass, PHP, MySQL, and interacting with the Linux command line.
        Recently I&#39;ve been focused on adding new languages and tools into my
        daily workflow including React, Python, and Django.
      </Text>

      <Text>I strive for clean, semantic code that makes sense.</Text>
    </section>
  );
}
