import React, { FC, PropsWithChildren } from 'react';
import { LoginContainer } from './login.styles';
import { LoginProps } from './login.types';

const Login: FC<
  LoginProps
> = ({}: PropsWithChildren<LoginProps>): JSX.Element => {
  return <LoginContainer></LoginContainer>;
};
export default Login;
