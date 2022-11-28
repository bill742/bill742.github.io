import { mode } from '@chakra-ui/theme-tools';

export const HeadingStyles = {
  baseStyle: (props) => ({
    color: mode('primaryDark', 'primaryLight')(props),
  }),
  sizes: {},
  variants: {
    header: (props) => ({
      color: mode('white', 'black')(props),
      transform: 'uppercase',
    }),
    about: (props) => ({
      color: 'white',
      textAlign: 'center',
    }),
  },
  defaultProps: {},
};
