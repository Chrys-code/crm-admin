import React, { FC, PropsWithChildren, useRef } from 'react';
import { ButtonProps } from './button.types';
import { ListButton, ListItem } from '../../list.styles';

const Button: FC<ButtonProps> = ({
  item,
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  const linkRef = useRef(null);

  const handleClick = (): void => {
    if (linkRef.current) {
      // @ts-ignore
      linkRef.current.click();
    }
  };

  return (
    <ListItem onClick={(): void => handleClick()} isActive={false}>
      <ListButton ref={linkRef}>{item.label}</ListButton>
    </ListItem>
  );
};
export default Button;
