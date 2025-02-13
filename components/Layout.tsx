import { ColorModeScript, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import { portfolioTheme } from 'styles/theme';
import Header from './Header/Header';

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      <Head>
        <title>Bill Dean - Front-End Web Developer</title>
        <meta
          name="description"
          content="Hello World! My name is Bill Dean and I'm a web developer based in Toronto, Canada. I specialize in HTML5, CSS3, JavaScript, and WordPress."
        />
        <meta name="keywords" content="keywords go here" />
      </Head>

      <ColorModeScript
        initialColorMode={portfolioTheme.config.initialColorMode}
      />

      <Flex
        flexDirection="column"
        margin={{ base: '0 1rem', lg: '0 1rem', xl: '0 auto' }}
        maxW="66.25rem"
      >
        <Header />

        {props.children}
      </Flex>
    </>
  );
}

Layout.displayName = 'Layout';
