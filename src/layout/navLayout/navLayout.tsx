import React, { Children, FC, PropsWithChildren } from 'react';
import { NavLayoutContainer, Nav } from './navLayout.styles';
import { NavLayoutProps } from './navLayout.types';

const NavLayout: FC<NavLayoutProps> = ({
  children,
}: PropsWithChildren<NavLayoutProps>): JSX.Element => {
  return (
    <NavLayoutContainer>
      <Nav>{children}</Nav>
    </NavLayoutContainer>
  );
};
export default NavLayout;
