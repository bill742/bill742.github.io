import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { HeadingStyles as Heading } from '../components/headingStyles';
import { TextStyles as Text } from '../components/textStyles';

export const portfolioTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('bgLight', 'bgDark')(props),
      },
      layout: {
        display: 'grid',
        gridGap: '1rem',
      },
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        backgroundColor: mode('trueBlack', 'white')(props),
        // backgroundColor: mode('black', 'white'),
      },
      nav: {
        ul: {
          display: 'flex',
          flexDirection: 'row',
          columnGap: '1rem',
          alignItems: 'center',
          listStyle: 'none',
        },
      },
      section: {
        width: '1060px',
        margin: '0 auto 2rem',
      },
    }),
  },
  colors: {
    primaryLight: '#ddc0c2',
    secondaryLight: '#b69daa',
    primaryDark: '#5c6378',
    secondaryDark: '#8a7f93',
    // bgLight: '#ffe5dc',
    bgLight: '#ffffff',
    bgDark: '#2f4858',
    white: '#ffffff',
    black: '#333333',
    trueBlack: '#000000',
  },
  textStyles: {
    h1: {
      textTransform: 'uppercase',
    },
  },
  components: {
    Heading,
    Text,
  },
});
