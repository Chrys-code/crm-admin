import React, { FC, PropsWithChildren } from 'react';
import { PageContent } from './pageLayout.styles';
import { PageLayoutProps } from './pageLayout.types';
import { Outlet, useLocation, Location } from 'react-router-dom';
import HeaderContainer from '../../containers/header/headerContainer';
import Sidebar from '../../components/sidebar/sidebar';

const PageLayout: FC<
  PageLayoutProps
> = ({}: PropsWithChildren<PageLayoutProps>): JSX.Element => {
  const location: Location = useLocation();

  return (
    <>
      <HeaderContainer />
      {/* placeholder under 6rem high fixed position header */}
      <div style={{ height: '6rem' }} />
      <Sidebar location={location} />
      <PageContent>
        <Outlet />
      </PageContent>
    </>
  );
};
export default PageLayout;
