import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header/Header';

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div>
      <Head>
        <title>Title goes here</title>
        <meta name="description" content="description goes here" />
        <meta name="keywords" content="keywords go here" />
      </Head>
      <Header />

      {props.children}
    </div>
  );
}
