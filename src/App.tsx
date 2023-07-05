import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App(): JSX.Element {
  const acToken = process.env.REACT_APP_BEARER;

  if (acToken) localStorage.setItem('accessToken', acToken);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
