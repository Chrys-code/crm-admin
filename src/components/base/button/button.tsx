import React, { FC, PropsWithChildren } from 'react';
import { ButtonContainer } from './button.styles';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({
  color = 'white',
  fillColor = 'green',
  onClick,
  children,
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <ButtonContainer
      onClick={(): void => onClick()}
      color={color}
      $fillColor={fillColor}
    >
      {children}
    </ButtonContainer>
  );
};
export default Button;
