import { lighten } from 'polished';

const breakpoints = [768, 1024, '64em'];

const brand = {
  primary: 'rgb(215, 70, 75)',
  secondary: '#B1D8C6',
};

const colors = {
  ...brand,
  dark: '#444',
  text: '#333',
  grey: '#6b6b6b',
  black: '#000',
  white: '#fff',
  bg: '#f9f9f9',
  link: brand.primary,
  linkHover: lighten(0.04, brand.primary),
};

const fonts = {
  default: [
    'azo-sans-web',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ].join(', '),
  serif: ['Georgia', 'serif'].join(', '),
  mono: [
    'SFMono-Regular',
    'Consolas',
    'Liberation Mono',
    'Menlo',
    'Courier',
    'monospace',
  ].join(', '),
  sizeSm: '16px',
  sizeMd: '18px',
};

const animation = {
  transitionTime: '300ms',
};

const theme = {
  colors,
  animation,
  breakpoints,
  fonts,
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
  gradient: `linear-gradient(
    to right,
    rgba(208, 255, 227, 1) 0%,
    rgba(177, 216, 198, 1) 100%
  )`,
};

export { theme as default, colors, animation, breakpoints, fonts };
