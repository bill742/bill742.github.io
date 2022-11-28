import { mode } from '@chakra-ui/theme-tools';

export const TextStyles = {
  baseStyle: (props) => ({
    color: mode('primaryDark', 'primaryLight')(props),
  }),
  sizes: {},
  variants: {
    aboutText: (props) => ({
      color: '#fff',
      textAlign: 'center',
    }),
  },
  defaultProps: {},
};
