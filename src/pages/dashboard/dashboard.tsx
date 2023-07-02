import React, { FC, PropsWithChildren } from 'react';
import { DashboardContainer } from './dashboard.styles';
import { DashboardProps } from './dashboard.types';

const Dashboard: FC<
  DashboardProps
> = ({}: PropsWithChildren<DashboardProps>): JSX.Element => {
  return (
    <DashboardContainer>
      <span>HELLO THIS IS YOUR DASHBOARD</span>
      <ul>
        <li>
          <span>Quick access</span>
        </li>
        <li>
          <span>Updates</span>
        </li>
        <li>
          <span>eg. added a new feature we want to share</span>
        </li>
        <li>
          <span>Selected modules</span>
        </li>
      </ul>
    </DashboardContainer>
  );
};
export default Dashboard;
