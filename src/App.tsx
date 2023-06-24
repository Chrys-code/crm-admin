import React from 'react';
import Icon from './components/basic/icon';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = (): JSX.Element => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {isAuthenticated && user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

function App(): JSX.Element {
  return (
    <>
      <header>
        <Icon name="group" size="large" />
        <Profile />
      </header>
      <LoginButton />
      <LogoutButton />
      <main></main>
    </>
  );
}

export default App;
