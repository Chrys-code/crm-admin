import React, { FC, PropsWithChildren, useRef } from 'react';
import { LinkProps } from './link.types';
import { ListItem, ListItemLabel } from '../../list.styles';
import { Link as RouterLink } from 'react-router-dom';

const Link: FC<LinkProps> = ({
  item,
  location,
}: PropsWithChildren<LinkProps>): JSX.Element => {
  const linkRef = useRef(null);

  const isActive: boolean = location.pathname.startsWith(item.action as string);

  const handleClick = (): void => {
    if (linkRef.current) {
      // @ts-ignore
      linkRef.current.click();
    }
  };

  return (
    <>
      <ListItem onClick={(): void => handleClick()} $isActive={isActive}>
        <RouterLink ref={linkRef} to={`${item.action}`}>
          <ListItemLabel>{item.label}</ListItemLabel>
        </RouterLink>
      </ListItem>
    </>
  );
};
export default Link;
