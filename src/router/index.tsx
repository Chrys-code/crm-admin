import { createBrowserRouter } from 'react-router-dom';

// Layout
import PageLayout from '../layout/page/pageLayout';

// Pages (acts as guards over feature pages)
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import ErrorPage from '../pages/error';
import Profile from '../pages/profile';
import Emails from '../pages/emails';
import Subscription from '../pages/subscription/subscription';
import Users from '../pages/users';
import Analytics from '../pages/analytics/analytics';

import UsersContainer from '../containers/users';
import EmailTemplatesContainer from '../containers/emailTemplates';
import TrackersContainer from '../containers/trackers';
import UserEditor from '../features/users/userEditor';
import EmailEditor from '../features/emails/emailEditor';
import TrackerEditor from '../features/analytics/trackerEditor';

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
            element: <UsersContainer />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/users/user-editor/:id',
            element: <UserEditor />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/users/user-editor/',
            element: <UserEditor />,
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
            path: '/email-templates/template-editor/:id',
            element: <EmailEditor />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/email-templates/template-editor/',
            element: <EmailEditor />,
            errorElement: <ErrorPage />,
          },
        ],
      },

      {
        path: '/analytics',
        element: <Analytics />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/analytics',
            element: <TrackersContainer />,
            errorElement: <ErrorPage />
          },
          {
            path: '/analytics/tracker-editor',
            element: <TrackerEditor />,
            errorElement: <ErrorPage />
          },
          {
            path: '/analytics/tracker-editor/:id',
            element: <TrackerEditor />,
            errorElement: <ErrorPage />
          }
        ]

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
