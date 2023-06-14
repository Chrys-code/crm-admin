import styled from 'styled-components';
import { IconContainerStyleProps } from './icon.types';

export const IconContainer = styled.div<IconContainerStyleProps>`
  ${({ theme }) => ({
    width: (p) => p.width,
    height: (p) => p.height,
  })}
`;
