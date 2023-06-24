import React, { FC, PropsWithChildren } from 'react';
import { ErrorPageContainer } from './errorPage.styles';
import { ErrorPageProps } from './errorPage.types';
import { useRouteError } from 'react-router-dom';

const ErrorPage: FC<
  ErrorPageProps
> = ({}: PropsWithChildren<ErrorPageProps>): JSX.Element => {
  const error: any = useRouteError();

  return (
    <ErrorPageContainer>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ErrorPageContainer>
  );
};
export default ErrorPage;
