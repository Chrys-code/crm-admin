import { SVGProps } from 'react';
import { IconName } from '../../../utils/icon';
import { IconColor, IconSize, Colors } from '../../../utils/theme/index';

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  color?: IconColor;
  size?: IconSize;
  background?: boolean;
  backgroundColor?: Colors;
  rounded?: boolean;
}

export interface IconContainerStyleProps {
  width: string;
  height: string;
  backgroundColor?: IconColor;
  rounded?: boolean;
}
