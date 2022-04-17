import Head from 'next/head';
import Header from './Header';

export default function Layout() {
  return (
    <div>
      <Head>
        <title>Title</title>
        <meta name="description" content="description goes here" />
        <meta name="keywords" content="keywords go here" />
      </Head>
      <Header />
    </div>
  );
}
