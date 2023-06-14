import { SVGProps } from 'react';
import { IconName } from '../../../utils/icon';
import { IconColor, IconSize } from '../../../utils/theme/index';

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  color?: IconColor;
  size?: IconSize;
  background?: boolean;
}

export interface IconContainerStyleProps {
  width: string;
  height: string;
}
