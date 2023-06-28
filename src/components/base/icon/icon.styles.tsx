import styled from 'styled-components';
import { IconContainerStyleProps } from './icon.types';

export const IconContainer = styled.div<IconContainerStyleProps>`
  ${({ theme, width, height, color, rounded }) => ({
    width: width,
    height: height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // @ts-ignore
    backgroundColor: theme.colors.colors[color],
    borderRadius: rounded ? '0.625rem' : '0',
  })}
`;
