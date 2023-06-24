import React, { FC, PropsWithChildren } from 'react';
import { NavigationContainer } from './navigation.styles';
import { NavigationProps } from './navigation.types';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Icon from '../base/icon/icon';

const Navigation: FC<
  NavigationProps
> = ({}: PropsWithChildren<NavigationProps>): JSX.Element => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <NavigationContainer>
      {isAuthenticated && user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
      <Link to={`/login`}>
        <Icon name="group" size="medium" color="red" background />
      </Link>
    </NavigationContainer>
  );
};
export default Navigation;
//  <Link to={`contacts/1`}>Your Name</Link>
