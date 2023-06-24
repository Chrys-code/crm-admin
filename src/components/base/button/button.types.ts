import { ReactNode } from 'react';
import { ThemeColors, AccentColor } from '../../../utils/theme';

export interface ButtonProps {
  color?: ThemeColors;
  fillColor?: AccentColor;
  onClick: Function;
  children: ReactNode;
}

export interface ButtonContainerStyleProps {
  color: ThemeColors;
  fillColor: AccentColor;
}
