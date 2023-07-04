import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import ErrorPage from '../pages/error';
import PageLayout from '../layout/page/pageLayout';
// import Users from '../pages/users';
import Profile from '../pages/profile';
import Emails from '../pages/emails';
import Subscription from '../pages/subscription/subscription';
import Users from '../pages/users';
import CreateEmailTemplate from '../features/emails/createEmailTemplate/createEmailTemplate';
import EmailTemplatesContainer from '../containers/emailTemplates/emailTemplatesContainer';

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
      {
        path: '/email-templates',
        element: <Emails />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/email-templates',
            element: <EmailTemplatesContainer />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/email-templates/create-template',
            element: <CreateEmailTemplate />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: '/profile',
        element: <Profile />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/profile/subscription',
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
