import { accent, background, icon, colors } from './colors';

const theme = {
  devices: {
    tablet: 991.98,
    mobile: 767.98,
  },

  font: {
    size: {
      small: '0.75rem',
      regular: '1rem',
      large: '1.25rem',
      xLarge: '1.5rem',
    },

    weight: {
      regular: 400,
      bold: 700,
    },
  },

  colors: {
    background,
    accent,
    icon,
    colors,
  },

  icon: {
    sizes: {
      small: { background: '2rem', icon: '1.5rem' },
      medium: { background: '2.5rem', icon: '2rem' },
      large: { background: '3rem', icon: '2.5rem' },
    },
  },

  borders: {
    componentContainer: '0.75rem',
    container: '0.625rem',
    wrapper: '0.375rem',
  },

  shadows: [' 0px 2px 8px 0px rgba(0, 0, 0, 0.2)'],

  space: (value: number): string => `${value / 2}rem`,
  border: (value: number): string => `${value / 2}rem`,
};

export type Theme = typeof theme;
export default theme;
