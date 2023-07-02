import React, { FC, PropsWithChildren } from 'react';
import Header from '../../components/header/header';
import { useAuth0 } from '@auth0/auth0-react';
import { Location } from 'react-router-dom';

const HeaderContainer: FC<{ location: Location }> = ({
  location,
}: PropsWithChildren<{ location: Location }>): JSX.Element => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <Header
      userName={user?.nickname}
      userAvatar={user?.picture}
      isLoading={isLoading}
      isAuthenticated={isAuthenticated}
      location={location}
    />
  );
};
export default HeaderContainer;
