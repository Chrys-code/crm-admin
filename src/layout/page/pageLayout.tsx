import React, { FC, PropsWithChildren } from 'react';
import { PageContent } from './pageLayout.styles';
import { PageLayoutProps } from './pageLayout.types';
import { Outlet } from 'react-router-dom';
import NavLayout from '../navLayout';
import Navigation from '../../components/navigation';

const PageLayout: FC<
  PageLayoutProps
> = ({}: PropsWithChildren<PageLayoutProps>): JSX.Element => {
  return (
    <>
      <NavLayout>
        <Navigation />
      </NavLayout>
      <PageContent>
        <Outlet />
      </PageContent>
    </>
  );
};
export default PageLayout;
