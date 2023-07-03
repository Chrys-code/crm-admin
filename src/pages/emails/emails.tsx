import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Emails: FC = (): JSX.Element => {
  const isEnabled: boolean = true;

  if (!isEnabled) {
    return <>Please enable emailing in your profile/subscription first</>;
  }

  return <Outlet />;
};
export default Emails;
