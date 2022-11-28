import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { Fragment, ReactNode } from 'react';
import Header from './Header/Header';

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <Fragment>
      <Head>
        <title>Bill Dean - Front-End Web Developer</title>
        <meta name="description" content="description goes here" />
        <meta name="keywords" content="keywords go here" />
      </Head>

      <Flex width="100%" flexDirection="column" margin="0 auto">
        <Header />

        {props.children}
      </Flex>
    </Fragment>
  );
}
