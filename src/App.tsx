import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import Icon from './components/basic/icon';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { auth0domain } from './utils/model';

{
  /* <Auth0Provider
domain={auth0domain}
audience={`${process.env.REACT_APP_AUDIENCE}`}
clientId={`${process.env.REACT_APP_AUTHOH_USER_CLIENT_ID}`}
redirectUri={`${window.location.origin}/callback`}
useRefreshTokens={true}
scope={'openid offline_access profile email'}
cacheLocation={'localstorage'}>
  <AppConnected />
</Auth0Provider>
 */
}

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Icon name="group" size="large" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
