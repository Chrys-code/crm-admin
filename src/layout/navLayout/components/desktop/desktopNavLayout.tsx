import React, { FC, PropsWithChildren } from 'react';
import { DesktopNavLayoutContainer } from './desktopNavLayout.styles';
import { DesktopNavLayoutProps } from './desktopNavLayout.types';

const DesktopNavLayout: FC<
  DesktopNavLayoutProps
> = ({}: PropsWithChildren<DesktopNavLayoutProps>): JSX.Element => {
  return <DesktopNavLayoutContainer></DesktopNavLayoutContainer>;
};
export default DesktopNavLayout;
