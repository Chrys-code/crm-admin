import React, { FC } from 'react';
import { PageContent } from './pageLayout.styles';
import { PageLayoutProps } from './pageLayout.types';
import { Outlet, useLocation, Location } from 'react-router-dom';
import HeaderContainer from '../../containers/header/headerContainer';
import Sidebar from '../../components/sidebar/sidebar';
import Subheader from '../../components/subheader/subheader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PageLayout: FC<PageLayoutProps> = (): JSX.Element => {
  const location: Location = useLocation();

  return (
    <>
      <HeaderContainer location={location} />
      {/* placeholder under 6rem high fixed position header */}
      <div style={{ height: '6rem' }} />
      <Sidebar location={location} />
      <PageContent>
        <Subheader
          label="Welcome [nickname],"
          subtext="What do we do today?"
          location={location}
        />
        <Outlet />
      </PageContent>
      <ToastContainer />
    </>
  );
};
export default PageLayout;
