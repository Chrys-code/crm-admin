import { accent, background, icon } from './colors';

const theme = {
  devices: {
    tablet: 991.98,
    mobile: 767.98,
  },

  font: {
    size: {
      small: '0.75em',
      regular: '1em',
      large: '1.25em',
      xLarge: '1.5em',
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
  },

  icon: {
    sizes: {
      small: { background: '32px', icon: '24px' },
      medium: { background: '40px', icon: '32px' },
      large: { background: '48px', icon: '40px' },
    },
  },

  borders: {
    componentContainer: '12px',
    container: '10px',
    wrapper: '6px',
  },

  shadows: [' 0px 2px 8px 0px rgba(0, 0, 0, 0.2)'],

  space: (value: number): string => `${value * 8}px`,
  border: (value: number): string => `${value * 2}px`,
};

export type Theme = typeof theme;
export default theme;
