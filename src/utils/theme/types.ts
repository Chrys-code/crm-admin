import theme from './theme';

type AccentColor = keyof typeof theme.colors.accent;
type BackgroundColor = keyof typeof theme.colors.background;
type IconColor = keyof typeof theme.colors.icon;
type IconSize = keyof typeof theme.icon.sizes;

export type { AccentColor, BackgroundColor, IconColor, IconSize };
