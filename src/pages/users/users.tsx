import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Users: FC = (): JSX.Element => {
  const isEnabled: boolean = true;

  if (!isEnabled)
    return (
      <span>
        Please enable this feature in your profile/subscirption first.
      </span>
    );

  return <Outlet />;
};
export default Users;
