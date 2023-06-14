import React from 'react';
import Icon from './components/basic/icon';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { auth0domain } from './utils/model';

{
  /* <Auth0Provider
domain={auth0domain}
useRefreshTokens={true}
audience={`${process.env.REACT_APP_AUDIENCE}`}
clientId={`${process.env.REACT_APP_AUTHOH_USER_CLIENT_ID}`}
redirectUri={`${window.location.origin}/callback`}
scope={'openid offline_access profile email'}
cacheLocation={'localstorage'}>
  <AppConnected />
</Auth0Provider>
 */
}

function App(): JSX.Element {
  return (
    <header>
      <Icon name="group" size="large" />
    </header>
  );
}

export default App;
