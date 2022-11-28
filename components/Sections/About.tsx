import { Box, Heading, Text } from '@chakra-ui/react';

// const altHeading = defineStyle({
//   color: ,
//   textAlign: 'center',
// });

export default function About() {
  return (
    <Box
      backgroundAttachment="fixed"
      backgroundImage="url('images/hero.jpg')"
      backgroundRepeat="no-repeat"
      backgroundPosition="center, 80px"
      backgroundSize="cover"
    >
      <section>
        <Heading as="h3" variant="about">
          About Me
        </Heading>
        <Text variant="aboutText">
          Hello World! My name is Bill Dean and I&#39;m a web developer based in
          Toronto, Canada. I&#39;ve been working in web design and development
          for a number of years. I specialize in coding responsive websites
          using HTML5, CSS3, JavaScript, jQuery, and WordPress. I am also
          comfortable with Sass, PHP, MySQL, and interacting with the Linux
          command line. Recently I&#39;ve been focused on adding new languages
          and tools into my daily workflow including React, Python, and Django.
        </Text>

        <Text variant="aboutText">
          I strive for clean, semantic code that makes sense.
        </Text>
      </section>
    </Box>
  );
}
