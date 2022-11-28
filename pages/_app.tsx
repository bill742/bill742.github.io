import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import { FC } from 'react';
import { portfolioTheme } from '../styles/theme';

type AppProps = {
  Component: NextPage;
};

const PortfolioApp: FC<AppProps> = ({ Component, ...pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={portfolioTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default PortfolioApp;
