import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './store/store';
import theme from './utils/theme';
import AppWrapper from './AppWrapper';
import GlobalStyles from './styles/globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Auth0Provider
          domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
          clientId={`${process.env.REACT_APP_AUTH0_CLIENT_ID}`}
          useRefreshTokens={true}
          cacheLocation={'localstorage'}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <GlobalStyles />
          <AppWrapper />
        </Auth0Provider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
