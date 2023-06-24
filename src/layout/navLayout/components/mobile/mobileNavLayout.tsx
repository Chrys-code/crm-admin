import React, { FC, PropsWithChildren } from 'react';
import { MobileNavLayoutContainer } from './mobileNavLayout.styles';
import { MobileNavLayoutProps } from './mobileNavLayout.types';

const MobileNavLayout: FC<
  MobileNavLayoutProps
> = ({}: PropsWithChildren<MobileNavLayoutProps>): JSX.Element => {
  return <MobileNavLayoutContainer></MobileNavLayoutContainer>;
};
export default MobileNavLayout;
