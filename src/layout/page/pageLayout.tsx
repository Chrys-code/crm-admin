import React, { FC, PropsWithChildren } from 'react';
import { PageLayoutContainer } from './pageLayout.styles';
import { PageLayoutProps } from './pageLayout.types';

const PageLayout: FC<PageLayoutProps> = ({
  children,
}: PropsWithChildren<PageLayoutProps>): JSX.Element => {
  return <PageLayoutContainer>{children}</PageLayoutContainer>;
};
export default PageLayout;
