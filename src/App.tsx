import React from 'react';
import PageLayout from './layout/page/pageLayout';
import { RouterProvider } from 'react-router-dom';
import NavLayout from './layout/navLayout/navLayout';
import Navigation from './components/navigation/navigation';
import { router } from './router';

function App(): JSX.Element {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
