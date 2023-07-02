import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import ErrorPage from '../pages/error';
import PageLayout from '../layout/page/pageLayout';
// import Users from '../pages/users';
import Profile from '../pages/profile';
import Emailing from '../pages/emailing';
import Subscription from '../pages/subscription/subscription';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      // {
      //   path: '/users',
      //   element: <Users />,
      //   errorElement: <ErrorPage />,
      //   children: [
      //     // {
      //     //   path: '/users/:userId',
      //     //   element: <User />,
      //     //   errorElement: <ErrorPage />,
      //     // },
      //   ],
      // },
      {
        path: '/emailing',
        element: <Emailing />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/profile',
        element: <Profile />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/subscription',
        element: <Subscription />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);
