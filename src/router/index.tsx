import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import ErrorPage from '../pages/error';
import PageLayout from '../layout/page/pageLayout';
import Users from '../pages/users';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/users',
        element: <Users />,
        errorElement: <ErrorPage />,
        children: [
          // {
          //   path: '/users/:userId',
          //   element: <User />,
          //   errorElement: <ErrorPage />,
          // },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);
