import styled from 'styled-components';
import { ButtonContainerStyleProps } from './button.types';

export const ButtonContainer = styled.button<ButtonContainerStyleProps>`
  ${({ theme, color, $fillColor }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: color,
    fontSize: theme.font.size.regular,
    fontWeight: theme.font.weight.bold,
    background: theme.colors.colors[$fillColor],
    padding: `${theme.space(1.5)} ${theme.space(3)}`,
    borderRadius: theme.borders.wrapper,
    cursor: 'pointer',
  })}
`;
