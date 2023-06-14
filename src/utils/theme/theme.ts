import { accent, background, icon } from './colors';

const theme = {
  devices: {
    tablet: 991.98,
    mobile: 767.98,
  },

  font: {
    size: {
      xSmall: '12px',
      small: '14px',
      regular: '16px',
      large: '20px',
      xLarge: '24px',
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
    wrapper: '10px',
    container: '8px',
  },

  shadows: [' 0px 2px 8px 0px rgba(0, 0, 0, 0.2)'],

  space: (value: number): string => `${value * 8}px`,
  border: (value: number): string => `${value * 2}px`,
};

export type Theme = typeof theme;
export default theme;
