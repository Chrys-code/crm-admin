import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import ErrorPage from '../pages/error';
import PageLayout from '../layout/page/pageLayout';
import Profile from '../pages/profile';
import Emails from '../pages/emails';
import Subscription from '../pages/subscription/subscription';
import Users from '../pages/users';
import CreateEmailTemplate from '../features/emails/createEmailTemplate/createEmailTemplate';
import EmailTemplatesContainer from '../containers/emailTemplates';
import UserList from '../features/users/userList';
import CreateUser from '../features/users/createUser/createUser';

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
          {
            path: '/users',
            element: <UserList />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/users/update-user/:id',
            element: <CreateUser />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/users/create-user/',
            element: <CreateUser />,
            errorElement: <ErrorPage />,
          },
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
            path: '/email-templates/update-template/:id',
            element: <CreateEmailTemplate />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/email-templates/create-template/',
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
