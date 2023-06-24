import React, { FC, PropsWithChildren } from 'react';
import { LoginContainer } from './login.styles';
import { LoginProps } from './login.types';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

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

const Login: FC<
  LoginProps
> = ({}: PropsWithChildren<LoginProps>): JSX.Element => {
  return (
    <LoginContainer>
      <Link to={`/`}>Dashboard</Link>
      <LoginButton />
      <LogoutButton />
    </LoginContainer>
  );
};
export default Login;
