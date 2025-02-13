import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';
import { HeadingStyles as Heading } from 'components/headingStyles';
// import { TextStyles as Text } from 'components/textStyles';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const breakpoints = {
  '2xl': '1536px',
  base: '0px',
  lg: '960px',
  md: '768px',
  sm: '320px',
  xl: '1200px',
};

export const portfolioTheme = extendTheme({
  breakpoints,
  colors: {
    bgDark: '#2f4858',
    bgLight: '#ffe5dc',
    // bgLight: '#ffffff',
    black: '#333333',
    primaryDark: '#5c6378',
    primaryLight: '#ddc0c2',
    red: '#f03838',
    secondaryDark: '#8a7f93',
    secondaryLight: '#b69daa',
    trueBlack: '#000000',
    white: '#ffffff',
  },
  components: {
    Heading,
    // Text,
  },
  config: {
    // cssVarPrefix: 'sx',
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('bgLight', 'bgDark')(props),
      },
      h1: {
        color: mode('primaryDark', 'primaryLight')(props),
        textTransform: 'uppercase',
      },
      header: {
        alignItems: 'center',
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      },
      layout: {
        display: 'grid',
        gridGap: '1rem',
      },
      nav: {
        display: 'flex',
        ul: {
          alignItems: 'center',
          columnGap: '1rem',
          display: 'flex',
          flexDirection: 'row',
          li: {
            a: {
              _hover: {
                color: 'red',
              },
              color: mode('primaryDark', 'primaryLight'),

              fontSize: '1.2rem',
            },
          },

          listStyle: 'none',
        },
      },
      // nav.mobile: {
      //   flexDirection: 'column',
      // },
      p: {
        marginBottom: '1rem',
      },
      section: {
        color: mode('primaryDark', 'primaryLight')(props),
        margin: '0 auto 2rem',
        width: '100%',
      },
      svg: {
        width: '3.75rem',
      },
    }),
  },
});
