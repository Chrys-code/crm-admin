import React, { FC, PropsWithChildren } from 'react';
import { NavLayoutContainer } from './navLayout.styles';
import { NavLayoutProps } from './navLayout.types';

const NavLayout: FC<
  NavLayoutProps
> = ({}: PropsWithChildren<NavLayoutProps>): JSX.Element => {
  return <NavLayoutContainer></NavLayoutContainer>;
};
export default NavLayout;
