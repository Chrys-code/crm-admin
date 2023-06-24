import styled from 'styled-components';
import { ButtonContainerStyleProps } from './button.types';

export const ButtonContainer = styled.button<ButtonContainerStyleProps>`
  ${({ theme, color, fillColor }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: color,
    fontSize: theme.font.size.regular,
    fontWeight: theme.font.weight.bold,
    background: fillColor,
    padding: `${theme.space(1)} ${theme.space(2)}`,
    borderRadius: theme.borders.wrapper,
  })}
`;
