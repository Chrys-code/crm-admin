import theme from './theme';
import { colors } from './colors';

type ThemeColors = keyof typeof colors;
type AccentColor = keyof typeof theme.colors.accent;
type BackgroundColor = keyof typeof theme.colors.background;
type IconColor = keyof typeof theme.colors.icon;
type IconSize = keyof typeof theme.icon.sizes;

export type { ThemeColors, AccentColor, BackgroundColor, IconColor, IconSize };
