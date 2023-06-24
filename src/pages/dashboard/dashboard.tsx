import React, { FC, PropsWithChildren } from 'react';
import { DashboardContainer } from './dashboard.styles';
import { DashboardProps } from './dashboard.types';

const Dashboard: FC<
  DashboardProps
> = ({}: PropsWithChildren<DashboardProps>): JSX.Element => {
  return (
    <DashboardContainer>
      <span>HELLO THIS IS YOUR DASHBOARD</span>
    </DashboardContainer>
  );
};
export default Dashboard;
