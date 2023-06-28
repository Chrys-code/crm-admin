import React, { FC, PropsWithChildren } from 'react';
import { PageContent } from './pageLayout.styles';
import { PageLayoutProps } from './pageLayout.types';
import { Outlet } from 'react-router-dom';
import HeaderContainer from '../../containers/header/headerContainer';
import Sidebar from '../../components/sidebar/sidebar';

const PageLayout: FC<
  PageLayoutProps
> = ({}: PropsWithChildren<PageLayoutProps>): JSX.Element => {
  return (
    <>
      <HeaderContainer />
      {/* placeholder under 6rem high fixed position header */}
      <div style={{ height: '6rem' }} />
      <Sidebar />
      <PageContent>
        <Outlet />
      </PageContent>
    </>
  );
};
export default PageLayout;
