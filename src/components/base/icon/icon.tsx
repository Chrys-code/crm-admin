import React, { FC, PropsWithChildren, SVGProps } from 'react';
import { IconContainer } from './icon.styles';
import { IconProps } from './icon.types';
import { useDynamicSVGImport } from '../../../utils/hooks';
import theme from '../../../utils/theme';

const Icon = ({
  name,
  color = 'red',
  size = 'small',
  background = false,
  backgroundColor = 'yellow',
  ...rest
}: PropsWithChildren<IconProps>): JSX.Element => {
  const iconSize: string = theme.icon.sizes[size].icon;
  const backgroundSize: string = theme.icon.sizes[size].background;
  const iconColor: string = theme.colors.icon[color];

  const { error, isLoading, SvgIcon } = useDynamicSVGImport(name);

  if (isLoading) {
    // create loader
    return <>Loading</>;
  }

  if (error) {
    return <></>;
  }

  if (background && SvgIcon) {
    return (
      <IconContainer
        width={backgroundSize}
        height={backgroundSize}
        color={backgroundColor}
      >
        <SvgIcon
          width={iconSize}
          height={iconSize}
          fill={iconColor}
          {...rest}
        />
      </IconContainer>
    );
  }

  if (SvgIcon) {
    return (
      <SvgIcon width={iconSize} height={iconSize} fill={iconColor} {...rest} />
    );
  }

  // have a default icon
  return <></>;
};
export default Icon;
