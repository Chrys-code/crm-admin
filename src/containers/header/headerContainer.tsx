import React, { FC, PropsWithChildren } from 'react';
import Header from '../../components/header/header';
import { useAuth0 } from '@auth0/auth0-react';

const HeaderContainer: FC = ({}: PropsWithChildren): JSX.Element => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <Header
      userName={user?.nickname}
      userAvatar={user?.picture}
      isLoading={isLoading}
      isAuthenticated={isAuthenticated}
    />
  );
};
export default HeaderContainer;
