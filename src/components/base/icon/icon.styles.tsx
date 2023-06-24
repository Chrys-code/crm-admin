import styled from 'styled-components';
import { IconContainerStyleProps } from './icon.types';

export const IconContainer = styled.div<IconContainerStyleProps>`
  ${({ theme, width, height, color }) => ({
    width: width,
    height: height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
  })}
`;
