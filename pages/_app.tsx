import { NextPage } from 'next';
import { FC } from 'react';
import '../styles/reset.css';
import '../styles/globals.css';

type AppProps = {
  Component: NextPage;
};

const PortfolioApp: FC<AppProps> = ({ Component, ...pageProps }) => {
  return <Component {...pageProps} />;
};

export default PortfolioApp;
